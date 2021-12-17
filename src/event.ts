import _ from 'lodash';
import { KebabKeys } from './format';

interface ISessionContext {
  attributes: {
    mfaAuthenticated: string;
    creationDate: string | Date;
  };
}

interface IUserIdentity {
  type: string;
  principalId: string;
  arn: string | Arn;
  accountId: string;
  sessionContext: ISessionContext;
}

export interface IDetail<T> {
  eventVersion: string;
  userIdentity: IUserIdentity;
  eventTime: string | Date;
  eventSource: string;
  eventName: string;
  awsRegion: string;
  sourceIPAddress: string;
  userAgent: string;
  requestParameters: T;
  responseElements: any;
  requestID: string;
  eventID: string;
  eventType: string;
}

export interface ICloudWatchEvent {
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
export class ReceivedEvent<T> {
  readonly version: string;
  readonly id: string;
  readonly detailType: string;
  readonly source: string;
  readonly account: string;
  readonly time: string | Date;
  readonly region: string;
  readonly detail: IDetail<T>;

  private _resources: Arn[] = [];
  private readonly _originalEvent: KebabKeys<ICloudWatchEvent>;

  get resources(): Arn[] {
    return this._resources;
  }

  constructor(event: KebabKeys<ICloudWatchEvent>) {
    this._originalEvent = event;
    this.version = event.version;
    this.id = event.id;
    this.detailType = event['detail-type'];
    this.source = event.source;
    this.account = event.account;
    this.time = new Date(event.time);
    this.region = event.region;
    this.detail = event.detail;

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
