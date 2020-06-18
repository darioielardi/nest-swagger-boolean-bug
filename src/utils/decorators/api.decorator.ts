import {
  applyDecorators,
  Controller,
  createParamDecorator,
  ExecutionContext,
  Post,
} from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

type Decorator = ClassDecorator | MethodDecorator | PropertyDecorator;

type ControllerOptions = {
  auth?: boolean;
};

export function ApiController(name: string, options?: ControllerOptions) {
  const decorators: Decorator[] = [];

  const opts: ControllerOptions = {
    auth: true,
    ...options,
  };

  decorators.push(ApiTags(name));

  // if (opts.auth) {
  //   decorators.push(UseGuards(AuthGuard('bearer')), ApiBearerAuth());
  // }

  return applyDecorators(...decorators, Controller(name));
}

export const ApiMethodOperation = (name?: string) => {
  return (target: any, propKey: string, descriptor: PropertyDescriptor) => {
    ApiOperation({
      operationId: name ?? propKey,
    })(target, propKey, descriptor);
  };
};

export const ApiMethodVerb = (name?: string) => {
  return (target: any, propKey: string, descriptor: PropertyDescriptor) => {
    Post(name ?? propKey)(target, propKey, descriptor);
  };
};

export function ApiMethod(name?: string): MethodDecorator {
  return applyDecorators(
    ApiMethodVerb(name) as MethodDecorator,
    ApiMethodOperation(name) as MethodDecorator,
  );
}

export const AuthUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
