import { Notification } from '../../libs/dto/notification/notification';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { NotificationStatus } from '../../libs/enums/notification.enum';
import { Property } from '../../libs/dto/property/property';
import { BoardArticle } from '../../libs/dto/board-article/board-article';
import { Member } from '../../libs/dto/member/member';
import { ContactInput } from '../../libs/dto/contact/contact.input';

@Injectable()
export class NotificationService {
	constructor(
		@InjectModel('Notification') private notificationModel: Model<Notification>,
		@InjectModel('Property') private propertyModel: Model<Property>,
		@InjectModel('BoardArticle') private boardArticle: Model<BoardArticle>,
		@InjectModel('Member') private memberModel: Model<Member>,
	) {}

	async createNotificationForLike(likeType: string, likeId: ObjectId, authorId: ObjectId): Promise<void> {
		let receiverId: ObjectId;
		let authorName = '';
		let notificationDesc = '';

		const author = await this.memberModel.findById(authorId);
		if (author) {
			authorName = author.memberNick;
		}

		switch (likeType) {
			case 'MEMBER':
				receiverId = likeId;
				break;
			case 'PROPERTY':
				const property = await this.propertyModel.findById(likeId);
				receiverId = property.memberId;
				notificationDesc = `${authorName} liked your vehicle "${property.propertyModel}"`;
				break;
			case 'ARTICLE':
				const article = await this.boardArticle.findById(likeId);
				receiverId = article.memberId;
				notificationDesc = `${authorName} liked your vehicle "${article.articleTitle}"`;
				break;
			default:
				throw new Error('Unknown like type');
		}

		const notification = new this.notificationModel({
			notificationType: 'LIKE',
			notificationGroup: likeType,
			notificationTitle: `${author.memberNick} New Like on ${likeType}`,
			notificationDesc: `Your ${likeType.toLowerCase()} got a new like!`,
			authorId,
			receiverId,
			[`${likeType.toLowerCase()}Id`]: likeId,
		});

		await notification.save();
	}

	async createNotificationForUnlike(likeType: string, likeId: ObjectId, authorId: ObjectId): Promise<void> {
		let receiverId: ObjectId;
		let authorName = '';
		let notificationDesc = '';
		const author = await this.memberModel.findById(authorId);
		if (author) {
			authorName = author.memberNick; // Assuming 'memberNick' is the field for user's nickname
		}

		switch (likeType) {
			case 'MEMBER':
				receiverId = likeId;
				notificationDesc = `${authorName} liked you`;
				break;
			case 'PROPERTY':
				const property = await this.propertyModel.findById(likeId);
				receiverId = property.memberId;
				notificationDesc = `${authorName} liked your ${this.propertyModel}`;
				break;
			case 'ARTICLE':
				const article = await this.boardArticle.findById(likeId);
				receiverId = article.memberId;
				notificationDesc = `${authorName} liked your ${this.boardArticle}`;
				break;
			default:
				throw new Error('Unknown like type');
		}

		const notification = new this.notificationModel({
			notificationType: 'LIKE',
			notificationGroup: likeType,
			notificationTitle: `${authorName} removed their like from your ${likeType.toLowerCase()}`,
			notificationDesc: `${authorName} no longer likes your ${likeType.toLowerCase()}.`,
			authorId,
			receiverId,
			[`${likeType.toLowerCase()}Id`]: likeId,
		});

		await notification.save();
	}

	async markNotificationAsRead(notificationId: ObjectId): Promise<void> {
		await this.notificationModel.updateOne(
			{ _id: notificationId },
			{ $set: { notificationStatus: NotificationStatus.READ } },
		);
	}

	public async getNotificationsByUserId(userId: ObjectId): Promise<Notification[]> {
		return await this.notificationModel.find({ receiverId: userId }).sort({ createdAt: -1 }).exec();
	}

	public async createNotificationForComment(
		commentType: string,
		commentId: ObjectId,
		authorId: ObjectId,
		commentContent: string,
	): Promise<void> {
		let receiverId: ObjectId;
		let authorName = '';
		let notificationDesc = '';
		const author = await this.memberModel.findById(authorId);
		if (!author) {
			console.error(`Author with ID ${authorId} not found.`);
			return;
		}
		authorName = author.memberNick;
		switch (commentType) {
			case 'PROPERTY':
				const property = await this.propertyModel.findById(commentId);
				receiverId = property.memberId;
				notificationDesc = `${authorName} commented on your ${commentType} as ${commentContent}`;
				break;
			case 'ARTICLE':
				const article = await this.boardArticle.findById(commentId);
				receiverId = article.memberId;
				notificationDesc = `${authorName} commented on your ${commentType} as ${commentContent}`;
				break;
			case 'MEMBER':
				receiverId = commentId;
				notificationDesc = `${authorName} commented on you as ${commentContent}`;
				break;
			default:
				throw new Error('Unknown comment type');
		}

		const notification = new this.notificationModel({
			notificationType: 'COMMENT',
			notificationGroup: commentType,
			notificationTitle: `New comment`,
			notificationDesc: `${authorName} commented your ${commentType} `,
			authorId,
			receiverId,
		});

		await notification.save();
	}

	async createNotificationForFollow(followerId: ObjectId, followingId: ObjectId): Promise<void> {
		const follower = await this.memberModel.findById(followerId);
		const following = await this.memberModel.findById(followingId);

		if (!follower || !following) {
			throw new Error('Follower or following member not found');
		}

		const notification = new this.notificationModel({
			notificationType: 'FOLLOW',
			notificationGroup: 'MEMBER',
			notificationTitle: `${follower.memberNick} started following you`,
			notificationDesc: `${follower.memberNick} has started following ${following.memberNick}.`,
			authorId: followerId,
			receiverId: followingId,
		});

		await notification.save();
	}

	public async createNotificationForUnfollow(followerId: ObjectId, followingId: ObjectId): Promise<void> {
		const follower = await this.memberModel.findById(followerId);
		const following = await this.memberModel.findById(followingId);

		if (!follower || !following) {
			return;
		}

		const notification = new this.notificationModel({
			notificationType: 'UNFOLLOW',
			notificationGroup: 'MEMBER',
			notificationTitle: `${follower.memberNick} has stopped following you`,
			notificationDesc: `${follower.memberNick} has stopped following ${following.memberNick}.`,
			authorId: followerId,
			receiverId: followingId,
		});

		await notification.save();
	}

	public async createContactMessage(memberId: ObjectId, input: ContactInput): Promise<void> {
		const title = await this.propertyModel.findById(input.contactRefId);
		const notification = new this.notificationModel({
			notificationType: 'CONTACT',
			notificationGroup: 'MEMBER',
			notificationTitle: `New Message`,
			notificationDesc: ` You have a new message regarding ${title.propertyModel} : Name: ${input.name}, Phone: ${input.phone}, Email: ${input.email},  Message: ${input.message}.`,
			authorId: memberId,
			receiverId: title.memberId,
		});

		await notification.save();
	}
}
