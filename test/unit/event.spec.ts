import { aws, Event } from '../../src';

describe('model', function () {
  describe('Event', () => {
    it('should parse a basic event', async () => {
      const event = {
        version: '0',
        id: '36eb8523-97d0-4518-b33d-ee3579ff19f0',
        'detail-type': 'AWS API Call via CloudTrail',
        source: 'aws.s3',
        account: '123456789012',
        time: '2016-02-20T01:09:13Z',
        region: 'us-east-1',
        resources: [
          'arn:aws:ec2:us-west-1:123456789012:instance/i-1234567890abcdef0',
        ],
        detail: {
          eventVersion: '1.03',
          userIdentity: {
            type: 'Root',
            principalId: '123456789012',
            arn: 'arn:aws:iam::123456789012:root',
            accountId: '123456789012',
            sessionContext: {
              attributes: {
                mfaAuthenticated: 'false',
                creationDate: '2016-02-20T01:05:59Z',
              },
            },
          },
          eventTime: '2016-02-20T01:09:13Z',
          eventSource: 's3.amazonaws.com',
          eventName: 'CreateBucket',
          awsRegion: 'us-east-1',
          sourceIPAddress: '100.100.100.100',
          userAgent: '[S3Console/0.4]',
          requestParameters: {
            bucketName: 'bucket-test-iad',
          },
          responseElements: null,
          requestID: '9D767BCC3B4E7487',
          eventID: '24ba271e-d595-4e66-a7fd-9c16cbf8abae',
          eventType: 'AwsApiCall',
        },
      };
      const receivedEvent = new Event(event);
      const bucketParameters =
        receivedEvent.detail.requestParameters.as<aws.s3.CreateBucket>();
      bucketParameters.Bucket;
      bucketParameters.GrantFullControl;
      expect(receivedEvent.time.toISOString()).toBe('2016-02-20T01:09:13.000Z');
      expect(receivedEvent.resources[0].account).toBe('123456789012');
    });
    it('should stringify', async () => {
      const event = {
        version: '0',
        id: '36eb8523-97d0-4518-b33d-ee3579ff19f0',
        'detail-type': 'AWS API Call via CloudTrail',
        source: 'aws.s3',
        account: '123456789012',
        time: '2016-02-20T01:09:13Z',
        region: 'us-east-1',
        resources: [],
        detail: {
          eventVersion: '1.03',
          userIdentity: {
            type: 'Root',
            principalId: '123456789012',
            arn: 'arn:aws:iam::123456789012:root',
            accountId: '123456789012',
            sessionContext: {
              attributes: {
                mfaAuthenticated: 'false',
                creationDate: '2016-02-20T01:05:59Z',
              },
            },
          },
          eventTime: '2016-02-20T01:09:13Z',
          eventSource: 's3.amazonaws.com',
          eventName: 'CreateBucket',
          awsRegion: 'us-east-1',
          sourceIPAddress: '100.100.100.100',
          userAgent: '[S3Console/0.4]',
          requestParameters: {
            bucketName: 'bucket-test-iad',
          },
          responseElements: null,
          requestID: '9D767BCC3B4E7487',
          eventID: '24ba271e-d595-4e66-a7fd-9c16cbf8abae',
          eventType: 'AwsApiCall',
        },
      };
      const receivedEvent = new Event(event);
      expect(JSON.stringify(receivedEvent)).toBe(
        '{"version":"0","id":"36eb8523-97d0-4518-b33d-ee3579ff19f0","detail-type":"AWS API Call via CloudTrail","source":"aws.s3","account":"123456789012","time":"2016-02-20T01:09:13Z","region":"us-east-1","resources":[],"detail":{"eventVersion":"1.03","userIdentity":{"type":"Root","principalId":"123456789012","arn":"arn:aws:iam::123456789012:root","accountId":"123456789012","sessionContext":{"attributes":{"mfaAuthenticated":"false","creationDate":"2016-02-20T01:05:59Z"}}},"eventTime":"2016-02-20T01:09:13Z","eventSource":"s3.amazonaws.com","eventName":"CreateBucket","awsRegion":"us-east-1","sourceIPAddress":"100.100.100.100","userAgent":"[S3Console/0.4]","requestParameters":{"bucketName":"bucket-test-iad"},"responseElements":null,"requestID":"9D767BCC3B4E7487","eventID":"24ba271e-d595-4e66-a7fd-9c16cbf8abae","eventType":"AwsApiCall"}}'
      );
    });
  });
});
