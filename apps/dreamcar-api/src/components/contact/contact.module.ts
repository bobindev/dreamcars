import { Module } from '@nestjs/common';
import { ContactResolver } from './contact.resolver';
import { ContactService } from './contact.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationModule } from '../notification/notification.module';
import { AuthModule } from '../auth/auth.module';
import ContactSchema from '../../schemas/Contact.model';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Contact', schema: ContactSchema }]), NotificationModule, AuthModule],
	providers: [ContactResolver, ContactService],
})
export class ContactModule {}