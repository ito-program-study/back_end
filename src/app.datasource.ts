import { DataSource } from 'typeorm';

// typeormcliが勝手に参照してくれる
const AppDataSource = new DataSource({
  type: 'postgres', // データベースの種別。今回はpostgresqlへの接続とします。
  host: 'localhost',
  username: 'myuser',
  password: 'mypassword',
  database: 'my-db',
  entities: ['./src/entities/*.ts'], //  エンティティファイル配列
  migrations: ['./src/migrations/*.ts'], // マイグレーションファイル配列 マイグレーションファイルのパスを指定
});
export default AppDataSource;
