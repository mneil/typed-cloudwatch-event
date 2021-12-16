/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface ActivatePipeline {
  readonly pipelineId: string;
  readonly parameterValues: [];
  readonly startTimestamp: Date;
}
export interface AddTags {
  readonly pipelineId: string;
  readonly tags: [];
}
export interface CreatePipeline {
  readonly name: string;
  readonly uniqueId: string;
  readonly description: string;
  readonly tags: [];
}
export interface DeactivatePipeline {
  readonly pipelineId: string;
  readonly cancelActive: boolean;
}
export interface DeletePipeline {
  readonly pipelineId: string;
}
export interface DescribeObjects {
  readonly pipelineId: string;
  readonly objectIds: [];
  readonly evaluateExpressions: boolean;
  readonly marker: string;
}
export interface DescribePipelines {
  readonly pipelineIds: [];
}
export interface EvaluateExpression {
  readonly pipelineId: string;
  readonly objectId: string;
  readonly expression: string;
}
export interface GetPipelineDefinition {
  readonly pipelineId: string;
  readonly version: string;
}
export interface ListPipelines {
  readonly marker: string;
}
export interface PollForTask {
  readonly workerGroup: string;
  readonly hostname: string;
  readonly instanceIdentity: InstanceIdentity;
}
export interface PutPipelineDefinition {
  readonly pipelineId: string;
  readonly pipelineObjects: [];
  readonly parameterObjects: [];
  readonly parameterValues: [];
}
export interface QueryObjects {
  readonly pipelineId: string;
  readonly query: Query;
  readonly sphere: string;
  readonly marker: string;
  readonly limit: number;
}
export interface RemoveTags {
  readonly pipelineId: string;
  readonly tagKeys: [];
}
export interface ReportTaskProgress {
  readonly taskId: string;
  readonly fields: [];
}
export interface ReportTaskRunnerHeartbeat {
  readonly taskrunnerId: string;
  readonly workerGroup: string;
  readonly hostname: string;
}
export interface SetStatus {
  readonly pipelineId: string;
  readonly objectIds: [];
  readonly status: string;
}
export interface SetTaskStatus {
  readonly taskId: string;
  readonly taskStatus: string;
  readonly errorId: string;
  readonly errorMessage: string;
  readonly errorStackTrace: string;
}
export interface ValidatePipelineDefinition {
  readonly pipelineId: string;
  readonly pipelineObjects: [];
  readonly parameterObjects: [];
  readonly parameterValues: [];
}



interface ActivatePipelineInput {
  readonly pipelineId: string;
  readonly parameterValues: [];
  readonly startTimestamp: Date;
}

interface ActivatePipelineOutput {
}

interface AddTagsInput {
  readonly pipelineId: string;
  readonly tags: [];
}

interface AddTagsOutput {
}

interface CreatePipelineInput {
  readonly name: string;
  readonly uniqueId: string;
  readonly description: string;
  readonly tags: [];
}

interface CreatePipelineOutput {
  readonly pipelineId: string;
}

interface DeactivatePipelineInput {
  readonly pipelineId: string;
  readonly cancelActive: boolean;
}

interface DeactivatePipelineOutput {
}

interface DeletePipelineInput {
  readonly pipelineId: string;
}

interface DescribeObjectsInput {
  readonly pipelineId: string;
  readonly objectIds: [];
  readonly evaluateExpressions: boolean;
  readonly marker: string;
}

interface DescribeObjectsOutput {
  readonly pipelineObjects: [];
  readonly marker: string;
  readonly hasMoreResults: boolean;
}

interface DescribePipelinesInput {
  readonly pipelineIds: [];
}

interface DescribePipelinesOutput {
  readonly pipelineDescriptionList: [];
}

interface EvaluateExpressionInput {
  readonly pipelineId: string;
  readonly objectId: string;
  readonly expression: string;
}

interface EvaluateExpressionOutput {
  readonly evaluatedExpression: string;
}

interface Field {
  readonly key: string;
  readonly stringValue: string;
  readonly refValue: string;
}

interface GetPipelineDefinitionInput {
  readonly pipelineId: string;
  readonly version: string;
}

