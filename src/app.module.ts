import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './produtcs.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Products } from './products.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'NestJs',
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Products])
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService] 
})
export class AppModule {}
