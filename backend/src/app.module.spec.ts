import { Test } from '@nestjs/testing';

import { AppModule } from './app.module';

describe('Testing Tea Module', () => {
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AppModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});
