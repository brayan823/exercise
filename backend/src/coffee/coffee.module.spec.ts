import { Test } from '@nestjs/testing';

import { CoffeeModule } from './coffe.module';

describe('Testing Coffee Module', () => {
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CoffeeModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});
