import { Field, InputType } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, IsOptional, Length, Min} from "class-validator";
import { MemberStatus, MemberType } from "../../enums/member.enum";
import { ObjectId } from "mongoose";
import { PropertyLocation, PropertyType } from "../../enums/property.enum";


@InputType()
export class PropertyUpdate {

  @IsNotEmpty()
  @Field(() => String)
  _id: ObjectId;

  @IsOptional()
  @Field(() => PropertyType, {nullable: true})
  propertyType?: PropertyType;

  @IsOptional()
  @Field(() => PropertyType, {nullable: true})
  propertyStatus?: PropertyType;
  
  @IsOptional()
  @Field(() => PropertyLocation, {nullable: true})
  memberLocation?: PropertyLocation;

  @IsOptional()
  @Length(3, 100)
  @Field(() => String, {nullable: true})
  propertyAddress?: string;
  
  @IsOptional()
  @Length(3, 100)
  @Field(() => String, {nullable: true})
  propertyTitle?: string;

  @IsOptional()
  @Field(() => Number, {nullable: true})
  propertyPrice?: number;

  @IsOptional()
  @Field(() => Number, {nullable: true})
  propertySquare?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Field(() => String, {nullable: true})
  propertyBed?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Field(() => String, {nullable: true})
  propertyRoom?: string;

  @IsOptional()
  @Field(() => [String], {nullable: true})
  propertyImage?: string[];

  @IsOptional()
  @Length(5, 500)
  @Field(() => String, {nullable: true})
  propertyDesc?: string;

  @IsOptional()
  @Field(() => Boolean, {nullable: true})
  propertyBarter?: boolean;

  @IsOptional()
  @Field(() => Boolean, {nullable: true})
  propertyRent?: boolean;

  soldAt?: Date;

  deletedAt?: Date;

  @IsOptional()
  @Field(() => Date, {nullable: true})
  constructedAt?: Date;
}