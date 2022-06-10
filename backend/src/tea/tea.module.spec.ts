import { Test } from '@nestjs/testing';

import { TeaModule } from './tea.module';

describe('Testing Tea Module', () => {
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TeaModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});
