/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CompareFaces {
  readonly SourceImage: Image;
  readonly TargetImage: Image;
  readonly SimilarityThreshold?: unknown;
  readonly QualityFilter?: string;
}

export interface CreateCollection {
  readonly CollectionId: string;
  readonly Tags?: {[key: string]: any};
}

export interface CreateDataset {
  readonly DatasetSource?: DatasetSource;
  readonly DatasetType: string;
  readonly ProjectArn: string;
}

export interface CreateProject {
  readonly ProjectName: string;
}

export interface CreateProjectVersion {
  readonly ProjectArn: string;
  readonly VersionName: string;
  readonly OutputConfig: OutputConfig;
  readonly TrainingData?: TrainingData;
  readonly TestingData?: TestingData;
  readonly Tags?: {[key: string]: any};
  readonly KmsKeyId?: string;
}

export interface CreateStreamProcessor {
  readonly Input: StreamProcessorInput;
  readonly Output: StreamProcessorOutput;
  readonly Name: string;
  readonly Settings: StreamProcessorSettings;
  readonly RoleArn: string;
  readonly Tags?: {[key: string]: any};
}

export interface DeleteCollection {
  readonly CollectionId: string;
}

export interface DeleteDataset {
  readonly DatasetArn: string;
}

export interface DeleteFaces {
  readonly CollectionId: string;
  readonly FaceIds: [];
}

export interface DeleteProject {
  readonly ProjectArn: string;
}

export interface DeleteProjectVersion {
  readonly ProjectVersionArn: string;
}

export interface DeleteStreamProcessor {
  readonly Name: string;
}

export interface DescribeCollection {
  readonly CollectionId: string;
}

export interface DescribeDataset {
  readonly DatasetArn: string;
}

