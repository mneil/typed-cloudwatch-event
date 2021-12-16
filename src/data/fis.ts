/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateExperimentTemplate {
  readonly clientToken: string;
  readonly description: string;
  readonly stopConditions: [];
  readonly targets: {[key: string]: any};
  readonly actions: {[key: string]: any};
  readonly roleArn: string;
  readonly tags: {[key: string]: any};
}
export interface DeleteExperimentTemplate {
  readonly id: string;
}
export interface GetAction {
  readonly id: string;
}
export interface GetExperiment {
  readonly id: string;
}
export interface GetExperimentTemplate {
  readonly id: string;
}
export interface ListActions {
  readonly maxResults: number;
  readonly nextToken: string;
}
export interface ListExperimentTemplates {
  readonly maxResults: number;
  readonly nextToken: string;
}
export interface ListExperiments {
  readonly maxResults: number;
  readonly nextToken: string;
}
export interface ListTagsForResource {
  readonly resourceArn: string;
}
export interface StartExperiment {
  readonly clientToken: string;
  readonly experimentTemplateId: string;
  readonly tags: {[key: string]: any};
}
export interface StopExperiment {
  readonly id: string;
}
export interface TagResource {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}
export interface UntagResource {
  readonly resourceArn: string;
  readonly tagKeys: [];
}
export interface UpdateExperimentTemplate {
  readonly id: string;
  readonly description: string;
  readonly stopConditions: [];
  readonly targets: {[key: string]: any};
  readonly actions: {[key: string]: any};
  readonly roleArn: string;
}



interface Action {
  readonly id: string;
  readonly description: string;
  readonly parameters: {[key: string]: any};
  readonly targets: {[key: string]: any};
  readonly tags: {[key: string]: any};
}

interface ActionParameter {
  readonly description: string;
  readonly required: boolean;
}

interface ActionSummary {
  readonly id: string;
  readonly description: string;
  readonly targets: {[key: string]: any};
  readonly tags: {[key: string]: any};
}

interface ActionTarget {
  readonly resourceType: string;
}

interface ConflictException {
  readonly message: string;
}

interface CreateExperimentTemplateActionInput {
  readonly actionId: string;
  readonly description: string;
  readonly parameters: {[key: string]: any};
  readonly targets: {[key: string]: any};
  readonly startAfter: [];
}

interface CreateExperimentTemplateRequest {
  readonly clientToken: string;
  readonly description: string;
  readonly stopConditions: [];
  readonly targets: {[key: string]: any};
  readonly actions: {[key: string]: any};
  readonly roleArn: string;
  readonly tags: {[key: string]: any};
}

interface CreateExperimentTemplateResponse {
  readonly experimentTemplate: ExperimentTemplate;
}

interface CreateExperimentTemplateStopConditionInput {
  readonly source: string;
  readonly value: string;
}

interface CreateExperimentTemplateTargetInput {
  readonly resourceType: string;
  readonly resourceArns: [];
  readonly resourceTags: {[key: string]: any};
  readonly filters: [];
  readonly selectionMode: string;
}

interface DeleteExperimentTemplateRequest {
  readonly id: string;
}

interface DeleteExperimentTemplateResponse {
  readonly experimentTemplate: ExperimentTemplate;
}

interface Experiment {
  readonly id: string;
  readonly experimentTemplateId: string;
  readonly roleArn: string;
  readonly state: ExperimentState;
  readonly targets: {[key: string]: any};
  readonly actions: {[key: string]: any};
  readonly stopConditions: [];
  readonly creationTime: Date;
  readonly startTime: Date;
  readonly endTime: Date;
  readonly tags: {[key: string]: any};
}

interface ExperimentAction {
  readonly actionId: string;
  readonly description: string;
  readonly parameters: {[key: string]: any};
  readonly targets: {[key: string]: any};
  readonly startAfter: [];
  readonly state: ExperimentActionState;
}

interface ExperimentActionState {
  readonly status: string;
  readonly reason: string;
}

interface ExperimentState {
  readonly status: string;
  readonly reason: string;
}

interface ExperimentStopCondition {
  readonly source: string;
  readonly value: string;
}

interface ExperimentSummary {
  readonly id: string;
  readonly experimentTemplateId: string;
  readonly state: ExperimentState;
  readonly creationTime: Date;
  readonly tags: {[key: string]: any};
}

