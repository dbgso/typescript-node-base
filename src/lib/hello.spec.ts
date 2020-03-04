import { hello } from './hello';
describe('hello', () => {
  it('should be hello world', () => {
    expect(hello()).toBe('hello world');
  });
});
