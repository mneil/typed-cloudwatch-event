/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface BatchGetRecord {
  readonly Identifiers: [];
}
export interface DeleteRecord {
  readonly FeatureGroupName: string;
  readonly RecordIdentifierValueAsString: string;
  readonly EventTime: string;
}
export interface GetRecord {
  readonly FeatureGroupName: string;
  readonly RecordIdentifierValueAsString: string;
  readonly FeatureNames: [];
}
export interface PutRecord {
  readonly FeatureGroupName: string;
  readonly Record: [];
}



interface AccessForbidden {
  readonly Message: string;
}

interface BatchGetRecordError {
  readonly FeatureGroupName: string;
  readonly RecordIdentifierValueAsString: string;
  readonly ErrorCode: string;
  readonly ErrorMessage: string;
}

interface BatchGetRecordIdentifier {
  readonly FeatureGroupName: string;
  readonly RecordIdentifiersValueAsString: [];
  readonly FeatureNames: [];
}

interface BatchGetRecordRequest {
  readonly Identifiers: [];
}

interface BatchGetRecordResponse {
  readonly Records: [];
  readonly Errors: [];
  readonly UnprocessedIdentifiers: [];
}

interface BatchGetRecordResultDetail {
  readonly FeatureGroupName: string;
  readonly RecordIdentifierValueAsString: string;
  readonly Record: [];
}

interface DeleteRecordRequest {
  readonly FeatureGroupName: string;
  readonly RecordIdentifierValueAsString: string;
  readonly EventTime: string;
}

interface FeatureValue {
  readonly FeatureName: string;
  readonly ValueAsString: string;
}

interface GetRecordRequest {
  readonly FeatureGroupName: string;
  readonly RecordIdentifierValueAsString: string;
  readonly FeatureNames: [];
}

interface GetRecordResponse {
  readonly Record: [];
}

interface InternalFailure {
  readonly Message: string;
}

interface PutRecordRequest {
  readonly FeatureGroupName: string;
  readonly Record: [];
}

interface ResourceNotFound {
  readonly Message: string;
}

interface ServiceUnavailable {
  readonly Message: string;
}

interface ValidationError {
  readonly Message: string;
}

