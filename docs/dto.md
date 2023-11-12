# nestjs DTO

创建DTO类：创建一个包含所需属性的DTO类。根据应用程序的需要，DTO类可以与实体模型类具有相同的属性或仅包含所需的属性

```js
export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}
```

添加验证器装饰器：如果需要对DTO进行验证，可以使用类似于class-validator的库添加验证器装饰器来确保数据的有效性和完整性。
```js

import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @Length(8)
  readonly password: string;
}
```

可选步骤：根据需要，您还可以为DTO类添加其他功能，如数据转换、映射等。

在控制器方法中使用DTO对象：在控制器方法中，可以通过将DTO对象作为参数使用来访问传递的数据，并执行相应的操作。

```js 
@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;
    // 执行创建用户的逻辑
  }
}
```
