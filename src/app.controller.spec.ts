import { Test, TestingModule } from '@nestjs/testing';
import { Request } from 'express';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Click here to open qraphql playground"', () => {
      const req = {
        headers: {
          origin: 'localhost:3003',
        },
      } as Request;

      const result =
        "<h3><a href='http://localhost:3003/graphql'>Click here</a> to open qraphql playground</h3>";

      expect(appController.getHello(req)).toBe(result);
    });
  });
});
