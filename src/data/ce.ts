/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateAnomalyMonitor {
  readonly AnomalyMonitor: AnomalyMonitor;
}

export interface CreateAnomalySubscription {
  readonly AnomalySubscription: AnomalySubscription;
}

export interface CreateCostCategoryDefinition {
  readonly Name: string;
  readonly RuleVersion: string;
  readonly Rules: [];
  readonly DefaultValue?: string;
  readonly SplitChargeRules?: [];
}

export interface DeleteAnomalyMonitor {
  readonly MonitorArn: string;
}

export interface DeleteAnomalySubscription {
  readonly SubscriptionArn: string;
}

export interface DeleteCostCategoryDefinition {
  readonly CostCategoryArn: string;
}

export interface DescribeCostCategoryDefinition {
  readonly CostCategoryArn: string;
  readonly EffectiveOn?: string;
}

export interface GetAnomalies {
  readonly MonitorArn?: string;
  readonly DateInterval: AnomalyDateInterval;
  readonly Feedback?: string;
  readonly TotalImpact?: TotalImpactFilter;
  readonly NextPageToken?: string;
  readonly MaxResults?: number;
}

export interface GetAnomalyMonitors {
  readonly MonitorArnList?: [];
  readonly NextPageToken?: string;
  readonly MaxResults?: number;
}

export interface GetAnomalySubscriptions {
  readonly SubscriptionArnList?: [];
  readonly MonitorArn?: string;
  readonly NextPageToken?: string;
  readonly MaxResults?: number;
}

export interface GetCostAndUsage {
  readonly TimePeriod: DateInterval;
  readonly Granularity: string;
  readonly Filter?: Expression;
  readonly Metrics: [];
  readonly GroupBy?: [];
  readonly NextPageToken?: string;
}

export interface GetCostAndUsageWithResources {
  readonly TimePeriod: DateInterval;
  readonly Granularity: string;
  readonly Filter: Expression;
  readonly Metrics?: [];
  readonly GroupBy?: [];
  readonly NextPageToken?: string;
}

export interface GetCostCategories {
  readonly SearchString?: string;
  readonly TimePeriod: DateInterval;
  readonly CostCategoryName?: string;
  readonly Filter?: Expression;
  readonly SortBy?: [];
  readonly MaxResults?: number;
  readonly NextPageToken?: string;
}

export interface GetCostForecast {
  readonly TimePeriod: DateInterval;
  readonly Metric: string;
  readonly Granularity: string;
  readonly Filter?: Expression;
  readonly PredictionIntervalLevel?: number;
}

export interface GetDimensionValues {
  readonly SearchString?: string;
  readonly TimePeriod: DateInterval;
  readonly Dimension: string;
  readonly Context?: string;
  readonly Filter?: Expression;
  readonly SortBy?: [];
  readonly MaxResults?: number;
  readonly NextPageToken?: string;
}

export interface GetReservationCoverage {
  readonly TimePeriod: DateInterval;
  readonly GroupBy?: [];
  readonly Granularity?: string;
  readonly Filter?: Expression;
  readonly Metrics?: [];
  readonly NextPageToken?: string;
  readonly SortBy?: SortDefinition;
  readonly MaxResults?: number;
}

export interface GetReservationPurchaseRecommendation {
  readonly AccountId?: string;
  readonly Service: string;
  readonly Filter?: Expression;
  readonly AccountScope?: string;
  readonly LookbackPeriodInDays?: string;
  readonly TermInYears?: string;
  readonly PaymentOption?: string;
  readonly ServiceSpecification?: ServiceSpecification;
  readonly PageSize?: number;
  readonly NextPageToken?: string;
}

export interface GetReservationUtilization {
  readonly TimePeriod: DateInterval;
  readonly GroupBy?: [];
  readonly Granularity?: string;
  readonly Filter?: Expression;
  readonly SortBy?: SortDefinition;
  readonly NextPageToken?: string;
  readonly MaxResults?: number;
}

export interface GetRightsizingRecommendation {
  readonly Filter?: Expression;
  readonly Configuration?: RightsizingRecommendationConfiguration;
  readonly Service: string;
  readonly PageSize?: number;
  readonly NextPageToken?: string;
}

export interface GetSavingsPlansCoverage {
  readonly TimePeriod: DateInterval;
  readonly GroupBy?: [];
  readonly Granularity?: string;
  readonly Filter?: Expression;
  readonly Metrics?: [];
  readonly NextToken?: string;
  readonly MaxResults?: number;
  readonly SortBy?: SortDefinition;
}

export interface GetSavingsPlansPurchaseRecommendation {
  readonly SavingsPlansType: string;
  readonly TermInYears: string;
  readonly PaymentOption: string;
  readonly AccountScope?: string;
  readonly NextPageToken?: string;
  readonly PageSize?: number;
  readonly LookbackPeriodInDays: string;
  readonly Filter?: Expression;
}

