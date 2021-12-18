export interface IRegistry {
  visit(props: any): any;
}

export class Registry {
  private static models: Map<string, IRegistry> = new Map();

  static register<T extends { new (...args: any[]): InstanceType<T> }>(
    model: T
  ) {
    Registry.models.set(model.constructor.name, new model());
  }
}
