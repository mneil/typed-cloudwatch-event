/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CompareFaces {
  readonly SourceImage: Image;
  readonly TargetImage: Image;
  readonly SimilarityThreshold: unknown;
  readonly QualityFilter: string;
}
export interface CreateCollection {
  readonly CollectionId: string;
  readonly Tags: {[key: string]: any};
}
export interface CreateDataset {
  readonly DatasetSource: DatasetSource;
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
  readonly TrainingData: TrainingData;
  readonly TestingData: TestingData;
  readonly Tags: {[key: string]: any};
  readonly KmsKeyId: string;
}
export interface CreateStreamProcessor {
  readonly Input: StreamProcessorInput;
  readonly Output: StreamProcessorOutput;
  readonly Name: string;
  readonly Settings: StreamProcessorSettings;
  readonly RoleArn: string;
  readonly Tags: {[key: string]: any};
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
  readonly VersionNames: [];
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface DescribeProjects {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly ProjectNames: [];
}
export interface DescribeStreamProcessor {
  readonly Name: string;
}
export interface DetectCustomLabels {
  readonly ProjectVersionArn: string;
  readonly Image: Image;
  readonly MaxResults: number;
  readonly MinConfidence: unknown;
}
export interface DetectFaces {
  readonly Image: Image;
  readonly Attributes: [];
}
export interface DetectLabels {
  readonly Image: Image;
  readonly MaxLabels: number;
  readonly MinConfidence: unknown;
}
export interface DetectModerationLabels {
  readonly Image: Image;
  readonly MinConfidence: unknown;
  readonly HumanLoopConfig: HumanLoopConfig;
}
export interface DetectProtectiveEquipment {
  readonly Image: Image;
  readonly SummarizationAttributes: ProtectiveEquipmentSummarizationAttributes;
}
export interface DetectText {
  readonly Image: Image;
  readonly Filters: DetectTextFilters;
}
export interface DistributeDatasetEntries {
  readonly Datasets: [];
}
export interface GetCelebrityInfo {
  readonly Id: string;
}
export interface GetCelebrityRecognition {
  readonly JobId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly SortBy: string;
}
export interface GetContentModeration {
  readonly JobId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly SortBy: string;
}
export interface GetFaceDetection {
  readonly JobId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface GetFaceSearch {
  readonly JobId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly SortBy: string;
}
export interface GetLabelDetection {
  readonly JobId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly SortBy: string;
}
export interface GetPersonTracking {
  readonly JobId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly SortBy: string;
}
export interface GetSegmentDetection {
  readonly JobId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface GetTextDetection {
  readonly JobId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface IndexFaces {
  readonly CollectionId: string;
  readonly Image: Image;
  readonly ExternalImageId: string;
  readonly DetectionAttributes: [];
  readonly MaxFaces: number;
  readonly QualityFilter: string;
}
export interface ListCollections {
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListDatasetEntries {
  readonly DatasetArn: string;
  readonly ContainsLabels: [];
  readonly Labeled: boolean;
  readonly SourceRefContains: string;
  readonly HasErrors: boolean;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListDatasetLabels {
  readonly DatasetArn: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListFaces {
  readonly CollectionId: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListStreamProcessors {
  readonly NextToken: string;
  readonly MaxResults: number;
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
  readonly MaxFaces: number;
  readonly FaceMatchThreshold: unknown;
}
export interface SearchFacesByImage {
  readonly CollectionId: string;
  readonly Image: Image;
  readonly MaxFaces: number;
  readonly FaceMatchThreshold: unknown;
  readonly QualityFilter: string;
}
export interface StartCelebrityRecognition {
  readonly Video: Video;
  readonly ClientRequestToken: string;
  readonly NotificationChannel: NotificationChannel;
  readonly JobTag: string;
}
export interface StartContentModeration {
  readonly Video: Video;
  readonly MinConfidence: unknown;
  readonly ClientRequestToken: string;
  readonly NotificationChannel: NotificationChannel;
  readonly JobTag: string;
}
export interface StartFaceDetection {
  readonly Video: Video;
  readonly ClientRequestToken: string;
  readonly NotificationChannel: NotificationChannel;
  readonly FaceAttributes: string;
  readonly JobTag: string;
}
export interface StartFaceSearch {
  readonly Video: Video;
  readonly ClientRequestToken: string;
  readonly FaceMatchThreshold: unknown;
  readonly CollectionId: string;
  readonly NotificationChannel: NotificationChannel;
  readonly JobTag: string;
}
export interface StartLabelDetection {
  readonly Video: Video;
  readonly ClientRequestToken: string;
  readonly MinConfidence: unknown;
  readonly NotificationChannel: NotificationChannel;
  readonly JobTag: string;
}
export interface StartPersonTracking {
  readonly Video: Video;
  readonly ClientRequestToken: string;
  readonly NotificationChannel: NotificationChannel;
  readonly JobTag: string;
}
export interface StartProjectVersion {
  readonly ProjectVersionArn: string;
  readonly MinInferenceUnits: number;
}
export interface StartSegmentDetection {
  readonly Video: Video;
  readonly ClientRequestToken: string;
  readonly NotificationChannel: NotificationChannel;
  readonly JobTag: string;
  readonly Filters: StartSegmentDetectionFilters;
  readonly SegmentTypes: [];
}
export interface StartStreamProcessor {
  readonly Name: string;
}
export interface StartTextDetection {
  readonly Video: Video;
  readonly ClientRequestToken: string;
  readonly NotificationChannel: NotificationChannel;
  readonly JobTag: string;
  readonly Filters: StartTextDetectionFilters;
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



interface AccessDeniedException {
}

interface AgeRange {
  readonly Low: number;
  readonly High: number;
}

interface Asset {
  readonly GroundTruthManifest: GroundTruthManifest;
}

interface AudioMetadata {
  readonly Codec: string;
  readonly DurationMillis: number;
  readonly SampleRate: number;
  readonly NumberOfChannels: number;
}

interface Beard {
  readonly Value: boolean;
  readonly Confidence: unknown;
}

interface BlackFrame {
  readonly MaxPixelThreshold: unknown;
  readonly MinCoveragePercentage: unknown;
}

interface BoundingBox {
  readonly Width: unknown;
  readonly Height: unknown;
  readonly Left: unknown;
  readonly Top: unknown;
}

interface Celebrity {
  readonly Urls: [];
  readonly Name: string;
  readonly Id: string;
  readonly Face: ComparedFace;
  readonly MatchConfidence: unknown;
  readonly KnownGender: KnownGender;
}

interface CelebrityDetail {
  readonly Urls: [];
  readonly Name: string;
  readonly Id: string;
  readonly Confidence: unknown;
  readonly BoundingBox: BoundingBox;
  readonly Face: FaceDetail;
  readonly KnownGender: KnownGender;
}

interface CelebrityRecognition {
  readonly Timestamp: number;
  readonly Celebrity: CelebrityDetail;
}

interface CompareFacesMatch {
  readonly Similarity: unknown;
  readonly Face: ComparedFace;
}

interface CompareFacesRequest {
  readonly SourceImage: Image;
  readonly TargetImage: Image;
  readonly SimilarityThreshold: unknown;
  readonly QualityFilter: string;
}

interface CompareFacesResponse {
  readonly SourceImageFace: ComparedSourceImageFace;
  readonly FaceMatches: [];
  readonly UnmatchedFaces: [];
  readonly SourceImageOrientationCorrection: string;
  readonly TargetImageOrientationCorrection: string;
}

interface ComparedFace {
  readonly BoundingBox: BoundingBox;
  readonly Confidence: unknown;
  readonly Landmarks: [];
  readonly Pose: Pose;
  readonly Quality: ImageQuality;
  readonly Emotions: [];
  readonly Smile: Smile;
}

interface ComparedSourceImageFace {
  readonly BoundingBox: BoundingBox;
  readonly Confidence: unknown;
}

interface ContentModerationDetection {
  readonly Timestamp: number;
  readonly ModerationLabel: ModerationLabel;
}

interface CoversBodyPart {
  readonly Confidence: unknown;
  readonly Value: boolean;
}

interface CreateCollectionRequest {
  readonly CollectionId: string;
  readonly Tags: {[key: string]: any};
}

interface CreateCollectionResponse {
  readonly StatusCode: number;
  readonly CollectionArn: string;
  readonly FaceModelVersion: string;
}

interface CreateDatasetRequest {
  readonly DatasetSource: DatasetSource;
  readonly DatasetType: string;
  readonly ProjectArn: string;
}

interface CreateDatasetResponse {
  readonly DatasetArn: string;
}

interface CreateProjectRequest {
  readonly ProjectName: string;
}

interface CreateProjectResponse {
  readonly ProjectArn: string;
}

interface CreateProjectVersionRequest {
  readonly ProjectArn: string;
  readonly VersionName: string;
  readonly OutputConfig: OutputConfig;
  readonly TrainingData: TrainingData;
  readonly TestingData: TestingData;
  readonly Tags: {[key: string]: any};
  readonly KmsKeyId: string;
}

interface CreateProjectVersionResponse {
  readonly ProjectVersionArn: string;
}

interface CreateStreamProcessorRequest {
  readonly Input: StreamProcessorInput;
  readonly Output: StreamProcessorOutput;
  readonly Name: string;
  readonly Settings: StreamProcessorSettings;
  readonly RoleArn: string;
  readonly Tags: {[key: string]: any};
}

interface CreateStreamProcessorResponse {
  readonly StreamProcessorArn: string;
}

interface CustomLabel {
  readonly Name: string;
  readonly Confidence: unknown;
  readonly Geometry: Geometry;
}

interface DatasetChanges {
  readonly GroundTruth: unknown;
}

interface DatasetDescription {
  readonly CreationTimestamp: Date;
  readonly LastUpdatedTimestamp: Date;
  readonly Status: string;
  readonly StatusMessage: string;
  readonly StatusMessageCode: string;
  readonly DatasetStats: DatasetStats;
}

interface DatasetLabelDescription {
  readonly LabelName: string;
  readonly LabelStats: DatasetLabelStats;
}

interface DatasetLabelStats {
  readonly EntryCount: number;
  readonly BoundingBoxCount: number;
}

interface DatasetMetadata {
  readonly CreationTimestamp: Date;
  readonly DatasetType: string;
  readonly DatasetArn: string;
  readonly Status: string;
  readonly StatusMessage: string;
  readonly StatusMessageCode: string;
}

interface DatasetSource {
  readonly GroundTruthManifest: GroundTruthManifest;
  readonly DatasetArn: string;
}

interface DatasetStats {
  readonly LabeledEntries: number;
  readonly TotalEntries: number;
  readonly TotalLabels: number;
  readonly ErrorEntries: number;
}

interface DeleteCollectionRequest {
  readonly CollectionId: string;
}

interface DeleteCollectionResponse {
  readonly StatusCode: number;
}

interface DeleteDatasetRequest {
  readonly DatasetArn: string;
}

interface DeleteDatasetResponse {
}

interface DeleteFacesRequest {
  readonly CollectionId: string;
  readonly FaceIds: [];
}

interface DeleteFacesResponse {
  readonly DeletedFaces: [];
}

interface DeleteProjectRequest {
  readonly ProjectArn: string;
}

interface DeleteProjectResponse {
  readonly Status: string;
}

interface DeleteProjectVersionRequest {
  readonly ProjectVersionArn: string;
}

interface DeleteProjectVersionResponse {
  readonly Status: string;
}

interface DeleteStreamProcessorRequest {
  readonly Name: string;
}

interface DeleteStreamProcessorResponse {
}

interface DescribeCollectionRequest {
  readonly CollectionId: string;
}

interface DescribeCollectionResponse {
  readonly FaceCount: number;
  readonly FaceModelVersion: string;
  readonly CollectionARN: string;
  readonly CreationTimestamp: Date;
}

interface DescribeDatasetRequest {
  readonly DatasetArn: string;
}

interface DescribeDatasetResponse {
  readonly DatasetDescription: DatasetDescription;
}

interface DescribeProjectVersionsRequest {
  readonly ProjectArn: string;
  readonly VersionNames: [];
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface DescribeProjectVersionsResponse {
  readonly ProjectVersionDescriptions: [];
  readonly NextToken: string;
}

interface DescribeProjectsRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly ProjectNames: [];
}

interface DescribeProjectsResponse {
  readonly ProjectDescriptions: [];
  readonly NextToken: string;
}

interface DescribeStreamProcessorRequest {
  readonly Name: string;
}

interface DescribeStreamProcessorResponse {
  readonly Name: string;
  readonly StreamProcessorArn: string;
  readonly Status: string;
  readonly StatusMessage: string;
  readonly CreationTimestamp: Date;
  readonly LastUpdateTimestamp: Date;
  readonly Input: StreamProcessorInput;
  readonly Output: StreamProcessorOutput;
  readonly RoleArn: string;
  readonly Settings: StreamProcessorSettings;
}

interface DetectCustomLabelsRequest {
  readonly ProjectVersionArn: string;
  readonly Image: Image;
  readonly MaxResults: number;
  readonly MinConfidence: unknown;
}

interface DetectCustomLabelsResponse {
  readonly CustomLabels: [];
}

interface DetectFacesRequest {
  readonly Image: Image;
  readonly Attributes: [];
}

interface DetectFacesResponse {
  readonly FaceDetails: [];
  readonly OrientationCorrection: string;
}

interface DetectLabelsRequest {
  readonly Image: Image;
  readonly MaxLabels: number;
  readonly MinConfidence: unknown;
}

interface DetectLabelsResponse {
  readonly Labels: [];
  readonly OrientationCorrection: string;
  readonly LabelModelVersion: string;
}

interface DetectModerationLabelsRequest {
  readonly Image: Image;
  readonly MinConfidence: unknown;
  readonly HumanLoopConfig: HumanLoopConfig;
}

interface DetectModerationLabelsResponse {
  readonly ModerationLabels: [];
  readonly ModerationModelVersion: string;
  readonly HumanLoopActivationOutput: HumanLoopActivationOutput;
}

interface DetectProtectiveEquipmentRequest {
  readonly Image: Image;
  readonly SummarizationAttributes: ProtectiveEquipmentSummarizationAttributes;
}

interface DetectProtectiveEquipmentResponse {
  readonly ProtectiveEquipmentModelVersion: string;
  readonly Persons: [];
  readonly Summary: ProtectiveEquipmentSummary;
}

interface DetectTextFilters {
  readonly WordFilter: DetectionFilter;
  readonly RegionsOfInterest: [];
}

interface DetectTextRequest {
  readonly Image: Image;
  readonly Filters: DetectTextFilters;
}

interface DetectTextResponse {
  readonly TextDetections: [];
  readonly TextModelVersion: string;
}

interface DetectionFilter {
  readonly MinConfidence: unknown;
  readonly MinBoundingBoxHeight: unknown;
  readonly MinBoundingBoxWidth: unknown;
}

interface DistributeDataset {
  readonly Arn: string;
}

interface DistributeDatasetEntriesRequest {
  readonly Datasets: [];
}

interface DistributeDatasetEntriesResponse {
}

interface Emotion {
  readonly Type: string;
  readonly Confidence: unknown;
}

interface EquipmentDetection {
  readonly BoundingBox: BoundingBox;
  readonly Confidence: unknown;
  readonly Type: string;
  readonly CoversBodyPart: CoversBodyPart;
}

interface EvaluationResult {
  readonly F1Score: unknown;
  readonly Summary: Summary;
}

interface EyeOpen {
  readonly Value: boolean;
  readonly Confidence: unknown;
}

interface Eyeglasses {
  readonly Value: boolean;
  readonly Confidence: unknown;
}

interface Face {
  readonly FaceId: string;
  readonly BoundingBox: BoundingBox;
  readonly ImageId: string;
  readonly ExternalImageId: string;
  readonly Confidence: unknown;
}

interface FaceDetail {
  readonly BoundingBox: BoundingBox;
  readonly AgeRange: AgeRange;
  readonly Smile: Smile;
  readonly Eyeglasses: Eyeglasses;
  readonly Sunglasses: Sunglasses;
  readonly Gender: Gender;
  readonly Beard: Beard;
  readonly Mustache: Mustache;
  readonly EyesOpen: EyeOpen;
  readonly MouthOpen: MouthOpen;
  readonly Emotions: [];
  readonly Landmarks: [];
  readonly Pose: Pose;
  readonly Quality: ImageQuality;
  readonly Confidence: unknown;
}

interface FaceDetection {
  readonly Timestamp: number;
  readonly Face: FaceDetail;
}

interface FaceMatch {
  readonly Similarity: unknown;
  readonly Face: Face;
}

interface FaceRecord {
  readonly Face: Face;
  readonly FaceDetail: FaceDetail;
}

interface FaceSearchSettings {
  readonly CollectionId: string;
  readonly FaceMatchThreshold: unknown;
}

interface Gender {
  readonly Value: string;
  readonly Confidence: unknown;
}

interface Geometry {
  readonly BoundingBox: BoundingBox;
  readonly Polygon: [];
}

interface GetCelebrityInfoRequest {
  readonly Id: string;
}

interface GetCelebrityInfoResponse {
  readonly Urls: [];
  readonly Name: string;
  readonly KnownGender: KnownGender;
}

interface GetCelebrityRecognitionRequest {
  readonly JobId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly SortBy: string;
}

interface GetCelebrityRecognitionResponse {
  readonly JobStatus: string;
  readonly StatusMessage: string;
  readonly VideoMetadata: VideoMetadata;
  readonly NextToken: string;
  readonly Celebrities: [];
}

interface GetContentModerationRequest {
  readonly JobId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly SortBy: string;
}

interface GetContentModerationResponse {
  readonly JobStatus: string;
  readonly StatusMessage: string;
  readonly VideoMetadata: VideoMetadata;
  readonly ModerationLabels: [];
  readonly NextToken: string;
  readonly ModerationModelVersion: string;
}

interface GetFaceDetectionRequest {
  readonly JobId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface GetFaceDetectionResponse {
  readonly JobStatus: string;
  readonly StatusMessage: string;
  readonly VideoMetadata: VideoMetadata;
  readonly NextToken: string;
  readonly Faces: [];
}

interface GetFaceSearchRequest {
  readonly JobId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly SortBy: string;
}

interface GetFaceSearchResponse {
  readonly JobStatus: string;
  readonly StatusMessage: string;
  readonly NextToken: string;
  readonly VideoMetadata: VideoMetadata;
  readonly Persons: [];
}

interface GetLabelDetectionRequest {
  readonly JobId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly SortBy: string;
}

interface GetLabelDetectionResponse {
  readonly JobStatus: string;
  readonly StatusMessage: string;
  readonly VideoMetadata: VideoMetadata;
  readonly NextToken: string;
  readonly Labels: [];
  readonly LabelModelVersion: string;
}

interface GetPersonTrackingRequest {
  readonly JobId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly SortBy: string;
}

interface GetPersonTrackingResponse {
  readonly JobStatus: string;
  readonly StatusMessage: string;
  readonly VideoMetadata: VideoMetadata;
  readonly NextToken: string;
  readonly Persons: [];
}

interface GetSegmentDetectionRequest {
  readonly JobId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface GetSegmentDetectionResponse {
  readonly JobStatus: string;
  readonly StatusMessage: string;
  readonly VideoMetadata: [];
  readonly AudioMetadata: [];
  readonly NextToken: string;
  readonly Segments: [];
  readonly SelectedSegmentTypes: [];
}

interface GetTextDetectionRequest {
  readonly JobId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface GetTextDetectionResponse {
  readonly JobStatus: string;
  readonly StatusMessage: string;
  readonly VideoMetadata: VideoMetadata;
  readonly TextDetections: [];
  readonly NextToken: string;
  readonly TextModelVersion: string;
}

interface GroundTruthManifest {
  readonly S3Object: S3Object;
}

interface HumanLoopActivationOutput {
  readonly HumanLoopArn: string;
  readonly HumanLoopActivationReasons: [];
  readonly HumanLoopActivationConditionsEvaluationResults: string;
}

interface HumanLoopConfig {
  readonly HumanLoopName: string;
  readonly FlowDefinitionArn: string;
  readonly DataAttributes: HumanLoopDataAttributes;
}

interface HumanLoopDataAttributes {
  readonly ContentClassifiers: [];
}

interface HumanLoopQuotaExceededException {
  readonly ResourceType: string;
  readonly QuotaCode: string;
  readonly ServiceCode: string;
}

interface IdempotentParameterMismatchException {
}

interface Image {
  readonly Bytes: unknown;
  readonly S3Object: S3Object;
}

interface ImageQuality {
  readonly Brightness: unknown;
  readonly Sharpness: unknown;
}

interface ImageTooLargeException {
}

interface IndexFacesRequest {
  readonly CollectionId: string;
  readonly Image: Image;
  readonly ExternalImageId: string;
  readonly DetectionAttributes: [];
  readonly MaxFaces: number;
  readonly QualityFilter: string;
}

interface IndexFacesResponse {
  readonly FaceRecords: [];
  readonly OrientationCorrection: string;
  readonly FaceModelVersion: string;
  readonly UnindexedFaces: [];
}

interface Instance {
  readonly BoundingBox: BoundingBox;
  readonly Confidence: unknown;
}

interface InternalServerError {
}

interface InvalidImageFormatException {
}

interface InvalidPaginationTokenException {
}

interface InvalidParameterException {
}

interface InvalidS3ObjectException {
}

interface KinesisDataStream {
  readonly Arn: string;
}

interface KinesisVideoStream {
  readonly Arn: string;
}

interface KnownGender {
  readonly Type: string;
}

interface Label {
  readonly Name: string;
  readonly Confidence: unknown;
  readonly Instances: [];
  readonly Parents: [];
}

interface LabelDetection {
  readonly Timestamp: number;
  readonly Label: Label;
}

interface Landmark {
  readonly Type: string;
  readonly X: unknown;
  readonly Y: unknown;
}

interface LimitExceededException {
}

interface ListCollectionsRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListCollectionsResponse {
  readonly CollectionIds: [];
  readonly NextToken: string;
  readonly FaceModelVersions: [];
}

interface ListDatasetEntriesRequest {
  readonly DatasetArn: string;
  readonly ContainsLabels: [];
  readonly Labeled: boolean;
  readonly SourceRefContains: string;
  readonly HasErrors: boolean;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListDatasetEntriesResponse {
  readonly DatasetEntries: [];
  readonly NextToken: string;
}

interface ListDatasetLabelsRequest {
  readonly DatasetArn: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListDatasetLabelsResponse {
  readonly DatasetLabelDescriptions: [];
  readonly NextToken: string;
}

interface ListFacesRequest {
  readonly CollectionId: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListFacesResponse {
  readonly Faces: [];
  readonly NextToken: string;
  readonly FaceModelVersion: string;
}

interface ListStreamProcessorsRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListStreamProcessorsResponse {
  readonly NextToken: string;
  readonly StreamProcessors: [];
}

interface ListTagsForResourceRequest {
  readonly ResourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly Tags: {[key: string]: any};
}

interface ModerationLabel {
  readonly Confidence: unknown;
  readonly Name: string;
  readonly ParentName: string;
}

interface MouthOpen {
  readonly Value: boolean;
  readonly Confidence: unknown;
}

interface Mustache {
  readonly Value: boolean;
  readonly Confidence: unknown;
}

interface NotificationChannel {
  readonly SNSTopicArn: string;
  readonly RoleArn: string;
}

interface OutputConfig {
  readonly S3Bucket: string;
  readonly S3KeyPrefix: string;
}

interface Parent {
  readonly Name: string;
}

interface PersonDetail {
  readonly Index: number;
  readonly BoundingBox: BoundingBox;
  readonly Face: FaceDetail;
}

interface PersonDetection {
  readonly Timestamp: number;
  readonly Person: PersonDetail;
}

interface PersonMatch {
  readonly Timestamp: number;
  readonly Person: PersonDetail;
  readonly FaceMatches: [];
}

interface Point {
  readonly X: unknown;
  readonly Y: unknown;
}

interface Pose {
  readonly Roll: unknown;
  readonly Yaw: unknown;
  readonly Pitch: unknown;
}

interface ProjectDescription {
  readonly ProjectArn: string;
  readonly CreationTimestamp: Date;
  readonly Status: string;
  readonly Datasets: [];
}

interface ProjectVersionDescription {
  readonly ProjectVersionArn: string;
  readonly CreationTimestamp: Date;
  readonly MinInferenceUnits: number;
  readonly Status: string;
  readonly StatusMessage: string;
  readonly BillableTrainingTimeInSeconds: number;
  readonly TrainingEndTimestamp: Date;
  readonly OutputConfig: OutputConfig;
  readonly TrainingDataResult: TrainingDataResult;
  readonly TestingDataResult: TestingDataResult;
  readonly EvaluationResult: EvaluationResult;
  readonly ManifestSummary: GroundTruthManifest;
  readonly KmsKeyId: string;
}

interface ProtectiveEquipmentBodyPart {
  readonly Name: string;
  readonly Confidence: unknown;
  readonly EquipmentDetections: [];
}

interface ProtectiveEquipmentPerson {
  readonly BodyParts: [];
  readonly BoundingBox: BoundingBox;
  readonly Confidence: unknown;
  readonly Id: number;
}

interface ProtectiveEquipmentSummarizationAttributes {
  readonly MinConfidence: unknown;
  readonly RequiredEquipmentTypes: [];
}

interface ProtectiveEquipmentSummary {
  readonly PersonsWithRequiredEquipment: [];
  readonly PersonsWithoutRequiredEquipment: [];
  readonly PersonsIndeterminate: [];
}

interface ProvisionedThroughputExceededException {
}

interface RecognizeCelebritiesRequest {
  readonly Image: Image;
}

interface RecognizeCelebritiesResponse {
  readonly CelebrityFaces: [];
  readonly UnrecognizedFaces: [];
  readonly OrientationCorrection: string;
}

interface RegionOfInterest {
  readonly BoundingBox: BoundingBox;
}

interface ResourceAlreadyExistsException {
}

interface ResourceInUseException {
}

interface ResourceNotFoundException {
}

interface ResourceNotReadyException {
}

interface S3Object {
  readonly Bucket: string;
  readonly Name: string;
  readonly Version: string;
}

interface SearchFacesByImageRequest {
  readonly CollectionId: string;
  readonly Image: Image;
  readonly MaxFaces: number;
  readonly FaceMatchThreshold: unknown;
  readonly QualityFilter: string;
}

interface SearchFacesByImageResponse {
  readonly SearchedFaceBoundingBox: BoundingBox;
  readonly SearchedFaceConfidence: unknown;
  readonly FaceMatches: [];
  readonly FaceModelVersion: string;
}

interface SearchFacesRequest {
  readonly CollectionId: string;
  readonly FaceId: string;
  readonly MaxFaces: number;
  readonly FaceMatchThreshold: unknown;
}

interface SearchFacesResponse {
  readonly SearchedFaceId: string;
  readonly FaceMatches: [];
  readonly FaceModelVersion: string;
}

interface SegmentDetection {
  readonly Type: string;
  readonly StartTimestampMillis: number;
  readonly EndTimestampMillis: number;
  readonly DurationMillis: number;
  readonly StartTimecodeSMPTE: string;
  readonly EndTimecodeSMPTE: string;
  readonly DurationSMPTE: string;
  readonly TechnicalCueSegment: TechnicalCueSegment;
  readonly ShotSegment: ShotSegment;
  readonly StartFrameNumber: number;
  readonly EndFrameNumber: number;
  readonly DurationFrames: number;
}

interface SegmentTypeInfo {
  readonly Type: string;
  readonly ModelVersion: string;
}

interface ServiceQuotaExceededException {
}

interface ShotSegment {
  readonly Index: number;
  readonly Confidence: unknown;
}

interface Smile {
  readonly Value: boolean;
  readonly Confidence: unknown;
}

interface StartCelebrityRecognitionRequest {
  readonly Video: Video;
  readonly ClientRequestToken: string;
  readonly NotificationChannel: NotificationChannel;
  readonly JobTag: string;
}

interface StartCelebrityRecognitionResponse {
  readonly JobId: string;
}

interface StartContentModerationRequest {
  readonly Video: Video;
  readonly MinConfidence: unknown;
  readonly ClientRequestToken: string;
  readonly NotificationChannel: NotificationChannel;
  readonly JobTag: string;
}

interface StartContentModerationResponse {
  readonly JobId: string;
}

interface StartFaceDetectionRequest {
  readonly Video: Video;
  readonly ClientRequestToken: string;
  readonly NotificationChannel: NotificationChannel;
  readonly FaceAttributes: string;
  readonly JobTag: string;
}

interface StartFaceDetectionResponse {
  readonly JobId: string;
}

interface StartFaceSearchRequest {
  readonly Video: Video;
  readonly ClientRequestToken: string;
  readonly FaceMatchThreshold: unknown;
  readonly CollectionId: string;
  readonly NotificationChannel: NotificationChannel;
  readonly JobTag: string;
}

interface StartFaceSearchResponse {
  readonly JobId: string;
}

interface StartLabelDetectionRequest {
  readonly Video: Video;
  readonly ClientRequestToken: string;
  readonly MinConfidence: unknown;
  readonly NotificationChannel: NotificationChannel;
  readonly JobTag: string;
}

interface StartLabelDetectionResponse {
  readonly JobId: string;
}

interface StartPersonTrackingRequest {
  readonly Video: Video;
  readonly ClientRequestToken: string;
  readonly NotificationChannel: NotificationChannel;
  readonly JobTag: string;
}

interface StartPersonTrackingResponse {
  readonly JobId: string;
}

interface StartProjectVersionRequest {
  readonly ProjectVersionArn: string;
  readonly MinInferenceUnits: number;
}

interface StartProjectVersionResponse {
  readonly Status: string;
}

interface StartSegmentDetectionFilters {
  readonly TechnicalCueFilter: StartTechnicalCueDetectionFilter;
  readonly ShotFilter: StartShotDetectionFilter;
}

interface StartSegmentDetectionRequest {
  readonly Video: Video;
  readonly ClientRequestToken: string;
  readonly NotificationChannel: NotificationChannel;
  readonly JobTag: string;
  readonly Filters: StartSegmentDetectionFilters;
  readonly SegmentTypes: [];
}

interface StartSegmentDetectionResponse {
  readonly JobId: string;
}

interface StartShotDetectionFilter {
  readonly MinSegmentConfidence: unknown;
}

interface StartStreamProcessorRequest {
  readonly Name: string;
}

interface StartStreamProcessorResponse {
}

interface StartTechnicalCueDetectionFilter {
  readonly MinSegmentConfidence: unknown;
  readonly BlackFrame: BlackFrame;
}

interface StartTextDetectionFilters {
  readonly WordFilter: DetectionFilter;
  readonly RegionsOfInterest: [];
}

interface StartTextDetectionRequest {
  readonly Video: Video;
  readonly ClientRequestToken: string;
  readonly NotificationChannel: NotificationChannel;
  readonly JobTag: string;
  readonly Filters: StartTextDetectionFilters;
}

interface StartTextDetectionResponse {
  readonly JobId: string;
}

interface StopProjectVersionRequest {
  readonly ProjectVersionArn: string;
}

interface StopProjectVersionResponse {
  readonly Status: string;
}

interface StopStreamProcessorRequest {
  readonly Name: string;
}

interface StopStreamProcessorResponse {
}

interface StreamProcessor {
  readonly Name: string;
  readonly Status: string;
}

interface StreamProcessorInput {
  readonly KinesisVideoStream: KinesisVideoStream;
}

interface StreamProcessorOutput {
  readonly KinesisDataStream: KinesisDataStream;
}

interface StreamProcessorSettings {
  readonly FaceSearch: FaceSearchSettings;
}

interface Summary {
  readonly S3Object: S3Object;
}

interface Sunglasses {
  readonly Value: boolean;
  readonly Confidence: unknown;
}

interface TagResourceRequest {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}

interface TagResourceResponse {
}

interface TechnicalCueSegment {
  readonly Type: string;
  readonly Confidence: unknown;
}

interface TestingData {
  readonly Assets: [];
  readonly AutoCreate: boolean;
}

interface TestingDataResult {
  readonly Input: TestingData;
  readonly Output: TestingData;
  readonly Validation: ValidationData;
}

interface TextDetection {
  readonly DetectedText: string;
  readonly Type: string;
  readonly Id: number;
  readonly ParentId: number;
  readonly Confidence: unknown;
  readonly Geometry: Geometry;
}

interface TextDetectionResult {
  readonly Timestamp: number;
  readonly TextDetection: TextDetection;
}

interface ThrottlingException {
}

interface TrainingData {
  readonly Assets: [];
}

interface TrainingDataResult {
  readonly Input: TrainingData;
  readonly Output: TrainingData;
  readonly Validation: ValidationData;
}

interface UnindexedFace {
  readonly Reasons: [];
  readonly FaceDetail: FaceDetail;
}

interface UntagResourceRequest {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

interface UntagResourceResponse {
}

interface UpdateDatasetEntriesRequest {
  readonly DatasetArn: string;
  readonly Changes: DatasetChanges;
}

interface UpdateDatasetEntriesResponse {
}

interface ValidationData {
  readonly Assets: [];
}

interface Video {
  readonly S3Object: S3Object;
}

interface VideoMetadata {
  readonly Codec: string;
  readonly DurationMillis: number;
  readonly Format: string;
  readonly FrameRate: unknown;
  readonly FrameHeight: number;
  readonly FrameWidth: number;
  readonly ColorRange: string;
}

interface VideoTooLargeException {
}

