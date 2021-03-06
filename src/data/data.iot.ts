/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface DeleteThingShadow {
  readonly thingName: string;
  readonly shadowName?: string;
}
export interface GetRetainedMessage {
  readonly topic: string;
}
export interface GetThingShadow {
  readonly thingName: string;
  readonly shadowName?: string;
}
export interface ListNamedShadowsForThing {
  readonly thingName: string;
  readonly nextToken?: string;
  readonly pageSize?: number;
}
export interface ListRetainedMessages {
  readonly nextToken?: string;
  readonly maxResults?: number;
}
export interface Publish {
  readonly topic: string;
  readonly qos?: number;
  readonly retain?: boolean;
  readonly payload?: unknown;
}
export interface UpdateThingShadow {
  readonly thingName: string;
  readonly shadowName?: string;
  readonly payload: unknown;
}



interface ConflictException {
  readonly message: string;
}

interface DeleteThingShadowRequest {
  readonly thingName: string;
  readonly shadowName: string;
}

interface DeleteThingShadowResponse {
  readonly payload: unknown;
}

interface GetRetainedMessageRequest {
  readonly topic: string;
}

interface GetRetainedMessageResponse {
  readonly topic: string;
  readonly payload: unknown;
  readonly qos: number;
  readonly lastModifiedTime: number;
}

interface GetThingShadowRequest {
  readonly thingName: string;
  readonly shadowName: string;
}

interface GetThingShadowResponse {
  readonly payload: unknown;
}

interface InternalFailureException {
  readonly message: string;
}

interface InvalidRequestException {
  readonly message: string;
}

interface ListNamedShadowsForThingRequest {
  readonly thingName: string;
  readonly nextToken: string;
  readonly pageSize: number;
}

interface ListNamedShadowsForThingResponse {
  readonly results: [];
  readonly nextToken: string;
  readonly timestamp: number;
}

interface ListRetainedMessagesRequest {
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListRetainedMessagesResponse {
  readonly retainedTopics: [];
  readonly nextToken: string;
}

interface MethodNotAllowedException {
  readonly message: string;
}

interface PublishRequest {
  readonly topic: string;
  readonly qos: number;
  readonly retain: boolean;
  readonly payload: unknown;
}

interface RequestEntityTooLargeException {
  readonly message: string;
}

interface ResourceNotFoundException {
  readonly message: string;
}

interface RetainedMessageSummary {
  readonly topic: string;
  readonly payloadSize: number;
  readonly qos: number;
  readonly lastModifiedTime: number;
}

interface ServiceUnavailableException {
  readonly message: string;
}

interface ThrottlingException {
  readonly message: string;
}

interface UnauthorizedException {
  readonly message: string;
}

interface UnsupportedDocumentEncodingException {
  readonly message: string;
}

interface UpdateThingShadowRequest {
  readonly thingName: string;
  readonly shadowName: string;
  readonly payload: unknown;
}

interface UpdateThingShadowResponse {
  readonly payload: unknown;
}

