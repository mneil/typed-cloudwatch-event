/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AssociateEntityToThing {
  readonly thingName: string;
  readonly entityId: string;
  readonly namespaceVersion: number;
}
export interface CreateFlowTemplate {
  readonly definition: DefinitionDocument;
  readonly compatibleNamespaceVersion: number;
}
export interface CreateSystemInstance {
  readonly tags: [];
  readonly definition: DefinitionDocument;
  readonly target: string;
  readonly greengrassGroupName: string;
  readonly s3BucketName: string;
  readonly metricsConfiguration: MetricsConfiguration;
  readonly flowActionsRoleArn: string;
}
export interface CreateSystemTemplate {
  readonly definition: DefinitionDocument;
  readonly compatibleNamespaceVersion: number;
}
export interface DeleteFlowTemplate {
  readonly id: string;
}
export interface DeleteNamespace {
}
export interface DeleteSystemInstance {
  readonly id: string;
}
export interface DeleteSystemTemplate {
  readonly id: string;
}
export interface DeploySystemInstance {
  readonly id: string;
}
export interface DeprecateFlowTemplate {
  readonly id: string;
}
export interface DeprecateSystemTemplate {
  readonly id: string;
}
export interface DescribeNamespace {
  readonly namespaceName: string;
}
export interface DissociateEntityFromThing {
  readonly thingName: string;
  readonly entityType: string;
}
export interface GetEntities {
  readonly ids: [];
  readonly namespaceVersion: number;
}
export interface GetFlowTemplate {
  readonly id: string;
  readonly revisionNumber: number;
}
export interface GetFlowTemplateRevisions {
  readonly id: string;
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface GetNamespaceDeletionStatus {
}
export interface GetSystemInstance {
  readonly id: string;
}
export interface GetSystemTemplate {
  readonly id: string;
  readonly revisionNumber: number;
}
export interface GetSystemTemplateRevisions {
  readonly id: string;
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface GetUploadStatus {
  readonly uploadId: string;
}
export interface ListFlowExecutionMessages {
  readonly flowExecutionId: string;
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface ListTagsForResource {
  readonly maxResults: number;
  readonly resourceArn: string;
  readonly nextToken: string;
}
export interface SearchEntities {
  readonly entityTypes: [];
  readonly filters: [];
  readonly nextToken: string;
  readonly maxResults: number;
  readonly namespaceVersion: number;
}
export interface SearchFlowExecutions {
  readonly systemInstanceId: string;
  readonly flowExecutionId: string;
  readonly startTime: Date;
  readonly endTime: Date;
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface SearchFlowTemplates {
  readonly filters: [];
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface SearchSystemInstances {
  readonly filters: [];
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface SearchSystemTemplates {
  readonly filters: [];
  readonly nextToken: string;
  readonly maxResults: number;
}
export interface SearchThings {
  readonly entityId: string;
  readonly nextToken: string;
  readonly maxResults: number;
  readonly namespaceVersion: number;
}
export interface TagResource {
  readonly resourceArn: string;
  readonly tags: [];
}
export interface UndeploySystemInstance {
  readonly id: string;
}
export interface UntagResource {
  readonly resourceArn: string;
  readonly tagKeys: [];
}
export interface UpdateFlowTemplate {
  readonly id: string;
  readonly definition: DefinitionDocument;
  readonly compatibleNamespaceVersion: number;
}
export interface UpdateSystemTemplate {
  readonly id: string;
  readonly definition: DefinitionDocument;
  readonly compatibleNamespaceVersion: number;
}
export interface UploadEntityDefinitions {
  readonly document: DefinitionDocument;
  readonly syncWithPublicNamespace: boolean;
  readonly deprecateExistingEntities: boolean;
}



interface AssociateEntityToThingRequest {
  readonly thingName: string;
  readonly entityId: string;
  readonly namespaceVersion: number;
}

interface AssociateEntityToThingResponse {
}

interface CreateFlowTemplateRequest {
  readonly definition: DefinitionDocument;
  readonly compatibleNamespaceVersion: number;
}

interface CreateFlowTemplateResponse {
  readonly summary: FlowTemplateSummary;
}

interface CreateSystemInstanceRequest {
  readonly tags: [];
  readonly definition: DefinitionDocument;
  readonly target: string;
  readonly greengrassGroupName: string;
  readonly s3BucketName: string;
  readonly metricsConfiguration: MetricsConfiguration;
  readonly flowActionsRoleArn: string;
}

interface CreateSystemInstanceResponse {
  readonly summary: SystemInstanceSummary;
}

interface CreateSystemTemplateRequest {
  readonly definition: DefinitionDocument;
  readonly compatibleNamespaceVersion: number;
}

interface CreateSystemTemplateResponse {
  readonly summary: SystemTemplateSummary;
}

interface DefinitionDocument {
  readonly language: string;
  readonly text: string;
}

interface DeleteFlowTemplateRequest {
  readonly id: string;
}

interface DeleteFlowTemplateResponse {
}

interface DeleteNamespaceRequest {
}

interface DeleteNamespaceResponse {
  readonly namespaceArn: string;
  readonly namespaceName: string;
}

interface DeleteSystemInstanceRequest {
  readonly id: string;
}

interface DeleteSystemInstanceResponse {
}

interface DeleteSystemTemplateRequest {
  readonly id: string;
}

interface DeleteSystemTemplateResponse {
}

interface DependencyRevision {
  readonly id: string;
  readonly revisionNumber: number;
}

interface DeploySystemInstanceRequest {
  readonly id: string;
}

interface DeploySystemInstanceResponse {
  readonly summary: SystemInstanceSummary;
  readonly greengrassDeploymentId: string;
}

interface DeprecateFlowTemplateRequest {
  readonly id: string;
}

interface DeprecateFlowTemplateResponse {
}

interface DeprecateSystemTemplateRequest {
  readonly id: string;
}

interface DeprecateSystemTemplateResponse {
}

interface DescribeNamespaceRequest {
  readonly namespaceName: string;
}

interface DescribeNamespaceResponse {
  readonly namespaceArn: string;
  readonly namespaceName: string;
  readonly trackingNamespaceName: string;
  readonly trackingNamespaceVersion: number;
  readonly namespaceVersion: number;
}

interface DissociateEntityFromThingRequest {
  readonly thingName: string;
  readonly entityType: string;
}

interface DissociateEntityFromThingResponse {
}

interface EntityDescription {
  readonly id: string;
  readonly arn: string;
  readonly type: string;
  readonly createdAt: Date;
  readonly definition: DefinitionDocument;
}

interface EntityFilter {
  readonly name: string;
  readonly value: [];
}

interface FlowExecutionMessage {
  readonly messageId: string;
  readonly eventType: string;
  readonly timestamp: Date;
  readonly payload: string;
}

interface FlowExecutionSummary {
  readonly flowExecutionId: string;
  readonly status: string;
  readonly systemInstanceId: string;
  readonly flowTemplateId: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

interface FlowTemplateDescription {
  readonly summary: FlowTemplateSummary;
  readonly definition: DefinitionDocument;
  readonly validatedNamespaceVersion: number;
}

interface FlowTemplateFilter {
  readonly name: string;
  readonly value: [];
}

interface FlowTemplateSummary {
  readonly id: string;
  readonly arn: string;
  readonly revisionNumber: number;
  readonly createdAt: Date;
}

interface GetEntitiesRequest {
  readonly ids: [];
  readonly namespaceVersion: number;
}

interface GetEntitiesResponse {
  readonly descriptions: [];
}

interface GetFlowTemplateRequest {
  readonly id: string;
  readonly revisionNumber: number;
}

interface GetFlowTemplateResponse {
  readonly description: FlowTemplateDescription;
}

interface GetFlowTemplateRevisionsRequest {
  readonly id: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface GetFlowTemplateRevisionsResponse {
  readonly summaries: [];
  readonly nextToken: string;
}

interface GetNamespaceDeletionStatusRequest {
}

interface GetNamespaceDeletionStatusResponse {
  readonly namespaceArn: string;
  readonly namespaceName: string;
  readonly status: string;
  readonly errorCode: string;
  readonly errorMessage: string;
}

interface GetSystemInstanceRequest {
  readonly id: string;
}

interface GetSystemInstanceResponse {
  readonly description: SystemInstanceDescription;
}

interface GetSystemTemplateRequest {
  readonly id: string;
  readonly revisionNumber: number;
}

interface GetSystemTemplateResponse {
  readonly description: SystemTemplateDescription;
}

interface GetSystemTemplateRevisionsRequest {
  readonly id: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface GetSystemTemplateRevisionsResponse {
  readonly summaries: [];
  readonly nextToken: string;
}

interface GetUploadStatusRequest {
  readonly uploadId: string;
}

interface GetUploadStatusResponse {
  readonly uploadId: string;
  readonly uploadStatus: string;
  readonly namespaceArn: string;
  readonly namespaceName: string;
  readonly namespaceVersion: number;
  readonly failureReason: [];
  readonly createdDate: Date;
}

interface InternalFailureException {
  readonly message: string;
}

interface InvalidRequestException {
  readonly message: string;
}

interface LimitExceededException {
  readonly message: string;
}

interface ListFlowExecutionMessagesRequest {
  readonly flowExecutionId: string;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface ListFlowExecutionMessagesResponse {
  readonly messages: [];
  readonly nextToken: string;
}

interface ListTagsForResourceRequest {
  readonly maxResults: number;
  readonly resourceArn: string;
  readonly nextToken: string;
}

interface ListTagsForResourceResponse {
  readonly tags: [];
  readonly nextToken: string;
}

interface MetricsConfiguration {
  readonly cloudMetricEnabled: boolean;
  readonly metricRuleRoleArn: string;
}

interface ResourceAlreadyExistsException {
  readonly message: string;
}

interface ResourceInUseException {
  readonly message: string;
}

interface ResourceNotFoundException {
  readonly message: string;
}

interface SearchEntitiesRequest {
  readonly entityTypes: [];
  readonly filters: [];
  readonly nextToken: string;
  readonly maxResults: number;
  readonly namespaceVersion: number;
}

interface SearchEntitiesResponse {
  readonly descriptions: [];
  readonly nextToken: string;
}

interface SearchFlowExecutionsRequest {
  readonly systemInstanceId: string;
  readonly flowExecutionId: string;
  readonly startTime: Date;
  readonly endTime: Date;
  readonly nextToken: string;
  readonly maxResults: number;
}

interface SearchFlowExecutionsResponse {
  readonly summaries: [];
  readonly nextToken: string;
}

interface SearchFlowTemplatesRequest {
  readonly filters: [];
  readonly nextToken: string;
  readonly maxResults: number;
}

interface SearchFlowTemplatesResponse {
  readonly summaries: [];
  readonly nextToken: string;
}

interface SearchSystemInstancesRequest {
  readonly filters: [];
  readonly nextToken: string;
  readonly maxResults: number;
}

interface SearchSystemInstancesResponse {
  readonly summaries: [];
  readonly nextToken: string;
}

interface SearchSystemTemplatesRequest {
  readonly filters: [];
  readonly nextToken: string;
  readonly maxResults: number;
}

interface SearchSystemTemplatesResponse {
  readonly summaries: [];
  readonly nextToken: string;
}

interface SearchThingsRequest {
  readonly entityId: string;
  readonly nextToken: string;
  readonly maxResults: number;
  readonly namespaceVersion: number;
}

interface SearchThingsResponse {
  readonly things: [];
  readonly nextToken: string;
}

interface SystemInstanceDescription {
  readonly summary: SystemInstanceSummary;
  readonly definition: DefinitionDocument;
  readonly s3BucketName: string;
  readonly metricsConfiguration: MetricsConfiguration;
  readonly validatedNamespaceVersion: number;
  readonly validatedDependencyRevisions: [];
  readonly flowActionsRoleArn: string;
}

interface SystemInstanceFilter {
  readonly name: string;
  readonly value: [];
}

interface SystemInstanceSummary {
  readonly id: string;
  readonly arn: string;
  readonly status: string;
  readonly target: string;
  readonly greengrassGroupName: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly greengrassGroupId: string;
  readonly greengrassGroupVersionId: string;
}

interface SystemTemplateDescription {
  readonly summary: SystemTemplateSummary;
  readonly definition: DefinitionDocument;
  readonly validatedNamespaceVersion: number;
}

interface SystemTemplateFilter {
  readonly name: string;
  readonly value: [];
}

interface SystemTemplateSummary {
  readonly id: string;
  readonly arn: string;
  readonly revisionNumber: number;
  readonly createdAt: Date;
}

interface Tag {
  readonly key: string;
  readonly value: string;
}

interface TagResourceRequest {
  readonly resourceArn: string;
  readonly tags: [];
}

interface TagResourceResponse {
}

interface Thing {
  readonly thingArn: string;
  readonly thingName: string;
}

interface ThrottlingException {
  readonly message: string;
}

interface UndeploySystemInstanceRequest {
  readonly id: string;
}

interface UndeploySystemInstanceResponse {
  readonly summary: SystemInstanceSummary;
}

interface UntagResourceRequest {
  readonly resourceArn: string;
  readonly tagKeys: [];
}

interface UntagResourceResponse {
}

interface UpdateFlowTemplateRequest {
  readonly id: string;
  readonly definition: DefinitionDocument;
  readonly compatibleNamespaceVersion: number;
}

interface UpdateFlowTemplateResponse {
  readonly summary: FlowTemplateSummary;
}

interface UpdateSystemTemplateRequest {
  readonly id: string;
  readonly definition: DefinitionDocument;
  readonly compatibleNamespaceVersion: number;
}

interface UpdateSystemTemplateResponse {
  readonly summary: SystemTemplateSummary;
}

interface UploadEntityDefinitionsRequest {
  readonly document: DefinitionDocument;
  readonly syncWithPublicNamespace: boolean;
  readonly deprecateExistingEntities: boolean;
}

interface UploadEntityDefinitionsResponse {
  readonly uploadId: string;
}
