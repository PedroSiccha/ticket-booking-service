import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Ticket Booking Documentation')
    .setDescription('Esta API proporciona puntos finales para gestionar diversos aspectos de un sistema de reserva de billetes. Permite a los usuarios buscar rutas, realizar reservas de asientos, gestionar equipaje, procesar pagos y emitir billetes. La API está diseñada utilizando una arquitectura de microservicios, lo que garantiza modularidad, escalabilidad y resiliencia.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(3000);
}
bootstrap();
