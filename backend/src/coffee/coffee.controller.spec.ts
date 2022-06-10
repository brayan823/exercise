import * as request from 'supertest';

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';
import { INestApplication } from '@nestjs/common';
import { CoffeeModule } from './coffe.module';

describe('Testing Coffee Controller', () => {
  let controller: CoffeeController;
  let service: CoffeeService;
  let app: INestApplication;

  const mockOutputCoffee = {
    title: 'testing coffee controller',
    img: 'link',
    type: 'test',
    id: '69d8d027-7975-4fac-aebd-deefa661335f',
  };

  const mockService = {
    find: jest.fn(() => Promise.resolve([mockOutputCoffee])),
    create: jest.fn(() => Promise.resolve(mockOutputCoffee)),
    update: jest.fn(() =>
      Promise.resolve({ ...mockOutputCoffee, img: 'new link' }),
    ),
    preload: jest.fn(() => Promise.resolve(mockOutputCoffee)),
    findOne: jest.fn(() => Promise.resolve(mockOutputCoffee)),
    remove: jest.fn(() => Promise.resolve(mockOutputCoffee)),
    save: jest.fn(() => Promise.resolve(mockOutputCoffee)),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeeController],
      providers: [
        CoffeeService,
        { provide: getRepositoryToken(Coffee), useValue: mockService },
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();

    controller = module.get<CoffeeController>(CoffeeController);
    service = module.get<CoffeeService>(CoffeeService);
  });

  afterAll(async () => {
    await app.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it(`/GET coffee`, async () => {
    const response = await service.findAll();
    return request(app.getHttpServer())
      .get('/coffee')
      .expect(200)
      .expect(response);
  });

  it(`/POST coffee`, async () => {
    const { id, ...input } = mockOutputCoffee;

    const response = await service.create(input);
    return request(app.getHttpServer())
      .post('/coffee')
      .expect(201)
      .expect(response);
  });

  it(`/GET coffee`, async () => {
    const response = await service.findOne(mockOutputCoffee.id);
    return request(app.getHttpServer())
      .get('/coffee/:id')
      .expect(200)
      .expect(response);
  });

  it(`/PUT coffee`, async () => {
    const response = await service.update(mockOutputCoffee.id, {
      img: 'new link',
    });
    return request(app.getHttpServer())
      .put('/coffee/:id')
      .expect(200)
      .expect(response);
  });

  it(`/DELETE coffee`, async () => {
    const response = await service.remove(mockOutputCoffee.id);
    return request(app.getHttpServer())
      .delete('/coffee/:id')
      .expect(200)
      .expect(response);
  });
});
