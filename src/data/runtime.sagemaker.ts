/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface InvokeEndpoint {
  readonly EndpointName: string;
  readonly Body: unknown;
  readonly ContentType?: string;
  readonly Accept?: string;
  readonly CustomAttributes?: string;
  readonly TargetModel?: string;
  readonly TargetVariant?: string;
  readonly TargetContainerHostname?: string;
  readonly InferenceId?: string;
}
export interface InvokeEndpointAsync {
  readonly EndpointName: string;
  readonly ContentType?: string;
  readonly Accept?: string;
  readonly CustomAttributes?: string;
  readonly InferenceId?: string;
  readonly InputLocation: string;
  readonly RequestTTLSeconds?: number;
}



interface InternalDependencyException {
  readonly Message: string;
}

interface InternalFailure {
  readonly Message: string;
}

interface InvokeEndpointAsyncInput {
  readonly EndpointName: string;
  readonly ContentType: string;
  readonly Accept: string;
  readonly CustomAttributes: string;
  readonly InferenceId: string;
  readonly InputLocation: string;
  readonly RequestTTLSeconds: number;
}

interface InvokeEndpointAsyncOutput {
  readonly InferenceId: string;
  readonly OutputLocation: string;
}

interface InvokeEndpointInput {
  readonly EndpointName: string;
  readonly Body: unknown;
  readonly ContentType: string;
  readonly Accept: string;
  readonly CustomAttributes: string;
  readonly TargetModel: string;
  readonly TargetVariant: string;
  readonly TargetContainerHostname: string;
  readonly InferenceId: string;
}

interface InvokeEndpointOutput {
  readonly Body: unknown;
  readonly ContentType: string;
  readonly InvokedProductionVariant: string;
  readonly CustomAttributes: string;
}

interface ModelError {
  readonly Message: string;
  readonly OriginalStatusCode: number;
  readonly OriginalMessage: string;
  readonly LogStreamArn: string;
}

interface ModelNotReadyException {
  readonly Message: string;
}

interface ServiceUnavailable {
  readonly Message: string;
}

interface ValidationError {
  readonly Message: string;
}

