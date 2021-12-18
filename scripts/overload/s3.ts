import { IRegistry, Registry } from './registry';

@Registry.register
export class CreateBucket implements IRegistry {
  visit(props: any) {
    console.log(props);
    return {};
  }
}
