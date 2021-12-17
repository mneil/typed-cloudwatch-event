import { Arn } from '../../src/model';

describe('model', function () {
  describe('Arn', () => {
    it('should correctly parse arn', async () => {
      const arns: Arn[] = [
        'arn:aws:ec2:us-west-1:123456789012:instance/i-1234567890abcdef0',
        'arn:aws-us-gov:lambda:us-east-1:555555555555:function:test',
        'arn:aws-cn:sqs:us-east-1:555555555555:queue-name',
      ].map(Arn.fromString);

      expect(arns[0].account).toBe('123456789012');
      expect(arns[0].resourceId).toBe('instance/i-1234567890abcdef0');
      expect(arns[0].resource).toBe('instance');
      expect(arns[0].resourceName).toBe('i-1234567890abcdef0');
      expect(arns[1].resourceId).toBe('function:test');
      expect(arns[1].resource).toBe('function');
      expect(arns[1].resourceName).toBe('test');
      expect(arns[2].resourceId).toBe('queue-name');
      expect(arns[2].resource).toBe('queue-name');
      expect(arns[2].resourceName).toBe('queue-name');
    });
  });
});
