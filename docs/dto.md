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

## DTO

DTO（数据传输对象）： DTO是用于在网络上传输数据的对象。它们用来封装来自客户端的请求数据，并将其传递给服务器端进行处理。DTO通常由控制器使用，以便在处理请求之前对数据进行验证和转换。

+ 输入验证：验证传入的数据是否符合特定的业务规则，例如检查必填字段是否存在、字段格式是否正确等。
+ 数据转换：将传入的数据转换为服务器端所需的结构，例如将日期字符串转换为Date对象、将数值型字符串转换为数字等。
+ 数据封装：将来自客户端的相关数据封装在一个对象中，以便更好地处理和传递给业务逻辑层。

## pipe

Pipe（管道）： Pipe充当了输入验证和转换的过滤器。它接收来自客户端的数据并进行预处理，然后将其传递给控制器进行处理。Pipe可以用来验证请求参数、转换请求数据格式、过滤或者修改请求数据等。

### 应用

+ 验证参数：验证请求参数是否符合特定的规则，例如检查参数是否为空、是否达到最小长度等。
+ 转换数据：将请求数据从一种格式转换为另一种格式，例如将字符串类型的日期转换为JavaScript中的Date对象。
+ 过滤数据：从请求数据中过滤出需要的部分，例如只保留某些字段或者删除敏感信息。

**Pipe主要负责对请求进行验证、转换和过滤，而DTO则用于封装和传输请求数据，并进行输入验证和转换。两者合作可以更好地处理和规范请求数据的处理过程。**

```ts
// user.dto.ts
export class UserDto {
  username: string;
  password: string;
}

// user.pipe.ts
import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class UserPipe implements PipeTransform {
  transform(value: any): UserDto {
    const { username, password } = value;

    // 验证用户名和密码是否为空
    if (!username || !password) {
      throw new BadRequestException('用户名和密码不能为空');
    }

    // 其他验证逻辑...

    return { username, password };
  }
}

// user.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserPipe } from './user.pipe';

@Controller('users')
export class UserController {
  @Post()
  createUser(@Body(new UserPipe()) userData: UserDto) { // @Body装饰器使用了UserPipe来处理请求数据，并将验证后的用户数据传递给业务逻辑层进行处理。
    // 在这里可以访问验证后的用户数据并进行业务逻辑处理
    console.log(userData);

    // 其他业务逻辑...

    // 返回响应...
  }
}
```

> UserDto用于封装请求的用户名和密码，UserPipe用于验证和转换请求数据
