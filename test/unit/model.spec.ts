import { types } from '../../src/model/s3';

describe('model', function () {
  describe('ReceivedEvent', () => {
    it('should parse a basic event', async () => {
      expect(types()).toBe('2017-12-22T18:43:48.000Z');
    });
  });
});
