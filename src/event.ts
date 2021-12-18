import { Arn, CloudwatchEvent, Detail } from './model';
/**
 * Cloudwatch event from Cloudtrail
 *
 * Takes in an event from lambda and formats
 * it for use within your event driven application.
 *
 * Converts ISO strings to date, arn to Arn objects
 * and the event Detail to a Detail type that can
 * be cast to any API request when you know the request type
 * or be cast to any to pull arbitrary values.
 */
export class Event {
  readonly version: string;
  readonly id: string;
  readonly detailType: string;
  readonly source: string;
  readonly account: string;
  readonly time: Date;
  readonly region: string;
  readonly detail: Detail;

  private _resources: Arn[] = [];
  private readonly _originalEvent: CloudwatchEvent;

  get resources(): Arn[] {
    return this._resources;
  }

  constructor(event: CloudwatchEvent) {
    this._originalEvent = event;
    this.version = event.version;
    this.id = event.id;
    this.detailType = event['detail-type'];
    this.source = event.source;
    this.account = event.account;
    this.time = new Date(event.time);
    this.region = event.region;
    this.detail = new Detail(event.detail);

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