export interface GetSavingsPlansUtilization {
  readonly TimePeriod: DateInterval;
  readonly Granularity?: string;
  readonly Filter?: Expression;
  readonly SortBy?: SortDefinition;
}

export interface GetSavingsPlansUtilizationDetails {
  readonly TimePeriod: DateInterval;
  readonly Filter?: Expression;
  readonly DataType?: [];
  readonly NextToken?: string;
  readonly MaxResults?: number;
  readonly SortBy?: SortDefinition;
}

export interface GetTags {
  readonly SearchString?: string;
  readonly TimePeriod: DateInterval;
  readonly TagKey?: string;
  readonly Filter?: Expression;
  readonly SortBy?: [];
  readonly MaxResults?: number;
  readonly NextPageToken?: string;
}

export interface GetUsageForecast {
  readonly TimePeriod: DateInterval;
  readonly Metric: string;
  readonly Granularity: string;
  readonly Filter?: Expression;
  readonly PredictionIntervalLevel?: number;
}

export interface ListCostCategoryDefinitions {
  readonly EffectiveOn?: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ProvideAnomalyFeedback {
  readonly AnomalyId: string;
  readonly Feedback: string;
}

export interface UpdateAnomalyMonitor {
  readonly MonitorArn: string;
  readonly MonitorName?: string;
}

export interface UpdateAnomalySubscription {
  readonly SubscriptionArn: string;
  readonly Threshold?: unknown;
  readonly Frequency?: string;
  readonly MonitorArnList?: [];
  readonly Subscribers?: [];
  readonly SubscriptionName?: string;
}

export interface UpdateCostCategoryDefinition {
  readonly CostCategoryArn: string;
  readonly RuleVersion: string;
  readonly Rules: [];
  readonly DefaultValue?: string;
  readonly SplitChargeRules?: [];
}

export interface Anomaly {
  readonly AnomalyId: string;
  readonly AnomalyStartDate?: string;
  readonly AnomalyEndDate?: string;
  readonly DimensionValue?: string;
  readonly RootCauses?: [];
  readonly AnomalyScore: AnomalyScore;
  readonly Impact: Impact;
  readonly MonitorArn: string;
  readonly Feedback?: string;
}

export interface AnomalyDateInterval {
  readonly StartDate: string;
  readonly EndDate?: string;
}

export interface AnomalyMonitor {
  readonly MonitorArn?: string;
  readonly MonitorName: string;
  readonly CreationDate?: string;
  readonly LastUpdatedDate?: string;
  readonly LastEvaluatedDate?: string;
  readonly MonitorType: string;
  readonly MonitorDimension?: string;
  readonly MonitorSpecification?: Expression;
  readonly DimensionalValueCount?: number;
}

export interface AnomalyScore {
  readonly MaxScore: unknown;
  readonly CurrentScore: unknown;
}

export interface AnomalySubscription {
  readonly SubscriptionArn?: string;
  readonly AccountId?: string;
  readonly MonitorArnList: [];
  readonly Subscribers: [];
  readonly Threshold: unknown;
  readonly Frequency: string;
  readonly SubscriptionName: string;
}

export interface BillExpirationException {
  readonly Message?: string;
}

export interface CostCategory {
  readonly CostCategoryArn: string;
  readonly EffectiveStart: string;
  readonly EffectiveEnd?: string;
  readonly Name: string;
  readonly RuleVersion: string;
  readonly Rules: [];
  readonly SplitChargeRules?: [];
  readonly ProcessingStatus?: [];
  readonly DefaultValue?: string;
}

export interface CostCategoryInheritedValueDimension {
  readonly DimensionName?: string;
  readonly DimensionKey?: string;
}

export interface CostCategoryProcessingStatus {
  readonly Component?: string;
  readonly Status?: string;
}

export interface CostCategoryReference {
  readonly CostCategoryArn?: string;
  readonly Name?: string;
  readonly EffectiveStart?: string;
  readonly EffectiveEnd?: string;
  readonly NumberOfRules?: number;
  readonly ProcessingStatus?: [];
  readonly Values?: [];
  readonly DefaultValue?: string;
}

export interface CostCategoryRule {
  readonly Value?: string;
  readonly Rule?: Expression;
  readonly InheritedValue?: CostCategoryInheritedValueDimension;
  readonly Type?: string;
}

export interface CostCategorySplitChargeRule {
  readonly Source: string;
  readonly Targets: [];
  readonly Method: string;
  readonly Parameters?: [];
}

export interface CostCategorySplitChargeRuleParameter {
  readonly Type: string;
  readonly Values: [];
}

export interface CostCategoryValues {
  readonly Key?: string;
  readonly Values?: [];
  readonly MatchOptions?: [];
}

export interface Coverage {
  readonly CoverageHours?: CoverageHours;
  readonly CoverageNormalizedUnits?: CoverageNormalizedUnits;
  readonly CoverageCost?: CoverageCost;
}

export interface CoverageByTime {
  readonly TimePeriod?: DateInterval;
  readonly Groups?: [];
  readonly Total?: Coverage;
}

export interface CoverageCost {
  readonly OnDemandCost?: string;
}

export interface CoverageHours {
  readonly OnDemandHours?: string;
  readonly ReservedHours?: string;
  readonly TotalRunningHours?: string;
  readonly CoverageHoursPercentage?: string;
}

export interface CoverageNormalizedUnits {
  readonly OnDemandNormalizedUnits?: string;
  readonly ReservedNormalizedUnits?: string;
  readonly TotalRunningNormalizedUnits?: string;
  readonly CoverageNormalizedUnitsPercentage?: string;
}

export interface CreateAnomalyMonitorRequest {
  readonly AnomalyMonitor: AnomalyMonitor;
}

export interface CreateAnomalyMonitorResponse {
  readonly MonitorArn: string;
}

export interface CreateAnomalySubscriptionRequest {
  readonly AnomalySubscription: AnomalySubscription;
}

export interface CreateAnomalySubscriptionResponse {
  readonly SubscriptionArn: string;
}

export interface CreateCostCategoryDefinitionRequest {
  readonly Name: string;
  readonly RuleVersion: string;
  readonly Rules: [];
  readonly DefaultValue?: string;
  readonly SplitChargeRules?: [];
}

export interface CreateCostCategoryDefinitionResponse {
  readonly CostCategoryArn?: string;
  readonly EffectiveStart?: string;
}

export interface CurrentInstance {
  readonly ResourceId?: string;
  readonly InstanceName?: string;
  readonly Tags?: [];
  readonly ResourceDetails?: ResourceDetails;
  readonly ResourceUtilization?: ResourceUtilization;
  readonly ReservationCoveredHoursInLookbackPeriod?: string;
  readonly SavingsPlansCoveredHoursInLookbackPeriod?: string;
  readonly OnDemandHoursInLookbackPeriod?: string;
  readonly TotalRunningHoursInLookbackPeriod?: string;
  readonly MonthlyCost?: string;
  readonly CurrencyCode?: string;
}

export interface DataUnavailableException {
  readonly Message?: string;
}

export interface DateInterval {
  readonly Start: string;
  readonly End: string;
}

export interface DeleteAnomalyMonitorRequest {
  readonly MonitorArn: string;
}

export interface DeleteAnomalyMonitorResponse {
}

export interface DeleteAnomalySubscriptionRequest {
  readonly SubscriptionArn: string;
}

export interface DeleteAnomalySubscriptionResponse {
}

export interface DeleteCostCategoryDefinitionRequest {
  readonly CostCategoryArn: string;
}

export interface DeleteCostCategoryDefinitionResponse {
  readonly CostCategoryArn?: string;
  readonly EffectiveEnd?: string;
}

export interface DescribeCostCategoryDefinitionRequest {
  readonly CostCategoryArn: string;
  readonly EffectiveOn?: string;
}

export interface DescribeCostCategoryDefinitionResponse {
  readonly CostCategory?: CostCategory;
}

export interface DimensionValues {
  readonly Key?: string;
  readonly Values?: [];
  readonly MatchOptions?: [];
}

export interface DimensionValuesWithAttributes {
  readonly Value?: string;
  readonly Attributes?: {[key: string]: any};
}

export interface DiskResourceUtilization {
  readonly DiskReadOpsPerSecond?: string;
  readonly DiskWriteOpsPerSecond?: string;
  readonly DiskReadBytesPerSecond?: string;
  readonly DiskWriteBytesPerSecond?: string;
}

export interface EBSResourceUtilization {
  readonly EbsReadOpsPerSecond?: string;
  readonly EbsWriteOpsPerSecond?: string;
  readonly EbsReadBytesPerSecond?: string;
  readonly EbsWriteBytesPerSecond?: string;
}

export interface EC2InstanceDetails {
  readonly Family?: string;
  readonly InstanceType?: string;
  readonly Region?: string;
  readonly AvailabilityZone?: string;
  readonly Platform?: string;
  readonly Tenancy?: string;
  readonly CurrentGeneration?: boolean;
  readonly SizeFlexEligible?: boolean;
}

export interface EC2ResourceDetails {
  readonly HourlyOnDemandRate?: string;
  readonly InstanceType?: string;
  readonly Platform?: string;
  readonly Region?: string;
  readonly Sku?: string;
  readonly Memory?: string;
  readonly NetworkPerformance?: string;
  readonly Storage?: string;
  readonly Vcpu?: string;
}

export interface EC2ResourceUtilization {
  readonly MaxCpuUtilizationPercentage?: string;
  readonly MaxMemoryUtilizationPercentage?: string;
  readonly MaxStorageUtilizationPercentage?: string;
  readonly EBSResourceUtilization?: EBSResourceUtilization;
  readonly DiskResourceUtilization?: DiskResourceUtilization;
  readonly NetworkResourceUtilization?: NetworkResourceUtilization;
}

export interface EC2Specification {
  readonly OfferingClass?: string;
}

export interface ESInstanceDetails {
  readonly InstanceClass?: string;
  readonly InstanceSize?: string;
  readonly Region?: string;
  readonly CurrentGeneration?: boolean;
  readonly SizeFlexEligible?: boolean;
}

export interface ElastiCacheInstanceDetails {
  readonly Family?: string;
  readonly NodeType?: string;
  readonly Region?: string;
  readonly ProductDescription?: string;
  readonly CurrentGeneration?: boolean;
  readonly SizeFlexEligible?: boolean;
}

export interface Expression {
  readonly Or?: [];
  readonly And?: [];
  readonly Not?: Expression;
  readonly Dimensions?: DimensionValues;
  readonly Tags?: TagValues;
  readonly CostCategories?: CostCategoryValues;
}

export interface ForecastResult {
  readonly TimePeriod?: DateInterval;
  readonly MeanValue?: string;
  readonly PredictionIntervalLowerBound?: string;
  readonly PredictionIntervalUpperBound?: string;
}

export interface GetAnomaliesRequest {
  readonly MonitorArn?: string;
  readonly DateInterval: AnomalyDateInterval;
  readonly Feedback?: string;
  readonly TotalImpact?: TotalImpactFilter;
  readonly NextPageToken?: string;
  readonly MaxResults?: number;
}

export interface GetAnomaliesResponse {
  readonly Anomalies: [];
  readonly NextPageToken?: string;
}

export interface GetAnomalyMonitorsRequest {
  readonly MonitorArnList?: [];
  readonly NextPageToken?: string;
  readonly MaxResults?: number;
}

export interface GetAnomalyMonitorsResponse {
  readonly AnomalyMonitors: [];
  readonly NextPageToken?: string;
}

export interface GetAnomalySubscriptionsRequest {
  readonly SubscriptionArnList?: [];
  readonly MonitorArn?: string;
  readonly NextPageToken?: string;
  readonly MaxResults?: number;
}

export interface GetAnomalySubscriptionsResponse {
  readonly AnomalySubscriptions: [];
  readonly NextPageToken?: string;
}

export interface GetCostAndUsageRequest {
  readonly TimePeriod: DateInterval;
  readonly Granularity: string;
  readonly Filter?: Expression;
  readonly Metrics: [];
  readonly GroupBy?: [];
  readonly NextPageToken?: string;
}

export interface GetCostAndUsageResponse {
  readonly NextPageToken?: string;
  readonly GroupDefinitions?: [];
  readonly ResultsByTime?: [];
  readonly DimensionValueAttributes?: [];
}

export interface GetCostAndUsageWithResourcesRequest {
  readonly TimePeriod: DateInterval;
  readonly Granularity: string;
  readonly Filter: Expression;
  readonly Metrics?: [];
  readonly GroupBy?: [];
  readonly NextPageToken?: string;
}

export interface GetCostAndUsageWithResourcesResponse {
  readonly NextPageToken?: string;
  readonly GroupDefinitions?: [];
  readonly ResultsByTime?: [];
  readonly DimensionValueAttributes?: [];
}

export interface GetCostCategoriesRequest {
  readonly SearchString?: string;
  readonly TimePeriod: DateInterval;
  readonly CostCategoryName?: string;
  readonly Filter?: Expression;
  readonly SortBy?: [];
  readonly MaxResults?: number;
  readonly NextPageToken?: string;
}

export interface GetCostCategoriesResponse {
  readonly NextPageToken?: string;
  readonly CostCategoryNames?: [];
  readonly CostCategoryValues?: [];
  readonly ReturnSize: number;
  readonly TotalSize: number;
}

export interface GetCostForecastRequest {
  readonly TimePeriod: DateInterval;
  readonly Metric: string;
  readonly Granularity: string;
  readonly Filter?: Expression;
  readonly PredictionIntervalLevel?: number;
}

export interface GetCostForecastResponse {
  readonly Total?: MetricValue;
  readonly ForecastResultsByTime?: [];
}

export interface GetDimensionValuesRequest {
  readonly SearchString?: string;
  readonly TimePeriod: DateInterval;
  readonly Dimension: string;
  readonly Context?: string;
  readonly Filter?: Expression;
  readonly SortBy?: [];
  readonly MaxResults?: number;
  readonly NextPageToken?: string;
}

export interface GetDimensionValuesResponse {
  readonly DimensionValues: [];
  readonly ReturnSize: number;
  readonly TotalSize: number;
  readonly NextPageToken?: string;
}

export interface GetReservationCoverageRequest {
  readonly TimePeriod: DateInterval;
  readonly GroupBy?: [];
  readonly Granularity?: string;
  readonly Filter?: Expression;
  readonly Metrics?: [];
  readonly NextPageToken?: string;
  readonly SortBy?: SortDefinition;
  readonly MaxResults?: number;
}

export interface GetReservationCoverageResponse {
  readonly CoveragesByTime: [];
  readonly Total?: Coverage;
  readonly NextPageToken?: string;
}

export interface GetReservationPurchaseRecommendationRequest {
  readonly AccountId?: string;
  readonly Service: string;
  readonly Filter?: Expression;
  readonly AccountScope?: string;
  readonly LookbackPeriodInDays?: string;
  readonly TermInYears?: string;
  readonly PaymentOption?: string;
  readonly ServiceSpecification?: ServiceSpecification;
  readonly PageSize?: number;
  readonly NextPageToken?: string;
}

export interface GetReservationPurchaseRecommendationResponse {
  readonly Metadata?: ReservationPurchaseRecommendationMetadata;
  readonly Recommendations?: [];
  readonly NextPageToken?: string;
}

export interface GetReservationUtilizationRequest {
  readonly TimePeriod: DateInterval;
  readonly GroupBy?: [];
  readonly Granularity?: string;
  readonly Filter?: Expression;
  readonly SortBy?: SortDefinition;
  readonly NextPageToken?: string;
  readonly MaxResults?: number;
}

export interface GetReservationUtilizationResponse {
  readonly UtilizationsByTime: [];
  readonly Total?: ReservationAggregates;
  readonly NextPageToken?: string;
}

export interface GetRightsizingRecommendationRequest {
  readonly Filter?: Expression;
  readonly Configuration?: RightsizingRecommendationConfiguration;
  readonly Service: string;
  readonly PageSize?: number;
  readonly NextPageToken?: string;
}

export interface GetRightsizingRecommendationResponse {
  readonly Metadata?: RightsizingRecommendationMetadata;
  readonly Summary?: RightsizingRecommendationSummary;
  readonly RightsizingRecommendations?: [];
  readonly NextPageToken?: string;
  readonly Configuration?: RightsizingRecommendationConfiguration;
}

export interface GetSavingsPlansCoverageRequest {
  readonly TimePeriod: DateInterval;
  readonly GroupBy?: [];
  readonly Granularity?: string;
  readonly Filter?: Expression;
  readonly Metrics?: [];
  readonly NextToken?: string;
  readonly MaxResults?: number;
  readonly SortBy?: SortDefinition;
}

export interface GetSavingsPlansCoverageResponse {
  readonly SavingsPlansCoverages: [];
  readonly NextToken?: string;
}

export interface GetSavingsPlansPurchaseRecommendationRequest {
  readonly SavingsPlansType: string;
  readonly TermInYears: string;
  readonly PaymentOption: string;
  readonly AccountScope?: string;
  readonly NextPageToken?: string;
  readonly PageSize?: number;
  readonly LookbackPeriodInDays: string;
  readonly Filter?: Expression;
}

export interface GetSavingsPlansPurchaseRecommendationResponse {
  readonly Metadata?: SavingsPlansPurchaseRecommendationMetadata;
  readonly SavingsPlansPurchaseRecommendation?: SavingsPlansPurchaseRecommendation;
  readonly NextPageToken?: string;
}

export interface GetSavingsPlansUtilizationDetailsRequest {
  readonly TimePeriod: DateInterval;
  readonly Filter?: Expression;
  readonly DataType?: [];
  readonly NextToken?: string;
  readonly MaxResults?: number;
  readonly SortBy?: SortDefinition;
}

export interface GetSavingsPlansUtilizationDetailsResponse {
  readonly SavingsPlansUtilizationDetails: [];
  readonly Total?: SavingsPlansUtilizationAggregates;
  readonly TimePeriod: DateInterval;
  readonly NextToken?: string;
}

export interface GetSavingsPlansUtilizationRequest {
  readonly TimePeriod: DateInterval;
  readonly Granularity?: string;
  readonly Filter?: Expression;
  readonly SortBy?: SortDefinition;
}

export interface GetSavingsPlansUtilizationResponse {
  readonly SavingsPlansUtilizationsByTime?: [];
  readonly Total: SavingsPlansUtilizationAggregates;
}

export interface GetTagsRequest {
  readonly SearchString?: string;
  readonly TimePeriod: DateInterval;
  readonly TagKey?: string;
  readonly Filter?: Expression;
  readonly SortBy?: [];
  readonly MaxResults?: number;
  readonly NextPageToken?: string;
}

export interface GetTagsResponse {
  readonly NextPageToken?: string;
  readonly Tags: [];
  readonly ReturnSize: number;
  readonly TotalSize: number;
}

export interface GetUsageForecastRequest {
  readonly TimePeriod: DateInterval;
  readonly Metric: string;
  readonly Granularity: string;
  readonly Filter?: Expression;
  readonly PredictionIntervalLevel?: number;
}

export interface GetUsageForecastResponse {
  readonly Total?: MetricValue;
  readonly ForecastResultsByTime?: [];
}

export interface Group {
  readonly Keys?: [];
  readonly Metrics?: {[key: string]: any};
}

export interface GroupDefinition {
  readonly Type?: string;
  readonly Key?: string;
}

export interface Impact {
  readonly MaxImpact: unknown;
  readonly TotalImpact?: unknown;
}

export interface InstanceDetails {
  readonly EC2InstanceDetails?: EC2InstanceDetails;
  readonly RDSInstanceDetails?: RDSInstanceDetails;
  readonly RedshiftInstanceDetails?: RedshiftInstanceDetails;
  readonly ElastiCacheInstanceDetails?: ElastiCacheInstanceDetails;
  readonly ESInstanceDetails?: ESInstanceDetails;
}

export interface InvalidNextTokenException {
  readonly Message?: string;
}

export interface LimitExceededException {
  readonly Message?: string;
}

export interface ListCostCategoryDefinitionsRequest {
  readonly EffectiveOn?: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface ListCostCategoryDefinitionsResponse {
  readonly CostCategoryReferences?: [];
  readonly NextToken?: string;
}

export interface MetricValue {
  readonly Amount?: string;
  readonly Unit?: string;
}

export interface ModifyRecommendationDetail {
  readonly TargetInstances?: [];
}

export interface NetworkResourceUtilization {
  readonly NetworkInBytesPerSecond?: string;
  readonly NetworkOutBytesPerSecond?: string;
  readonly NetworkPacketsInPerSecond?: string;
  readonly NetworkPacketsOutPerSecond?: string;
}

export interface ProvideAnomalyFeedbackRequest {
  readonly AnomalyId: string;
  readonly Feedback: string;
}

export interface ProvideAnomalyFeedbackResponse {
  readonly AnomalyId: string;
}

export interface RDSInstanceDetails {
  readonly Family?: string;
  readonly InstanceType?: string;
  readonly Region?: string;
  readonly DatabaseEngine?: string;
  readonly DatabaseEdition?: string;
  readonly DeploymentOption?: string;
  readonly LicenseModel?: string;
  readonly CurrentGeneration?: boolean;
  readonly SizeFlexEligible?: boolean;
}

export interface RedshiftInstanceDetails {
  readonly Family?: string;
  readonly NodeType?: string;
  readonly Region?: string;
  readonly CurrentGeneration?: boolean;
  readonly SizeFlexEligible?: boolean;
}

export interface RequestChangedException {
  readonly Message?: string;
}

export interface ReservationAggregates {
  readonly UtilizationPercentage?: string;
  readonly UtilizationPercentageInUnits?: string;
  readonly PurchasedHours?: string;
  readonly PurchasedUnits?: string;
  readonly TotalActualHours?: string;
  readonly TotalActualUnits?: string;
  readonly UnusedHours?: string;
  readonly UnusedUnits?: string;
  readonly OnDemandCostOfRIHoursUsed?: string;
  readonly NetRISavings?: string;
  readonly TotalPotentialRISavings?: string;
  readonly AmortizedUpfrontFee?: string;
  readonly AmortizedRecurringFee?: string;
  readonly TotalAmortizedFee?: string;
  readonly RICostForUnusedHours?: string;
  readonly RealizedSavings?: string;
  readonly UnrealizedSavings?: string;
}

export interface ReservationCoverageGroup {
  readonly Attributes?: {[key: string]: any};
  readonly Coverage?: Coverage;
}

export interface ReservationPurchaseRecommendation {
  readonly AccountScope?: string;
  readonly LookbackPeriodInDays?: string;
  readonly TermInYears?: string;
  readonly PaymentOption?: string;
  readonly ServiceSpecification?: ServiceSpecification;
  readonly RecommendationDetails?: [];
  readonly RecommendationSummary?: ReservationPurchaseRecommendationSummary;
}

export interface ReservationPurchaseRecommendationDetail {
  readonly AccountId?: string;
  readonly InstanceDetails?: InstanceDetails;
  readonly RecommendedNumberOfInstancesToPurchase?: string;
  readonly RecommendedNormalizedUnitsToPurchase?: string;
  readonly MinimumNumberOfInstancesUsedPerHour?: string;
  readonly MinimumNormalizedUnitsUsedPerHour?: string;
  readonly MaximumNumberOfInstancesUsedPerHour?: string;
  readonly MaximumNormalizedUnitsUsedPerHour?: string;
  readonly AverageNumberOfInstancesUsedPerHour?: string;
  readonly AverageNormalizedUnitsUsedPerHour?: string;
  readonly AverageUtilization?: string;
  readonly EstimatedBreakEvenInMonths?: string;
  readonly CurrencyCode?: string;
  readonly EstimatedMonthlySavingsAmount?: string;
  readonly EstimatedMonthlySavingsPercentage?: string;
  readonly EstimatedMonthlyOnDemandCost?: string;
  readonly EstimatedReservationCostForLookbackPeriod?: string;
  readonly UpfrontCost?: string;
  readonly RecurringStandardMonthlyCost?: string;
}

export interface ReservationPurchaseRecommendationMetadata {
  readonly RecommendationId?: string;
  readonly GenerationTimestamp?: string;
}

export interface ReservationPurchaseRecommendationSummary {
  readonly TotalEstimatedMonthlySavingsAmount?: string;
  readonly TotalEstimatedMonthlySavingsPercentage?: string;
  readonly CurrencyCode?: string;
}

export interface ReservationUtilizationGroup {
  readonly Key?: string;
  readonly Value?: string;
  readonly Attributes?: {[key: string]: any};
  readonly Utilization?: ReservationAggregates;
}

export interface ResourceDetails {
  readonly EC2ResourceDetails?: EC2ResourceDetails;
}

export interface ResourceNotFoundException {
  readonly Message?: string;
}

export interface ResourceUtilization {
  readonly EC2ResourceUtilization?: EC2ResourceUtilization;
}

export interface ResultByTime {
  readonly TimePeriod?: DateInterval;
  readonly Total?: {[key: string]: any};
  readonly Groups?: [];
  readonly Estimated?: boolean;
}

export interface RightsizingRecommendation {
  readonly AccountId?: string;
  readonly CurrentInstance?: CurrentInstance;
  readonly RightsizingType?: string;
  readonly ModifyRecommendationDetail?: ModifyRecommendationDetail;
  readonly TerminateRecommendationDetail?: TerminateRecommendationDetail;
  readonly FindingReasonCodes?: [];
}

export interface RightsizingRecommendationConfiguration {
  readonly RecommendationTarget: string;
  readonly BenefitsConsidered: boolean;
}

export interface RightsizingRecommendationMetadata {
  readonly RecommendationId?: string;
  readonly GenerationTimestamp?: string;
  readonly LookbackPeriodInDays?: string;
  readonly AdditionalMetadata?: string;
}

export interface RightsizingRecommendationSummary {
  readonly TotalRecommendationCount?: string;
  readonly EstimatedTotalMonthlySavingsAmount?: string;
  readonly SavingsCurrencyCode?: string;
  readonly SavingsPercentage?: string;
}

export interface RootCause {
  readonly Service?: string;
  readonly Region?: string;
  readonly LinkedAccount?: string;
  readonly UsageType?: string;
}

export interface SavingsPlansAmortizedCommitment {
  readonly AmortizedRecurringCommitment?: string;
  readonly AmortizedUpfrontCommitment?: string;
  readonly TotalAmortizedCommitment?: string;
}

export interface SavingsPlansCoverage {
  readonly Attributes?: {[key: string]: any};
  readonly Coverage?: SavingsPlansCoverageData;
  readonly TimePeriod?: DateInterval;
}

export interface SavingsPlansCoverageData {
  readonly SpendCoveredBySavingsPlans?: string;
  readonly OnDemandCost?: string;
  readonly TotalCost?: string;
  readonly CoveragePercentage?: string;
}

export interface SavingsPlansDetails {
  readonly Region?: string;
  readonly InstanceFamily?: string;
  readonly OfferingId?: string;
}

export interface SavingsPlansPurchaseRecommendation {
  readonly AccountScope?: string;
  readonly SavingsPlansType?: string;
  readonly TermInYears?: string;
  readonly PaymentOption?: string;
  readonly LookbackPeriodInDays?: string;
  readonly SavingsPlansPurchaseRecommendationDetails?: [];
  readonly SavingsPlansPurchaseRecommendationSummary?: SavingsPlansPurchaseRecommendationSummary;
}

export interface SavingsPlansPurchaseRecommendationDetail {
  readonly SavingsPlansDetails?: SavingsPlansDetails;
  readonly AccountId?: string;
  readonly UpfrontCost?: string;
  readonly EstimatedROI?: string;
  readonly CurrencyCode?: string;
  readonly EstimatedSPCost?: string;
  readonly EstimatedOnDemandCost?: string;
  readonly EstimatedOnDemandCostWithCurrentCommitment?: string;
  readonly EstimatedSavingsAmount?: string;
  readonly EstimatedSavingsPercentage?: string;
  readonly HourlyCommitmentToPurchase?: string;
  readonly EstimatedAverageUtilization?: string;
  readonly EstimatedMonthlySavingsAmount?: string;
  readonly CurrentMinimumHourlyOnDemandSpend?: string;
  readonly CurrentMaximumHourlyOnDemandSpend?: string;
  readonly CurrentAverageHourlyOnDemandSpend?: string;
}

export interface SavingsPlansPurchaseRecommendationMetadata {
  readonly RecommendationId?: string;
  readonly GenerationTimestamp?: string;
  readonly AdditionalMetadata?: string;
}

export interface SavingsPlansPurchaseRecommendationSummary {
  readonly EstimatedROI?: string;
  readonly CurrencyCode?: string;
  readonly EstimatedTotalCost?: string;
  readonly CurrentOnDemandSpend?: string;
  readonly EstimatedSavingsAmount?: string;
  readonly TotalRecommendationCount?: string;
  readonly DailyCommitmentToPurchase?: string;
  readonly HourlyCommitmentToPurchase?: string;
  readonly EstimatedSavingsPercentage?: string;
  readonly EstimatedMonthlySavingsAmount?: string;
  readonly EstimatedOnDemandCostWithCurrentCommitment?: string;
}

export interface SavingsPlansSavings {
  readonly NetSavings?: string;
  readonly OnDemandCostEquivalent?: string;
}

export interface SavingsPlansUtilization {
  readonly TotalCommitment?: string;
  readonly UsedCommitment?: string;
  readonly UnusedCommitment?: string;
  readonly UtilizationPercentage?: string;
}

export interface SavingsPlansUtilizationAggregates {
  readonly Utilization: SavingsPlansUtilization;
  readonly Savings?: SavingsPlansSavings;
  readonly AmortizedCommitment?: SavingsPlansAmortizedCommitment;
}

export interface SavingsPlansUtilizationByTime {
  readonly TimePeriod: DateInterval;
  readonly Utilization: SavingsPlansUtilization;
  readonly Savings?: SavingsPlansSavings;
  readonly AmortizedCommitment?: SavingsPlansAmortizedCommitment;
}

export interface SavingsPlansUtilizationDetail {
  readonly SavingsPlanArn?: string;
  readonly Attributes?: {[key: string]: any};
  readonly Utilization?: SavingsPlansUtilization;
  readonly Savings?: SavingsPlansSavings;
  readonly AmortizedCommitment?: SavingsPlansAmortizedCommitment;
}

export interface ServiceQuotaExceededException {
  readonly Message?: string;
}

export interface ServiceSpecification {
  readonly EC2Specification?: EC2Specification;
}

export interface SortDefinition {
  readonly Key: string;
  readonly SortOrder?: string;
}

export interface Subscriber {
  readonly Address?: string;
  readonly Type?: string;
  readonly Status?: string;
}

export interface TagValues {
  readonly Key?: string;
  readonly Values?: [];
  readonly MatchOptions?: [];
}

export interface TargetInstance {
  readonly EstimatedMonthlyCost?: string;
  readonly EstimatedMonthlySavings?: string;
  readonly CurrencyCode?: string;
  readonly DefaultTargetInstance?: boolean;
  readonly ResourceDetails?: ResourceDetails;
  readonly ExpectedResourceUtilization?: ResourceUtilization;
  readonly PlatformDifferences?: [];
}

export interface TerminateRecommendationDetail {
  readonly EstimatedMonthlySavings?: string;
  readonly CurrencyCode?: string;
}

export interface TotalImpactFilter {
  readonly NumericOperator: string;
  readonly StartValue: unknown;
  readonly EndValue?: unknown;
}

export interface UnknownMonitorException {
  readonly Message?: string;
}

export interface UnknownSubscriptionException {
  readonly Message?: string;
}

export interface UnresolvableUsageUnitException {
  readonly Message?: string;
}

export interface UpdateAnomalyMonitorRequest {
  readonly MonitorArn: string;
  readonly MonitorName?: string;
}

export interface UpdateAnomalyMonitorResponse {
  readonly MonitorArn: string;
}

export interface UpdateAnomalySubscriptionRequest {
  readonly SubscriptionArn: string;
  readonly Threshold?: unknown;
  readonly Frequency?: string;
  readonly MonitorArnList?: [];
  readonly Subscribers?: [];
  readonly SubscriptionName?: string;
}

export interface UpdateAnomalySubscriptionResponse {
  readonly SubscriptionArn: string;
}

export interface UpdateCostCategoryDefinitionRequest {
  readonly CostCategoryArn: string;
  readonly RuleVersion: string;
  readonly Rules: [];
  readonly DefaultValue?: string;
  readonly SplitChargeRules?: [];
}

export interface UpdateCostCategoryDefinitionResponse {
  readonly CostCategoryArn?: string;
  readonly EffectiveStart?: string;
}

export interface UtilizationByTime {
  readonly TimePeriod?: DateInterval;
  readonly Groups?: [];
  readonly Total?: ReservationAggregates;
}


