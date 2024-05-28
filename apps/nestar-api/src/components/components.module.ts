import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { PropertyModule } from './property/property.module';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import { ViewModule } from './view/view.module';
import { FollowModule } from './follow/follow.module';
import { BoardArticleModule } from './board-article/board-article.module';
import { ComentResolver } from './coment/coment.resolver';
import { ComentService } from './coment/coment.service';

@Module({
	imports: [
		MemberModule,
		AuthModule,
		PropertyModule,
    BoardArticleModule,
		CommentModule,
		LikeModule,
		ViewModule,
		FollowModule,		
	],
	providers: [ComentResolver, ComentService],
})
export class ComponentsModule {}
