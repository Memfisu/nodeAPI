import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Email is invalid' })
	email: string;

	@IsString({ message: 'Password should be specified' })
	password: string;

	@IsString({ message: 'Name should be specified' })
	name: string;
}
