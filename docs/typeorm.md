# typeorm

```js

export const AppDataSource = new DataSource({
    type: "mysql", // 数据库类型
    host: "localhost",
    port: 3306,
    username: "root",
    password: "xxxxxx",
    database: "typeorm_test",
    synchronize: true, // !重要：生产环境记得关闭。 根据同步建表，也就是当 database 里没有和 Entity 对应的表的时候，会自动生成建表 sql 语句并执行,
    logging: true, // logging 是打印生成的 sql 语句
    entities: [User], // 指定有哪些和数据库的表对应的 Entity, 除了 class，还可以通过这种方式指定：['./**/entity/*.ts']
    migrations: [], // migrations 是修改表结构之类的 sql
    subscribers: [], // subscribers 是一些 Entity 生命周期的订阅者，比如 insert、update、remove 前后，可以加入一些逻辑：
    poolSize: 10, // 指定数据库连接池中连接的最大数量
    connectorPackage: 'mysql2', // 指定用什么驱动包
    extra: {
        authPlugin: 'sha256_password', // extra 是额外发送给驱动包的一些选项
    }
})
```

## entity

具体的 EntityManager 和 Repository 的方法

+ save：新增或者修改 Entity，如果传入了 id 会先 select 再决定修改还新增
+ update：直接修改 Entity，不会先 select
+ insert：直接插入 Entity
+ delete：删除 Entity，通过 id
+ remove：删除 Entity，通过对象
+ find：查找多条记录，可以指定 where、order by 等条件
+ findBy：查找多条记录，第二个参数直接指定 where 条件，更简便一点
+ findAndCount：查找多条记录，并返回总数量
+ findByAndCount：根据条件查找多条记录，并返回总数量
+ findOne：查找单条记录，可以指定 where、order by 等条件
+ findOneBy：查找单条记录，第二个参数直接指定 where 条件，更简便一点
+ findOneOrFail：查找失败会抛 EntityNotFoundError 的异常
+ query：直接执行 sql 语句
+ createQueryBuilder：创建复杂 sql 语句，比如 join 多个 Entity 的查询
+ transaction：包裹一层事务的 sql
+ getRepository：拿到对单个 Entity 操作的类，方法同 EntityManager
