/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CompleteAttachmentUpload {
  readonly AttachmentIds: [];
  readonly ClientToken: string;
  readonly ConnectionToken: string;
}
export interface CreateParticipantConnection {
  readonly Type: [];
  readonly ParticipantToken: string;
  readonly ConnectParticipant: boolean;
}
export interface DisconnectParticipant {
  readonly ClientToken: string;
  readonly ConnectionToken: string;
}
export interface GetAttachment {
  readonly AttachmentId: string;
  readonly ConnectionToken: string;
}
export interface GetTranscript {
  readonly ContactId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly ScanDirection: string;
  readonly SortOrder: string;
  readonly StartPosition: StartPosition;
  readonly ConnectionToken: string;
}
export interface SendEvent {
  readonly ContentType: string;
  readonly Content: string;
  readonly ClientToken: string;
  readonly ConnectionToken: string;
}
export interface SendMessage {
  readonly ContentType: string;
  readonly Content: string;
  readonly ClientToken: string;
  readonly ConnectionToken: string;
}
export interface StartAttachmentUpload {
  readonly ContentType: string;
  readonly AttachmentSizeInBytes: number;
  readonly AttachmentName: string;
  readonly ClientToken: string;
  readonly ConnectionToken: string;
}



interface AccessDeniedException {
  readonly Message: string;
}

interface AttachmentItem {
  readonly ContentType: string;
  readonly AttachmentId: string;
  readonly AttachmentName: string;
  readonly Status: string;
}

interface CompleteAttachmentUploadRequest {
  readonly AttachmentIds: [];
  readonly ClientToken: string;
  readonly ConnectionToken: string;
}

interface CompleteAttachmentUploadResponse {
}

interface ConflictException {
  readonly Message: string;
}

interface ConnectionCredentials {
  readonly ConnectionToken: string;
  readonly Expiry: string;
}

interface CreateParticipantConnectionRequest {
  readonly Type: [];
  readonly ParticipantToken: string;
  readonly ConnectParticipant: boolean;
}

interface CreateParticipantConnectionResponse {
  readonly Websocket: Websocket;
  readonly ConnectionCredentials: ConnectionCredentials;
}

interface DisconnectParticipantRequest {
  readonly ClientToken: string;
  readonly ConnectionToken: string;
}

interface DisconnectParticipantResponse {
}

interface GetAttachmentRequest {
  readonly AttachmentId: string;
  readonly ConnectionToken: string;
}

interface GetAttachmentResponse {
  readonly Url: string;
  readonly UrlExpiry: string;
}

interface GetTranscriptRequest {
  readonly ContactId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly ScanDirection: string;
  readonly SortOrder: string;
  readonly StartPosition: StartPosition;
  readonly ConnectionToken: string;
}

interface GetTranscriptResponse {
  readonly InitialContactId: string;
  readonly Transcript: [];
  readonly NextToken: string;
}

interface InternalServerException {
  readonly Message: string;
}

interface Item {
  readonly AbsoluteTime: string;
  readonly Content: string;
  readonly ContentType: string;
  readonly Id: string;
  readonly Type: string;
  readonly ParticipantId: string;
  readonly DisplayName: string;
  readonly ParticipantRole: string;
  readonly Attachments: [];
}

interface SendEventRequest {
  readonly ContentType: string;
  readonly Content: string;
  readonly ClientToken: string;
  readonly ConnectionToken: string;
}

interface SendEventResponse {
  readonly Id: string;
  readonly AbsoluteTime: string;
}

interface SendMessageRequest {
  readonly ContentType: string;
  readonly Content: string;
  readonly ClientToken: string;
  readonly ConnectionToken: string;
}

interface SendMessageResponse {
  readonly Id: string;
  readonly AbsoluteTime: string;
}

interface ServiceQuotaExceededException {
  readonly Message: string;
}

interface StartAttachmentUploadRequest {
  readonly ContentType: string;
  readonly AttachmentSizeInBytes: number;
  readonly AttachmentName: string;
  readonly ClientToken: string;
  readonly ConnectionToken: string;
}

interface StartAttachmentUploadResponse {
  readonly AttachmentId: string;
  readonly UploadMetadata: UploadMetadata;
}

interface StartPosition {
  readonly Id: string;
  readonly AbsoluteTime: string;
  readonly MostRecent: number;
}

interface ThrottlingException {
  readonly Message: string;
}

interface UploadMetadata {
  readonly Url: string;
  readonly UrlExpiry: string;
  readonly HeadersToInclude: {[key: string]: any};
}

interface ValidationException {
  readonly Message: string;
}

interface Websocket {
  readonly Url: string;
  readonly ConnectionExpiry: string;
}

