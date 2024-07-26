import { Field, InputType, Int } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, IsOptional, Length, Min} from "class-validator";
import { ObjectId } from "mongoose";
import { PropertyColor, PropertyFuel, PropertyLocation, PropertyMaker, PropertyStatus, PropertyType } from "../../enums/property.enum";


@InputType()
export class PropertyUpdate {

  @IsNotEmpty()
  @Field(() => String)
  _id: ObjectId;

  @IsOptional()
  @Field(() => PropertyType, {nullable: true})
  propertyType?: PropertyType;

  @IsOptional()
  @Field(() => PropertyMaker, {nullable: true})
  propertyMaker?: PropertyMaker;

  @IsOptional()
  @Field(() => PropertyStatus, {nullable: true})
  propertyStatus?: PropertyStatus;
  
  @IsOptional()
  @Field(() => PropertyLocation, {nullable: true})
  propertyLocation?: PropertyLocation;

  @IsOptional()
  @Length(3, 100)
  @Field(() => String, {nullable: true})
  propertyAddress?: string;
  
  @IsOptional()
  @Length(3, 100)
  @Field(() => String, {nullable: true})
  propertyModel?: string;

  @IsOptional()
  @Field(() => Number, {nullable: true})
  propertyYear?: number;

  @IsOptional()
  @Field(() => Number, {nullable: true})
  propertyPrice?: number;

  @IsOptional()
  @Field(() => PropertyColor, {nullable: true})
  propertyColor?: PropertyColor;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Field(() => Int, {nullable: true})
  propertyMileage?: number;

  @IsOptional()
  @Field(() => PropertyFuel, {nullable: true})
  propertyFuel?: PropertyFuel;

  @IsOptional()
  @Field(() => [String], {nullable: true})
  propertyImages?: string[];

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


