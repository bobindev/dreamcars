import { Schema } from 'mongoose';
import { PropertyColor, PropertyFuel, PropertyLocation, PropertyMaker, PropertyStatus, PropertyType } from '../libs/enums/property.enum';

const PropertySchema = new Schema(
	{
		propertyType: {
			type: String,
			enum: PropertyType,
			required: true,
		},

    propertyMaker: {
			type: String,
			enum: PropertyMaker,
			required: true,
		},

		propertyStatus: {
			type: String,
			enum: PropertyStatus,
			default: PropertyStatus.ACTIVE,
		},

		propertyLocation: {
			type: String,
			enum: PropertyLocation,
			required: true,
		},

		propertyAddress: {
			type: String,
			required: true,
		},

		propertyModel: {
			type: String,
			required: true,
		},

    propertyYear: {
			type: Number,
			required: true,
		},

		propertyPrice: {
			type: Number,
			required: true,
		},

		propertyColor: {
			type: String,
      enum: PropertyColor,
			required: true,
		},

		propertyMileage: {
			type: Number,
			required: true,
		},

		propertyFuel: {
			type: String,
      enum: PropertyFuel,
			required: true,
		},

		propertyViews: {
			type: Number,
			default: 0,
		},

		propertyLikes: {
			type: Number,
			default: 0,
		},

		propertyComments: {
			type: Number,
			default: 0,
		},

		propertyRank: {
			type: Number,
			default: 0,
		},

		propertyImages: {
			type: [String],
			required: true,
		},

		propertyDesc: {
			type: String,
		},

		propertyBarter: {
			type: Boolean,
			default: false,
		},

		propertyRent: {
			type: Boolean,
			default: false,
		},

		memberId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'Member',
		},

		soldAt: {
			type: Date,
		},

		deletedAt: {
			type: Date,
		},

		constructedAt: {
			type: Date,
		},
	},
	{ timestamps: true, collection: 'properties' },
);

// quyidagi mantiqda, bir xil ma`lumotlar qayta-qayta kiritilishiga yo`l qoymaslik un tuzilgan ': 1'


export default PropertySchema;
