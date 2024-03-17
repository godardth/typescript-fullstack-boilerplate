import { DemoModule } from './modules/demo/demo.module';
import { AuthModule } from './modules/auth/auth.module';

export const routes = [
	{ path: 'demo', module: DemoModule },
	{ path: 'auth', module: AuthModule }
];