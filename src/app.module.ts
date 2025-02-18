import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    PostModule,
    AuthModule,
    // NestJSがPostgreSQLと接続、勝手に読み込む
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'myuser',
      password: 'mypassword',
      database: 'my-db',
      entities: ['dist/*.entity.js'],
      migrations: ['dist/migrations/*.js'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

//typeormの設定を記述したファイル
//今回は、@nestjs/typeormライブラリのTypeOrmModuleOptions型を利用
// export interface TypeOrmModuleOptions {
//   type: 'mysql' | 'postgres' | 'mariadb' | 'sqlite' | 'oracle' | 'mongodb' | 'cockroachdb' | string;
//   host?: string;          DBサーバーのホスト名 (例: 'localhost', '127.0.0.1')
//   port?: number;          DBサーバーのポート (例: MySQLは3306, PostgreSQLは5432)
//   username?: string;      DBに接続するためのユーザー名
//   password?: string;      DBに接続するためのパスワード
//   database?: string;      DB名
//   synchronize?: boolean;  DB接続の自動同期 (開発環境で使用推奨, 本番環境ではfalse)
//   logging?: boolean | 'all' | 'query' | 'schema' | 'error' | 'warn'; DB操作のログを出力するかどうか
//   entities?: EntityTarget<any> | EntityTarget<any>[];                使用するエンティティ (エンティティクラスの配列)
//   migrations?: string[];                                             使用するマイグレーションファイル
//   subscribers?: string[];
//   extra?: any;
//   ssl?: boolean | { rejectUnauthorized?: boolean };
//   cli?: {
//     migrationsDir?: string;
//     subscribersDir?: string;
//     entitiesDir?: string;
//   };
// }

//以下設定
// import { TypeOrmModuleOptions } from '@nestjs/typeorm';
