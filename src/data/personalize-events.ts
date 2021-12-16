/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface PutEvents {
  readonly trackingId: string;
  readonly userId: string;
  readonly sessionId: string;
  readonly eventList: [];
}
export interface PutItems {
  readonly datasetArn: string;
  readonly items: [];
}
export interface PutUsers {
  readonly datasetArn: string;
  readonly users: [];
}



interface Event {
  readonly eventId: string;
  readonly eventType: string;
  readonly eventValue: unknown;
  readonly itemId: string;
  readonly properties: string;
  readonly sentAt: Date;
  readonly recommendationId: string;
  readonly impression: [];
}

interface InvalidInputException {
  readonly message: string;
}

interface Item {
  readonly itemId: string;
  readonly properties: string;
}

interface PutEventsRequest {
  readonly trackingId: string;
  readonly userId: string;
  readonly sessionId: string;
  readonly eventList: [];
}

interface PutItemsRequest {
  readonly datasetArn: string;
  readonly items: [];
}

interface PutUsersRequest {
  readonly datasetArn: string;
  readonly users: [];
}

interface ResourceInUseException {
  readonly message: string;
}

interface ResourceNotFoundException {
  readonly message: string;
}

interface User {
  readonly userId: string;
  readonly properties: string;
}
