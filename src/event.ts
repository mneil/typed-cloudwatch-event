import { KebabKeys } from './format';
import { Arn, Detail, ICloudWatchEvent } from './model';

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
