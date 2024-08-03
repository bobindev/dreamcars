import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Contact } from '../../libs/dto/contact/contact';
import { ContactInput, ContactsInquiry} from '../../libs/dto/contact/contact.input';
import { Direction, Message } from '../../libs/enums/common.enum';
import { NotificationService } from '../notification/notification.service';
import { PropertyService } from '../property/property.service';
import { T } from '../../libs/types/common';
import { lookupMember } from '../../libs/config';

@Injectable()
export class ContactService {
	constructor(
		@InjectModel('Contact') private readonly contactModel: Model<Contact>,
		private readonly notificationService: NotificationService,
		// private readonly propertyService: PropertyService,
	) {}

	public async createMessage(memberId: ObjectId, input: ContactInput): Promise<Contact> {
		input.memberId = memberId;

		let result = null;
		try {
			result = await this.contactModel.create(input);
		} catch (err) {
			console.log('Error, Service.model:', err.message);
			throw new BadRequestException(Message.CREATE_FAILED);
		}
		if (!result) throw new InternalServerErrorException(Message.CREATE_FAILED);
		await this.notificationService.createContactMessage(memberId, input);

		return result;
	}

  public async getMessage(memberId: ObjectId, input: ContactsInquiry): Promise<Contact> {
    console.log('Service: getMessage');
    const { contactRefId } = input.search;
    const match: T = {contactRefId: contactRefId}
    const sort: T = { [input?.sort ?? 'createdAt']: input?.direction ?? Direction.DESC };

		const result: Contact[] = await this.contactModel
			.aggregate([
				{ $match: match },
				{ $sort: sort },
			])
			.exec();

		if (!result.length) throw new InternalServerErrorException(Message.NO_DATA_FOUND);

		return result[0];
  }
}