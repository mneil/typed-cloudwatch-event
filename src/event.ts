import _ from 'lodash';
import { KebabKeys } from './format';
import * as model from './model';

interface CloudWatchEvent {
  version: string;
  id: string;
  detailType: string;
  source: string;
  account: string;
  time: string;
  region: string;
  resources: string[];
  detail: any;
}

export class Arn {
  readonly partition: string;
  readonly service: string;
  readonly region: string;
  readonly account: string;
  readonly resourceId: string;
  readonly resource: string;
  readonly resourceName: string;
  private readonly value: string;
  constructor(arn: string) {
    if (!Arn.isArn(arn)) {
      throw new Error(`${arn} is not a valid arn`);
    }
    this.value = arn;
    const parts = arn.split(':');
    this.partition = _.get(parts, '1');
    this.service = _.get(parts, '2');
    this.region = _.get(parts, '3');
    this.account = _.get(parts, '4');
    this.resourceId = _.get(parts, '5');
    if (parts.length > 6) {
      // resourceId contains colon part
      this.resourceId = `${this.resourceId}:${_.get(parts, '6')}`;
      this.resource = _.get(parts, '5');
      this.resourceName = _.get(parts, '6');
    } else if (this.resourceId.includes('/')) {
      // resourceId contains a slash
      const slashResource = this.resourceId.split('/');
      this.resource = _.get(slashResource, '0');
      this.resourceName = _.get(slashResource, '1');
    } else {
      // resourceId contains no slash or colon
      this.resource = _.get(parts, '5');
      this.resourceName = _.get(parts, '5');
    }
  }

  public static isArn(arn: string) {
    arn = arn.trim();
    // must have a minimum of 6 parts
    if ((arn.match(/:/g) || []).length < 5) {
      return false;
    }
    // must start with arn:
    if (!arn.startsWith('arn:')) {
      return false;
    }
    // cannot end with a colon
    if ([':'].includes(arn[arn.length - 1])) {
      return false;
    }
    return true;
  }

  public static fromString(arn: string) {
    return new Arn(arn);
  }
}
export class ReceivedEvent {
  readonly version: string;
  readonly id: string;
  readonly detailType: string;
  readonly source: string;
  readonly account: string;
  readonly time: Date;
  readonly region: string;
  readonly detail: any;

  private _resources: Arn[] = [];
  private readonly _originalEvent: KebabKeys<CloudWatchEvent>;

  get resources(): Arn[] {
    return this._resources;
  }

  constructor(event: KebabKeys<CloudWatchEvent>) {
    this._originalEvent = event;
    this.version = event.version;
    this.id = event.id;
    this.detailType = event['detail-type'];
    this.source = event.source;
    this.account = event.account;
    this.time = new Date(event.time);
    this.region = event.region;
    this.detail = event.detail;

    console.log(model);
    this.setResources(event.resources);
  }

  setResources(value: string[]) {
    let resources = [];
    for (const resource of value) {
      resources.push(new Arn(resource));
    }
    this._resources = resources;
  }

  toJSON() {
    return this._originalEvent;
  }
}

// Cloudtrail
// {
//     "version": "0",
//     "id": "36eb8523-97d0-4518-b33d-ee3579ff19f0",
//     "detail-type": "AWS API Call via CloudTrail",
//     "source": "aws.s3",
//     "account": "123456789012",
//     "time": "2016-02-20T01:09:13Z",
//     "region": "us-east-1",
//     "resources": [],
//     "detail": {
//         "eventVersion": "1.03",
//         "userIdentity": {
//             "type": "Root",
//             "principalId": "123456789012",
//             "arn": "arn:aws:iam::123456789012:root",
//             "accountId": "123456789012",
//             "sessionContext": {
//                 "attributes": {
//                     "mfaAuthenticated": "false",
//                     "creationDate": "2016-02-20T01:05:59Z"
//                 }
//             }
//         },
//         "eventTime": "2016-02-20T01:09:13Z",
//         "eventSource": "s3.amazonaws.com",
//         "eventName": "CreateBucket",
//         "awsRegion": "us-east-1",
//         "sourceIPAddress": "100.100.100.100",
//         "userAgent": "[S3Console/0.4]",
//         "requestParameters": {
//             "bucketName": "bucket-test-iad"
//         },
//         "responseElements": null,
//         "requestID": "9D767BCC3B4E7487",
//         "eventID": "24ba271e-d595-4e66-a7fd-9c16cbf8abae",
//         "eventType": "AwsApiCall"
//     }
// }

// Codecommit
// {
//     "version": "0",
//     "id": "01234567-EXAMPLE",
//     "detail-type": "CodeCommit Repository State Change",
//     "source": "aws.codecommit",
//     "account": "123456789012",
//     "time": "2019-06-12T10:23:43Z",
//     "region": "us-east-2",
//     "resources": [
//       "arn:aws:codecommit:us-east-2:123456789012:MyDemoRepo"
//     ],
//     "detail": {
//       "event": "referenceCreated",
//       "repositoryName": "MyDemoRepo",
//       "repositoryId": "12345678-1234-5678-abcd-12345678abcd",
//       "referenceType": "branch",
//       "referenceName": "myBranch",
//       "referenceFullName": "refs/heads/myBranch",
//       "commitId": "3e5983DESTINATION"
//     }
//   }

// Event
// {
//     "version": "0",
//     "id": "6a7e8feb-b491-4cf7-a9f1-bf3703467718",
//     "detail-type": "EC2 Instance State-change Notification",
//     "source": "aws.ec2",
//     "account": "111122223333",
//     "time": "2017-12-22T18:43:48Z",
//     "region": "us-west-1",
//     "resources": [
//       "arn:aws:ec2:us-west-1:123456789012:instance/ i-1234567890abcdef0"
//     ],
//     "detail": {
//       "instance-id": " i-1234567890abcdef0",
//       "state": "terminated"
//     }
//   }

// type KebabKeys<T> = { [K in keyof T as K extends string ? Kebab<K> : K]: T[K] };
