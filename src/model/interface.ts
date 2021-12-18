import { KebabKeys } from '../format';
import { Arn } from './arn';

export interface ISessionContext {
  attributes: {
    mfaAuthenticated: string;
    creationDate: string | Date;
  };
}

export interface IUserIdentity {
  type: string;
  principalId: string;
  arn: string | Arn;
  accountId: string;
  sessionContext: ISessionContext;
}

export interface IDetail {
  eventVersion: string;
  userIdentity: IUserIdentity;
  eventTime: string | Date;
  eventSource: string;
  eventName: string;
  awsRegion: string;
  sourceIPAddress: string;
  userAgent: string;
  requestParameters: { [key: string]: any };
  responseElements: null;
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

export interface CloudwatchEvent extends KebabKeys<ICloudWatchEvent> {}
