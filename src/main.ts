import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
