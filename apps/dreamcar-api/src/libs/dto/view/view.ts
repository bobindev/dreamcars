//backend dan frontend ga yuboriladigan dto hosil qilinadi

import { Field, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";
import { ViewGroup } from "../../enums/view.enum";


@ObjectType() 
export class View {
  @Field(() => String)
  _id: ObjectId;

  @Field(() => String)
  view: ViewGroup;

  @Field(() => String)
  viewRefId: ObjectId;

  @Field(() => String)
  memberId: ObjectId;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

}