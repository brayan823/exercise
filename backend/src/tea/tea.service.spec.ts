import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tea } from './entities/tea.entity';
import { TeaService } from './tea.service';

export class teaRepositoryFake {
  public create(): void {}
  public async save(): Promise<void> {}
  public async remove(): Promise<void> {}
  public async find(): Promise<void> {}
  public async findOne(): Promise<void> {}
  public async preload(): Promise<void> {}
}

describe('Testing Tea Service', () => {
  let service: TeaService;
  let teaRepository: Repository<Tea>;

  const mockOutputTea = {
    title: 'testing tea service',
    img: 'link',
    id: '69d8d027-7975-4fac-aebd-deefa661335f',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TeaService,
        {
          provide: getRepositoryToken(Tea),
          useClass: teaRepositoryFake,
        },
      ],
    }).compile();

    service = module.get<TeaService>(TeaService);
    teaRepository = module.get(getRepositoryToken(Tea));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('testing creating service', async () => {
    const teaRepositorySaveSpy = jest
      .spyOn(teaRepository, 'save')
      .mockResolvedValue(mockOutputTea);

    const teaRepositoryCreateSpy = jest
      .spyOn(teaRepository, 'create')

      .mockReturnValue(mockOutputTea);

    const result = await service.create(mockOutputTea);

    expect(teaRepositoryCreateSpy).toBeCalledWith(mockOutputTea);
    expect(teaRepositorySaveSpy).toBeCalledWith(mockOutputTea);
    expect(result).toEqual(mockOutputTea);
  });

  it('testing remove service', async () => {
    const teaRepositoryPreloadSpy = jest
      .spyOn(teaRepository, 'findOne')
      .mockResolvedValue(mockOutputTea);

    const teaRepositoryRemoveSpy = jest
      .spyOn(teaRepository, 'remove')
      .mockResolvedValue(mockOutputTea);

    const result = await service.remove(mockOutputTea.id);

    expect(teaRepositoryPreloadSpy).toHaveBeenCalledWith(mockOutputTea.id);
    expect(teaRepositoryRemoveSpy).toHaveBeenCalledWith(mockOutputTea);

    expect(result.title).toBe(mockOutputTea.title);
  });

  it('should return a list of teas', async () => {
    jest.spyOn(teaRepository, 'find').mockResolvedValue([mockOutputTea]);

    const result = await service.findAll();

    expect(result).toHaveLength(1);
  });

  it('should update a tea', async () => {
    jest
      .spyOn(teaRepository, 'preload')
      .mockImplementation(() => Promise.resolve(mockOutputTea));

    jest
      .spyOn(teaRepository, 'save')
      .mockImplementation(() =>
        Promise.resolve({ ...mockOutputTea, img: 'new link' }),
      );

    const result = await service.update(mockOutputTea.id, {
      ...mockOutputTea,
      img: 'new link',
    });
    expect(result.img).toBe('new link');
  });

  it('should return a not found exception when update a tea', async () => {
    jest.spyOn(teaRepository, 'preload').mockResolvedValue(null);

    try {
      await service.update(mockOutputTea.id, mockOutputTea);
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
      expect(e.message).toBe(`Tea ${mockOutputTea.id} not found`);
    }
  });

  it('should return a not found exception when remove a tea', async () => {
    jest.spyOn(teaRepository, 'findOne').mockResolvedValue(null);

    try {
      await service.remove(mockOutputTea.id);
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
      expect(e.message).toBe(`Tea ${mockOutputTea.id} not found`);
    }
  });
});
