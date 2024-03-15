import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

	constructor(private reflector: Reflector) {
		super();
	}

	canActivate(context: ExecutionContext) {
		const allowUnauthenticatedRequest = this.reflector.get<boolean>('allowUnauthenticatedRequest', context.getHandler());
		return allowUnauthenticatedRequest || super.canActivate(context);
	}

	handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
		super.handleRequest(err, user, info, context);
		if (user && typeof user === 'object') return new User(user);
		return user;
	}

}
