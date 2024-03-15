import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class ActivatedGuard implements CanActivate {

	constructor(private reflector: Reflector) { }

	canActivate(context: ExecutionContext) {
		const request = context.switchToHttp().getRequest();
		const allowUnactivatedRequest = this.reflector.get<boolean>('allowUnactivatedRequest', context.getHandler());
		return allowUnactivatedRequest || request.user?.isActivated || !request.user;
	}

}
