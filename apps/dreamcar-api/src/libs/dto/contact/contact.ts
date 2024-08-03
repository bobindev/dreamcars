import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { Member, TotalCounter } from '../member/member';

@ObjectType()
export class Contact {
	@Field(() => String)
	_id: ObjectId;

	@Field(() => String)
	name: string;
	@Field(() => String)
	phone: string;
	@Field(() => String)
	email: string;
	@Field(() => String)
	message: string;

	@Field(() => String)
	contactRefId: ObjectId;

	@Field(() => String)
	memberId: ObjectId;

  /** from aggregation **/

	@Field(() => Member, { nullable: true })
	memberData?: Member;
}

@ObjectType()
export class Contacts {
	@Field(() => [Contact])
	list: Contact[];

	@Field(() => [TotalCounter], { nullable: true })
	metaCounter: TotalCounter[];
}

