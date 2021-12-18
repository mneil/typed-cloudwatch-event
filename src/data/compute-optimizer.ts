/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface DeleteRecommendationPreferences {
  readonly resourceType: string;
  readonly scope?: Scope;
  readonly recommendationPreferenceNames: [];
}

export interface DescribeRecommendationExportJobs {
  readonly jobIds?: [];
  readonly filters?: [];
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface ExportAutoScalingGroupRecommendations {
  readonly accountIds?: [];
  readonly filters?: [];
  readonly fieldsToExport?: [];
  readonly s3DestinationConfig: S3DestinationConfig;
  readonly fileFormat?: string;
  readonly includeMemberAccounts?: boolean;
  readonly recommendationPreferences?: RecommendationPreferences;
}

export interface ExportEBSVolumeRecommendations {
  readonly accountIds?: [];
  readonly filters?: [];
  readonly fieldsToExport?: [];
  readonly s3DestinationConfig: S3DestinationConfig;
  readonly fileFormat?: string;
  readonly includeMemberAccounts?: boolean;
}

export interface ExportEC2InstanceRecommendations {
  readonly accountIds?: [];
  readonly filters?: [];
  readonly fieldsToExport?: [];
  readonly s3DestinationConfig: S3DestinationConfig;
  readonly fileFormat?: string;
  readonly includeMemberAccounts?: boolean;
  readonly recommendationPreferences?: RecommendationPreferences;
}

export interface ExportLambdaFunctionRecommendations {
  readonly accountIds?: [];
  readonly filters?: [];
  readonly fieldsToExport?: [];
  readonly s3DestinationConfig: S3DestinationConfig;
  readonly fileFormat?: string;
  readonly includeMemberAccounts?: boolean;
}

export interface GetAutoScalingGroupRecommendations {
  readonly accountIds?: [];
  readonly autoScalingGroupArns?: [];
  readonly nextToken?: string;
  readonly maxResults?: number;
  readonly filters?: [];
  readonly recommendationPreferences?: RecommendationPreferences;
}

export interface GetEBSVolumeRecommendations {
  readonly volumeArns?: [];
  readonly nextToken?: string;
  readonly maxResults?: number;
  readonly filters?: [];
  readonly accountIds?: [];
}

export interface GetEC2InstanceRecommendations {
  readonly instanceArns?: [];
  readonly nextToken?: string;
  readonly maxResults?: number;
  readonly filters?: [];
  readonly accountIds?: [];
  readonly recommendationPreferences?: RecommendationPreferences;
}

export interface GetEC2RecommendationProjectedMetrics {
  readonly instanceArn: string;
  readonly stat: string;
  readonly period: number;
  readonly startTime: Date;
  readonly endTime: Date;
  readonly recommendationPreferences?: RecommendationPreferences;
}

export interface GetEffectiveRecommendationPreferences {
  readonly resourceArn: string;
}

export interface GetEnrollmentStatus {
}

export interface GetEnrollmentStatusesForOrganization {
  readonly filters?: [];
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface GetLambdaFunctionRecommendations {
  readonly functionArns?: [];
  readonly accountIds?: [];
  readonly filters?: [];
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface GetRecommendationPreferences {
  readonly resourceType: string;
  readonly scope?: Scope;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface GetRecommendationSummaries {
  readonly accountIds?: [];
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface PutRecommendationPreferences {
  readonly resourceType: string;
  readonly scope?: Scope;
  readonly enhancedInfrastructureMetrics?: string;
}

export interface UpdateEnrollmentStatus {
  readonly status: string;
  readonly includeMemberAccounts?: boolean;
}

export interface AccessDeniedException {
  readonly message?: string;
}

export interface AccountEnrollmentStatus {
  readonly accountId?: string;
  readonly status?: string;
  readonly statusReason?: string;
  readonly lastUpdatedTimestamp?: Date;
}

export interface AutoScalingGroupConfiguration {
  readonly desiredCapacity?: number;
  readonly minSize?: number;
  readonly maxSize?: number;
  readonly instanceType?: string;
}

export interface AutoScalingGroupRecommendation {
  readonly accountId?: string;
  readonly autoScalingGroupArn?: string;
  readonly autoScalingGroupName?: string;
  readonly finding?: string;
  readonly utilizationMetrics?: [];
  readonly lookBackPeriodInDays?: unknown;
  readonly currentConfiguration?: AutoScalingGroupConfiguration;
  readonly recommendationOptions?: [];
  readonly lastRefreshTimestamp?: Date;
  readonly currentPerformanceRisk?: string;
  readonly effectiveRecommendationPreferences?: EffectiveRecommendationPreferences;
}

export interface AutoScalingGroupRecommendationOption {
  readonly configuration?: AutoScalingGroupConfiguration;
  readonly projectedUtilizationMetrics?: [];
  readonly performanceRisk?: unknown;
  readonly rank?: number;
  readonly savingsOpportunity?: SavingsOpportunity;
}

export interface CurrentPerformanceRiskRatings {
  readonly high?: number;
  readonly medium?: number;
  readonly low?: number;
  readonly veryLow?: number;
}

export interface DeleteRecommendationPreferencesRequest {
  readonly resourceType: string;
  readonly scope?: Scope;
  readonly recommendationPreferenceNames: [];
}

export interface DeleteRecommendationPreferencesResponse {
}

export interface DescribeRecommendationExportJobsRequest {
  readonly jobIds?: [];
  readonly filters?: [];
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface DescribeRecommendationExportJobsResponse {
  readonly recommendationExportJobs?: [];
  readonly nextToken?: string;
}

export interface EBSFilter {
  readonly name?: string;
  readonly values?: [];
}

export interface EBSUtilizationMetric {
  readonly name?: string;
  readonly statistic?: string;
  readonly value?: unknown;
}

export interface EffectiveRecommendationPreferences {
  readonly cpuVendorArchitectures?: [];
  readonly enhancedInfrastructureMetrics?: string;
}

export interface EnrollmentFilter {
  readonly name?: string;
  readonly values?: [];
}

export interface EstimatedMonthlySavings {
  readonly currency?: string;
  readonly value?: unknown;
}

export interface ExportAutoScalingGroupRecommendationsRequest {
  readonly accountIds?: [];
  readonly filters?: [];
  readonly fieldsToExport?: [];
  readonly s3DestinationConfig: S3DestinationConfig;
  readonly fileFormat?: string;
  readonly includeMemberAccounts?: boolean;
  readonly recommendationPreferences?: RecommendationPreferences;
}

export interface ExportAutoScalingGroupRecommendationsResponse {
  readonly jobId?: string;
  readonly s3Destination?: S3Destination;
}

export interface ExportDestination {
  readonly s3?: S3Destination;
}

export interface ExportEBSVolumeRecommendationsRequest {
  readonly accountIds?: [];
  readonly filters?: [];
  readonly fieldsToExport?: [];
  readonly s3DestinationConfig: S3DestinationConfig;
  readonly fileFormat?: string;
  readonly includeMemberAccounts?: boolean;
}

export interface ExportEBSVolumeRecommendationsResponse {
  readonly jobId?: string;
  readonly s3Destination?: S3Destination;
}

export interface ExportEC2InstanceRecommendationsRequest {
  readonly accountIds?: [];
  readonly filters?: [];
  readonly fieldsToExport?: [];
  readonly s3DestinationConfig: S3DestinationConfig;
  readonly fileFormat?: string;
  readonly includeMemberAccounts?: boolean;
  readonly recommendationPreferences?: RecommendationPreferences;
}

export interface ExportEC2InstanceRecommendationsResponse {
  readonly jobId?: string;
  readonly s3Destination?: S3Destination;
}

export interface ExportLambdaFunctionRecommendationsRequest {
  readonly accountIds?: [];
  readonly filters?: [];
  readonly fieldsToExport?: [];
  readonly s3DestinationConfig: S3DestinationConfig;
  readonly fileFormat?: string;
  readonly includeMemberAccounts?: boolean;
}

export interface ExportLambdaFunctionRecommendationsResponse {
  readonly jobId?: string;
  readonly s3Destination?: S3Destination;
}

export interface Filter {
  readonly name?: string;
  readonly values?: [];
}

export interface GetAutoScalingGroupRecommendationsRequest {
  readonly accountIds?: [];
  readonly autoScalingGroupArns?: [];
  readonly nextToken?: string;
  readonly maxResults?: number;
  readonly filters?: [];
  readonly recommendationPreferences?: RecommendationPreferences;
}

export interface GetAutoScalingGroupRecommendationsResponse {
  readonly nextToken?: string;
  readonly autoScalingGroupRecommendations?: [];
  readonly errors?: [];
}

export interface GetEBSVolumeRecommendationsRequest {
  readonly volumeArns?: [];
  readonly nextToken?: string;
  readonly maxResults?: number;
  readonly filters?: [];
  readonly accountIds?: [];
}

export interface GetEBSVolumeRecommendationsResponse {
  readonly nextToken?: string;
  readonly volumeRecommendations?: [];
  readonly errors?: [];
}

export interface GetEC2InstanceRecommendationsRequest {
  readonly instanceArns?: [];
  readonly nextToken?: string;
  readonly maxResults?: number;
  readonly filters?: [];
  readonly accountIds?: [];
  readonly recommendationPreferences?: RecommendationPreferences;
}

export interface GetEC2InstanceRecommendationsResponse {
  readonly nextToken?: string;
  readonly instanceRecommendations?: [];
  readonly errors?: [];
}

export interface GetEC2RecommendationProjectedMetricsRequest {
  readonly instanceArn: string;
  readonly stat: string;
  readonly period: number;
  readonly startTime: Date;
  readonly endTime: Date;
  readonly recommendationPreferences?: RecommendationPreferences;
}

export interface GetEC2RecommendationProjectedMetricsResponse {
  readonly recommendedOptionProjectedMetrics?: [];
}

export interface GetEffectiveRecommendationPreferencesRequest {
  readonly resourceArn: string;
}

export interface GetEffectiveRecommendationPreferencesResponse {
  readonly enhancedInfrastructureMetrics?: string;
}

export interface GetEnrollmentStatusRequest {
}

export interface GetEnrollmentStatusResponse {
  readonly status?: string;
  readonly statusReason?: string;
  readonly memberAccountsEnrolled?: boolean;
  readonly lastUpdatedTimestamp?: Date;
  readonly numberOfMemberAccountsOptedIn?: number;
}

export interface GetEnrollmentStatusesForOrganizationRequest {
  readonly filters?: [];
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface GetEnrollmentStatusesForOrganizationResponse {
  readonly accountEnrollmentStatuses?: [];
  readonly nextToken?: string;
}

export interface GetLambdaFunctionRecommendationsRequest {
  readonly functionArns?: [];
  readonly accountIds?: [];
  readonly filters?: [];
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface GetLambdaFunctionRecommendationsResponse {
  readonly nextToken?: string;
  readonly lambdaFunctionRecommendations?: [];
}

export interface GetRecommendationError {
  readonly identifier?: string;
  readonly code?: string;
  readonly message?: string;
}

export interface GetRecommendationPreferencesRequest {
  readonly resourceType: string;
  readonly scope?: Scope;
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface GetRecommendationPreferencesResponse {
  readonly nextToken?: string;
  readonly recommendationPreferencesDetails?: [];
}

export interface GetRecommendationSummariesRequest {
  readonly accountIds?: [];
  readonly nextToken?: string;
  readonly maxResults?: number;
}

export interface GetRecommendationSummariesResponse {
  readonly nextToken?: string;
  readonly recommendationSummaries?: [];
}

export interface InstanceRecommendation {
  readonly instanceArn?: string;
  readonly accountId?: string;
  readonly instanceName?: string;
  readonly currentInstanceType?: string;
  readonly finding?: string;
  readonly findingReasonCodes?: [];
  readonly utilizationMetrics?: [];
  readonly lookBackPeriodInDays?: unknown;
  readonly recommendationOptions?: [];
  readonly recommendationSources?: [];
  readonly lastRefreshTimestamp?: Date;
  readonly currentPerformanceRisk?: string;
  readonly effectiveRecommendationPreferences?: EffectiveRecommendationPreferences;
}

export interface InstanceRecommendationOption {
  readonly instanceType?: string;
  readonly projectedUtilizationMetrics?: [];
  readonly platformDifferences?: [];
  readonly performanceRisk?: unknown;
  readonly rank?: number;
  readonly savingsOpportunity?: SavingsOpportunity;
}

export interface InternalServerException {
  readonly message?: string;
}

export interface InvalidParameterValueException {
  readonly message?: string;
}

export interface JobFilter {
  readonly name?: string;
  readonly values?: [];
}

export interface LambdaFunctionMemoryProjectedMetric {
  readonly name?: string;
  readonly statistic?: string;
  readonly value?: unknown;
}

export interface LambdaFunctionMemoryRecommendationOption {
  readonly rank?: number;
  readonly memorySize?: number;
  readonly projectedUtilizationMetrics?: [];
  readonly savingsOpportunity?: SavingsOpportunity;
}

export interface LambdaFunctionRecommendation {
  readonly functionArn?: string;
  readonly functionVersion?: string;
  readonly accountId?: string;
  readonly currentMemorySize?: number;
  readonly numberOfInvocations?: number;
  readonly utilizationMetrics?: [];
  readonly lookbackPeriodInDays?: unknown;
  readonly lastRefreshTimestamp?: Date;
  readonly finding?: string;
  readonly findingReasonCodes?: [];
  readonly memorySizeRecommendationOptions?: [];
  readonly currentPerformanceRisk?: string;
}

export interface LambdaFunctionRecommendationFilter {
  readonly name?: string;
  readonly values?: [];
}

export interface LambdaFunctionUtilizationMetric {
  readonly name?: string;
  readonly statistic?: string;
  readonly value?: unknown;
}

export interface LimitExceededException {
  readonly message?: string;
}

export interface MissingAuthenticationToken {
  readonly message?: string;
}

export interface OptInRequiredException {
  readonly message?: string;
}

export interface ProjectedMetric {
  readonly name?: string;
  readonly timestamps?: [];
  readonly values?: [];
}

export interface PutRecommendationPreferencesRequest {
  readonly resourceType: string;
  readonly scope?: Scope;
  readonly enhancedInfrastructureMetrics?: string;
}

export interface PutRecommendationPreferencesResponse {
}

export interface ReasonCodeSummary {
  readonly name?: string;
  readonly value?: unknown;
}

export interface RecommendationExportJob {
  readonly jobId?: string;
  readonly destination?: ExportDestination;
  readonly resourceType?: string;
  readonly status?: string;
  readonly creationTimestamp?: Date;
  readonly lastUpdatedTimestamp?: Date;
  readonly failureReason?: string;
}

export interface RecommendationPreferences {
  readonly cpuVendorArchitectures?: [];
}

export interface RecommendationPreferencesDetail {
  readonly scope?: Scope;
  readonly resourceType?: string;
  readonly enhancedInfrastructureMetrics?: string;
}

export interface RecommendationSource {
  readonly recommendationSourceArn?: string;
  readonly recommendationSourceType?: string;
}

export interface RecommendationSummary {
  readonly summaries?: [];
  readonly recommendationResourceType?: string;
  readonly accountId?: string;
  readonly savingsOpportunity?: SavingsOpportunity;
  readonly currentPerformanceRiskRatings?: CurrentPerformanceRiskRatings;
}

export interface RecommendedOptionProjectedMetric {
  readonly recommendedInstanceType?: string;
  readonly rank?: number;
  readonly projectedMetrics?: [];
}

export interface ResourceNotFoundException {
  readonly message?: string;
}

export interface S3Destination {
  readonly bucket?: string;
  readonly key?: string;
  readonly metadataKey?: string;
}

export interface S3DestinationConfig {
  readonly bucket?: string;
  readonly keyPrefix?: string;
}

export interface SavingsOpportunity {
  readonly savingsOpportunityPercentage?: unknown;
  readonly estimatedMonthlySavings?: EstimatedMonthlySavings;
}

export interface Scope {
  readonly name?: string;
  readonly value?: string;
}

export interface ServiceUnavailableException {
  readonly message?: string;
}

export interface Summary {
  readonly name?: string;
  readonly value?: unknown;
  readonly reasonCodeSummaries?: [];
}

export interface ThrottlingException {
  readonly message: string;
}

export interface UpdateEnrollmentStatusRequest {
  readonly status: string;
  readonly includeMemberAccounts?: boolean;
}

export interface UpdateEnrollmentStatusResponse {
  readonly status?: string;
  readonly statusReason?: string;
}

export interface UtilizationMetric {
  readonly name?: string;
  readonly statistic?: string;
  readonly value?: unknown;
}

export interface VolumeConfiguration {
  readonly volumeType?: string;
  readonly volumeSize?: number;
  readonly volumeBaselineIOPS?: number;
  readonly volumeBurstIOPS?: number;
  readonly volumeBaselineThroughput?: number;
  readonly volumeBurstThroughput?: number;
}

export interface VolumeRecommendation {
  readonly volumeArn?: string;
  readonly accountId?: string;
  readonly currentConfiguration?: VolumeConfiguration;
  readonly finding?: string;
  readonly utilizationMetrics?: [];
  readonly lookBackPeriodInDays?: unknown;
  readonly volumeRecommendationOptions?: [];
  readonly lastRefreshTimestamp?: Date;
  readonly currentPerformanceRisk?: string;
}

export interface VolumeRecommendationOption {
  readonly configuration?: VolumeConfiguration;
  readonly performanceRisk?: unknown;
  readonly rank?: number;
  readonly savingsOpportunity?: SavingsOpportunity;
}


