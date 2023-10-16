import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import * as csurf from 'csurf';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(csurf());
  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        directives: {
          defaultSrc: [`'self'`],
          styleSrc: [`'self'`],
          fontSrc: [`'self'`],
          imgSrc: [`'self'`],
          scriptSrc: [`'self'`],
        },
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
