import { Arn, ReceivedEvent } from '../../src/event';

describe('model', function () {
  describe('ReceivedEvent', () => {
    it('should parse a basic event', async () => {
      const event = {
        version: '0',
        id: '6a7e8feb-b491-4cf7-a9f1-bf3703467718',
        'detail-type': 'EC2 Instance State-change Notification',
        source: 'aws.ec2',
        account: '111122223333',
        time: '2017-12-22T18:43:48Z',
        region: 'us-west-1',
        resources: [
          'arn:aws:ec2:us-west-1:123456789012:instance/i-1234567890abcdef0',
        ],
        detail: {
          'instance-id': ' i-1234567890abcdef0',
          state: 'terminated',
        },
      };
      const receivedEvent = new ReceivedEvent(event);
      expect(receivedEvent.time.toISOString()).toBe('2017-12-22T18:43:48.000Z');
      expect(receivedEvent.resources[0].account).toBe('123456789012');
    });
    it('should stringify', async () => {
      const event = {
        version: '0',
        id: '6a7e8feb-b491-4cf7-a9f1-bf3703467718',
        'detail-type': 'EC2 Instance State-change Notification',
        source: 'aws.ec2',
        account: '111122223333',
        time: '2017-12-22T18:43:48Z',
        region: 'us-west-1',
        resources: [
          'arn:aws:ec2:us-west-1:123456789012:instance/i-1234567890abcdef0',
        ],
        detail: {
          'instance-id': ' i-1234567890abcdef0',
          state: 'terminated',
        },
      };
      const receivedEvent = new ReceivedEvent(event);
      expect(JSON.stringify(receivedEvent)).toBe(
        '{"version":"0","id":"6a7e8feb-b491-4cf7-a9f1-bf3703467718",' +
          '"detail-type":"EC2 Instance State-change Notification",' +
          '"source":"aws.ec2","account":"111122223333","time":"2017-12-22T18:43:48Z",' +
          '"region":"us-west-1",' +
          '"resources":["arn:aws:ec2:us-west-1:123456789012:instance/i-1234567890abcdef0"],' +
          '"detail":{"instance-id":" i-1234567890abcdef0","state":"terminated"}}'
      );
    });
  });
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
