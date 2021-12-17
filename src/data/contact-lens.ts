/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface ListRealtimeContactAnalysisSegments {
  readonly InstanceId: string;
  readonly ContactId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}



interface AccessDeniedException {
  readonly Message: string;
}

interface Categories {
  readonly MatchedCategories: [];
  readonly MatchedDetails: {[key: string]: any};
}

interface CategoryDetails {
  readonly PointsOfInterest: [];
}

interface CharacterOffsets {
  readonly BeginOffsetChar: number;
  readonly EndOffsetChar: number;
}

interface InternalServiceException {
  readonly Message: string;
}

interface InvalidRequestException {
  readonly Message: string;
}

interface IssueDetected {
  readonly CharacterOffsets: CharacterOffsets;
}

interface ListRealtimeContactAnalysisSegmentsRequest {
  readonly InstanceId: string;
  readonly ContactId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListRealtimeContactAnalysisSegmentsResponse {
  readonly Segments: [];
  readonly NextToken: string;
}

interface PointOfInterest {
  readonly BeginOffsetMillis: number;
  readonly EndOffsetMillis: number;
}

interface RealtimeContactAnalysisSegment {
  readonly Transcript: Transcript;
  readonly Categories: Categories;
}

interface ResourceNotFoundException {
  readonly Message: string;
}

interface ThrottlingException {
  readonly Message: string;
}

interface Transcript {
  readonly Id: string;
  readonly ParticipantId: string;
  readonly ParticipantRole: string;
  readonly Content: string;
  readonly BeginOffsetMillis: number;
  readonly EndOffsetMillis: number;
  readonly Sentiment: string;
  readonly IssuesDetected: [];
}

