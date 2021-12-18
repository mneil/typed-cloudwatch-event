/**
 * Parameters represents request or response parameters for API calls
 * as key value pairs. Parameters can be cast easily to to a type based
 * on what API call you expect.
 */
interface ParameterType {
  [key: string]: any;
}
export class Parameters implements ParameterType {
  private readonly _props: any;
  constructor(props: any) {
    this._props = props;
    Object.assign(this, props);
  }
  public as<T>() {
    const cast = this as unknown as T;
    return cast;
  }
}
