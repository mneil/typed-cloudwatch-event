/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateContainer {
  readonly ContainerName: string;
  readonly Tags: [];
}
export interface DeleteContainer {
  readonly ContainerName: string;
}
export interface DeleteContainerPolicy {
  readonly ContainerName: string;
}
export interface DeleteCorsPolicy {
  readonly ContainerName: string;
}
export interface DeleteLifecyclePolicy {
  readonly ContainerName: string;
}
export interface DeleteMetricPolicy {
  readonly ContainerName: string;
}
export interface DescribeContainer {
  readonly ContainerName: string;
}
export interface GetContainerPolicy {
  readonly ContainerName: string;
}
export interface GetCorsPolicy {
  readonly ContainerName: string;
}
export interface GetLifecyclePolicy {
  readonly ContainerName: string;
}
export interface GetMetricPolicy {
  readonly ContainerName: string;
}
export interface ListContainers {
  readonly NextToken: string;
  readonly MaxResults: number;
}
export interface ListTagsForResource {
  readonly Resource: string;
}
export interface PutContainerPolicy {
  readonly ContainerName: string;
  readonly Policy: string;
}
export interface PutCorsPolicy {
  readonly ContainerName: string;
  readonly CorsPolicy: [];
}
export interface PutLifecyclePolicy {
  readonly ContainerName: string;
  readonly LifecyclePolicy: string;
}
export interface PutMetricPolicy {
  readonly ContainerName: string;
  readonly MetricPolicy: MetricPolicy;
}
export interface StartAccessLogging {
  readonly ContainerName: string;
}
export interface StopAccessLogging {
  readonly ContainerName: string;
}
export interface TagResource {
  readonly Resource: string;
  readonly Tags: [];
}
export interface UntagResource {
  readonly Resource: string;
  readonly TagKeys: [];
}



interface Container {
  readonly Endpoint: string;
  readonly CreationTime: Date;
  readonly ARN: string;
  readonly Name: string;
  readonly Status: string;
  readonly AccessLoggingEnabled: boolean;
}

interface ContainerInUseException {
  readonly Message: string;
}

interface ContainerNotFoundException {
  readonly Message: string;
}

interface CorsPolicyNotFoundException {
  readonly Message: string;
}

interface CorsRule {
  readonly AllowedOrigins: [];
  readonly AllowedMethods: [];
  readonly AllowedHeaders: [];
  readonly MaxAgeSeconds: number;
  readonly ExposeHeaders: [];
}

interface CreateContainerInput {
  readonly ContainerName: string;
  readonly Tags: [];
}

interface CreateContainerOutput {
  readonly Container: Container;
}

interface DeleteContainerInput {
  readonly ContainerName: string;
}

interface DeleteContainerOutput {
}

interface DeleteContainerPolicyInput {
  readonly ContainerName: string;
}

interface DeleteContainerPolicyOutput {
}

interface DeleteCorsPolicyInput {
  readonly ContainerName: string;
}

interface DeleteCorsPolicyOutput {
}

interface DeleteLifecyclePolicyInput {
  readonly ContainerName: string;
}

interface DeleteLifecyclePolicyOutput {
}

interface DeleteMetricPolicyInput {
  readonly ContainerName: string;
}

interface DeleteMetricPolicyOutput {
}

interface DescribeContainerInput {
  readonly ContainerName: string;
}

interface DescribeContainerOutput {
  readonly Container: Container;
}

interface GetContainerPolicyInput {
  readonly ContainerName: string;
}

interface GetContainerPolicyOutput {
  readonly Policy: string;
}

interface GetCorsPolicyInput {
  readonly ContainerName: string;
}

interface GetCorsPolicyOutput {
  readonly CorsPolicy: [];
}

interface GetLifecyclePolicyInput {
  readonly ContainerName: string;
}

interface GetLifecyclePolicyOutput {
  readonly LifecyclePolicy: string;
}

interface GetMetricPolicyInput {
  readonly ContainerName: string;
}

interface GetMetricPolicyOutput {
  readonly MetricPolicy: MetricPolicy;
}

interface InternalServerError {
  readonly Message: string;
}

interface LimitExceededException {
  readonly Message: string;
}

interface ListContainersInput {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListContainersOutput {
  readonly Containers: [];
  readonly NextToken: string;
}

interface ListTagsForResourceInput {
  readonly Resource: string;
}

interface ListTagsForResourceOutput {
  readonly Tags: [];
}

interface MetricPolicy {
  readonly ContainerLevelMetrics: string;
  readonly MetricPolicyRules: [];
}

interface MetricPolicyRule {
  readonly ObjectGroup: string;
  readonly ObjectGroupName: string;
}

interface PolicyNotFoundException {
  readonly Message: string;
}

interface PutContainerPolicyInput {
  readonly ContainerName: string;
  readonly Policy: string;
}

interface PutContainerPolicyOutput {
}

interface PutCorsPolicyInput {
  readonly ContainerName: string;
  readonly CorsPolicy: [];
}

interface PutCorsPolicyOutput {
}

interface PutLifecyclePolicyInput {
  readonly ContainerName: string;
  readonly LifecyclePolicy: string;
}

interface PutLifecyclePolicyOutput {
}

interface PutMetricPolicyInput {
  readonly ContainerName: string;
  readonly MetricPolicy: MetricPolicy;
}

interface PutMetricPolicyOutput {
}

interface StartAccessLoggingInput {
  readonly ContainerName: string;
}

interface StartAccessLoggingOutput {
}

interface StopAccessLoggingInput {
  readonly ContainerName: string;
}

interface StopAccessLoggingOutput {
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}

interface TagResourceInput {
  readonly Resource: string;
  readonly Tags: [];
}

interface TagResourceOutput {
}

interface UntagResourceInput {
  readonly Resource: string;
  readonly TagKeys: [];
}

interface UntagResourceOutput {
}