interface ExperimentTarget {
  readonly resourceType: string;
  readonly resourceArns: [];
  readonly resourceTags: {[key: string]: any};
  readonly filters: [];
  readonly selectionMode: string;
}

interface ExperimentTargetFilter {
  readonly path: string;
  readonly values: [];
}

interface ExperimentTemplate {
  readonly id: string;
  readonly description: string;
  readonly targets: {[key: string]: any};
  readonly actions: {[key: string]: any};
  readonly stopConditions: [];
  readonly creationTime: Date;
  readonly lastUpdateTime: Date;
  readonly roleArn: string;
  readonly tags: {[key: string]: any};
}

interface ExperimentTemplateAction {
  readonly actionId: string;
  readonly description: string;
  readonly parameters: {[key: string]: any};
  readonly targets: {[key: string]: any};
  readonly startAfter: [];
}

interface ExperimentTemplateStopCondition {
  readonly source: string;
  readonly value: string;
}

interface ExperimentTemplateSummary {
  readonly id: string;
  readonly description: string;
  readonly creationTime: Date;
  readonly lastUpdateTime: Date;
  readonly tags: {[key: string]: any};
}

interface ExperimentTemplateTarget {
  readonly resourceType: string;
  readonly resourceArns: [];
  readonly resourceTags: {[key: string]: any};
  readonly filters: [];
  readonly selectionMode: string;
}

interface ExperimentTemplateTargetFilter {
  readonly path: string;
  readonly values: [];
}

interface ExperimentTemplateTargetInputFilter {
  readonly path: string;
  readonly values: [];
}

interface GetActionRequest {
  readonly id: string;
}

interface GetActionResponse {
  readonly action: Action;
}

interface GetExperimentRequest {
  readonly id: string;
}

interface GetExperimentResponse {
  readonly experiment: Experiment;
}

interface GetExperimentTemplateRequest {
  readonly id: string;
}

interface GetExperimentTemplateResponse {
  readonly experimentTemplate: ExperimentTemplate;
}

interface ListActionsRequest {
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListActionsResponse {
  readonly actions: [];
  readonly nextToken: string;
}

interface ListExperimentTemplatesRequest {
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListExperimentTemplatesResponse {
  readonly experimentTemplates: [];
  readonly nextToken: string;
}

interface ListExperimentsRequest {
  readonly maxResults: number;
  readonly nextToken: string;
}

interface ListExperimentsResponse {
  readonly experiments: [];
  readonly nextToken: string;
}

interface ListTagsForResourceRequest {
  readonly resourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly tags: {[key: string]: any};
}

interface ResourceNotFoundException {
  readonly message: string;
}

interface ServiceQuotaExceededException {
  readonly message: string;
}

interface StartExperimentRequest {
  readonly clientToken: string;
  readonly experimentTemplateId: string;
  readonly tags: {[key: string]: any};
}

interface StartExperimentResponse {
  readonly experiment: Experiment;
}

interface StopExperimentRequest {
  readonly id: string;
}

interface StopExperimentResponse {
  readonly experiment: Experiment;
}

interface TagResourceRequest {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}

interface TagResourceResponse {
}

interface UntagResourceRequest {
  readonly resourceArn: string;
  readonly tagKeys: [];
}

interface UntagResourceResponse {
}

interface UpdateExperimentTemplateActionInputItem {
  readonly actionId: string;
  readonly description: string;
  readonly parameters: {[key: string]: any};
  readonly targets: {[key: string]: any};
  readonly startAfter: [];
}

interface UpdateExperimentTemplateRequest {
  readonly id: string;
  readonly description: string;
  readonly stopConditions: [];
  readonly targets: {[key: string]: any};
  readonly actions: {[key: string]: any};
  readonly roleArn: string;
}

interface UpdateExperimentTemplateResponse {
  readonly experimentTemplate: ExperimentTemplate;
}

interface UpdateExperimentTemplateStopConditionInput {
  readonly source: string;
  readonly value: string;
}

interface UpdateExperimentTemplateTargetInput {
  readonly resourceType: string;
  readonly resourceArns: [];
  readonly resourceTags: {[key: string]: any};
  readonly filters: [];
  readonly selectionMode: string;
}

interface ValidationException {
  readonly message: string;
}

