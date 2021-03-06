/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface BatchDetectDominantLanguage {
  readonly TextList: [];
}
export interface BatchDetectEntities {
  readonly TextList: [];
  readonly LanguageCode: string;
}
export interface BatchDetectKeyPhrases {
  readonly TextList: [];
  readonly LanguageCode: string;
}
export interface BatchDetectSentiment {
  readonly TextList: [];
  readonly LanguageCode: string;
}
export interface BatchDetectSyntax {
  readonly TextList: [];
  readonly LanguageCode: string;
}
export interface ClassifyDocument {
  readonly Text: string;
  readonly EndpointArn: string;
}
export interface ContainsPiiEntities {
  readonly Text: string;
  readonly LanguageCode: string;
}
export interface CreateDocumentClassifier {
  readonly DocumentClassifierName: string;
  readonly VersionName?: string;
  readonly DataAccessRoleArn: string;
  readonly Tags?: [];
  readonly InputDataConfig: DocumentClassifierInputDataConfig;
  readonly OutputDataConfig?: DocumentClassifierOutputDataConfig;
  readonly ClientRequestToken?: string;
  readonly LanguageCode: string;
  readonly VolumeKmsKeyId?: string;
  readonly VpcConfig?: VpcConfig;
  readonly Mode?: string;
  readonly ModelKmsKeyId?: string;
}
export interface CreateEndpoint {
  readonly EndpointName: string;
  readonly ModelArn: string;
  readonly DesiredInferenceUnits: number;
  readonly ClientRequestToken?: string;
  readonly Tags?: [];
  readonly DataAccessRoleArn?: string;
}
export interface CreateEntityRecognizer {
  readonly RecognizerName: string;
  readonly VersionName?: string;
  readonly DataAccessRoleArn: string;
  readonly Tags?: [];
  readonly InputDataConfig: EntityRecognizerInputDataConfig;
  readonly ClientRequestToken?: string;
  readonly LanguageCode: string;
  readonly VolumeKmsKeyId?: string;
  readonly VpcConfig?: VpcConfig;
  readonly ModelKmsKeyId?: string;
}
export interface DeleteDocumentClassifier {
  readonly DocumentClassifierArn: string;
}
export interface DeleteEndpoint {
  readonly EndpointArn: string;
}
export interface DeleteEntityRecognizer {
  readonly EntityRecognizerArn: string;
}
export interface DescribeDocumentClassificationJob {
  readonly JobId: string;
}
export interface DescribeDocumentClassifier {
  readonly DocumentClassifierArn: string;
}
export interface DescribeDominantLanguageDetectionJob {
  readonly JobId: string;
}
export interface DescribeEndpoint {
  readonly EndpointArn: string;
}
export interface DescribeEntitiesDetectionJob {
  readonly JobId: string;
}
export interface DescribeEntityRecognizer {
  readonly EntityRecognizerArn: string;
}
export interface DescribeEventsDetectionJob {
  readonly JobId: string;
}
export interface DescribeKeyPhrasesDetectionJob {
  readonly JobId: string;
}
export interface DescribePiiEntitiesDetectionJob {
  readonly JobId: string;
}
export interface DescribeSentimentDetectionJob {
  readonly JobId: string;
}
export interface DescribeTopicsDetectionJob {
  readonly JobId: string;
}
export interface DetectDominantLanguage {
  readonly Text: string;
}
export interface DetectEntities {
  readonly Text: string;
  readonly LanguageCode?: string;
  readonly EndpointArn?: string;
}
export interface DetectKeyPhrases {
  readonly Text: string;
  readonly LanguageCode: string;
}
export interface DetectPiiEntities {
  readonly Text: string;
  readonly LanguageCode: string;
}
export interface DetectSentiment {
  readonly Text: string;
  readonly LanguageCode: string;
}
export interface DetectSyntax {
  readonly Text: string;
  readonly LanguageCode: string;
}
export interface ListDocumentClassificationJobs {
  readonly Filter?: DocumentClassificationJobFilter;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListDocumentClassifierSummaries {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListDocumentClassifiers {
  readonly Filter?: DocumentClassifierFilter;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListDominantLanguageDetectionJobs {
  readonly Filter?: DominantLanguageDetectionJobFilter;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListEndpoints {
  readonly Filter?: EndpointFilter;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListEntitiesDetectionJobs {
  readonly Filter?: EntitiesDetectionJobFilter;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListEntityRecognizerSummaries {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListEntityRecognizers {
  readonly Filter?: EntityRecognizerFilter;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListEventsDetectionJobs {
  readonly Filter?: EventsDetectionJobFilter;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListKeyPhrasesDetectionJobs {
  readonly Filter?: KeyPhrasesDetectionJobFilter;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListPiiEntitiesDetectionJobs {
  readonly Filter?: PiiEntitiesDetectionJobFilter;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListSentimentDetectionJobs {
  readonly Filter?: SentimentDetectionJobFilter;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface ListTagsForResource {
  readonly ResourceArn: string;
}
export interface ListTopicsDetectionJobs {
  readonly Filter?: TopicsDetectionJobFilter;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface StartDocumentClassificationJob {
  readonly JobName?: string;
  readonly DocumentClassifierArn: string;
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly ClientRequestToken?: string;
  readonly VolumeKmsKeyId?: string;
  readonly VpcConfig?: VpcConfig;
  readonly Tags?: [];
}
export interface StartDominantLanguageDetectionJob {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName?: string;
  readonly ClientRequestToken?: string;
  readonly VolumeKmsKeyId?: string;
  readonly VpcConfig?: VpcConfig;
  readonly Tags?: [];
}
export interface StartEntitiesDetectionJob {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName?: string;
  readonly EntityRecognizerArn?: string;
  readonly LanguageCode: string;
  readonly ClientRequestToken?: string;
  readonly VolumeKmsKeyId?: string;
  readonly VpcConfig?: VpcConfig;
  readonly Tags?: [];
}
export interface StartEventsDetectionJob {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName?: string;
  readonly LanguageCode: string;
  readonly ClientRequestToken?: string;
  readonly TargetEventTypes: [];
  readonly Tags?: [];
}
export interface StartKeyPhrasesDetectionJob {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName?: string;
  readonly LanguageCode: string;
  readonly ClientRequestToken?: string;
  readonly VolumeKmsKeyId?: string;
  readonly VpcConfig?: VpcConfig;
  readonly Tags?: [];
}
export interface StartPiiEntitiesDetectionJob {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly Mode: string;
  readonly RedactionConfig?: RedactionConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName?: string;
  readonly LanguageCode: string;
  readonly ClientRequestToken?: string;
  readonly Tags?: [];
}
export interface StartSentimentDetectionJob {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName?: string;
  readonly LanguageCode: string;
  readonly ClientRequestToken?: string;
  readonly VolumeKmsKeyId?: string;
  readonly VpcConfig?: VpcConfig;
  readonly Tags?: [];
}
export interface StartTopicsDetectionJob {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName?: string;
  readonly NumberOfTopics?: number;
  readonly ClientRequestToken?: string;
  readonly VolumeKmsKeyId?: string;
  readonly VpcConfig?: VpcConfig;
  readonly Tags?: [];
}
export interface StopDominantLanguageDetectionJob {
  readonly JobId: string;
}
export interface StopEntitiesDetectionJob {
  readonly JobId: string;
}
export interface StopEventsDetectionJob {
  readonly JobId: string;
}
export interface StopKeyPhrasesDetectionJob {
  readonly JobId: string;
}
export interface StopPiiEntitiesDetectionJob {
  readonly JobId: string;
}
export interface StopSentimentDetectionJob {
  readonly JobId: string;
}
export interface StopTrainingDocumentClassifier {
  readonly DocumentClassifierArn: string;
}
export interface StopTrainingEntityRecognizer {
  readonly EntityRecognizerArn: string;
}
export interface TagResource {
  readonly ResourceArn: string;
  readonly Tags: [];
}
export interface UntagResource {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}
export interface UpdateEndpoint {
  readonly EndpointArn: string;
  readonly DesiredModelArn?: string;
  readonly DesiredInferenceUnits?: number;
  readonly DesiredDataAccessRoleArn?: string;
}



interface AugmentedManifestsListItem {
  readonly S3Uri: string;
  readonly Split: string;
  readonly AttributeNames: [];
  readonly AnnotationDataS3Uri: string;
  readonly SourceDocumentsS3Uri: string;
  readonly DocumentType: string;
}

interface BatchDetectDominantLanguageItemResult {
  readonly Index: number;
  readonly Languages: [];
}

interface BatchDetectDominantLanguageRequest {
  readonly TextList: [];
}

interface BatchDetectDominantLanguageResponse {
  readonly ResultList: [];
  readonly ErrorList: [];
}

interface BatchDetectEntitiesItemResult {
  readonly Index: number;
  readonly Entities: [];
}

interface BatchDetectEntitiesRequest {
  readonly TextList: [];
  readonly LanguageCode: string;
}

interface BatchDetectEntitiesResponse {
  readonly ResultList: [];
  readonly ErrorList: [];
}

interface BatchDetectKeyPhrasesItemResult {
  readonly Index: number;
  readonly KeyPhrases: [];
}

interface BatchDetectKeyPhrasesRequest {
  readonly TextList: [];
  readonly LanguageCode: string;
}

interface BatchDetectKeyPhrasesResponse {
  readonly ResultList: [];
  readonly ErrorList: [];
}

interface BatchDetectSentimentItemResult {
  readonly Index: number;
  readonly Sentiment: string;
  readonly SentimentScore: SentimentScore;
}

interface BatchDetectSentimentRequest {
  readonly TextList: [];
  readonly LanguageCode: string;
}

interface BatchDetectSentimentResponse {
  readonly ResultList: [];
  readonly ErrorList: [];
}

interface BatchDetectSyntaxItemResult {
  readonly Index: number;
  readonly SyntaxTokens: [];
}

interface BatchDetectSyntaxRequest {
  readonly TextList: [];
  readonly LanguageCode: string;
}

interface BatchDetectSyntaxResponse {
  readonly ResultList: [];
  readonly ErrorList: [];
}

interface BatchItemError {
  readonly Index: number;
  readonly ErrorCode: string;
  readonly ErrorMessage: string;
}

interface BatchSizeLimitExceededException {
  readonly Message: string;
}

interface ClassifierEvaluationMetrics {
  readonly Accuracy: unknown;
  readonly Precision: unknown;
  readonly Recall: unknown;
  readonly F1Score: unknown;
  readonly MicroPrecision: unknown;
  readonly MicroRecall: unknown;
  readonly MicroF1Score: unknown;
  readonly HammingLoss: unknown;
}

interface ClassifierMetadata {
  readonly NumberOfLabels: number;
  readonly NumberOfTrainedDocuments: number;
  readonly NumberOfTestDocuments: number;
  readonly EvaluationMetrics: ClassifierEvaluationMetrics;
}

interface ClassifyDocumentRequest {
  readonly Text: string;
  readonly EndpointArn: string;
}

interface ClassifyDocumentResponse {
  readonly Classes: [];
  readonly Labels: [];
}

interface ConcurrentModificationException {
  readonly Message: string;
}

interface ContainsPiiEntitiesRequest {
  readonly Text: string;
  readonly LanguageCode: string;
}

interface ContainsPiiEntitiesResponse {
  readonly Labels: [];
}

interface CreateDocumentClassifierRequest {
  readonly DocumentClassifierName: string;
  readonly VersionName: string;
  readonly DataAccessRoleArn: string;
  readonly Tags: [];
  readonly InputDataConfig: DocumentClassifierInputDataConfig;
  readonly OutputDataConfig: DocumentClassifierOutputDataConfig;
  readonly ClientRequestToken: string;
  readonly LanguageCode: string;
  readonly VolumeKmsKeyId: string;
  readonly VpcConfig: VpcConfig;
  readonly Mode: string;
  readonly ModelKmsKeyId: string;
}

interface CreateDocumentClassifierResponse {
  readonly DocumentClassifierArn: string;
}

interface CreateEndpointRequest {
  readonly EndpointName: string;
  readonly ModelArn: string;
  readonly DesiredInferenceUnits: number;
  readonly ClientRequestToken: string;
  readonly Tags: [];
  readonly DataAccessRoleArn: string;
}

interface CreateEndpointResponse {
  readonly EndpointArn: string;
}

interface CreateEntityRecognizerRequest {
  readonly RecognizerName: string;
  readonly VersionName: string;
  readonly DataAccessRoleArn: string;
  readonly Tags: [];
  readonly InputDataConfig: EntityRecognizerInputDataConfig;
  readonly ClientRequestToken: string;
  readonly LanguageCode: string;
  readonly VolumeKmsKeyId: string;
  readonly VpcConfig: VpcConfig;
  readonly ModelKmsKeyId: string;
}

interface CreateEntityRecognizerResponse {
  readonly EntityRecognizerArn: string;
}

interface DeleteDocumentClassifierRequest {
  readonly DocumentClassifierArn: string;
}

interface DeleteDocumentClassifierResponse {
}

interface DeleteEndpointRequest {
  readonly EndpointArn: string;
}

interface DeleteEndpointResponse {
}

interface DeleteEntityRecognizerRequest {
  readonly EntityRecognizerArn: string;
}

interface DeleteEntityRecognizerResponse {
}

interface DescribeDocumentClassificationJobRequest {
  readonly JobId: string;
}

interface DescribeDocumentClassificationJobResponse {
  readonly DocumentClassificationJobProperties: DocumentClassificationJobProperties;
}

interface DescribeDocumentClassifierRequest {
  readonly DocumentClassifierArn: string;
}

interface DescribeDocumentClassifierResponse {
  readonly DocumentClassifierProperties: DocumentClassifierProperties;
}

interface DescribeDominantLanguageDetectionJobRequest {
  readonly JobId: string;
}

interface DescribeDominantLanguageDetectionJobResponse {
  readonly DominantLanguageDetectionJobProperties: DominantLanguageDetectionJobProperties;
}

interface DescribeEndpointRequest {
  readonly EndpointArn: string;
}

interface DescribeEndpointResponse {
  readonly EndpointProperties: EndpointProperties;
}

interface DescribeEntitiesDetectionJobRequest {
  readonly JobId: string;
}

interface DescribeEntitiesDetectionJobResponse {
  readonly EntitiesDetectionJobProperties: EntitiesDetectionJobProperties;
}

interface DescribeEntityRecognizerRequest {
  readonly EntityRecognizerArn: string;
}

interface DescribeEntityRecognizerResponse {
  readonly EntityRecognizerProperties: EntityRecognizerProperties;
}

interface DescribeEventsDetectionJobRequest {
  readonly JobId: string;
}

interface DescribeEventsDetectionJobResponse {
  readonly EventsDetectionJobProperties: EventsDetectionJobProperties;
}

interface DescribeKeyPhrasesDetectionJobRequest {
  readonly JobId: string;
}

interface DescribeKeyPhrasesDetectionJobResponse {
  readonly KeyPhrasesDetectionJobProperties: KeyPhrasesDetectionJobProperties;
}

interface DescribePiiEntitiesDetectionJobRequest {
  readonly JobId: string;
}

interface DescribePiiEntitiesDetectionJobResponse {
  readonly PiiEntitiesDetectionJobProperties: PiiEntitiesDetectionJobProperties;
}

interface DescribeSentimentDetectionJobRequest {
  readonly JobId: string;
}

interface DescribeSentimentDetectionJobResponse {
  readonly SentimentDetectionJobProperties: SentimentDetectionJobProperties;
}

interface DescribeTopicsDetectionJobRequest {
  readonly JobId: string;
}

interface DescribeTopicsDetectionJobResponse {
  readonly TopicsDetectionJobProperties: TopicsDetectionJobProperties;
}

interface DetectDominantLanguageRequest {
  readonly Text: string;
}

interface DetectDominantLanguageResponse {
  readonly Languages: [];
}

interface DetectEntitiesRequest {
  readonly Text: string;
  readonly LanguageCode: string;
  readonly EndpointArn: string;
}

interface DetectEntitiesResponse {
  readonly Entities: [];
}

interface DetectKeyPhrasesRequest {
  readonly Text: string;
  readonly LanguageCode: string;
}

interface DetectKeyPhrasesResponse {
  readonly KeyPhrases: [];
}

interface DetectPiiEntitiesRequest {
  readonly Text: string;
  readonly LanguageCode: string;
}

interface DetectPiiEntitiesResponse {
  readonly Entities: [];
}

interface DetectSentimentRequest {
  readonly Text: string;
  readonly LanguageCode: string;
}

interface DetectSentimentResponse {
  readonly Sentiment: string;
  readonly SentimentScore: SentimentScore;
}

interface DetectSyntaxRequest {
  readonly Text: string;
  readonly LanguageCode: string;
}

interface DetectSyntaxResponse {
  readonly SyntaxTokens: [];
}

interface DocumentClass {
  readonly Name: string;
  readonly Score: unknown;
}

interface DocumentClassificationJobFilter {
  readonly JobName: string;
  readonly JobStatus: string;
  readonly SubmitTimeBefore: Date;
  readonly SubmitTimeAfter: Date;
}

interface DocumentClassificationJobProperties {
  readonly JobId: string;
  readonly JobArn: string;
  readonly JobName: string;
  readonly JobStatus: string;
  readonly Message: string;
  readonly SubmitTime: Date;
  readonly EndTime: Date;
  readonly DocumentClassifierArn: string;
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly VolumeKmsKeyId: string;
  readonly VpcConfig: VpcConfig;
}

interface DocumentClassifierFilter {
  readonly Status: string;
  readonly DocumentClassifierName: string;
  readonly SubmitTimeBefore: Date;
  readonly SubmitTimeAfter: Date;
}

interface DocumentClassifierInputDataConfig {
  readonly DataFormat: string;
  readonly S3Uri: string;
  readonly TestS3Uri: string;
  readonly LabelDelimiter: string;
  readonly AugmentedManifests: [];
}

interface DocumentClassifierOutputDataConfig {
  readonly S3Uri: string;
  readonly KmsKeyId: string;
}

interface DocumentClassifierProperties {
  readonly DocumentClassifierArn: string;
  readonly LanguageCode: string;
  readonly Status: string;
  readonly Message: string;
  readonly SubmitTime: Date;
  readonly EndTime: Date;
  readonly TrainingStartTime: Date;
  readonly TrainingEndTime: Date;
  readonly InputDataConfig: DocumentClassifierInputDataConfig;
  readonly OutputDataConfig: DocumentClassifierOutputDataConfig;
  readonly ClassifierMetadata: ClassifierMetadata;
  readonly DataAccessRoleArn: string;
  readonly VolumeKmsKeyId: string;
  readonly VpcConfig: VpcConfig;
  readonly Mode: string;
  readonly ModelKmsKeyId: string;
  readonly VersionName: string;
}

interface DocumentClassifierSummary {
  readonly DocumentClassifierName: string;
  readonly NumberOfVersions: number;
  readonly LatestVersionCreatedAt: Date;
  readonly LatestVersionName: string;
  readonly LatestVersionStatus: string;
}

interface DocumentLabel {
  readonly Name: string;
  readonly Score: unknown;
}

interface DocumentReaderConfig {
  readonly DocumentReadAction: string;
  readonly DocumentReadMode: string;
  readonly FeatureTypes: [];
}

interface DominantLanguage {
  readonly LanguageCode: string;
  readonly Score: unknown;
}

interface DominantLanguageDetectionJobFilter {
  readonly JobName: string;
  readonly JobStatus: string;
  readonly SubmitTimeBefore: Date;
  readonly SubmitTimeAfter: Date;
}

interface DominantLanguageDetectionJobProperties {
  readonly JobId: string;
  readonly JobArn: string;
  readonly JobName: string;
  readonly JobStatus: string;
  readonly Message: string;
  readonly SubmitTime: Date;
  readonly EndTime: Date;
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly VolumeKmsKeyId: string;
  readonly VpcConfig: VpcConfig;
}

interface EndpointFilter {
  readonly ModelArn: string;
  readonly Status: string;
  readonly CreationTimeBefore: Date;
  readonly CreationTimeAfter: Date;
}

interface EndpointProperties {
  readonly EndpointArn: string;
  readonly Status: string;
  readonly Message: string;
  readonly ModelArn: string;
  readonly DesiredModelArn: string;
  readonly DesiredInferenceUnits: number;
  readonly CurrentInferenceUnits: number;
  readonly CreationTime: Date;
  readonly LastModifiedTime: Date;
  readonly DataAccessRoleArn: string;
  readonly DesiredDataAccessRoleArn: string;
}

interface EntitiesDetectionJobFilter {
  readonly JobName: string;
  readonly JobStatus: string;
  readonly SubmitTimeBefore: Date;
  readonly SubmitTimeAfter: Date;
}

interface EntitiesDetectionJobProperties {
  readonly JobId: string;
  readonly JobArn: string;
  readonly JobName: string;
  readonly JobStatus: string;
  readonly Message: string;
  readonly SubmitTime: Date;
  readonly EndTime: Date;
  readonly EntityRecognizerArn: string;
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly LanguageCode: string;
  readonly DataAccessRoleArn: string;
  readonly VolumeKmsKeyId: string;
  readonly VpcConfig: VpcConfig;
}

interface Entity {
  readonly Score: unknown;
  readonly Type: string;
  readonly Text: string;
  readonly BeginOffset: number;
  readonly EndOffset: number;
}

interface EntityLabel {
  readonly Name: string;
  readonly Score: unknown;
}

interface EntityRecognizerAnnotations {
  readonly S3Uri: string;
  readonly TestS3Uri: string;
}

interface EntityRecognizerDocuments {
  readonly S3Uri: string;
  readonly TestS3Uri: string;
  readonly InputFormat: string;
}

interface EntityRecognizerEntityList {
  readonly S3Uri: string;
}

interface EntityRecognizerEvaluationMetrics {
  readonly Precision: unknown;
  readonly Recall: unknown;
  readonly F1Score: unknown;
}

interface EntityRecognizerFilter {
  readonly Status: string;
  readonly RecognizerName: string;
  readonly SubmitTimeBefore: Date;
  readonly SubmitTimeAfter: Date;
}

interface EntityRecognizerInputDataConfig {
  readonly DataFormat: string;
  readonly EntityTypes: [];
  readonly Documents: EntityRecognizerDocuments;
  readonly Annotations: EntityRecognizerAnnotations;
  readonly EntityList: EntityRecognizerEntityList;
  readonly AugmentedManifests: [];
}

interface EntityRecognizerMetadata {
  readonly NumberOfTrainedDocuments: number;
  readonly NumberOfTestDocuments: number;
  readonly EvaluationMetrics: EntityRecognizerEvaluationMetrics;
  readonly EntityTypes: [];
}

interface EntityRecognizerMetadataEntityTypesListItem {
  readonly Type: string;
  readonly EvaluationMetrics: EntityTypesEvaluationMetrics;
  readonly NumberOfTrainMentions: number;
}

interface EntityRecognizerProperties {
  readonly EntityRecognizerArn: string;
  readonly LanguageCode: string;
  readonly Status: string;
  readonly Message: string;
  readonly SubmitTime: Date;
  readonly EndTime: Date;
  readonly TrainingStartTime: Date;
  readonly TrainingEndTime: Date;
  readonly InputDataConfig: EntityRecognizerInputDataConfig;
  readonly RecognizerMetadata: EntityRecognizerMetadata;
  readonly DataAccessRoleArn: string;
  readonly VolumeKmsKeyId: string;
  readonly VpcConfig: VpcConfig;
  readonly ModelKmsKeyId: string;
  readonly VersionName: string;
}

interface EntityRecognizerSummary {
  readonly RecognizerName: string;
  readonly NumberOfVersions: number;
  readonly LatestVersionCreatedAt: Date;
  readonly LatestVersionName: string;
  readonly LatestVersionStatus: string;
}

interface EntityTypesEvaluationMetrics {
  readonly Precision: unknown;
  readonly Recall: unknown;
  readonly F1Score: unknown;
}

interface EntityTypesListItem {
  readonly Type: string;
}

interface EventsDetectionJobFilter {
  readonly JobName: string;
  readonly JobStatus: string;
  readonly SubmitTimeBefore: Date;
  readonly SubmitTimeAfter: Date;
}

interface EventsDetectionJobProperties {
  readonly JobId: string;
  readonly JobArn: string;
  readonly JobName: string;
  readonly JobStatus: string;
  readonly Message: string;
  readonly SubmitTime: Date;
  readonly EndTime: Date;
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly LanguageCode: string;
  readonly DataAccessRoleArn: string;
  readonly TargetEventTypes: [];
}

interface InputDataConfig {
  readonly S3Uri: string;
  readonly InputFormat: string;
  readonly DocumentReaderConfig: DocumentReaderConfig;
}

interface InternalServerException {
  readonly Message: string;
}

interface InvalidFilterException {
  readonly Message: string;
}

interface InvalidRequestException {
  readonly Message: string;
}

interface JobNotFoundException {
  readonly Message: string;
}

interface KeyPhrase {
  readonly Score: unknown;
  readonly Text: string;
  readonly BeginOffset: number;
  readonly EndOffset: number;
}

interface KeyPhrasesDetectionJobFilter {
  readonly JobName: string;
  readonly JobStatus: string;
  readonly SubmitTimeBefore: Date;
  readonly SubmitTimeAfter: Date;
}

interface KeyPhrasesDetectionJobProperties {
  readonly JobId: string;
  readonly JobArn: string;
  readonly JobName: string;
  readonly JobStatus: string;
  readonly Message: string;
  readonly SubmitTime: Date;
  readonly EndTime: Date;
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly LanguageCode: string;
  readonly DataAccessRoleArn: string;
  readonly VolumeKmsKeyId: string;
  readonly VpcConfig: VpcConfig;
}

interface KmsKeyValidationException {
  readonly Message: string;
}

interface ListDocumentClassificationJobsRequest {
  readonly Filter: DocumentClassificationJobFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListDocumentClassificationJobsResponse {
  readonly DocumentClassificationJobPropertiesList: [];
  readonly NextToken: string;
}

interface ListDocumentClassifierSummariesRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListDocumentClassifierSummariesResponse {
  readonly DocumentClassifierSummariesList: [];
  readonly NextToken: string;
}

interface ListDocumentClassifiersRequest {
  readonly Filter: DocumentClassifierFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListDocumentClassifiersResponse {
  readonly DocumentClassifierPropertiesList: [];
  readonly NextToken: string;
}

interface ListDominantLanguageDetectionJobsRequest {
  readonly Filter: DominantLanguageDetectionJobFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListDominantLanguageDetectionJobsResponse {
  readonly DominantLanguageDetectionJobPropertiesList: [];
  readonly NextToken: string;
}

interface ListEndpointsRequest {
  readonly Filter: EndpointFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListEndpointsResponse {
  readonly EndpointPropertiesList: [];
  readonly NextToken: string;
}

interface ListEntitiesDetectionJobsRequest {
  readonly Filter: EntitiesDetectionJobFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListEntitiesDetectionJobsResponse {
  readonly EntitiesDetectionJobPropertiesList: [];
  readonly NextToken: string;
}

interface ListEntityRecognizerSummariesRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListEntityRecognizerSummariesResponse {
  readonly EntityRecognizerSummariesList: [];
  readonly NextToken: string;
}

interface ListEntityRecognizersRequest {
  readonly Filter: EntityRecognizerFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListEntityRecognizersResponse {
  readonly EntityRecognizerPropertiesList: [];
  readonly NextToken: string;
}

interface ListEventsDetectionJobsRequest {
  readonly Filter: EventsDetectionJobFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListEventsDetectionJobsResponse {
  readonly EventsDetectionJobPropertiesList: [];
  readonly NextToken: string;
}

interface ListKeyPhrasesDetectionJobsRequest {
  readonly Filter: KeyPhrasesDetectionJobFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListKeyPhrasesDetectionJobsResponse {
  readonly KeyPhrasesDetectionJobPropertiesList: [];
  readonly NextToken: string;
}

interface ListPiiEntitiesDetectionJobsRequest {
  readonly Filter: PiiEntitiesDetectionJobFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListPiiEntitiesDetectionJobsResponse {
  readonly PiiEntitiesDetectionJobPropertiesList: [];
  readonly NextToken: string;
}

interface ListSentimentDetectionJobsRequest {
  readonly Filter: SentimentDetectionJobFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListSentimentDetectionJobsResponse {
  readonly SentimentDetectionJobPropertiesList: [];
  readonly NextToken: string;
}

interface ListTagsForResourceRequest {
  readonly ResourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly ResourceArn: string;
  readonly Tags: [];
}

interface ListTopicsDetectionJobsRequest {
  readonly Filter: TopicsDetectionJobFilter;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListTopicsDetectionJobsResponse {
  readonly TopicsDetectionJobPropertiesList: [];
  readonly NextToken: string;
}

interface OutputDataConfig {
  readonly S3Uri: string;
  readonly KmsKeyId: string;
}

interface PartOfSpeechTag {
  readonly Tag: string;
  readonly Score: unknown;
}

interface PiiEntitiesDetectionJobFilter {
  readonly JobName: string;
  readonly JobStatus: string;
  readonly SubmitTimeBefore: Date;
  readonly SubmitTimeAfter: Date;
}

interface PiiEntitiesDetectionJobProperties {
  readonly JobId: string;
  readonly JobArn: string;
  readonly JobName: string;
  readonly JobStatus: string;
  readonly Message: string;
  readonly SubmitTime: Date;
  readonly EndTime: Date;
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: PiiOutputDataConfig;
  readonly RedactionConfig: RedactionConfig;
  readonly LanguageCode: string;
  readonly DataAccessRoleArn: string;
  readonly Mode: string;
}

interface PiiEntity {
  readonly Score: unknown;
  readonly Type: string;
  readonly BeginOffset: number;
  readonly EndOffset: number;
}

interface PiiOutputDataConfig {
  readonly S3Uri: string;
  readonly KmsKeyId: string;
}

interface RedactionConfig {
  readonly PiiEntityTypes: [];
  readonly MaskMode: string;
  readonly MaskCharacter: string;
}

interface ResourceInUseException {
  readonly Message: string;
}

interface ResourceLimitExceededException {
  readonly Message: string;
}

interface ResourceNotFoundException {
  readonly Message: string;
}

interface ResourceUnavailableException {
  readonly Message: string;
}

interface SentimentDetectionJobFilter {
  readonly JobName: string;
  readonly JobStatus: string;
  readonly SubmitTimeBefore: Date;
  readonly SubmitTimeAfter: Date;
}

interface SentimentDetectionJobProperties {
  readonly JobId: string;
  readonly JobArn: string;
  readonly JobName: string;
  readonly JobStatus: string;
  readonly Message: string;
  readonly SubmitTime: Date;
  readonly EndTime: Date;
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly LanguageCode: string;
  readonly DataAccessRoleArn: string;
  readonly VolumeKmsKeyId: string;
  readonly VpcConfig: VpcConfig;
}

interface SentimentScore {
  readonly Positive: unknown;
  readonly Negative: unknown;
  readonly Neutral: unknown;
  readonly Mixed: unknown;
}

interface StartDocumentClassificationJobRequest {
  readonly JobName: string;
  readonly DocumentClassifierArn: string;
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly ClientRequestToken: string;
  readonly VolumeKmsKeyId: string;
  readonly VpcConfig: VpcConfig;
  readonly Tags: [];
}

interface StartDocumentClassificationJobResponse {
  readonly JobId: string;
  readonly JobArn: string;
  readonly JobStatus: string;
}

interface StartDominantLanguageDetectionJobRequest {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName: string;
  readonly ClientRequestToken: string;
  readonly VolumeKmsKeyId: string;
  readonly VpcConfig: VpcConfig;
  readonly Tags: [];
}

interface StartDominantLanguageDetectionJobResponse {
  readonly JobId: string;
  readonly JobArn: string;
  readonly JobStatus: string;
}

interface StartEntitiesDetectionJobRequest {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName: string;
  readonly EntityRecognizerArn: string;
  readonly LanguageCode: string;
  readonly ClientRequestToken: string;
  readonly VolumeKmsKeyId: string;
  readonly VpcConfig: VpcConfig;
  readonly Tags: [];
}

interface StartEntitiesDetectionJobResponse {
  readonly JobId: string;
  readonly JobArn: string;
  readonly JobStatus: string;
}

interface StartEventsDetectionJobRequest {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName: string;
  readonly LanguageCode: string;
  readonly ClientRequestToken: string;
  readonly TargetEventTypes: [];
  readonly Tags: [];
}

interface StartEventsDetectionJobResponse {
  readonly JobId: string;
  readonly JobArn: string;
  readonly JobStatus: string;
}

interface StartKeyPhrasesDetectionJobRequest {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName: string;
  readonly LanguageCode: string;
  readonly ClientRequestToken: string;
  readonly VolumeKmsKeyId: string;
  readonly VpcConfig: VpcConfig;
  readonly Tags: [];
}

interface StartKeyPhrasesDetectionJobResponse {
  readonly JobId: string;
  readonly JobArn: string;
  readonly JobStatus: string;
}

interface StartPiiEntitiesDetectionJobRequest {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly Mode: string;
  readonly RedactionConfig: RedactionConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName: string;
  readonly LanguageCode: string;
  readonly ClientRequestToken: string;
  readonly Tags: [];
}

interface StartPiiEntitiesDetectionJobResponse {
  readonly JobId: string;
  readonly JobArn: string;
  readonly JobStatus: string;
}

interface StartSentimentDetectionJobRequest {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName: string;
  readonly LanguageCode: string;
  readonly ClientRequestToken: string;
  readonly VolumeKmsKeyId: string;
  readonly VpcConfig: VpcConfig;
  readonly Tags: [];
}

interface StartSentimentDetectionJobResponse {
  readonly JobId: string;
  readonly JobArn: string;
  readonly JobStatus: string;
}

interface StartTopicsDetectionJobRequest {
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly DataAccessRoleArn: string;
  readonly JobName: string;
  readonly NumberOfTopics: number;
  readonly ClientRequestToken: string;
  readonly VolumeKmsKeyId: string;
  readonly VpcConfig: VpcConfig;
  readonly Tags: [];
}

interface StartTopicsDetectionJobResponse {
  readonly JobId: string;
  readonly JobArn: string;
  readonly JobStatus: string;
}

interface StopDominantLanguageDetectionJobRequest {
  readonly JobId: string;
}

interface StopDominantLanguageDetectionJobResponse {
  readonly JobId: string;
  readonly JobStatus: string;
}

interface StopEntitiesDetectionJobRequest {
  readonly JobId: string;
}

interface StopEntitiesDetectionJobResponse {
  readonly JobId: string;
  readonly JobStatus: string;
}

interface StopEventsDetectionJobRequest {
  readonly JobId: string;
}

interface StopEventsDetectionJobResponse {
  readonly JobId: string;
  readonly JobStatus: string;
}

interface StopKeyPhrasesDetectionJobRequest {
  readonly JobId: string;
}

interface StopKeyPhrasesDetectionJobResponse {
  readonly JobId: string;
  readonly JobStatus: string;
}

interface StopPiiEntitiesDetectionJobRequest {
  readonly JobId: string;
}

interface StopPiiEntitiesDetectionJobResponse {
  readonly JobId: string;
  readonly JobStatus: string;
}

interface StopSentimentDetectionJobRequest {
  readonly JobId: string;
}

interface StopSentimentDetectionJobResponse {
  readonly JobId: string;
  readonly JobStatus: string;
}

interface StopTrainingDocumentClassifierRequest {
  readonly DocumentClassifierArn: string;
}

interface StopTrainingDocumentClassifierResponse {
}

interface StopTrainingEntityRecognizerRequest {
  readonly EntityRecognizerArn: string;
}

interface StopTrainingEntityRecognizerResponse {
}

interface SyntaxToken {
  readonly TokenId: number;
  readonly Text: string;
  readonly BeginOffset: number;
  readonly EndOffset: number;
  readonly PartOfSpeech: PartOfSpeechTag;
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}

interface TagResourceRequest {
  readonly ResourceArn: string;
  readonly Tags: [];
}

interface TagResourceResponse {
}

interface TextSizeLimitExceededException {
  readonly Message: string;
}

interface TooManyRequestsException {
  readonly Message: string;
}

interface TooManyTagKeysException {
  readonly Message: string;
}

interface TooManyTagsException {
  readonly Message: string;
}

interface TopicsDetectionJobFilter {
  readonly JobName: string;
  readonly JobStatus: string;
  readonly SubmitTimeBefore: Date;
  readonly SubmitTimeAfter: Date;
}

interface TopicsDetectionJobProperties {
  readonly JobId: string;
  readonly JobArn: string;
  readonly JobName: string;
  readonly JobStatus: string;
  readonly Message: string;
  readonly SubmitTime: Date;
  readonly EndTime: Date;
  readonly InputDataConfig: InputDataConfig;
  readonly OutputDataConfig: OutputDataConfig;
  readonly NumberOfTopics: number;
  readonly DataAccessRoleArn: string;
  readonly VolumeKmsKeyId: string;
  readonly VpcConfig: VpcConfig;
}

interface UnsupportedLanguageException {
  readonly Message: string;
}

interface UntagResourceRequest {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

interface UntagResourceResponse {
}

interface UpdateEndpointRequest {
  readonly EndpointArn: string;
  readonly DesiredModelArn: string;
  readonly DesiredInferenceUnits: number;
  readonly DesiredDataAccessRoleArn: string;
}

interface UpdateEndpointResponse {
}

interface VpcConfig {
  readonly SecurityGroupIds: [];
  readonly Subnets: [];
}