interface GetPipelineDefinitionOutput {
  readonly pipelineObjects: [];
  readonly parameterObjects: [];
  readonly parameterValues: [];
}

interface InstanceIdentity {
  readonly document: string;
  readonly signature: string;
}

interface InternalServiceError {
  readonly message: string;
}

interface InvalidRequestException {
  readonly message: string;
}

interface ListPipelinesInput {
  readonly marker: string;
}

interface ListPipelinesOutput {
  readonly pipelineIdList: [];
  readonly marker: string;
  readonly hasMoreResults: boolean;
}

interface Operator {
  readonly type: string;
  readonly values: [];
}

interface ParameterAttribute {
  readonly key: string;
  readonly stringValue: string;
}

interface ParameterObject {
  readonly id: string;
  readonly attributes: [];
}

interface ParameterValue {
  readonly id: string;
  readonly stringValue: string;
}

interface PipelineDeletedException {
  readonly message: string;
}

interface PipelineDescription {
  readonly pipelineId: string;
  readonly name: string;
  readonly fields: [];
  readonly description: string;
  readonly tags: [];
}

interface PipelineIdName {
  readonly id: string;
  readonly name: string;
}

interface PipelineNotFoundException {
  readonly message: string;
}

interface PipelineObject {
  readonly id: string;
  readonly name: string;
  readonly fields: [];
}

interface PollForTaskInput {
  readonly workerGroup: string;
  readonly hostname: string;
  readonly instanceIdentity: InstanceIdentity;
}

interface PollForTaskOutput {
  readonly taskObject: TaskObject;
}

interface PutPipelineDefinitionInput {
  readonly pipelineId: string;
  readonly pipelineObjects: [];
  readonly parameterObjects: [];
  readonly parameterValues: [];
}

interface PutPipelineDefinitionOutput {
  readonly validationErrors: [];
  readonly validationWarnings: [];
  readonly errored: boolean;
}

interface Query {
  readonly selectors: [];
}

interface QueryObjectsInput {
  readonly pipelineId: string;
  readonly query: Query;
  readonly sphere: string;
  readonly marker: string;
  readonly limit: number;
}

interface QueryObjectsOutput {
  readonly ids: [];
  readonly marker: string;
  readonly hasMoreResults: boolean;
}

interface RemoveTagsInput {
  readonly pipelineId: string;
  readonly tagKeys: [];
}

interface RemoveTagsOutput {
}

interface ReportTaskProgressInput {
  readonly taskId: string;
  readonly fields: [];
}

interface ReportTaskProgressOutput {
  readonly canceled: boolean;
}

interface ReportTaskRunnerHeartbeatInput {
  readonly taskrunnerId: string;
  readonly workerGroup: string;
  readonly hostname: string;
}

interface ReportTaskRunnerHeartbeatOutput {
  readonly terminate: boolean;
}

interface Selector {
  readonly fieldName: string;
  readonly operator: Operator;
}

interface SetStatusInput {
  readonly pipelineId: string;
  readonly objectIds: [];
  readonly status: string;
}

interface SetTaskStatusInput {
  readonly taskId: string;
  readonly taskStatus: string;
  readonly errorId: string;
  readonly errorMessage: string;
  readonly errorStackTrace: string;
}

interface SetTaskStatusOutput {
}

interface Tag {
  readonly key: string;
  readonly value: string;
}

interface TaskNotFoundException {
  readonly message: string;
}

interface TaskObject {
  readonly taskId: string;
  readonly pipelineId: string;
  readonly attemptId: string;
  readonly objects: {[key: string]: any};
}

interface ValidatePipelineDefinitionInput {
  readonly pipelineId: string;
  readonly pipelineObjects: [];
  readonly parameterObjects: [];
  readonly parameterValues: [];
}

interface ValidatePipelineDefinitionOutput {
  readonly validationErrors: [];
  readonly validationWarnings: [];
  readonly errored: boolean;
}

interface ValidationError {
  readonly id: string;
  readonly errors: [];
}

interface ValidationWarning {
  readonly id: string;
  readonly warnings: [];
}
