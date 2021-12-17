import 'source-map-support/register';
import s3 from './data/s3/2006-03-01/service-2.json';
export * from './event';

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

interface IIndexable {
  [key: string]: any;
}
// class Event {
//   readonly account: string;
//   readonly region: string;
//   readonly requestParameters;
// }

function asEvent<T extends typeof s3>(t: T, evt: typeof event) {
  const eventName = evt.detail.eventName;
  try {
    const anyOperation = t.operations as IIndexable;
    const spec = anyOperation[eventName];
    const members = anyOperation[spec.input.shape].members;
  } catch (e) {
    console.error('unable to detect operations type');
  }

  // .requestParameters.bucketName == 'foo-bar-baz';
}

const s3Event = asEvent(s3, event);
event.detail.requestParameters.bucketName == 'foo-bar-baz';