export interface DescribeProjectVersions {
  readonly ProjectArn: string;
  readonly VersionNames?: [];
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface DescribeProjects {
  readonly NextToken?: string;
  readonly MaxResults?: number;
  readonly ProjectNames?: [];
}

export interface DescribeStreamProcessor {
  readonly Name: string;
}

export interface DetectCustomLabels {
  readonly ProjectVersionArn: string;
  readonly Image: Image;
  readonly MaxResults?: number;
  readonly MinConfidence?: unknown;
}

export interface DetectFaces {
  readonly Image: Image;
  readonly Attributes?: [];
}

export interface DetectLabels {
  readonly Image: Image;
  readonly MaxLabels?: number;
  readonly MinConfidence?: unknown;
}

export interface DetectModerationLabels {
  readonly Image: Image;
  readonly MinConfidence?: unknown;
  readonly HumanLoopConfig?: HumanLoopConfig;
}

export interface DetectProtectiveEquipment {
  readonly Image: Image;
  readonly SummarizationAttributes?: ProtectiveEquipmentSummarizationAttributes;
}

export interface DetectText {
  readonly Image: Image;
  readonly Filters?: DetectTextFilters;
}

export interface DistributeDatasetEntries {
  readonly Datasets: [];
}

export interface GetCelebrityInfo {
  readonly Id: string;
}

export interface GetCelebrityRecognition {
  readonly JobId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly SortBy?: string;
}

export interface GetContentModeration {
  readonly JobId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly SortBy?: string;
}

export interface GetFaceDetection {
  readonly JobId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface GetFaceSearch {
  readonly JobId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly SortBy?: string;
}

export interface GetLabelDetection {
  readonly JobId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly SortBy?: string;
}

export interface GetPersonTracking {
  readonly JobId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly SortBy?: string;
}

export interface GetSegmentDetection {
  readonly JobId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface GetTextDetection {
  readonly JobId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface IndexFaces {
  readonly CollectionId: string;
  readonly Image: Image;
  readonly ExternalImageId?: string;
  readonly DetectionAttributes?: [];
  readonly MaxFaces?: number;
  readonly QualityFilter?: string;
}

export interface ListCollections {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListDatasetEntries {
  readonly DatasetArn: string;
  readonly ContainsLabels?: [];
  readonly Labeled?: boolean;
  readonly SourceRefContains?: string;
  readonly HasErrors?: boolean;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListDatasetLabels {
  readonly DatasetArn: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListFaces {
  readonly CollectionId: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListStreamProcessors {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListTagsForResource {
  readonly ResourceArn: string;
}

export interface RecognizeCelebrities {
  readonly Image: Image;
}

export interface SearchFaces {
  readonly CollectionId: string;
  readonly FaceId: string;
  readonly MaxFaces?: number;
  readonly FaceMatchThreshold?: unknown;
}

export interface SearchFacesByImage {
  readonly CollectionId: string;
  readonly Image: Image;
  readonly MaxFaces?: number;
  readonly FaceMatchThreshold?: unknown;
  readonly QualityFilter?: string;
}

export interface StartCelebrityRecognition {
  readonly Video: Video;
  readonly ClientRequestToken?: string;
  readonly NotificationChannel?: NotificationChannel;
  readonly JobTag?: string;
}

export interface StartContentModeration {
  readonly Video: Video;
  readonly MinConfidence?: unknown;
  readonly ClientRequestToken?: string;
  readonly NotificationChannel?: NotificationChannel;
  readonly JobTag?: string;
}

export interface StartFaceDetection {
  readonly Video: Video;
  readonly ClientRequestToken?: string;
  readonly NotificationChannel?: NotificationChannel;
  readonly FaceAttributes?: string;
  readonly JobTag?: string;
}

export interface StartFaceSearch {
  readonly Video: Video;
  readonly ClientRequestToken?: string;
  readonly FaceMatchThreshold?: unknown;
  readonly CollectionId: string;
  readonly NotificationChannel?: NotificationChannel;
  readonly JobTag?: string;
}

export interface StartLabelDetection {
  readonly Video: Video;
  readonly ClientRequestToken?: string;
  readonly MinConfidence?: unknown;
  readonly NotificationChannel?: NotificationChannel;
  readonly JobTag?: string;
}

export interface StartPersonTracking {
  readonly Video: Video;
  readonly ClientRequestToken?: string;
  readonly NotificationChannel?: NotificationChannel;
  readonly JobTag?: string;
}

export interface StartProjectVersion {
  readonly ProjectVersionArn: string;
  readonly MinInferenceUnits: number;
}

export interface StartSegmentDetection {
  readonly Video: Video;
  readonly ClientRequestToken?: string;
  readonly NotificationChannel?: NotificationChannel;
  readonly JobTag?: string;
  readonly Filters?: StartSegmentDetectionFilters;
  readonly SegmentTypes: [];
}

export interface StartStreamProcessor {
  readonly Name: string;
}

export interface StartTextDetection {
  readonly Video: Video;
  readonly ClientRequestToken?: string;
  readonly NotificationChannel?: NotificationChannel;
  readonly JobTag?: string;
  readonly Filters?: StartTextDetectionFilters;
}

export interface StopProjectVersion {
  readonly ProjectVersionArn: string;
}

export interface StopStreamProcessor {
  readonly Name: string;
}

export interface TagResource {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}

export interface UntagResource {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

export interface UpdateDatasetEntries {
  readonly DatasetArn: string;
  readonly Changes: DatasetChanges;
}

export interface AccessDeniedException {
}

export interface AgeRange {
  readonly Low?: number;
  readonly High?: number;
}

export interface Asset {
  readonly GroundTruthManifest?: GroundTruthManifest;
}

export interface AudioMetadata {
  readonly Codec?: string;
  readonly DurationMillis?: number;
  readonly SampleRate?: number;
  readonly NumberOfChannels?: number;
}

export interface Beard {
  readonly Value?: boolean;
  readonly Confidence?: unknown;
}

export interface BlackFrame {
  readonly MaxPixelThreshold?: unknown;
  readonly MinCoveragePercentage?: unknown;
}

export interface BoundingBox {
  readonly Width?: unknown;
  readonly Height?: unknown;
  readonly Left?: unknown;
  readonly Top?: unknown;
}

export interface Celebrity {
  readonly Urls?: [];
  readonly Name?: string;
  readonly Id?: string;
  readonly Face?: ComparedFace;
  readonly MatchConfidence?: unknown;
  readonly KnownGender?: KnownGender;
}

export interface CelebrityDetail {
  readonly Urls?: [];
  readonly Name?: string;
  readonly Id?: string;
  readonly Confidence?: unknown;
  readonly BoundingBox?: BoundingBox;
  readonly Face?: FaceDetail;
  readonly KnownGender?: KnownGender;
}

export interface CelebrityRecognition {
  readonly Timestamp?: number;
  readonly Celebrity?: CelebrityDetail;
}

export interface CompareFacesMatch {
  readonly Similarity?: unknown;
  readonly Face?: ComparedFace;
}

export interface CompareFacesRequest {
  readonly SourceImage: Image;
  readonly TargetImage: Image;
  readonly SimilarityThreshold?: unknown;
  readonly QualityFilter?: string;
}

export interface CompareFacesResponse {
  readonly SourceImageFace?: ComparedSourceImageFace;
  readonly FaceMatches?: [];
  readonly UnmatchedFaces?: [];
  readonly SourceImageOrientationCorrection?: string;
  readonly TargetImageOrientationCorrection?: string;
}

export interface ComparedFace {
  readonly BoundingBox?: BoundingBox;
  readonly Confidence?: unknown;
  readonly Landmarks?: [];
  readonly Pose?: Pose;
  readonly Quality?: ImageQuality;
  readonly Emotions?: [];
  readonly Smile?: Smile;
}

export interface ComparedSourceImageFace {
  readonly BoundingBox?: BoundingBox;
  readonly Confidence?: unknown;
}

export interface ContentModerationDetection {
  readonly Timestamp?: number;
  readonly ModerationLabel?: ModerationLabel;
}

export interface CoversBodyPart {
  readonly Confidence?: unknown;
  readonly Value?: boolean;
}

export interface CreateCollectionRequest {
  readonly CollectionId: string;
  readonly Tags?: {[key: string]: any};
}

export interface CreateCollectionResponse {
  readonly StatusCode?: number;
  readonly CollectionArn?: string;
  readonly FaceModelVersion?: string;
}

export interface CreateDatasetRequest {
  readonly DatasetSource?: DatasetSource;
  readonly DatasetType: string;
  readonly ProjectArn: string;
}

export interface CreateDatasetResponse {
  readonly DatasetArn?: string;
}

export interface CreateProjectRequest {
  readonly ProjectName: string;
}

export interface CreateProjectResponse {
  readonly ProjectArn?: string;
}

export interface CreateProjectVersionRequest {
  readonly ProjectArn: string;
  readonly VersionName: string;
  readonly OutputConfig: OutputConfig;
  readonly TrainingData?: TrainingData;
  readonly TestingData?: TestingData;
  readonly Tags?: {[key: string]: any};
  readonly KmsKeyId?: string;
}

export interface CreateProjectVersionResponse {
  readonly ProjectVersionArn?: string;
}

export interface CreateStreamProcessorRequest {
  readonly Input: StreamProcessorInput;
  readonly Output: StreamProcessorOutput;
  readonly Name: string;
  readonly Settings: StreamProcessorSettings;
  readonly RoleArn: string;
  readonly Tags?: {[key: string]: any};
}

export interface CreateStreamProcessorResponse {
  readonly StreamProcessorArn?: string;
}

export interface CustomLabel {
  readonly Name?: string;
  readonly Confidence?: unknown;
  readonly Geometry?: Geometry;
}

export interface DatasetChanges {
  readonly GroundTruth: unknown;
}

export interface DatasetDescription {
  readonly CreationTimestamp?: Date;
  readonly LastUpdatedTimestamp?: Date;
  readonly Status?: string;
  readonly StatusMessage?: string;
  readonly StatusMessageCode?: string;
  readonly DatasetStats?: DatasetStats;
}

export interface DatasetLabelDescription {
  readonly LabelName?: string;
  readonly LabelStats?: DatasetLabelStats;
}

export interface DatasetLabelStats {
  readonly EntryCount?: number;
  readonly BoundingBoxCount?: number;
}

export interface DatasetMetadata {
  readonly CreationTimestamp?: Date;
  readonly DatasetType?: string;
  readonly DatasetArn?: string;
  readonly Status?: string;
  readonly StatusMessage?: string;
  readonly StatusMessageCode?: string;
}

export interface DatasetSource {
  readonly GroundTruthManifest?: GroundTruthManifest;
  readonly DatasetArn?: string;
}

export interface DatasetStats {
  readonly LabeledEntries?: number;
  readonly TotalEntries?: number;
  readonly TotalLabels?: number;
  readonly ErrorEntries?: number;
}

export interface DeleteCollectionRequest {
  readonly CollectionId: string;
}

export interface DeleteCollectionResponse {
  readonly StatusCode?: number;
}

export interface DeleteDatasetRequest {
  readonly DatasetArn: string;
}

export interface DeleteDatasetResponse {
}

export interface DeleteFacesRequest {
  readonly CollectionId: string;
  readonly FaceIds: [];
}

export interface DeleteFacesResponse {
  readonly DeletedFaces?: [];
}

export interface DeleteProjectRequest {
  readonly ProjectArn: string;
}

export interface DeleteProjectResponse {
  readonly Status?: string;
}

export interface DeleteProjectVersionRequest {
  readonly ProjectVersionArn: string;
}

export interface DeleteProjectVersionResponse {
  readonly Status?: string;
}

export interface DeleteStreamProcessorRequest {
  readonly Name: string;
}

export interface DeleteStreamProcessorResponse {
}

export interface DescribeCollectionRequest {
  readonly CollectionId: string;
}

export interface DescribeCollectionResponse {
  readonly FaceCount?: number;
  readonly FaceModelVersion?: string;
  readonly CollectionARN?: string;
  readonly CreationTimestamp?: Date;
}

export interface DescribeDatasetRequest {
  readonly DatasetArn: string;
}

export interface DescribeDatasetResponse {
  readonly DatasetDescription?: DatasetDescription;
}

export interface DescribeProjectVersionsRequest {
  readonly ProjectArn: string;
  readonly VersionNames?: [];
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface DescribeProjectVersionsResponse {
  readonly ProjectVersionDescriptions?: [];
  readonly NextToken?: string;
}

export interface DescribeProjectsRequest {
  readonly NextToken?: string;
  readonly MaxResults?: number;
  readonly ProjectNames?: [];
}

export interface DescribeProjectsResponse {
  readonly ProjectDescriptions?: [];
  readonly NextToken?: string;
}

export interface DescribeStreamProcessorRequest {
  readonly Name: string;
}

export interface DescribeStreamProcessorResponse {
  readonly Name?: string;
  readonly StreamProcessorArn?: string;
  readonly Status?: string;
  readonly StatusMessage?: string;
  readonly CreationTimestamp?: Date;
  readonly LastUpdateTimestamp?: Date;
  readonly Input?: StreamProcessorInput;
  readonly Output?: StreamProcessorOutput;
  readonly RoleArn?: string;
  readonly Settings?: StreamProcessorSettings;
}

export interface DetectCustomLabelsRequest {
  readonly ProjectVersionArn: string;
  readonly Image: Image;
  readonly MaxResults?: number;
  readonly MinConfidence?: unknown;
}

export interface DetectCustomLabelsResponse {
  readonly CustomLabels?: [];
}

export interface DetectFacesRequest {
  readonly Image: Image;
  readonly Attributes?: [];
}

export interface DetectFacesResponse {
  readonly FaceDetails?: [];
  readonly OrientationCorrection?: string;
}

export interface DetectLabelsRequest {
  readonly Image: Image;
  readonly MaxLabels?: number;
  readonly MinConfidence?: unknown;
}

export interface DetectLabelsResponse {
  readonly Labels?: [];
  readonly OrientationCorrection?: string;
  readonly LabelModelVersion?: string;
}

export interface DetectModerationLabelsRequest {
  readonly Image: Image;
  readonly MinConfidence?: unknown;
  readonly HumanLoopConfig?: HumanLoopConfig;
}

export interface DetectModerationLabelsResponse {
  readonly ModerationLabels?: [];
  readonly ModerationModelVersion?: string;
  readonly HumanLoopActivationOutput?: HumanLoopActivationOutput;
}

export interface DetectProtectiveEquipmentRequest {
  readonly Image: Image;
  readonly SummarizationAttributes?: ProtectiveEquipmentSummarizationAttributes;
}

export interface DetectProtectiveEquipmentResponse {
  readonly ProtectiveEquipmentModelVersion?: string;
  readonly Persons?: [];
  readonly Summary?: ProtectiveEquipmentSummary;
}

export interface DetectTextFilters {
  readonly WordFilter?: DetectionFilter;
  readonly RegionsOfInterest?: [];
}

export interface DetectTextRequest {
  readonly Image: Image;
  readonly Filters?: DetectTextFilters;
}

export interface DetectTextResponse {
  readonly TextDetections?: [];
  readonly TextModelVersion?: string;
}

export interface DetectionFilter {
  readonly MinConfidence?: unknown;
  readonly MinBoundingBoxHeight?: unknown;
  readonly MinBoundingBoxWidth?: unknown;
}

export interface DistributeDataset {
  readonly Arn: string;
}

export interface DistributeDatasetEntriesRequest {
  readonly Datasets: [];
}

export interface DistributeDatasetEntriesResponse {
}

export interface Emotion {
  readonly Type?: string;
  readonly Confidence?: unknown;
}

export interface EquipmentDetection {
  readonly BoundingBox?: BoundingBox;
  readonly Confidence?: unknown;
  readonly Type?: string;
  readonly CoversBodyPart?: CoversBodyPart;
}

export interface EvaluationResult {
  readonly F1Score?: unknown;
  readonly Summary?: Summary;
}

export interface EyeOpen {
  readonly Value?: boolean;
  readonly Confidence?: unknown;
}

export interface Eyeglasses {
  readonly Value?: boolean;
  readonly Confidence?: unknown;
}

export interface Face {
  readonly FaceId?: string;
  readonly BoundingBox?: BoundingBox;
  readonly ImageId?: string;
  readonly ExternalImageId?: string;
  readonly Confidence?: unknown;
}

export interface FaceDetail {
  readonly BoundingBox?: BoundingBox;
  readonly AgeRange?: AgeRange;
  readonly Smile?: Smile;
  readonly Eyeglasses?: Eyeglasses;
  readonly Sunglasses?: Sunglasses;
  readonly Gender?: Gender;
  readonly Beard?: Beard;
  readonly Mustache?: Mustache;
  readonly EyesOpen?: EyeOpen;
  readonly MouthOpen?: MouthOpen;
  readonly Emotions?: [];
  readonly Landmarks?: [];
  readonly Pose?: Pose;
  readonly Quality?: ImageQuality;
  readonly Confidence?: unknown;
}

export interface FaceDetection {
  readonly Timestamp?: number;
  readonly Face?: FaceDetail;
}

export interface FaceMatch {
  readonly Similarity?: unknown;
  readonly Face?: Face;
}

export interface FaceRecord {
  readonly Face?: Face;
  readonly FaceDetail?: FaceDetail;
}

export interface FaceSearchSettings {
  readonly CollectionId?: string;
  readonly FaceMatchThreshold?: unknown;
}

export interface Gender {
  readonly Value?: string;
  readonly Confidence?: unknown;
}

export interface Geometry {
  readonly BoundingBox?: BoundingBox;
  readonly Polygon?: [];
}

export interface GetCelebrityInfoRequest {
  readonly Id: string;
}

export interface GetCelebrityInfoResponse {
  readonly Urls?: [];
  readonly Name?: string;
  readonly KnownGender?: KnownGender;
}

export interface GetCelebrityRecognitionRequest {
  readonly JobId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly SortBy?: string;
}

export interface GetCelebrityRecognitionResponse {
  readonly JobStatus?: string;
  readonly StatusMessage?: string;
  readonly VideoMetadata?: VideoMetadata;
  readonly NextToken?: string;
  readonly Celebrities?: [];
}

export interface GetContentModerationRequest {
  readonly JobId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly SortBy?: string;
}

export interface GetContentModerationResponse {
  readonly JobStatus?: string;
  readonly StatusMessage?: string;
  readonly VideoMetadata?: VideoMetadata;
  readonly ModerationLabels?: [];
  readonly NextToken?: string;
  readonly ModerationModelVersion?: string;
}

export interface GetFaceDetectionRequest {
  readonly JobId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface GetFaceDetectionResponse {
  readonly JobStatus?: string;
  readonly StatusMessage?: string;
  readonly VideoMetadata?: VideoMetadata;
  readonly NextToken?: string;
  readonly Faces?: [];
}

export interface GetFaceSearchRequest {
  readonly JobId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly SortBy?: string;
}

export interface GetFaceSearchResponse {
  readonly JobStatus?: string;
  readonly StatusMessage?: string;
  readonly NextToken?: string;
  readonly VideoMetadata?: VideoMetadata;
  readonly Persons?: [];
}

export interface GetLabelDetectionRequest {
  readonly JobId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly SortBy?: string;
}

export interface GetLabelDetectionResponse {
  readonly JobStatus?: string;
  readonly StatusMessage?: string;
  readonly VideoMetadata?: VideoMetadata;
  readonly NextToken?: string;
  readonly Labels?: [];
  readonly LabelModelVersion?: string;
}

export interface GetPersonTrackingRequest {
  readonly JobId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
  readonly SortBy?: string;
}

export interface GetPersonTrackingResponse {
  readonly JobStatus?: string;
  readonly StatusMessage?: string;
  readonly VideoMetadata?: VideoMetadata;
  readonly NextToken?: string;
  readonly Persons?: [];
}

export interface GetSegmentDetectionRequest {
  readonly JobId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface GetSegmentDetectionResponse {
  readonly JobStatus?: string;
  readonly StatusMessage?: string;
  readonly VideoMetadata?: [];
  readonly AudioMetadata?: [];
  readonly NextToken?: string;
  readonly Segments?: [];
  readonly SelectedSegmentTypes?: [];
}

export interface GetTextDetectionRequest {
  readonly JobId: string;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface GetTextDetectionResponse {
  readonly JobStatus?: string;
  readonly StatusMessage?: string;
  readonly VideoMetadata?: VideoMetadata;
  readonly TextDetections?: [];
  readonly NextToken?: string;
  readonly TextModelVersion?: string;
}

export interface GroundTruthManifest {
  readonly S3Object?: S3Object;
}

export interface HumanLoopActivationOutput {
  readonly HumanLoopArn?: string;
  readonly HumanLoopActivationReasons?: [];
  readonly HumanLoopActivationConditionsEvaluationResults?: string;
}

export interface HumanLoopConfig {
  readonly HumanLoopName: string;
  readonly FlowDefinitionArn: string;
  readonly DataAttributes?: HumanLoopDataAttributes;
}

export interface HumanLoopDataAttributes {
  readonly ContentClassifiers?: [];
}

export interface HumanLoopQuotaExceededException {
  readonly ResourceType?: string;
  readonly QuotaCode?: string;
  readonly ServiceCode?: string;
}

export interface IdempotentParameterMismatchException {
}

export interface Image {
  readonly Bytes?: unknown;
  readonly S3Object?: S3Object;
}

export interface ImageQuality {
  readonly Brightness?: unknown;
  readonly Sharpness?: unknown;
}

export interface ImageTooLargeException {
}

export interface IndexFacesRequest {
  readonly CollectionId: string;
  readonly Image: Image;
  readonly ExternalImageId?: string;
  readonly DetectionAttributes?: [];
  readonly MaxFaces?: number;
  readonly QualityFilter?: string;
}

export interface IndexFacesResponse {
  readonly FaceRecords?: [];
  readonly OrientationCorrection?: string;
  readonly FaceModelVersion?: string;
  readonly UnindexedFaces?: [];
}

export interface Instance {
  readonly BoundingBox?: BoundingBox;
  readonly Confidence?: unknown;
}

export interface InternalServerError {
}

export interface InvalidImageFormatException {
}

export interface InvalidPaginationTokenException {
}

export interface InvalidParameterException {
}

export interface InvalidS3ObjectException {
}

export interface KinesisDataStream {
  readonly Arn?: string;
}

export interface KinesisVideoStream {
  readonly Arn?: string;
}

export interface KnownGender {
  readonly Type?: string;
}

export interface Label {
  readonly Name?: string;
  readonly Confidence?: unknown;
  readonly Instances?: [];
  readonly Parents?: [];
}

export interface LabelDetection {
  readonly Timestamp?: number;
  readonly Label?: Label;
}

export interface Landmark {
  readonly Type?: string;
  readonly X?: unknown;
  readonly Y?: unknown;
}

export interface LimitExceededException {
}

export interface ListCollectionsRequest {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListCollectionsResponse {
  readonly CollectionIds?: [];
  readonly NextToken?: string;
  readonly FaceModelVersions?: [];
}

export interface ListDatasetEntriesRequest {
  readonly DatasetArn: string;
  readonly ContainsLabels?: [];
  readonly Labeled?: boolean;
  readonly SourceRefContains?: string;
  readonly HasErrors?: boolean;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListDatasetEntriesResponse {
  readonly DatasetEntries?: [];
  readonly NextToken?: string;
}

export interface ListDatasetLabelsRequest {
  readonly DatasetArn: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListDatasetLabelsResponse {
  readonly DatasetLabelDescriptions?: [];
  readonly NextToken?: string;
}

export interface ListFacesRequest {
  readonly CollectionId: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListFacesResponse {
  readonly Faces?: [];
  readonly NextToken?: string;
  readonly FaceModelVersion?: string;
}

export interface ListStreamProcessorsRequest {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListStreamProcessorsResponse {
  readonly NextToken?: string;
  readonly StreamProcessors?: [];
}

export interface ListTagsForResourceRequest {
  readonly ResourceArn: string;
}

export interface ListTagsForResourceResponse {
  readonly Tags?: {[key: string]: any};
}

export interface ModerationLabel {
  readonly Confidence?: unknown;
  readonly Name?: string;
  readonly ParentName?: string;
}

export interface MouthOpen {
  readonly Value?: boolean;
  readonly Confidence?: unknown;
}

export interface Mustache {
  readonly Value?: boolean;
  readonly Confidence?: unknown;
}

export interface NotificationChannel {
  readonly SNSTopicArn: string;
  readonly RoleArn: string;
}

export interface OutputConfig {
  readonly S3Bucket?: string;
  readonly S3KeyPrefix?: string;
}

export interface Parent {
  readonly Name?: string;
}

export interface PersonDetail {
  readonly Index?: number;
  readonly BoundingBox?: BoundingBox;
  readonly Face?: FaceDetail;
}

export interface PersonDetection {
  readonly Timestamp?: number;
  readonly Person?: PersonDetail;
}

export interface PersonMatch {
  readonly Timestamp?: number;
  readonly Person?: PersonDetail;
  readonly FaceMatches?: [];
}

export interface Point {
  readonly X?: unknown;
  readonly Y?: unknown;
}

export interface Pose {
  readonly Roll?: unknown;
  readonly Yaw?: unknown;
  readonly Pitch?: unknown;
}

export interface ProjectDescription {
  readonly ProjectArn?: string;
  readonly CreationTimestamp?: Date;
  readonly Status?: string;
  readonly Datasets?: [];
}

export interface ProjectVersionDescription {
  readonly ProjectVersionArn?: string;
  readonly CreationTimestamp?: Date;
  readonly MinInferenceUnits?: number;
  readonly Status?: string;
  readonly StatusMessage?: string;
  readonly BillableTrainingTimeInSeconds?: number;
  readonly TrainingEndTimestamp?: Date;
  readonly OutputConfig?: OutputConfig;
  readonly TrainingDataResult?: TrainingDataResult;
  readonly TestingDataResult?: TestingDataResult;
  readonly EvaluationResult?: EvaluationResult;
  readonly ManifestSummary?: GroundTruthManifest;
  readonly KmsKeyId?: string;
}

export interface ProtectiveEquipmentBodyPart {
  readonly Name?: string;
  readonly Confidence?: unknown;
  readonly EquipmentDetections?: [];
}

export interface ProtectiveEquipmentPerson {
  readonly BodyParts?: [];
  readonly BoundingBox?: BoundingBox;
  readonly Confidence?: unknown;
  readonly Id?: number;
}

export interface ProtectiveEquipmentSummarizationAttributes {
  readonly MinConfidence: unknown;
  readonly RequiredEquipmentTypes: [];
}

export interface ProtectiveEquipmentSummary {
  readonly PersonsWithRequiredEquipment?: [];
  readonly PersonsWithoutRequiredEquipment?: [];
  readonly PersonsIndeterminate?: [];
}

export interface ProvisionedThroughputExceededException {
}

export interface RecognizeCelebritiesRequest {
  readonly Image: Image;
}

export interface RecognizeCelebritiesResponse {
  readonly CelebrityFaces?: [];
  readonly UnrecognizedFaces?: [];
  readonly OrientationCorrection?: string;
}

export interface RegionOfInterest {
  readonly BoundingBox?: BoundingBox;
}

export interface ResourceAlreadyExistsException {
}

export interface ResourceInUseException {
}

export interface ResourceNotFoundException {
}

export interface ResourceNotReadyException {
}

export interface S3Object {
  readonly Bucket?: string;
  readonly Name?: string;
  readonly Version?: string;
}

export interface SearchFacesByImageRequest {
  readonly CollectionId: string;
  readonly Image: Image;
  readonly MaxFaces?: number;
  readonly FaceMatchThreshold?: unknown;
  readonly QualityFilter?: string;
}

export interface SearchFacesByImageResponse {
  readonly SearchedFaceBoundingBox?: BoundingBox;
  readonly SearchedFaceConfidence?: unknown;
  readonly FaceMatches?: [];
  readonly FaceModelVersion?: string;
}

export interface SearchFacesRequest {
  readonly CollectionId: string;
  readonly FaceId: string;
  readonly MaxFaces?: number;
  readonly FaceMatchThreshold?: unknown;
}

export interface SearchFacesResponse {
  readonly SearchedFaceId?: string;
  readonly FaceMatches?: [];
  readonly FaceModelVersion?: string;
}

export interface SegmentDetection {
  readonly Type?: string;
  readonly StartTimestampMillis?: number;
  readonly EndTimestampMillis?: number;
  readonly DurationMillis?: number;
  readonly StartTimecodeSMPTE?: string;
  readonly EndTimecodeSMPTE?: string;
  readonly DurationSMPTE?: string;
  readonly TechnicalCueSegment?: TechnicalCueSegment;
  readonly ShotSegment?: ShotSegment;
  readonly StartFrameNumber?: number;
  readonly EndFrameNumber?: number;
  readonly DurationFrames?: number;
}

export interface SegmentTypeInfo {
  readonly Type?: string;
  readonly ModelVersion?: string;
}

export interface ServiceQuotaExceededException {
}

export interface ShotSegment {
  readonly Index?: number;
  readonly Confidence?: unknown;
}

export interface Smile {
  readonly Value?: boolean;
  readonly Confidence?: unknown;
}

export interface StartCelebrityRecognitionRequest {
  readonly Video: Video;
  readonly ClientRequestToken?: string;
  readonly NotificationChannel?: NotificationChannel;
  readonly JobTag?: string;
}

export interface StartCelebrityRecognitionResponse {
  readonly JobId?: string;
}

export interface StartContentModerationRequest {
  readonly Video: Video;
  readonly MinConfidence?: unknown;
  readonly ClientRequestToken?: string;
  readonly NotificationChannel?: NotificationChannel;
  readonly JobTag?: string;
}

export interface StartContentModerationResponse {
  readonly JobId?: string;
}

export interface StartFaceDetectionRequest {
  readonly Video: Video;
  readonly ClientRequestToken?: string;
  readonly NotificationChannel?: NotificationChannel;
  readonly FaceAttributes?: string;
  readonly JobTag?: string;
}

export interface StartFaceDetectionResponse {
  readonly JobId?: string;
}

export interface StartFaceSearchRequest {
  readonly Video: Video;
  readonly ClientRequestToken?: string;
  readonly FaceMatchThreshold?: unknown;
  readonly CollectionId: string;
  readonly NotificationChannel?: NotificationChannel;
  readonly JobTag?: string;
}

export interface StartFaceSearchResponse {
  readonly JobId?: string;
}

export interface StartLabelDetectionRequest {
  readonly Video: Video;
  readonly ClientRequestToken?: string;
  readonly MinConfidence?: unknown;
  readonly NotificationChannel?: NotificationChannel;
  readonly JobTag?: string;
}

export interface StartLabelDetectionResponse {
  readonly JobId?: string;
}

export interface StartPersonTrackingRequest {
  readonly Video: Video;
  readonly ClientRequestToken?: string;
  readonly NotificationChannel?: NotificationChannel;
  readonly JobTag?: string;
}

export interface StartPersonTrackingResponse {
  readonly JobId?: string;
}

export interface StartProjectVersionRequest {
  readonly ProjectVersionArn: string;
  readonly MinInferenceUnits: number;
}

export interface StartProjectVersionResponse {
  readonly Status?: string;
}

export interface StartSegmentDetectionFilters {
  readonly TechnicalCueFilter?: StartTechnicalCueDetectionFilter;
  readonly ShotFilter?: StartShotDetectionFilter;
}

export interface StartSegmentDetectionRequest {
  readonly Video: Video;
  readonly ClientRequestToken?: string;
  readonly NotificationChannel?: NotificationChannel;
  readonly JobTag?: string;
  readonly Filters?: StartSegmentDetectionFilters;
  readonly SegmentTypes: [];
}

export interface StartSegmentDetectionResponse {
  readonly JobId?: string;
}

export interface StartShotDetectionFilter {
  readonly MinSegmentConfidence?: unknown;
}

export interface StartStreamProcessorRequest {
  readonly Name: string;
}

export interface StartStreamProcessorResponse {
}

export interface StartTechnicalCueDetectionFilter {
  readonly MinSegmentConfidence?: unknown;
  readonly BlackFrame?: BlackFrame;
}

export interface StartTextDetectionFilters {
  readonly WordFilter?: DetectionFilter;
  readonly RegionsOfInterest?: [];
}

export interface StartTextDetectionRequest {
  readonly Video: Video;
  readonly ClientRequestToken?: string;
  readonly NotificationChannel?: NotificationChannel;
  readonly JobTag?: string;
  readonly Filters?: StartTextDetectionFilters;
}

export interface StartTextDetectionResponse {
  readonly JobId?: string;
}

export interface StopProjectVersionRequest {
  readonly ProjectVersionArn: string;
}

export interface StopProjectVersionResponse {
  readonly Status?: string;
}

export interface StopStreamProcessorRequest {
  readonly Name: string;
}

export interface StopStreamProcessorResponse {
}

export interface StreamProcessor {
  readonly Name?: string;
  readonly Status?: string;
}

export interface StreamProcessorInput {
  readonly KinesisVideoStream?: KinesisVideoStream;
}

export interface StreamProcessorOutput {
  readonly KinesisDataStream?: KinesisDataStream;
}

export interface StreamProcessorSettings {
  readonly FaceSearch?: FaceSearchSettings;
}

export interface Summary {
  readonly S3Object?: S3Object;
}

export interface Sunglasses {
  readonly Value?: boolean;
  readonly Confidence?: unknown;
}

export interface TagResourceRequest {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}

export interface TagResourceResponse {
}

export interface TechnicalCueSegment {
  readonly Type?: string;
  readonly Confidence?: unknown;
}

export interface TestingData {
  readonly Assets?: [];
  readonly AutoCreate?: boolean;
}

export interface TestingDataResult {
  readonly Input?: TestingData;
  readonly Output?: TestingData;
  readonly Validation?: ValidationData;
}

export interface TextDetection {
  readonly DetectedText?: string;
  readonly Type?: string;
  readonly Id?: number;
  readonly ParentId?: number;
  readonly Confidence?: unknown;
  readonly Geometry?: Geometry;
}

export interface TextDetectionResult {
  readonly Timestamp?: number;
  readonly TextDetection?: TextDetection;
}

export interface ThrottlingException {
}

export interface TrainingData {
  readonly Assets?: [];
}

export interface TrainingDataResult {
  readonly Input?: TrainingData;
  readonly Output?: TrainingData;
  readonly Validation?: ValidationData;
}

export interface UnindexedFace {
  readonly Reasons?: [];
  readonly FaceDetail?: FaceDetail;
}

export interface UntagResourceRequest {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

export interface UntagResourceResponse {
}

export interface UpdateDatasetEntriesRequest {
  readonly DatasetArn: string;
  readonly Changes: DatasetChanges;
}

export interface UpdateDatasetEntriesResponse {
}

export interface ValidationData {
  readonly Assets?: [];
}

export interface Video {
  readonly S3Object?: S3Object;
}

export interface VideoMetadata {
  readonly Codec?: string;
  readonly DurationMillis?: number;
  readonly Format?: string;
  readonly FrameRate?: unknown;
  readonly FrameHeight?: number;
  readonly FrameWidth?: number;
  readonly ColorRange?: string;
}

export interface VideoTooLargeException {
}


