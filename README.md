# Cloudwatch Event Object

CloudWatch event data object that validates and returns normalized data for creating event driven applications off of AWS CloudWatch Events.

## Usage

```sh
npm i typed-cloudwatch-event
```

```typescript
import { aws, Event } from 'typed-cloudwatch-event';

const BUCKETS = ['some-bucket', 'another-bucket'];
/**
 * Example lambda handler that is waiting for some bucket
 * to get deleted.
 */
export function handler(evt: CloudwatchEvent, context: any) {
  const event = new Event(evt);
  if (event.detail.eventName != 'DeleteBucket') {
    return;
  }
  const parameters =
    receivedEvent.detail.requestParameters.as<aws.s3.DeleteBucket>();

  if (BUCKETS.includes(parameters.Bucket)) {
    // take some action
  }
}
```
