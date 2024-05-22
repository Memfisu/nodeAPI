import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'Email is invalid' })
	email: string;

	@IsString({ message: 'Password should be specified' })
	password: string;
}
