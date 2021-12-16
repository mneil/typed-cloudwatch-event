/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface BatchCreateAttendee {
  readonly MeetingId: string;
  readonly Attendees: [];
}
export interface CreateAttendee {
  readonly MeetingId: string;
  readonly ExternalUserId: string;
}
export interface CreateMeeting {
  readonly ClientRequestToken: string;
  readonly MediaRegion: string;
  readonly MeetingHostId: string;
  readonly ExternalMeetingId: string;
  readonly NotificationsConfiguration: NotificationsConfiguration;
  readonly MeetingFeatures: MeetingFeaturesConfiguration;
}
export interface CreateMeetingWithAttendees {
  readonly ClientRequestToken: string;
  readonly MediaRegion: string;
  readonly MeetingHostId: string;
  readonly ExternalMeetingId: string;
  readonly MeetingFeatures: MeetingFeaturesConfiguration;
  readonly NotificationsConfiguration: NotificationsConfiguration;
  readonly Attendees: [];
}
export interface DeleteAttendee {
  readonly MeetingId: string;
  readonly AttendeeId: string;
}
export interface DeleteMeeting {
  readonly MeetingId: string;
}
export interface GetAttendee {
  readonly MeetingId: string;
  readonly AttendeeId: string;
}
export interface GetMeeting {
  readonly MeetingId: string;
}
export interface ListAttendees {
  readonly MeetingId: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface StartMeetingTranscription {
  readonly MeetingId: string;
  readonly TranscriptionConfiguration: TranscriptionConfiguration;
}
export interface StopMeetingTranscription {
  readonly MeetingId: string;
}



interface Attendee {
  readonly ExternalUserId: string;
  readonly AttendeeId: string;
  readonly JoinToken: string;
}

interface AudioFeatures {
  readonly EchoReduction: string;
}

interface BadRequestException {
  readonly Code: string;
  readonly Message: string;
  readonly RequestId: string;
}

interface BatchCreateAttendeeRequest {
  readonly MeetingId: string;
  readonly Attendees: [];
}

interface BatchCreateAttendeeResponse {
  readonly Attendees: [];
  readonly Errors: [];
}

interface CreateAttendeeError {
  readonly ExternalUserId: string;
  readonly ErrorCode: string;
  readonly ErrorMessage: string;
}

interface CreateAttendeeRequest {
  readonly MeetingId: string;
  readonly ExternalUserId: string;
}

interface CreateAttendeeRequestItem {
  readonly ExternalUserId: string;
}

interface CreateAttendeeResponse {
  readonly Attendee: Attendee;
}

interface CreateMeetingRequest {
  readonly ClientRequestToken: string;
  readonly MediaRegion: string;
  readonly MeetingHostId: string;
  readonly ExternalMeetingId: string;
  readonly NotificationsConfiguration: NotificationsConfiguration;
  readonly MeetingFeatures: MeetingFeaturesConfiguration;
}

interface CreateMeetingResponse {
  readonly Meeting: Meeting;
}

interface CreateMeetingWithAttendeesRequest {
  readonly ClientRequestToken: string;
  readonly MediaRegion: string;
  readonly MeetingHostId: string;
  readonly ExternalMeetingId: string;
  readonly MeetingFeatures: MeetingFeaturesConfiguration;
  readonly NotificationsConfiguration: NotificationsConfiguration;
  readonly Attendees: [];
}

interface CreateMeetingWithAttendeesResponse {
  readonly Meeting: Meeting;
  readonly Attendees: [];
  readonly Errors: [];
}

interface DeleteAttendeeRequest {
  readonly MeetingId: string;
  readonly AttendeeId: string;
}

interface DeleteMeetingRequest {
  readonly MeetingId: string;
}

interface EngineTranscribeMedicalSettings {
  readonly LanguageCode: string;
  readonly Specialty: string;
  readonly Type: string;
  readonly VocabularyName: string;
  readonly Region: string;
  readonly ContentIdentificationType: string;
}

interface EngineTranscribeSettings {
  readonly LanguageCode: string;
  readonly VocabularyFilterMethod: string;
  readonly VocabularyFilterName: string;
  readonly VocabularyName: string;
  readonly Region: string;
  readonly EnablePartialResultsStabilization: boolean;
  readonly PartialResultsStability: string;
  readonly ContentIdentificationType: string;
  readonly ContentRedactionType: string;
  readonly PiiEntityTypes: string;
  readonly LanguageModelName: string;
}

interface ForbiddenException {
  readonly Code: string;
  readonly Message: string;
  readonly RequestId: string;
}

interface GetAttendeeRequest {
  readonly MeetingId: string;
  readonly AttendeeId: string;
}

interface GetAttendeeResponse {
  readonly Attendee: Attendee;
}

interface GetMeetingRequest {
  readonly MeetingId: string;
}

interface GetMeetingResponse {
  readonly Meeting: Meeting;
}

interface LimitExceededException {
  readonly Code: string;
  readonly Message: string;
  readonly RequestId: string;
}

interface ListAttendeesRequest {
  readonly MeetingId: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListAttendeesResponse {
  readonly Attendees: [];
  readonly NextToken: string;
}

interface MediaPlacement {
  readonly AudioHostUrl: string;
  readonly AudioFallbackUrl: string;
  readonly SignalingUrl: string;
  readonly TurnControlUrl: string;
  readonly ScreenDataUrl: string;
  readonly ScreenViewingUrl: string;
  readonly ScreenSharingUrl: string;
  readonly EventIngestionUrl: string;
}

interface Meeting {
  readonly MeetingId: string;
  readonly MeetingHostId: string;
  readonly ExternalMeetingId: string;
  readonly MediaRegion: string;
  readonly MediaPlacement: MediaPlacement;
  readonly MeetingFeatures: MeetingFeaturesConfiguration;
}

interface MeetingFeaturesConfiguration {
  readonly Audio: AudioFeatures;
}

interface NotFoundException {
  readonly Code: string;
  readonly Message: string;
  readonly RequestId: string;
}

interface NotificationsConfiguration {
  readonly LambdaFunctionArn: string;
  readonly SnsTopicArn: string;
  readonly SqsQueueArn: string;
}

interface ServiceUnavailableException {
  readonly Code: string;
  readonly Message: string;
  readonly RequestId: string;
  readonly RetryAfterSeconds: string;
}

interface StartMeetingTranscriptionRequest {
  readonly MeetingId: string;
  readonly TranscriptionConfiguration: TranscriptionConfiguration;
}

interface StopMeetingTranscriptionRequest {
  readonly MeetingId: string;
}

interface TranscriptionConfiguration {
  readonly EngineTranscribeSettings: EngineTranscribeSettings;
  readonly EngineTranscribeMedicalSettings: EngineTranscribeMedicalSettings;
}

interface UnauthorizedException {
  readonly Code: string;
  readonly Message: string;
  readonly RequestId: string;
}

interface UnprocessableEntityException {
  readonly Code: string;
  readonly Message: string;
  readonly RequestId: string;
}

