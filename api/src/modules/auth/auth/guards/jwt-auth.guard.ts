import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

	constructor(private reflector: Reflector) {
		super();
	}

	canActivate(context: ExecutionContext) {
		const allowUnauthenticatedRequest = this.reflector.get<boolean>('allowUnauthenticatedRequest', context.getHandler());
		return allowUnauthenticatedRequest || super.canActivate(context);
	}

}
