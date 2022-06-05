import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from './entities/coffee.entity';
import { CoffeeService } from './coffee.service';

export class coffeeRepositoryFake {
  public create(): void {}
  public async save(): Promise<void> {}
  public async remove(): Promise<void> {}
  public async find(): Promise<void> {}
  public async findOne(): Promise<void> {}
  public async preload(): Promise<void> {}
}

describe('Testing Coffee Service', () => {
  let service: CoffeeService;
  let coffeeRepository: Repository<Coffee>;

  const mockCoffee = {
    title: 'testing coffee service',
    img: 'link',
    type: 'test',
    id: '69d8d027-7975-4fac-aebd-deefa661335f',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoffeeService,
        {
          provide: getRepositoryToken(Coffee),
          useClass: coffeeRepositoryFake,
        },
      ],
    }).compile();

    service = module.get<CoffeeService>(CoffeeService);
    coffeeRepository = module.get(getRepositoryToken(Coffee));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('testing creating service', async () => {
    const coffeeRepositorySaveSpy = jest
      .spyOn(coffeeRepository, 'save')
      .mockResolvedValue(mockCoffee);

    const coffeeRepositoryCreateSpy = jest
      .spyOn(coffeeRepository, 'create')

      .mockReturnValue(mockCoffee);

    const result = await service.create(mockCoffee);

    expect(coffeeRepositoryCreateSpy).toBeCalledWith(mockCoffee);
    expect(coffeeRepositorySaveSpy).toBeCalledWith(mockCoffee);
    expect(result).toEqual(mockCoffee);
  });

  it('testing remove service', async () => {
    const coffeeRepositoryPreloadSpy = jest
      .spyOn(coffeeRepository, 'findOne')
      .mockResolvedValue(mockCoffee);

    const coffeeRepositoryRemoveSpy = jest
      .spyOn(coffeeRepository, 'remove')
      .mockResolvedValue(mockCoffee);

    const result = await service.remove(mockCoffee.id);

    expect(coffeeRepositoryPreloadSpy).toHaveBeenCalledWith(mockCoffee.id);
    expect(coffeeRepositoryRemoveSpy).toHaveBeenCalledWith(mockCoffee);

    expect(result.title).toBe(mockCoffee.title);
  });

  it('should return a list of coffees', async () => {
    jest.spyOn(coffeeRepository, 'find').mockResolvedValue([mockCoffee]);

    const result = await service.findAll();

    expect(result).toHaveLength(1);
  });

  it('should update a coffee', async () => {
    jest
      .spyOn(coffeeRepository, 'preload')
      .mockImplementation(() => Promise.resolve(mockCoffee));

    jest
      .spyOn(coffeeRepository, 'save')
      .mockImplementation(() =>
        Promise.resolve({ ...mockCoffee, img: 'new link' }),
      );

    const result = await service.update(mockCoffee.id, {
      ...mockCoffee,
      img: 'new link',
    });
    expect(result.img).toBe('new link');
  });

  it('should return a not found exception when update a coffee', async () => {
    jest.spyOn(coffeeRepository, 'preload').mockResolvedValue(null);

    try {
      await service.update(mockCoffee.id, mockCoffee);
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
      expect(e.message).toBe(`Coffee ${mockCoffee.id} not found`);
    }
  });

  it('should return a not found exception when remove a coffee', async () => {
    jest.spyOn(coffeeRepository, 'findOne').mockResolvedValue(null);

    try {
      await service.remove(mockCoffee.id);
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
      expect(e.message).toBe(`Coffee ${mockCoffee.id} not found`);
    }
  });
});
