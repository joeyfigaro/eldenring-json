import { describe, it, expect } from 'bun:test';
import { ammos } from '../src';

describe('data exports', () => {
  it('should include ammo', () => {
    expect(ammos).toBeDefined();
  });
});
