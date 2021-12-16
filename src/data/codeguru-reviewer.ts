/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AssociateRepository {
  readonly Repository: Repository;
  readonly ClientRequestToken: string;
  readonly Tags: {[key: string]: any};
  readonly KMSKeyDetails: KMSKeyDetails;
}
export interface CreateCodeReview {
  readonly Name: string;
  readonly RepositoryAssociationArn: string;
  readonly Type: CodeReviewType;
  readonly ClientRequestToken: string;
}
export interface DescribeCodeReview {
  readonly CodeReviewArn: string;
}
export interface DescribeRecommendationFeedback {
  readonly CodeReviewArn: string;
  readonly RecommendationId: string;
  readonly UserId: string;
}
export interface DescribeRepositoryAssociation {
  readonly AssociationArn: string;
}
export interface DisassociateRepository {
  readonly AssociationArn: string;
}
export interface ListCodeReviews {
  readonly ProviderTypes: [];
  readonly States: [];
  readonly RepositoryNames: [];
  readonly Type: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListRecommendationFeedback {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly CodeReviewArn: string;
  readonly UserIds: [];
  readonly RecommendationIds: [];
}
export interface ListRecommendations {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly CodeReviewArn: string;
}
export interface ListRepositoryAssociations {
  readonly ProviderTypes: [];
  readonly States: [];
  readonly Names: [];
  readonly Owners: [];
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListTagsForResource {
  readonly resourceArn: string;
}
export interface PutRecommendationFeedback {
  readonly CodeReviewArn: string;
  readonly RecommendationId: string;
  readonly Reactions: [];
}
export interface TagResource {
  readonly resourceArn: string;
  readonly Tags: {[key: string]: any};
}
export interface UntagResource {
  readonly resourceArn: string;
  readonly TagKeys: [];
}



interface AccessDeniedException {
  readonly Message: string;
}

interface AssociateRepositoryRequest {
  readonly Repository: Repository;
  readonly ClientRequestToken: string;
  readonly Tags: {[key: string]: any};
  readonly KMSKeyDetails: KMSKeyDetails;
}

interface AssociateRepositoryResponse {
  readonly RepositoryAssociation: RepositoryAssociation;
  readonly Tags: {[key: string]: any};
}

interface BranchDiffSourceCodeType {
  readonly SourceBranchName: string;
  readonly DestinationBranchName: string;
}

interface CodeArtifacts {
  readonly SourceCodeArtifactsObjectKey: string;
  readonly BuildArtifactsObjectKey: string;
}

interface CodeCommitRepository {
  readonly Name: string;
}

interface CodeReview {
  readonly Name: string;
  readonly CodeReviewArn: string;
  readonly RepositoryName: string;
  readonly Owner: string;
  readonly ProviderType: string;
  readonly State: string;
  readonly StateReason: string;
  readonly CreatedTimeStamp: Date;
  readonly LastUpdatedTimeStamp: Date;
  readonly Type: string;
  readonly PullRequestId: string;
  readonly SourceCodeType: SourceCodeType;
  readonly AssociationArn: string;
  readonly Metrics: Metrics;
  readonly AnalysisTypes: [];
}

interface CodeReviewSummary {
  readonly Name: string;
  readonly CodeReviewArn: string;
  readonly RepositoryName: string;
  readonly Owner: string;
  readonly ProviderType: string;
  readonly State: string;
  readonly CreatedTimeStamp: Date;
  readonly LastUpdatedTimeStamp: Date;
  readonly Type: string;
  readonly PullRequestId: string;
  readonly MetricsSummary: MetricsSummary;
  readonly SourceCodeType: SourceCodeType;
}

interface CodeReviewType {
  readonly RepositoryAnalysis: RepositoryAnalysis;
  readonly AnalysisTypes: [];
}

interface CommitDiffSourceCodeType {
  readonly SourceCommit: string;
  readonly DestinationCommit: string;
  readonly MergeBaseCommit: string;
}

interface ConflictException {
  readonly Message: string;
}

interface CreateCodeReviewRequest {
  readonly Name: string;
  readonly RepositoryAssociationArn: string;
  readonly Type: CodeReviewType;
  readonly ClientRequestToken: string;
}

interface CreateCodeReviewResponse {
  readonly CodeReview: CodeReview;
}

interface DescribeCodeReviewRequest {
  readonly CodeReviewArn: string;
}

interface DescribeCodeReviewResponse {
  readonly CodeReview: CodeReview;
}

interface DescribeRecommendationFeedbackRequest {
  readonly CodeReviewArn: string;
  readonly RecommendationId: string;
  readonly UserId: string;
}

interface DescribeRecommendationFeedbackResponse {
  readonly RecommendationFeedback: RecommendationFeedback;
}

interface DescribeRepositoryAssociationRequest {
  readonly AssociationArn: string;
}

interface DescribeRepositoryAssociationResponse {
  readonly RepositoryAssociation: RepositoryAssociation;
  readonly Tags: {[key: string]: any};
}

interface DisassociateRepositoryRequest {
  readonly AssociationArn: string;
}

interface DisassociateRepositoryResponse {
  readonly RepositoryAssociation: RepositoryAssociation;
  readonly Tags: {[key: string]: any};
}

interface EventInfo {
  readonly Name: string;
  readonly State: string;
}

interface InternalServerException {
  readonly Message: string;
}

interface KMSKeyDetails {
  readonly KMSKeyId: string;
  readonly EncryptionOption: string;
}

interface ListCodeReviewsRequest {
  readonly ProviderTypes: [];
  readonly States: [];
  readonly RepositoryNames: [];
  readonly Type: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListCodeReviewsResponse {
  readonly CodeReviewSummaries: [];
  readonly NextToken: string;
}

interface ListRecommendationFeedbackRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly CodeReviewArn: string;
  readonly UserIds: [];
  readonly RecommendationIds: [];
}

interface ListRecommendationFeedbackResponse {
  readonly RecommendationFeedbackSummaries: [];
  readonly NextToken: string;
}

interface ListRecommendationsRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly CodeReviewArn: string;
}

interface ListRecommendationsResponse {
  readonly RecommendationSummaries: [];
  readonly NextToken: string;
}

interface ListRepositoryAssociationsRequest {
  readonly ProviderTypes: [];
  readonly States: [];
  readonly Names: [];
  readonly Owners: [];
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListRepositoryAssociationsResponse {
  readonly RepositoryAssociationSummaries: [];
  readonly NextToken: string;
}

interface ListTagsForResourceRequest {
  readonly resourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly Tags: {[key: string]: any};
}

interface Metrics {
  readonly MeteredLinesOfCodeCount: number;
  readonly FindingsCount: number;
}

interface MetricsSummary {
  readonly MeteredLinesOfCodeCount: number;
  readonly FindingsCount: number;
}

interface NotFoundException {
  readonly Message: string;
}

interface PutRecommendationFeedbackRequest {
  readonly CodeReviewArn: string;
  readonly RecommendationId: string;
  readonly Reactions: [];
}

interface PutRecommendationFeedbackResponse {
}

interface RecommendationFeedback {
  readonly CodeReviewArn: string;
  readonly RecommendationId: string;
  readonly Reactions: [];
  readonly UserId: string;
  readonly CreatedTimeStamp: Date;
  readonly LastUpdatedTimeStamp: Date;
}

interface RecommendationFeedbackSummary {
  readonly RecommendationId: string;
  readonly Reactions: [];
  readonly UserId: string;
}

interface RecommendationSummary {
  readonly FilePath: string;
  readonly RecommendationId: string;
  readonly StartLine: number;
  readonly EndLine: number;
  readonly Description: string;
  readonly RecommendationCategory: string;
  readonly RuleMetadata: RuleMetadata;
  readonly Severity: string;
}

interface Repository {
  readonly CodeCommit: CodeCommitRepository;
  readonly Bitbucket: ThirdPartySourceRepository;
  readonly GitHubEnterpriseServer: ThirdPartySourceRepository;
  readonly S3Bucket: S3Repository;
}

interface RepositoryAnalysis {
  readonly RepositoryHead: RepositoryHeadSourceCodeType;
  readonly SourceCodeType: SourceCodeType;
}

interface RepositoryAssociation {
  readonly AssociationId: string;
  readonly AssociationArn: string;
  readonly ConnectionArn: string;
  readonly Name: string;
  readonly Owner: string;
  readonly ProviderType: string;
  readonly State: string;
  readonly StateReason: string;
  readonly LastUpdatedTimeStamp: Date;
  readonly CreatedTimeStamp: Date;
  readonly KMSKeyDetails: KMSKeyDetails;
  readonly S3RepositoryDetails: S3RepositoryDetails;
}

interface RepositoryAssociationSummary {
  readonly AssociationArn: string;
  readonly ConnectionArn: string;
  readonly LastUpdatedTimeStamp: Date;
  readonly AssociationId: string;
  readonly Name: string;
  readonly Owner: string;
  readonly ProviderType: string;
  readonly State: string;
}

interface RepositoryHeadSourceCodeType {
  readonly BranchName: string;
}

interface RequestMetadata {
  readonly RequestId: string;
  readonly Requester: string;
  readonly EventInfo: EventInfo;
  readonly VendorName: string;
}

interface ResourceNotFoundException {
  readonly Message: string;
}

interface RuleMetadata {
  readonly RuleId: string;
  readonly RuleName: string;
  readonly ShortDescription: string;
  readonly LongDescription: string;
  readonly RuleTags: [];
}

interface S3BucketRepository {
  readonly Name: string;
  readonly Details: S3RepositoryDetails;
}

interface S3Repository {
  readonly Name: string;
  readonly BucketName: string;
}

interface S3RepositoryDetails {
  readonly BucketName: string;
  readonly CodeArtifacts: CodeArtifacts;
}

interface SourceCodeType {
  readonly CommitDiff: CommitDiffSourceCodeType;
  readonly RepositoryHead: RepositoryHeadSourceCodeType;
  readonly BranchDiff: BranchDiffSourceCodeType;
  readonly S3BucketRepository: S3BucketRepository;
  readonly RequestMetadata: RequestMetadata;
}

interface TagResourceRequest {
  readonly resourceArn: string;
  readonly Tags: {[key: string]: any};
}

interface TagResourceResponse {
}

interface ThirdPartySourceRepository {
  readonly Name: string;
  readonly ConnectionArn: string;
  readonly Owner: string;
}

interface ThrottlingException {
  readonly Message: string;
}

interface UntagResourceRequest {
  readonly resourceArn: string;
  readonly TagKeys: [];
}

interface UntagResourceResponse {
}

interface ValidationException {
  readonly Message: string;
}

