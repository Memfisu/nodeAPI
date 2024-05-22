import { IMiddleware } from './middleware.interface';
import { NextFunction, Request, Response } from 'express';
import { verify, VerifyErrors } from 'jsonwebtoken';

interface IJwtPayload {
	email: string;
}

export class AuthMiddleware implements IMiddleware {
	constructor(private secret: string) {}

	execute(req: Request, res: Response, next: NextFunction): void {
		const authHeader = req.headers.authorization;

		if (authHeader) {
			const token = authHeader.split(' ')[1];

			verify(token, this.secret, (err: VerifyErrors | null, payload: any) => {
				if (err) {
					return next();
				}

				if (payload && typeof payload === 'object' && 'email' in payload) {
					req.user = (payload as IJwtPayload).email;
				}
				next();
			});
		} else {
			next();
		}
	}
}
