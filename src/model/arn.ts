import _ from 'lodash';
/**
 * Arn is an Arn class utility to help with parsing
 * Amazon Resource Names
 */
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
