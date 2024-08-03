import { Field, InputType, Int } from '@nestjs/graphql';
import { IsIn, IsNotEmpty, IsOptional, Min } from 'class-validator';
import { ObjectId } from 'mongoose';
import { Direction } from '../../enums/common.enum';
import { availableCommentSorts } from '../../config';

@InputType()
export class ContactInput {
	@IsNotEmpty()
	@Field(() => String)
	name: string;

	@IsNotEmpty()
	@Field(() => String)
	phone: string;

	@IsNotEmpty()
	@Field(() => String)
	email: string;

	@IsNotEmpty()
	@Field(() => String)
	message: string;

	@IsNotEmpty()
	@Field(() => String)
	contactRefId: ObjectId;

	memberId?: ObjectId;
}

@InputType()
class ConISearch {
	@IsNotEmpty()
	@Field(() => String)
	contactRefId: ObjectId;
}

@InputType()
export class ContactsInquiry {
	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	page: number;

	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	limit: number;

	@IsOptional()
	@IsIn(availableCommentSorts)
	@Field(() => String, { nullable: true })
	sort?: string;

	@IsOptional()
	@Field(() => Direction, { nullable: true })
	direction?: Direction;

	@IsNotEmpty()
	@Field(() => ConISearch)
	search: ConISearch;
}