/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateParallelData {
  readonly Name: string;
  readonly Description?: string;
  readonly ParallelDataConfig: ParallelDataConfig;
  readonly EncryptionKey?: EncryptionKey;
  readonly ClientToken: string;
}
export interface DeleteParallelData {
  readonly Name: string;
}
export interface DeleteTerminology {
  readonly Name: string;
}
export interface DescribeTextTranslationJob {
  readonly JobId: string;
}
export interface GetParallelData {
  readonly Name: string;
}
export interface GetTerminology {
  readonly Name: string;
  readonly TerminologyDataFormat?: string;
}
export interface ImportTerminology {
  readonly Name: string;
  readonly MergeStrategy: string;
  readonly Description?: string;
  readonly TerminologyData: TerminologyData;
  readonly EncryptionKey?: EncryptionKey;
}
export interface ListParallelData {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListTerminologies {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListTextTranslationJobs {
  readonly Filter?: TextTranslationJobFilter;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface StartTextTranslationJob {
  readonly JobName?: string;
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly SourceLanguageCode: string;
  readonly TargetLanguageCodes: [];
  readonly TerminologyNames?: [];
  readonly ParallelDataNames?: [];
  readonly ClientToken: string;
  readonly Settings?: TranslationSettings;
}
export interface StopTextTranslationJob {
  readonly JobId: string;
}
export interface TranslateText {
  readonly Text: string;
  readonly TerminologyNames?: [];
  readonly SourceLanguageCode: string;
  readonly TargetLanguageCode: string;
  readonly Settings?: TranslationSettings;
}
export interface UpdateParallelData {
  readonly Name: string;
  readonly Description?: string;
  readonly ParallelDataConfig: ParallelDataConfig;
  readonly ClientToken: string;
}



interface AppliedTerminology {
  readonly Name: string;
  readonly Terms: [];
}

interface ConcurrentModificationException {
  readonly Message: string;
}

interface ConflictException {
  readonly Message: string;
}

interface CreateParallelDataRequest {
  readonly Name: string;
  readonly Description: string;
  readonly ParallelDataConfig: ParallelDataConfig;
  readonly EncryptionKey: EncryptionKey;
  readonly ClientToken: string;
}

interface CreateParallelDataResponse {
  readonly Name: string;
  readonly Status: string;
}

interface DeleteParallelDataRequest {
  readonly Name: string;
}

interface DeleteParallelDataResponse {
  readonly Name: string;
  readonly Status: string;
}

interface DeleteTerminologyRequest {
  readonly Name: string;
}

interface DescribeTextTranslationJobRequest {
  readonly JobId: string;
}

interface DescribeTextTranslationJobResponse {
  readonly TextTranslationJobProperties: TextTranslationJobProperties;
}

interface DetectedLanguageLowConfidenceException {
  readonly Message: string;
  readonly DetectedLanguageCode: string;
}

interface EncryptionKey {
  readonly Type: string;
  readonly Id: string;
}

interface GetParallelDataRequest {
  readonly Name: string;
}

interface GetParallelDataResponse {
  readonly ParallelDataProperties: ParallelDataProperties;
  readonly DataLocation: ParallelDataDataLocation;
  readonly AuxiliaryDataLocation: ParallelDataDataLocation;
  readonly LatestUpdateAttemptAuxiliaryDataLocation: ParallelDataDataLocation;
}

interface GetTerminologyRequest {
  readonly Name: string;
  readonly TerminologyDataFormat: string;
}

interface GetTerminologyResponse {
  readonly TerminologyProperties: TerminologyProperties;
  readonly TerminologyDataLocation: TerminologyDataLocation;
  readonly AuxiliaryDataLocation: TerminologyDataLocation;
}

interface ImportTerminologyRequest {
  readonly Name: string;
  readonly MergeStrategy: string;
  readonly Description: string;
  readonly TerminologyData: TerminologyData;
  readonly EncryptionKey: EncryptionKey;
}

interface ImportTerminologyResponse {
  readonly TerminologyProperties: TerminologyProperties;
  readonly AuxiliaryDataLocation: TerminologyDataLocation;
}

interface InputDataConfig {
  readonly S3Uri: string;
  readonly ContentType: string;
}

interface InternalServerException {
  readonly Message: string;
}

interface InvalidFilterException {
  readonly Message: string;
}

interface InvalidParameterValueException {
  readonly Message: string;
}

interface InvalidRequestException {
  readonly Message: string;
}

interface JobDetails {
  readonly TranslatedDocumentsCount: number;
  readonly DocumentsWithErrorsCount: number;
  readonly InputDocumentsCount: number;
}

interface LimitExceededException {
  readonly Message: string;
}

interface ListParallelDataRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListParallelDataResponse {
  readonly ParallelDataPropertiesList: [];
  readonly NextToken: string;
}

interface ListTerminologiesRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListTerminologiesResponse {
  readonly TerminologyPropertiesList: [];
  readonly NextToken: string;
}

interface ListTextTranslationJobsRequest {
  readonly Filter: TextTranslationJobFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListTextTranslationJobsResponse {
  readonly TextTranslationJobPropertiesList: [];
  readonly NextToken: string;
}

interface OutputDataConfig {
  readonly S3Uri: string;
  readonly EncryptionKey: EncryptionKey;
}

interface ParallelDataConfig {
  readonly S3Uri: string;
  readonly Format: string;
}

interface ParallelDataDataLocation {
  readonly RepositoryType: string;
  readonly Location: string;
}

interface ParallelDataProperties {
  readonly Name: string;
  readonly Arn: string;
  readonly Description: string;
  readonly Status: string;
  readonly SourceLanguageCode: string;
  readonly TargetLanguageCodes: [];
  readonly ParallelDataConfig: ParallelDataConfig;
  readonly Message: string;
  readonly ImportedDataSize: number;
  readonly ImportedRecordCount: number;
  readonly FailedRecordCount: number;
  readonly SkippedRecordCount: number;
  readonly EncryptionKey: EncryptionKey;
  readonly CreatedAt: Date;
  readonly LastUpdatedAt: Date;
  readonly LatestUpdateAttemptStatus: string;
  readonly LatestUpdateAttemptAt: Date;
}

interface ResourceNotFoundException {
  readonly Message: string;
}

interface ServiceUnavailableException {
  readonly Message: string;
}

interface StartTextTranslationJobRequest {
  readonly JobName: string;
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly SourceLanguageCode: string;
  readonly TargetLanguageCodes: [];
  readonly TerminologyNames: [];
  readonly ParallelDataNames: [];
  readonly ClientToken: string;
  readonly Settings: TranslationSettings;
}

interface StartTextTranslationJobResponse {
  readonly JobId: string;
  readonly JobStatus: string;
}

interface StopTextTranslationJobRequest {
  readonly JobId: string;
}

interface StopTextTranslationJobResponse {
  readonly JobId: string;
  readonly JobStatus: string;
}

interface Term {
  readonly SourceText: string;
  readonly TargetText: string;
}

interface TerminologyData {
  readonly File: unknown;
  readonly Format: string;
  readonly Directionality: string;
}

interface TerminologyDataLocation {
  readonly RepositoryType: string;
  readonly Location: string;
}

interface TerminologyProperties {
  readonly Name: string;
  readonly Description: string;
  readonly Arn: string;
  readonly SourceLanguageCode: string;
  readonly TargetLanguageCodes: [];
  readonly EncryptionKey: EncryptionKey;
  readonly SizeBytes: number;
  readonly TermCount: number;
  readonly CreatedAt: Date;
  readonly LastUpdatedAt: Date;
  readonly Directionality: string;
  readonly Message: string;
  readonly SkippedTermCount: number;
  readonly Format: string;
}

interface TextSizeLimitExceededException {
  readonly Message: string;
}

interface TextTranslationJobFilter {
  readonly JobName: string;
  readonly JobStatus: string;
  readonly SubmittedBeforeTime: Date;
  readonly SubmittedAfterTime: Date;
}

interface TextTranslationJobProperties {
  readonly JobId: string;
  readonly JobName: string;
  readonly JobStatus: string;
  readonly JobDetails: JobDetails;
  readonly SourceLanguageCode: string;
  readonly TargetLanguageCodes: [];
  readonly TerminologyNames: [];
  readonly ParallelDataNames: [];
  readonly Message: string;
  readonly SubmittedTime: Date;
  readonly EndTime: Date;
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly Settings: TranslationSettings;
}

interface TooManyRequestsException {
  readonly Message: string;
}

interface TranslateTextRequest {
  readonly Text: string;
  readonly TerminologyNames: [];
  readonly SourceLanguageCode: string;
  readonly TargetLanguageCode: string;
  readonly Settings: TranslationSettings;
}

interface TranslateTextResponse {
  readonly TranslatedText: string;
  readonly SourceLanguageCode: string;
  readonly TargetLanguageCode: string;
  readonly AppliedTerminologies: [];
  readonly AppliedSettings: TranslationSettings;
}

interface TranslationSettings {
  readonly Profanity: string;
}

interface UnsupportedLanguagePairException {
  readonly Message: string;
  readonly SourceLanguageCode: string;
  readonly TargetLanguageCode: string;
}

interface UpdateParallelDataRequest {
  readonly Name: string;
  readonly Description: string;
  readonly ParallelDataConfig: ParallelDataConfig;
  readonly ClientToken: string;
}

interface UpdateParallelDataResponse {
  readonly Name: string;
  readonly Status: string;
  readonly LatestUpdateAttemptStatus: string;
  readonly LatestUpdateAttemptAt: Date;
}

