/**
 * Parameters represents request or response parameters for API calls
 * as key value pairs. Parameters can be cast easily to to a type based
 * on what API call you expect.
 *
 *
 */
export class Parameters extends Object {
  constructor(props: any) {
    super(props);
    Object.assign(this, props);
  }
  public as<T>() {
    return this as unknown as T;
  }
}
