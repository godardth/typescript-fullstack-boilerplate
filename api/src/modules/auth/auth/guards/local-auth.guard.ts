import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {

	handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
		super.handleRequest(err, user, info, context);
		if (user && typeof user === 'object') return new User(user);
		return user;
	}

}