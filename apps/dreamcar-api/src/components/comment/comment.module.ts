import { Module } from '@nestjs/common';
import { CommentResolver } from './comment.resolver';
import { CommentService } from './comment.service';
import { MongooseModule } from '@nestjs/mongoose';
import CommentSchema from '../../schemas/Comment.model';
import { AuthModule } from '../auth/auth.module';
import { MemberModule } from '../member/member.module';
import { BoardArticleModule } from '../board-article/board-article.module';
import { PropertyModule } from '../property/property.module';
import { NotificationModule } from '../notification/notification.module';

@Module({
  imports: [
		MongooseModule.forFeature([
			{
				name: 'Comment',
				schema: CommentSchema,
			},
		]),
		AuthModule, 
    MemberModule,
    PropertyModule,
    NotificationModule,
    BoardArticleModule
	],
  providers: [CommentResolver, CommentService]
})
export class CommentModule {}
