import { IDetail, IUserIdentity } from './interface';
import { Parameters } from './parameters';
/**
 * Detail is the detail block of a cloudtrail event
 */
export class Detail implements IDetail {
  eventVersion!: string;
  userIdentity!: IUserIdentity;
  eventTime!: string | Date;
  eventSource!: string;
  eventName!: string;
  awsRegion!: string;
  sourceIPAddress!: string;
  userAgent!: string;
  requestParameters: Parameters;
  responseElements: null;
  requestID!: string;
  eventID!: string;
  eventType!: string;

  constructor(props: IDetail) {
    // assign all properties to itself
    Object.assign(this, props);
    // create new request parameters
    this.requestParameters = new Parameters(props.requestParameters);
    // responseElements are always null?
    this.responseElements = null;
  }
}
