import * as request from 'supertest';

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Tea } from './entities/tea.entity';
import { TeaController } from './tea.controller';
import { TeaService } from './tea.service';
import { INestApplication } from '@nestjs/common';
import { TeaModule } from './tea.module';

describe('Testing Tea Controller', () => {
  let controller: TeaController;
  let service: TeaService;
  let app: INestApplication;

  const mockOutputTea = {
    title: 'testing tea controller',
    img: 'link',
    id: '69d8d027-7975-4fac-aebd-deefa661335f',
  };

  const mockService = {
    find: jest.fn(() => Promise.resolve([mockOutputTea])),
    create: jest.fn(() => Promise.resolve(mockOutputTea)),
    update: jest.fn(() =>
      Promise.resolve({ ...mockOutputTea, img: 'new link' }),
    ),
    preload: jest.fn(() => Promise.resolve(mockOutputTea)),
    findOne: jest.fn(() => Promise.resolve(mockOutputTea)),
    remove: jest.fn(() => Promise.resolve(mockOutputTea)),
    save: jest.fn(() => Promise.resolve(mockOutputTea)),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeaController],
      providers: [
        TeaService,
        { provide: getRepositoryToken(Tea), useValue: mockService },
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();

    controller = module.get<TeaController>(TeaController);
    service = module.get<TeaService>(TeaService);
  });

  afterAll(async () => {
    await app.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it(`/GET tea`, async () => {
    const response = await service.findAll();
    return request(app.getHttpServer())
      .get('/tea')
      .expect(200)
      .expect(response);
  });

  it(`/POST tea`, async () => {
    const { id, ...input } = mockOutputTea;

    const response = await service.create(input);
    return request(app.getHttpServer())
      .post('/tea')
      .expect(201)
      .expect(response);
  });

  it(`/GET tea`, async () => {
    const response = await service.findOne(mockOutputTea.id);
    return request(app.getHttpServer())
      .get('/tea/:id')
      .expect(200)
      .expect(response);
  });

  it(`/PUT tea`, async () => {
    const response = await service.update(mockOutputTea.id, {
      img: 'new link',
    });
    return request(app.getHttpServer())
      .put('/tea/:id')
      .expect(200)
      .expect(response);
  });

  it(`/DELETE tea`, async () => {
    const response = await service.remove(mockOutputTea.id);
    return request(app.getHttpServer())
      .delete('/tea/:id')
      .expect(200)
      .expect(response);
  });
});
