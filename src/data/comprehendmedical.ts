/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface DescribeEntitiesDetectionV2Job {
  readonly JobId: string;
}
export interface DescribeICD10CMInferenceJob {
  readonly JobId: string;
}
export interface DescribePHIDetectionJob {
  readonly JobId: string;
}
export interface DescribeRxNormInferenceJob {
  readonly JobId: string;
}
export interface DescribeSNOMEDCTInferenceJob {
  readonly JobId: string;
}
export interface DetectEntities {
  readonly Text: string;
}
export interface DetectEntitiesV2 {
  readonly Text: string;
}
export interface DetectPHI {
  readonly Text: string;
}
export interface InferICD10CM {
  readonly Text: string;
}
export interface InferRxNorm {
  readonly Text: string;
}
export interface InferSNOMEDCT {
  readonly Text: string;
}
export interface ListEntitiesDetectionV2Jobs {
  readonly Filter: ComprehendMedicalAsyncJobFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListICD10CMInferenceJobs {
  readonly Filter: ComprehendMedicalAsyncJobFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListPHIDetectionJobs {
  readonly Filter: ComprehendMedicalAsyncJobFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListRxNormInferenceJobs {
  readonly Filter: ComprehendMedicalAsyncJobFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListSNOMEDCTInferenceJobs {
  readonly Filter: ComprehendMedicalAsyncJobFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface StartEntitiesDetectionV2Job {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName: string;
  readonly ClientRequestToken: string;
  readonly KMSKey: string;
  readonly LanguageCode: string;
}
export interface StartICD10CMInferenceJob {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName: string;
  readonly ClientRequestToken: string;
  readonly KMSKey: string;
  readonly LanguageCode: string;
}
export interface StartPHIDetectionJob {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName: string;
  readonly ClientRequestToken: string;
  readonly KMSKey: string;
  readonly LanguageCode: string;
}
export interface StartRxNormInferenceJob {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName: string;
  readonly ClientRequestToken: string;
  readonly KMSKey: string;
  readonly LanguageCode: string;
}
export interface StartSNOMEDCTInferenceJob {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName: string;
  readonly ClientRequestToken: string;
  readonly KMSKey: string;
  readonly LanguageCode: string;
}
export interface StopEntitiesDetectionV2Job {
  readonly JobId: string;
}
export interface StopICD10CMInferenceJob {
  readonly JobId: string;
}
export interface StopPHIDetectionJob {
  readonly JobId: string;
}
export interface StopRxNormInferenceJob {
  readonly JobId: string;
}
export interface StopSNOMEDCTInferenceJob {
  readonly JobId: string;
}



interface Attribute {
  readonly Type: string;
  readonly Score: unknown;
  readonly RelationshipScore: unknown;
  readonly RelationshipType: string;
  readonly Id: number;
  readonly BeginOffset: number;
  readonly EndOffset: number;
  readonly Text: string;
  readonly Category: string;
  readonly Traits: [];
}

interface Characters {
  readonly OriginalTextCharacters: number;
}

interface ComprehendMedicalAsyncJobFilter {
  readonly JobName: string;
  readonly JobStatus: string;
  readonly SubmitTimeBefore: Date;
  readonly SubmitTimeAfter: Date;
}

interface ComprehendMedicalAsyncJobProperties {
  readonly JobId: string;
  readonly JobName: string;
  readonly JobStatus: string;
  readonly Message: string;
  readonly SubmitTime: Date;
  readonly EndTime: Date;
  readonly ExpirationTime: Date;
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly LanguageCode: string;
  readonly DataAccessRoleArn: string;
  readonly ManifestFilePath: string;
  readonly KMSKey: string;
  readonly ModelVersion: string;
}

interface DescribeEntitiesDetectionV2JobRequest {
  readonly JobId: string;
}

interface DescribeEntitiesDetectionV2JobResponse {
  readonly ComprehendMedicalAsyncJobProperties: ComprehendMedicalAsyncJobProperties;
}

interface DescribeICD10CMInferenceJobRequest {
  readonly JobId: string;
}

interface DescribeICD10CMInferenceJobResponse {
  readonly ComprehendMedicalAsyncJobProperties: ComprehendMedicalAsyncJobProperties;
}

interface DescribePHIDetectionJobRequest {
  readonly JobId: string;
}

interface DescribePHIDetectionJobResponse {
  readonly ComprehendMedicalAsyncJobProperties: ComprehendMedicalAsyncJobProperties;
}

interface DescribeRxNormInferenceJobRequest {
  readonly JobId: string;
}

interface DescribeRxNormInferenceJobResponse {
  readonly ComprehendMedicalAsyncJobProperties: ComprehendMedicalAsyncJobProperties;
}

interface DescribeSNOMEDCTInferenceJobRequest {
  readonly JobId: string;
}

interface DescribeSNOMEDCTInferenceJobResponse {
  readonly ComprehendMedicalAsyncJobProperties: ComprehendMedicalAsyncJobProperties;
}

interface DetectEntitiesRequest {
  readonly Text: string;
}

interface DetectEntitiesResponse {
  readonly Entities: [];
  readonly UnmappedAttributes: [];
  readonly PaginationToken: string;
  readonly ModelVersion: string;
}

interface DetectEntitiesV2Request {
  readonly Text: string;
}

interface DetectEntitiesV2Response {
  readonly Entities: [];
  readonly UnmappedAttributes: [];
  readonly PaginationToken: string;
  readonly ModelVersion: string;
}

interface DetectPHIRequest {
  readonly Text: string;
}

interface DetectPHIResponse {
  readonly Entities: [];
  readonly PaginationToken: string;
  readonly ModelVersion: string;
}

interface Entity {
  readonly Id: number;
  readonly BeginOffset: number;
  readonly EndOffset: number;
  readonly Score: unknown;
  readonly Text: string;
  readonly Category: string;
  readonly Type: string;
  readonly Traits: [];
  readonly Attributes: [];
}

interface ICD10CMAttribute {
  readonly Type: string;
  readonly Score: unknown;
  readonly RelationshipScore: unknown;
  readonly Id: number;
  readonly BeginOffset: number;
  readonly EndOffset: number;
  readonly Text: string;
  readonly Traits: [];
  readonly Category: string;
  readonly RelationshipType: string;
}

interface ICD10CMConcept {
  readonly Description: string;
  readonly Code: string;
  readonly Score: unknown;
}

interface ICD10CMEntity {
  readonly Id: number;
  readonly Text: string;
  readonly Category: string;
  readonly Type: string;
  readonly Score: unknown;
  readonly BeginOffset: number;
  readonly EndOffset: number;
  readonly Attributes: [];
  readonly Traits: [];
  readonly ICD10CMConcepts: [];
}

interface ICD10CMTrait {
  readonly Name: string;
  readonly Score: unknown;
}

interface InferICD10CMRequest {
  readonly Text: string;
}

interface InferICD10CMResponse {
  readonly Entities: [];
  readonly PaginationToken: string;
  readonly ModelVersion: string;
}

interface InferRxNormRequest {
  readonly Text: string;
}

interface InferRxNormResponse {
  readonly Entities: [];
  readonly PaginationToken: string;
  readonly ModelVersion: string;
}

interface InferSNOMEDCTRequest {
  readonly Text: string;
}

interface InferSNOMEDCTResponse {
  readonly Entities: [];
  readonly PaginationToken: string;
  readonly ModelVersion: string;
  readonly SNOMEDCTDetails: SNOMEDCTDetails;
  readonly Characters: Characters;
}

interface InputDataConfig {
  readonly S3Bucket: string;
  readonly S3Key: string;
}

interface InternalServerException {
  readonly Message: string;
}

interface InvalidEncodingException {
  readonly Message: string;
}

interface InvalidRequestException {
  readonly Message: string;
}

interface ListEntitiesDetectionV2JobsRequest {
  readonly Filter: ComprehendMedicalAsyncJobFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListEntitiesDetectionV2JobsResponse {
  readonly ComprehendMedicalAsyncJobPropertiesList: [];
  readonly NextToken: string;
}

interface ListICD10CMInferenceJobsRequest {
  readonly Filter: ComprehendMedicalAsyncJobFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListICD10CMInferenceJobsResponse {
  readonly ComprehendMedicalAsyncJobPropertiesList: [];
  readonly NextToken: string;
}

interface ListPHIDetectionJobsRequest {
  readonly Filter: ComprehendMedicalAsyncJobFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListPHIDetectionJobsResponse {
  readonly ComprehendMedicalAsyncJobPropertiesList: [];
  readonly NextToken: string;
}

interface ListRxNormInferenceJobsRequest {
  readonly Filter: ComprehendMedicalAsyncJobFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListRxNormInferenceJobsResponse {
  readonly ComprehendMedicalAsyncJobPropertiesList: [];
  readonly NextToken: string;
}

interface ListSNOMEDCTInferenceJobsRequest {
  readonly Filter: ComprehendMedicalAsyncJobFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListSNOMEDCTInferenceJobsResponse {
  readonly ComprehendMedicalAsyncJobPropertiesList: [];
  readonly NextToken: string;
}

interface OutputDataConfig {
  readonly S3Bucket: string;
  readonly S3Key: string;
}

interface ResourceNotFoundException {
  readonly Message: string;
}

interface RxNormAttribute {
  readonly Type: string;
  readonly Score: unknown;
  readonly RelationshipScore: unknown;
  readonly Id: number;
  readonly BeginOffset: number;
  readonly EndOffset: number;
  readonly Text: string;
  readonly Traits: [];
}

interface RxNormConcept {
  readonly Description: string;
  readonly Code: string;
  readonly Score: unknown;
}

interface RxNormEntity {
  readonly Id: number;
  readonly Text: string;
  readonly Category: string;
  readonly Type: string;
  readonly Score: unknown;
  readonly BeginOffset: number;
  readonly EndOffset: number;
  readonly Attributes: [];
  readonly Traits: [];
  readonly RxNormConcepts: [];
}

interface RxNormTrait {
  readonly Name: string;
  readonly Score: unknown;
}

interface SNOMEDCTAttribute {
  readonly Category: string;
  readonly Type: string;
  readonly Score: unknown;
  readonly RelationshipScore: unknown;
  readonly RelationshipType: string;
  readonly Id: number;
  readonly BeginOffset: number;
  readonly EndOffset: number;
  readonly Text: string;
  readonly Traits: [];
  readonly SNOMEDCTConcepts: [];
}

interface SNOMEDCTConcept {
  readonly Description: string;
  readonly Code: string;
  readonly Score: unknown;
}

interface SNOMEDCTDetails {
  readonly Edition: string;
  readonly Language: string;
  readonly VersionDate: string;
}

interface SNOMEDCTEntity {
  readonly Id: number;
  readonly Text: string;
  readonly Category: string;
  readonly Type: string;
  readonly Score: unknown;
  readonly BeginOffset: number;
  readonly EndOffset: number;
  readonly Attributes: [];
  readonly Traits: [];
  readonly SNOMEDCTConcepts: [];
}

interface SNOMEDCTTrait {
  readonly Name: string;
  readonly Score: unknown;
}

interface ServiceUnavailableException {
  readonly Message: string;
}

interface StartEntitiesDetectionV2JobRequest {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName: string;
  readonly ClientRequestToken: string;
  readonly KMSKey: string;
  readonly LanguageCode: string;
}

interface StartEntitiesDetectionV2JobResponse {
  readonly JobId: string;
}

interface StartICD10CMInferenceJobRequest {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName: string;
  readonly ClientRequestToken: string;
  readonly KMSKey: string;
  readonly LanguageCode: string;
}

interface StartICD10CMInferenceJobResponse {
  readonly JobId: string;
}

interface StartPHIDetectionJobRequest {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName: string;
  readonly ClientRequestToken: string;
  readonly KMSKey: string;
  readonly LanguageCode: string;
}

interface StartPHIDetectionJobResponse {
  readonly JobId: string;
}

interface StartRxNormInferenceJobRequest {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName: string;
  readonly ClientRequestToken: string;
  readonly KMSKey: string;
  readonly LanguageCode: string;
}

interface StartRxNormInferenceJobResponse {
  readonly JobId: string;
}

interface StartSNOMEDCTInferenceJobRequest {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName: string;
  readonly ClientRequestToken: string;
  readonly KMSKey: string;
  readonly LanguageCode: string;
}

interface StartSNOMEDCTInferenceJobResponse {
  readonly JobId: string;
}

interface StopEntitiesDetectionV2JobRequest {
  readonly JobId: string;
}

interface StopEntitiesDetectionV2JobResponse {
  readonly JobId: string;
}

interface StopICD10CMInferenceJobRequest {
  readonly JobId: string;
}

interface StopICD10CMInferenceJobResponse {
  readonly JobId: string;
}

interface StopPHIDetectionJobRequest {
  readonly JobId: string;
}

interface StopPHIDetectionJobResponse {
  readonly JobId: string;
}

interface StopRxNormInferenceJobRequest {
  readonly JobId: string;
}

interface StopRxNormInferenceJobResponse {
  readonly JobId: string;
}

interface StopSNOMEDCTInferenceJobRequest {
  readonly JobId: string;
}

interface StopSNOMEDCTInferenceJobResponse {
  readonly JobId: string;
}

interface TextSizeLimitExceededException {
  readonly Message: string;
}

interface TooManyRequestsException {
  readonly Message: string;
}

interface Trait {
  readonly Name: string;
  readonly Score: unknown;
}

interface UnmappedAttribute {
  readonly Type: string;
  readonly Attribute: Attribute;
}

interface ValidationException {
  readonly Message: string;
}
