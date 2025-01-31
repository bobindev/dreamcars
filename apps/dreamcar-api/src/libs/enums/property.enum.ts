import { registerEnumType } from '@nestjs/graphql';

export enum PropertyType {
	COMPACT = 'COMPACT',
	SEDAN = 'SEDAN',
	HATCHBACK = 'HATCHBACK',
  SUV = 'SUV',
	VAN = 'VAN',
  TRUCK = 'TRUCK',
}
registerEnumType(PropertyType, {
	name: 'PropertyType',
});

export enum PropertyMaker {
	HYUNDAI = 'HYUNDAI',
	KIA = 'KIA',
	GENESIS = 'GENESIS',
  GM = 'GM',
	SSANGYONG = 'SSANGYONG',
} 
registerEnumType(PropertyMaker, {
	name: 'PropertyMaker',
});

//propertyModel

export enum PropertyStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(PropertyStatus, {
	name: 'PropertyStatus',
});

export enum PropertyLocation {
	SEOUL = 'SEOUL',
	BUSAN = 'BUSAN',
	INCHEON = 'INCHEON',
	DAEGU = 'DAEGU',
	GYEONGJU = 'GYEONGJU',
	GWANGJU = 'GWANGJU',
	CHONJU = 'CHONJU',
	DAEJON = 'DAEJON',
	JEJU = 'JEJU',
}
registerEnumType(PropertyLocation, {
	name: 'PropertyLocation',
});

export enum PropertyFuel {
  ELECTRIC = 'ELECTRIC',
  GASOLINE = 'GASOLINE',
  HYBRID = 'HYBRID',
  DIESEL = 'DIESEL',
  LPG = 'LPG'
}

registerEnumType(PropertyFuel, {
	name: 'PropertyFuel',
});


export enum PropertyColor {
  GREY = 'GREY',
  BLACK = 'BLACK',
  WHITE = 'WHITE',
  SILVER = 'SILVER',
  DARK_RED = 'DARK RED',
  DARK_BROWN = 'DARK BROWN',
  ORANGE = 'ORANGE',
  LIGHT_BLUE = 'LIGHT BLUE',
  LIGHT_BROWN = 'LIGHT BROWN'
}

registerEnumType(PropertyColor, {
	name: 'PropertyColor',
});



export const propertyColor = ['Grey', 'Black', 'White', 'Silver', 'Dark Red', 'Dark Blue', 'Dark Brown', 'Orange', 'Light Blue', 'Light Brown'];
