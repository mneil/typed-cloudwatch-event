/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface DeleteRecommendationPreferences {
  readonly resourceType: string;
  readonly scope: Scope;
  readonly recommendationPreferenceNames: [];
}
export interface DescribeRecommendationExportJobs {
  readonly jobIds: [];
  readonly filters: [];
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface ExportAutoScalingGroupRecommendations {
  readonly accountIds: [];
  readonly filters: [];
  readonly fieldsToExport: [];
  readonly s3DestinationConfig: S3DestinationConfig;
  readonly fileFormat: string;
  readonly includeMemberAccounts: boolean;
  readonly recommendationPreferences: RecommendationPreferences;
}
export interface ExportEBSVolumeRecommendations {
  readonly accountIds: [];
  readonly filters: [];
  readonly fieldsToExport: [];
  readonly s3DestinationConfig: S3DestinationConfig;
  readonly fileFormat: string;
  readonly includeMemberAccounts: boolean;
}
export interface ExportEC2InstanceRecommendations {
  readonly accountIds: [];
  readonly filters: [];
  readonly fieldsToExport: [];
  readonly s3DestinationConfig: S3DestinationConfig;
  readonly fileFormat: string;
  readonly includeMemberAccounts: boolean;
  readonly recommendationPreferences: RecommendationPreferences;
}
export interface ExportLambdaFunctionRecommendations {
  readonly accountIds: [];
  readonly filters: [];
  readonly fieldsToExport: [];
  readonly s3DestinationConfig: S3DestinationConfig;
  readonly fileFormat: string;
  readonly includeMemberAccounts: boolean;
}
export interface GetAutoScalingGroupRecommendations {
  readonly accountIds: [];
  readonly autoScalingGroupArns: [];
  readonly nextToken: string;
  readonly maxResults: number;
  readonly filters: [];
  readonly recommendationPreferences: RecommendationPreferences;
}
export interface GetEBSVolumeRecommendations {
  readonly volumeArns: [];
  readonly nextToken: string;
  readonly maxResults: number;
  readonly filters: [];
  readonly accountIds: [];
}
export interface GetEC2InstanceRecommendations {
  readonly instanceArns: [];
  readonly nextToken: string;
  readonly maxResults: number;
  readonly filters: [];
  readonly accountIds: [];
  readonly recommendationPreferences: RecommendationPreferences;
}
export interface GetEC2RecommendationProjectedMetrics {
  readonly instanceArn: string;
  readonly stat: string;
  readonly period: number;
  readonly startTime: Date;
  readonly endTime: Date;
  readonly recommendationPreferences: RecommendationPreferences;
}
export interface GetEffectiveRecommendationPreferences {
  readonly resourceArn: string;
}
export interface GetEnrollmentStatus {
}
export interface GetEnrollmentStatusesForOrganization {
  readonly filters: [];
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface GetLambdaFunctionRecommendations {
  readonly functionArns: [];
  readonly accountIds: [];
  readonly filters: [];
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface GetRecommendationPreferences {
  readonly resourceType: string;
  readonly scope: Scope;
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface GetRecommendationSummaries {
  readonly accountIds: [];
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface PutRecommendationPreferences {
  readonly resourceType: string;
  readonly scope: Scope;
  readonly enhancedInfrastructureMetrics: string;
}
export interface UpdateEnrollmentStatus {
  readonly status: string;
  readonly includeMemberAccounts: boolean;
}



interface AccessDeniedException {
  readonly message: string;
}

interface AccountEnrollmentStatus {
  readonly accountId: string;
  readonly status: string;
  readonly statusReason: string;
  readonly lastUpdatedTimestamp: Date;
}

interface AutoScalingGroupConfiguration {
  readonly desiredCapacity: number;
  readonly minSize: number;
  readonly maxSize: number;
  readonly instanceType: string;
}

interface AutoScalingGroupRecommendation {
  readonly accountId: string;
  readonly autoScalingGroupArn: string;
  readonly autoScalingGroupName: string;
  readonly finding: string;
  readonly utilizationMetrics: [];
  readonly lookBackPeriodInDays: unknown;
  readonly currentConfiguration: AutoScalingGroupConfiguration;
  readonly recommendationOptions: [];
  readonly lastRefreshTimestamp: Date;
  readonly currentPerformanceRisk: string;
  readonly effectiveRecommendationPreferences: EffectiveRecommendationPreferences;
}

interface AutoScalingGroupRecommendationOption {
  readonly configuration: AutoScalingGroupConfiguration;
  readonly projectedUtilizationMetrics: [];
  readonly performanceRisk: unknown;
  readonly rank: number;
  readonly savingsOpportunity: SavingsOpportunity;
}

interface CurrentPerformanceRiskRatings {
  readonly high: number;
  readonly medium: number;
  readonly low: number;
  readonly veryLow: number;
}

interface DeleteRecommendationPreferencesRequest {
  readonly resourceType: string;
  readonly scope: Scope;
  readonly recommendationPreferenceNames: [];
}

interface DeleteRecommendationPreferencesResponse {
}

interface DescribeRecommendationExportJobsRequest {
  readonly jobIds: [];
  readonly filters: [];
  readonly nextToken: string;
  readonly maxResults: number;
}

interface DescribeRecommendationExportJobsResponse {
  readonly recommendationExportJobs: [];
  readonly nextToken: string;
}

interface EBSFilter {
  readonly name: string;
  readonly values: [];
}

interface EBSUtilizationMetric {
  readonly name: string;
  readonly statistic: string;
  readonly value: unknown;
}

interface EffectiveRecommendationPreferences {
  readonly cpuVendorArchitectures: [];
  readonly enhancedInfrastructureMetrics: string;
}

interface EnrollmentFilter {
  readonly name: string;
  readonly values: [];
}

interface EstimatedMonthlySavings {
  readonly currency: string;
  readonly value: unknown;
}

interface ExportAutoScalingGroupRecommendationsRequest {
  readonly accountIds: [];
  readonly filters: [];
  readonly fieldsToExport: [];
  readonly s3DestinationConfig: S3DestinationConfig;
  readonly fileFormat: string;
  readonly includeMemberAccounts: boolean;
  readonly recommendationPreferences: RecommendationPreferences;
}

interface ExportAutoScalingGroupRecommendationsResponse {
  readonly jobId: string;
  readonly s3Destination: S3Destination;
}

interface ExportDestination {
  readonly s3: S3Destination;
}

interface ExportEBSVolumeRecommendationsRequest {
  readonly accountIds: [];
  readonly filters: [];
  readonly fieldsToExport: [];
  readonly s3DestinationConfig: S3DestinationConfig;
  readonly fileFormat: string;
  readonly includeMemberAccounts: boolean;
}

interface ExportEBSVolumeRecommendationsResponse {
  readonly jobId: string;
  readonly s3Destination: S3Destination;
}

interface ExportEC2InstanceRecommendationsRequest {
  readonly accountIds: [];
  readonly filters: [];
  readonly fieldsToExport: [];
  readonly s3DestinationConfig: S3DestinationConfig;
  readonly fileFormat: string;
  readonly includeMemberAccounts: boolean;
  readonly recommendationPreferences: RecommendationPreferences;
}

interface ExportEC2InstanceRecommendationsResponse {
  readonly jobId: string;
  readonly s3Destination: S3Destination;
}

interface ExportLambdaFunctionRecommendationsRequest {
  readonly accountIds: [];
  readonly filters: [];
  readonly fieldsToExport: [];
  readonly s3DestinationConfig: S3DestinationConfig;
  readonly fileFormat: string;
  readonly includeMemberAccounts: boolean;
}

interface ExportLambdaFunctionRecommendationsResponse {
  readonly jobId: string;
  readonly s3Destination: S3Destination;
}

interface Filter {
  readonly name: string;
  readonly values: [];
}

interface GetAutoScalingGroupRecommendationsRequest {
  readonly accountIds: [];
  readonly autoScalingGroupArns: [];
  readonly nextToken: string;
  readonly maxResults: number;
  readonly filters: [];
  readonly recommendationPreferences: RecommendationPreferences;
}

interface GetAutoScalingGroupRecommendationsResponse {
  readonly nextToken: string;
  readonly autoScalingGroupRecommendations: [];
  readonly errors: [];
}

interface GetEBSVolumeRecommendationsRequest {
  readonly volumeArns: [];
  readonly nextToken: string;
  readonly maxResults: number;
  readonly filters: [];
  readonly accountIds: [];
}

interface GetEBSVolumeRecommendationsResponse {
  readonly nextToken: string;
  readonly volumeRecommendations: [];
  readonly errors: [];
}

interface GetEC2InstanceRecommendationsRequest {
  readonly instanceArns: [];
  readonly nextToken: string;
  readonly maxResults: number;
  readonly filters: [];
  readonly accountIds: [];
  readonly recommendationPreferences: RecommendationPreferences;
}

interface GetEC2InstanceRecommendationsResponse {
  readonly nextToken: string;
  readonly instanceRecommendations: [];
  readonly errors: [];
}

interface GetEC2RecommendationProjectedMetricsRequest {
  readonly instanceArn: string;
  readonly stat: string;
  readonly period: number;
  readonly startTime: Date;
  readonly endTime: Date;
  readonly recommendationPreferences: RecommendationPreferences;
}

interface GetEC2RecommendationProjectedMetricsResponse {
  readonly recommendedOptionProjectedMetrics: [];
}

interface GetEffectiveRecommendationPreferencesRequest {
  readonly resourceArn: string;
}

interface GetEffectiveRecommendationPreferencesResponse {
  readonly enhancedInfrastructureMetrics: string;
}

interface GetEnrollmentStatusRequest {
}

interface GetEnrollmentStatusResponse {
  readonly status: string;
  readonly statusReason: string;
  readonly memberAccountsEnrolled: boolean;
  readonly lastUpdatedTimestamp: Date;
  readonly numberOfMemberAccountsOptedIn: number;
}

interface GetEnrollmentStatusesForOrganizationRequest {
  readonly filters: [];
  readonly nextToken: string;
  readonly maxResults: number;
}

interface GetEnrollmentStatusesForOrganizationResponse {
  readonly accountEnrollmentStatuses: [];
  readonly nextToken: string;
}

interface GetLambdaFunctionRecommendationsRequest {
  readonly functionArns: [];
  readonly accountIds: [];
  readonly filters: [];
  readonly nextToken: string;
  readonly maxResults: number;
}

interface GetLambdaFunctionRecommendationsResponse {
  readonly nextToken: string;
  readonly lambdaFunctionRecommendations: [];
}

interface GetRecommendationError {
  readonly identifier: string;
  readonly code: string;
  readonly message: string;
}

interface GetRecommendationPreferencesRequest {
  readonly resourceType: string;
  readonly scope: Scope;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface GetRecommendationPreferencesResponse {
  readonly nextToken: string;
  readonly recommendationPreferencesDetails: [];
}

interface GetRecommendationSummariesRequest {
  readonly accountIds: [];
  readonly nextToken: string;
  readonly maxResults: number;
}

interface GetRecommendationSummariesResponse {
  readonly nextToken: string;
  readonly recommendationSummaries: [];
}

interface InstanceRecommendation {
  readonly instanceArn: string;
  readonly accountId: string;
  readonly instanceName: string;
  readonly currentInstanceType: string;
  readonly finding: string;
  readonly findingReasonCodes: [];
  readonly utilizationMetrics: [];
  readonly lookBackPeriodInDays: unknown;
  readonly recommendationOptions: [];
  readonly recommendationSources: [];
  readonly lastRefreshTimestamp: Date;
  readonly currentPerformanceRisk: string;
  readonly effectiveRecommendationPreferences: EffectiveRecommendationPreferences;
}

interface InstanceRecommendationOption {
  readonly instanceType: string;
  readonly projectedUtilizationMetrics: [];
  readonly platformDifferences: [];
  readonly performanceRisk: unknown;
  readonly rank: number;
  readonly savingsOpportunity: SavingsOpportunity;
}

interface InternalServerException {
  readonly message: string;
}

interface InvalidParameterValueException {
  readonly message: string;
}

interface JobFilter {
  readonly name: string;
  readonly values: [];
}

interface LambdaFunctionMemoryProjectedMetric {
  readonly name: string;
  readonly statistic: string;
  readonly value: unknown;
}

interface LambdaFunctionMemoryRecommendationOption {
  readonly rank: number;
  readonly memorySize: number;
  readonly projectedUtilizationMetrics: [];
  readonly savingsOpportunity: SavingsOpportunity;
}

interface LambdaFunctionRecommendation {
  readonly functionArn: string;
  readonly functionVersion: string;
  readonly accountId: string;
  readonly currentMemorySize: number;
  readonly numberOfInvocations: number;
  readonly utilizationMetrics: [];
  readonly lookbackPeriodInDays: unknown;
  readonly lastRefreshTimestamp: Date;
  readonly finding: string;
  readonly findingReasonCodes: [];
  readonly memorySizeRecommendationOptions: [];
  readonly currentPerformanceRisk: string;
}

interface LambdaFunctionRecommendationFilter {
  readonly name: string;
  readonly values: [];
}

interface LambdaFunctionUtilizationMetric {
  readonly name: string;
  readonly statistic: string;
  readonly value: unknown;
}

interface LimitExceededException {
  readonly message: string;
}

interface MissingAuthenticationToken {
  readonly message: string;
}

interface OptInRequiredException {
  readonly message: string;
}

interface ProjectedMetric {
  readonly name: string;
  readonly timestamps: [];
  readonly values: [];
}

interface PutRecommendationPreferencesRequest {
  readonly resourceType: string;
  readonly scope: Scope;
  readonly enhancedInfrastructureMetrics: string;
}

interface PutRecommendationPreferencesResponse {
}

interface ReasonCodeSummary {
  readonly name: string;
  readonly value: unknown;
}

interface RecommendationExportJob {
  readonly jobId: string;
  readonly destination: ExportDestination;
  readonly resourceType: string;
  readonly status: string;
  readonly creationTimestamp: Date;
  readonly lastUpdatedTimestamp: Date;
  readonly failureReason: string;
}

interface RecommendationPreferences {
  readonly cpuVendorArchitectures: [];
}

interface RecommendationPreferencesDetail {
  readonly scope: Scope;
  readonly resourceType: string;
  readonly enhancedInfrastructureMetrics: string;
}

interface RecommendationSource {
  readonly recommendationSourceArn: string;
  readonly recommendationSourceType: string;
}

interface RecommendationSummary {
  readonly summaries: [];
  readonly recommendationResourceType: string;
  readonly accountId: string;
  readonly savingsOpportunity: SavingsOpportunity;
  readonly currentPerformanceRiskRatings: CurrentPerformanceRiskRatings;
}

interface RecommendedOptionProjectedMetric {
  readonly recommendedInstanceType: string;
  readonly rank: number;
  readonly projectedMetrics: [];
}

interface ResourceNotFoundException {
  readonly message: string;
}

interface S3Destination {
  readonly bucket: string;
  readonly key: string;
  readonly metadataKey: string;
}

interface S3DestinationConfig {
  readonly bucket: string;
  readonly keyPrefix: string;
}

interface SavingsOpportunity {
  readonly savingsOpportunityPercentage: unknown;
  readonly estimatedMonthlySavings: EstimatedMonthlySavings;
}

interface Scope {
  readonly name: string;
  readonly value: string;
}

interface ServiceUnavailableException {
  readonly message: string;
}

interface Summary {
  readonly name: string;
  readonly value: unknown;
  readonly reasonCodeSummaries: [];
}

interface ThrottlingException {
  readonly message: string;
}

interface UpdateEnrollmentStatusRequest {
  readonly status: string;
  readonly includeMemberAccounts: boolean;
}

interface UpdateEnrollmentStatusResponse {
  readonly status: string;
  readonly statusReason: string;
}

interface UtilizationMetric {
  readonly name: string;
  readonly statistic: string;
  readonly value: unknown;
}

interface VolumeConfiguration {
  readonly volumeType: string;
  readonly volumeSize: number;
  readonly volumeBaselineIOPS: number;
  readonly volumeBurstIOPS: number;
  readonly volumeBaselineThroughput: number;
  readonly volumeBurstThroughput: number;
}

interface VolumeRecommendation {
  readonly volumeArn: string;
  readonly accountId: string;
  readonly currentConfiguration: VolumeConfiguration;
  readonly finding: string;
  readonly utilizationMetrics: [];
  readonly lookBackPeriodInDays: unknown;
  readonly volumeRecommendationOptions: [];
  readonly lastRefreshTimestamp: Date;
  readonly currentPerformanceRisk: string;
}

interface VolumeRecommendationOption {
  readonly configuration: VolumeConfiguration;
  readonly performanceRisk: unknown;
  readonly rank: number;
  readonly savingsOpportunity: SavingsOpportunity;
}

