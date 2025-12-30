import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';

export function Crud(prefix: string = ''): ClassDecorator {
  return (target: any) => {
    // Add @Controller decorator
    Controller(prefix)(target);

    // Helper to add decorator to methods safely
    function applyRouteDecorator(decorator: MethodDecorator, methodName: string) {
      const descriptor = Object.getOwnPropertyDescriptor(target.prototype, methodName) || {};
      decorator(target.prototype, methodName, descriptor as PropertyDescriptor);
    }

    // Apply CRUD route decorators
    applyRouteDecorator(Get(), 'findAll');
    applyRouteDecorator(Get(), 'findOne');
    applyRouteDecorator(Post(), 'create');
    applyRouteDecorator(Patch(), 'update');
    applyRouteDecorator(Delete(), 'remove');
  };
}
