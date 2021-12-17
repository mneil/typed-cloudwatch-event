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



interface ApplicationSource {
  readonly CloudFormationStackARN: string;
  readonly TagFilters: [];
}

interface ConcurrentUpdateException {
  readonly Message: string;
}

interface CreateScalingPlanRequest {
  readonly ScalingPlanName: string;
  readonly ApplicationSource: ApplicationSource;
  readonly ScalingInstructions: [];
}

interface CreateScalingPlanResponse {
  readonly ScalingPlanVersion: number;
}

interface CustomizedLoadMetricSpecification {
  readonly MetricName: string;
  readonly Namespace: string;
  readonly Dimensions: [];
  readonly Statistic: string;
  readonly Unit: string;
}

interface CustomizedScalingMetricSpecification {
  readonly MetricName: string;
  readonly Namespace: string;
  readonly Dimensions: [];
  readonly Statistic: string;
  readonly Unit: string;
}

interface Datapoint {
  readonly Timestamp: Date;
  readonly Value: unknown;
}

interface DeleteScalingPlanRequest {
  readonly ScalingPlanName: string;
  readonly ScalingPlanVersion: number;
}

interface DeleteScalingPlanResponse {
}

interface DescribeScalingPlanResourcesRequest {
  readonly ScalingPlanName: string;
  readonly ScalingPlanVersion: number;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeScalingPlanResourcesResponse {
  readonly ScalingPlanResources: [];
  readonly NextToken: string;
}

interface DescribeScalingPlansRequest {
  readonly ScalingPlanNames: [];
  readonly ScalingPlanVersion: number;
  readonly ApplicationSources: [];
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface DescribeScalingPlansResponse {
  readonly ScalingPlans: [];
  readonly NextToken: string;
}

interface GetScalingPlanResourceForecastDataRequest {
  readonly ScalingPlanName: string;
  readonly ScalingPlanVersion: number;
  readonly ServiceNamespace: string;
  readonly ResourceId: string;
  readonly ScalableDimension: string;
  readonly ForecastDataType: string;
  readonly StartTime: Date;
  readonly EndTime: Date;
}

interface GetScalingPlanResourceForecastDataResponse {
  readonly Datapoints: [];
}

interface InternalServiceException {
  readonly Message: string;
}

interface InvalidNextTokenException {
  readonly Message: string;
}

interface LimitExceededException {
  readonly Message: string;
}

interface MetricDimension {
  readonly Name: string;
  readonly Value: string;
}

interface ObjectNotFoundException {
  readonly Message: string;
}

interface PredefinedLoadMetricSpecification {
  readonly PredefinedLoadMetricType: string;
  readonly ResourceLabel: string;
}

interface PredefinedScalingMetricSpecification {
  readonly PredefinedScalingMetricType: string;
  readonly ResourceLabel: string;
}

interface ScalingInstruction {
  readonly ServiceNamespace: string;
  readonly ResourceId: string;
  readonly ScalableDimension: string;
  readonly MinCapacity: number;
  readonly MaxCapacity: number;
  readonly TargetTrackingConfigurations: [];
  readonly PredefinedLoadMetricSpecification: PredefinedLoadMetricSpecification;
  readonly CustomizedLoadMetricSpecification: CustomizedLoadMetricSpecification;
  readonly ScheduledActionBufferTime: number;
  readonly PredictiveScalingMaxCapacityBehavior: string;
  readonly PredictiveScalingMaxCapacityBuffer: number;
  readonly PredictiveScalingMode: string;
  readonly ScalingPolicyUpdateBehavior: string;
  readonly DisableDynamicScaling: boolean;
}

interface ScalingPlan {
  readonly ScalingPlanName: string;
  readonly ScalingPlanVersion: number;
  readonly ApplicationSource: ApplicationSource;
  readonly ScalingInstructions: [];
  readonly StatusCode: string;
  readonly StatusMessage: string;
  readonly StatusStartTime: Date;
  readonly CreationTime: Date;
}

interface ScalingPlanResource {
  readonly ScalingPlanName: string;
  readonly ScalingPlanVersion: number;
  readonly ServiceNamespace: string;
  readonly ResourceId: string;
  readonly ScalableDimension: string;
  readonly ScalingPolicies: [];
  readonly ScalingStatusCode: string;
  readonly ScalingStatusMessage: string;
}

interface ScalingPolicy {
  readonly PolicyName: string;
  readonly PolicyType: string;
  readonly TargetTrackingConfiguration: TargetTrackingConfiguration;
}

interface TagFilter {
  readonly Key: string;
  readonly Values: [];
}

interface TargetTrackingConfiguration {
  readonly PredefinedScalingMetricSpecification: PredefinedScalingMetricSpecification;
  readonly CustomizedScalingMetricSpecification: CustomizedScalingMetricSpecification;
  readonly TargetValue: unknown;
  readonly DisableScaleIn: boolean;
  readonly ScaleOutCooldown: number;
  readonly ScaleInCooldown: number;
  readonly EstimatedInstanceWarmup: number;
}

interface UpdateScalingPlanRequest {
  readonly ScalingPlanName: string;
  readonly ScalingPlanVersion: number;
  readonly ApplicationSource: ApplicationSource;
  readonly ScalingInstructions: [];
}

interface UpdateScalingPlanResponse {
}

interface ValidationException {
  readonly Message: string;
}

