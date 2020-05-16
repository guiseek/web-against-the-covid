/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
// import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { https } from 'firebase-functions';
import { AppModule } from './app/app.module';


const server = express();

const bootstrap = async (instance) => {
  const app = await NestFactory.create(
    AppModule, new ExpressAdapter(instance),
    { cors: true }
  );

  return app.init();
}

bootstrap(server);

export const api = https.onRequest(server);

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const globalPrefix = 'api';
//   app.setGlobalPrefix(globalPrefix);
//   const port = process.env.PORT || 3333;
//   await app.listen(port, () => {
//     Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
//   });
// }

// bootstrap();
