/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateScalingPlan {
  readonly ScalingPlanName: string;
  readonly ApplicationSource: ApplicationSource;
  readonly ScalingInstructions: [];
}

export interface DeleteScalingPlan {
  readonly ScalingPlanName: string;
  readonly ScalingPlanVersion: number;
}

export interface DescribeScalingPlanResources {
  readonly ScalingPlanName: string;
  readonly ScalingPlanVersion: number;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface DescribeScalingPlans {
  readonly ScalingPlanNames?: [];
  readonly ScalingPlanVersion?: number;
  readonly ApplicationSources?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface GetScalingPlanResourceForecastData {
  readonly ScalingPlanName: string;
  readonly ScalingPlanVersion: number;
  readonly ServiceNamespace: string;
  readonly ResourceId: string;
  readonly ScalableDimension: string;
  readonly ForecastDataType: string;
  readonly StartTime: Date;
  readonly EndTime: Date;
}

export interface UpdateScalingPlan {
  readonly ScalingPlanName: string;
  readonly ScalingPlanVersion: number;
  readonly ApplicationSource?: ApplicationSource;
  readonly ScalingInstructions?: [];
}

export interface ApplicationSource {
  readonly CloudFormationStackARN?: string;
  readonly TagFilters?: [];
}

export interface ConcurrentUpdateException {
  readonly Message?: string;
}

export interface CreateScalingPlanRequest {
  readonly ScalingPlanName: string;
  readonly ApplicationSource: ApplicationSource;
  readonly ScalingInstructions: [];
}

export interface CreateScalingPlanResponse {
  readonly ScalingPlanVersion: number;
}

export interface CustomizedLoadMetricSpecification {
  readonly MetricName: string;
  readonly Namespace: string;
  readonly Dimensions?: [];
  readonly Statistic: string;
  readonly Unit?: string;
}

export interface CustomizedScalingMetricSpecification {
  readonly MetricName: string;
  readonly Namespace: string;
  readonly Dimensions?: [];
  readonly Statistic: string;
  readonly Unit?: string;
}

export interface Datapoint {
  readonly Timestamp?: Date;
  readonly Value?: unknown;
}

export interface DeleteScalingPlanRequest {
  readonly ScalingPlanName: string;
  readonly ScalingPlanVersion: number;
}

export interface DeleteScalingPlanResponse {
}

export interface DescribeScalingPlanResourcesRequest {
  readonly ScalingPlanName: string;
  readonly ScalingPlanVersion: number;
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface DescribeScalingPlanResourcesResponse {
  readonly ScalingPlanResources?: [];
  readonly NextToken?: string;
}

export interface DescribeScalingPlansRequest {
  readonly ScalingPlanNames?: [];
  readonly ScalingPlanVersion?: number;
  readonly ApplicationSources?: [];
  readonly MaxResults?: number;
  readonly NextToken?: string;
}

export interface DescribeScalingPlansResponse {
  readonly ScalingPlans?: [];
  readonly NextToken?: string;
}

export interface GetScalingPlanResourceForecastDataRequest {
  readonly ScalingPlanName: string;
  readonly ScalingPlanVersion: number;
  readonly ServiceNamespace: string;
  readonly ResourceId: string;
  readonly ScalableDimension: string;
  readonly ForecastDataType: string;
  readonly StartTime: Date;
  readonly EndTime: Date;
}

export interface GetScalingPlanResourceForecastDataResponse {
  readonly Datapoints: [];
}

export interface InternalServiceException {
  readonly Message?: string;
}

export interface InvalidNextTokenException {
  readonly Message?: string;
}

export interface LimitExceededException {
  readonly Message?: string;
}

export interface MetricDimension {
  readonly Name: string;
  readonly Value: string;
}

export interface ObjectNotFoundException {
  readonly Message?: string;
}

export interface PredefinedLoadMetricSpecification {
  readonly PredefinedLoadMetricType: string;
  readonly ResourceLabel?: string;
}

export interface PredefinedScalingMetricSpecification {
  readonly PredefinedScalingMetricType: string;
  readonly ResourceLabel?: string;
}

export interface ScalingInstruction {
  readonly ServiceNamespace: string;
  readonly ResourceId: string;
  readonly ScalableDimension: string;
  readonly MinCapacity: number;
  readonly MaxCapacity: number;
  readonly TargetTrackingConfigurations: [];
  readonly PredefinedLoadMetricSpecification?: PredefinedLoadMetricSpecification;
  readonly CustomizedLoadMetricSpecification?: CustomizedLoadMetricSpecification;
  readonly ScheduledActionBufferTime?: number;
  readonly PredictiveScalingMaxCapacityBehavior?: string;
  readonly PredictiveScalingMaxCapacityBuffer?: number;
  readonly PredictiveScalingMode?: string;
  readonly ScalingPolicyUpdateBehavior?: string;
  readonly DisableDynamicScaling?: boolean;
}

export interface ScalingPlan {
  readonly ScalingPlanName: string;
  readonly ScalingPlanVersion: number;
  readonly ApplicationSource: ApplicationSource;
  readonly ScalingInstructions: [];
  readonly StatusCode: string;
  readonly StatusMessage?: string;
  readonly StatusStartTime?: Date;
  readonly CreationTime?: Date;
}

export interface ScalingPlanResource {
  readonly ScalingPlanName: string;
  readonly ScalingPlanVersion: number;
  readonly ServiceNamespace: string;
  readonly ResourceId: string;
  readonly ScalableDimension: string;
  readonly ScalingPolicies?: [];
  readonly ScalingStatusCode: string;
  readonly ScalingStatusMessage?: string;
}

export interface ScalingPolicy {
  readonly PolicyName: string;
  readonly PolicyType: string;
  readonly TargetTrackingConfiguration?: TargetTrackingConfiguration;
}

export interface TagFilter {
  readonly Key?: string;
  readonly Values?: [];
}

export interface TargetTrackingConfiguration {
  readonly PredefinedScalingMetricSpecification?: PredefinedScalingMetricSpecification;
  readonly CustomizedScalingMetricSpecification?: CustomizedScalingMetricSpecification;
  readonly TargetValue: unknown;
  readonly DisableScaleIn?: boolean;
  readonly ScaleOutCooldown?: number;
  readonly ScaleInCooldown?: number;
  readonly EstimatedInstanceWarmup?: number;
}

export interface UpdateScalingPlanRequest {
  readonly ScalingPlanName: string;
  readonly ScalingPlanVersion: number;
  readonly ApplicationSource?: ApplicationSource;
  readonly ScalingInstructions?: [];
}

export interface UpdateScalingPlanResponse {
}

export interface ValidationException {
  readonly Message?: string;
}


