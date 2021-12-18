/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateExperimentTemplate {
  readonly clientToken: string;
  readonly description: string;
  readonly stopConditions: [];
  readonly targets?: {[key: string]: any};
  readonly actions: {[key: string]: any};
  readonly roleArn: string;
  readonly tags?: {[key: string]: any};
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
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface ListExperimentTemplates {
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface ListExperiments {
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface ListTagsForResource {
  readonly resourceArn: string;
}

export interface StartExperiment {
  readonly clientToken: string;
  readonly experimentTemplateId: string;
  readonly tags?: {[key: string]: any};
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
  readonly tagKeys?: [];
}

export interface UpdateExperimentTemplate {
  readonly id: string;
  readonly description?: string;
  readonly stopConditions?: [];
  readonly targets?: {[key: string]: any};
  readonly actions?: {[key: string]: any};
  readonly roleArn?: string;
}

export interface Action {
  readonly id?: string;
  readonly description?: string;
  readonly parameters?: {[key: string]: any};
  readonly targets?: {[key: string]: any};
  readonly tags?: {[key: string]: any};
}

export interface ActionParameter {
  readonly description?: string;
  readonly required?: boolean;
}

export interface ActionSummary {
  readonly id?: string;
  readonly description?: string;
  readonly targets?: {[key: string]: any};
  readonly tags?: {[key: string]: any};
}

export interface ActionTarget {
  readonly resourceType?: string;
}

export interface ConflictException {
  readonly message?: string;
}

export interface CreateExperimentTemplateActionInput {
  readonly actionId: string;
  readonly description?: string;
  readonly parameters?: {[key: string]: any};
  readonly targets?: {[key: string]: any};
  readonly startAfter?: [];
}

export interface CreateExperimentTemplateRequest {
  readonly clientToken: string;
  readonly description: string;
  readonly stopConditions: [];
  readonly targets?: {[key: string]: any};
  readonly actions: {[key: string]: any};
  readonly roleArn: string;
  readonly tags?: {[key: string]: any};
}

export interface CreateExperimentTemplateResponse {
  readonly experimentTemplate?: ExperimentTemplate;
}

export interface CreateExperimentTemplateStopConditionInput {
  readonly source: string;
  readonly value?: string;
}

export interface CreateExperimentTemplateTargetInput {
  readonly resourceType: string;
  readonly resourceArns?: [];
  readonly resourceTags?: {[key: string]: any};
  readonly filters?: [];
  readonly selectionMode: string;
}

export interface DeleteExperimentTemplateRequest {
  readonly id: string;
}

export interface DeleteExperimentTemplateResponse {
  readonly experimentTemplate?: ExperimentTemplate;
}

export interface Experiment {
  readonly id?: string;
  readonly experimentTemplateId?: string;
  readonly roleArn?: string;
  readonly state?: ExperimentState;
  readonly targets?: {[key: string]: any};
  readonly actions?: {[key: string]: any};
  readonly stopConditions?: [];
  readonly creationTime?: Date;
  readonly startTime?: Date;
  readonly endTime?: Date;
  readonly tags?: {[key: string]: any};
}

export interface ExperimentAction {
  readonly actionId?: string;
  readonly description?: string;
  readonly parameters?: {[key: string]: any};
  readonly targets?: {[key: string]: any};
  readonly startAfter?: [];
  readonly state?: ExperimentActionState;
}

export interface ExperimentActionState {
  readonly status?: string;
  readonly reason?: string;
}

export interface ExperimentState {
  readonly status?: string;
  readonly reason?: string;
}

export interface ExperimentStopCondition {
  readonly source?: string;
  readonly value?: string;
}

export interface ExperimentSummary {
  readonly id?: string;
  readonly experimentTemplateId?: string;
  readonly state?: ExperimentState;
  readonly creationTime?: Date;
  readonly tags?: {[key: string]: any};
}

export interface ExperimentTarget {
  readonly resourceType?: string;
  readonly resourceArns?: [];
  readonly resourceTags?: {[key: string]: any};
  readonly filters?: [];
  readonly selectionMode?: string;
}

export interface ExperimentTargetFilter {
  readonly path?: string;
  readonly values?: [];
}

export interface ExperimentTemplate {
  readonly id?: string;
  readonly description?: string;
  readonly targets?: {[key: string]: any};
  readonly actions?: {[key: string]: any};
  readonly stopConditions?: [];
  readonly creationTime?: Date;
  readonly lastUpdateTime?: Date;
  readonly roleArn?: string;
  readonly tags?: {[key: string]: any};
}

export interface ExperimentTemplateAction {
  readonly actionId?: string;
  readonly description?: string;
  readonly parameters?: {[key: string]: any};
  readonly targets?: {[key: string]: any};
  readonly startAfter?: [];
}

export interface ExperimentTemplateStopCondition {
  readonly source?: string;
  readonly value?: string;
}

export interface ExperimentTemplateSummary {
  readonly id?: string;
  readonly description?: string;
  readonly creationTime?: Date;
  readonly lastUpdateTime?: Date;
  readonly tags?: {[key: string]: any};
}

export interface ExperimentTemplateTarget {
  readonly resourceType?: string;
  readonly resourceArns?: [];
  readonly resourceTags?: {[key: string]: any};
  readonly filters?: [];
  readonly selectionMode?: string;
}

export interface ExperimentTemplateTargetFilter {
  readonly path?: string;
  readonly values?: [];
}

export interface ExperimentTemplateTargetInputFilter {
  readonly path: string;
  readonly values: [];
}

export interface GetActionRequest {
  readonly id: string;
}

export interface GetActionResponse {
  readonly action?: Action;
}

export interface GetExperimentRequest {
  readonly id: string;
}

export interface GetExperimentResponse {
  readonly experiment?: Experiment;
}

export interface GetExperimentTemplateRequest {
  readonly id: string;
}

export interface GetExperimentTemplateResponse {
  readonly experimentTemplate?: ExperimentTemplate;
}

export interface ListActionsRequest {
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface ListActionsResponse {
  readonly actions?: [];
  readonly nextToken?: string;
}

export interface ListExperimentTemplatesRequest {
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface ListExperimentTemplatesResponse {
  readonly experimentTemplates?: [];
  readonly nextToken?: string;
}

export interface ListExperimentsRequest {
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface ListExperimentsResponse {
  readonly experiments?: [];
  readonly nextToken?: string;
}

export interface ListTagsForResourceRequest {
  readonly resourceArn: string;
}

export interface ListTagsForResourceResponse {
  readonly tags?: {[key: string]: any};
}

export interface ResourceNotFoundException {
  readonly message?: string;
}

export interface ServiceQuotaExceededException {
  readonly message?: string;
}

export interface StartExperimentRequest {
  readonly clientToken: string;
  readonly experimentTemplateId: string;
  readonly tags?: {[key: string]: any};
}

export interface StartExperimentResponse {
  readonly experiment?: Experiment;
}

export interface StopExperimentRequest {
  readonly id: string;
}

export interface StopExperimentResponse {
  readonly experiment?: Experiment;
}

export interface TagResourceRequest {
  readonly resourceArn: string;
  readonly tags: {[key: string]: any};
}

export interface TagResourceResponse {
}

export interface UntagResourceRequest {
  readonly resourceArn: string;
  readonly tagKeys?: [];
}

export interface UntagResourceResponse {
}

export interface UpdateExperimentTemplateActionInputItem {
  readonly actionId?: string;
  readonly description?: string;
  readonly parameters?: {[key: string]: any};
  readonly targets?: {[key: string]: any};
  readonly startAfter?: [];
}

export interface UpdateExperimentTemplateRequest {
  readonly id: string;
  readonly description?: string;
  readonly stopConditions?: [];
  readonly targets?: {[key: string]: any};
  readonly actions?: {[key: string]: any};
  readonly roleArn?: string;
}

export interface UpdateExperimentTemplateResponse {
  readonly experimentTemplate?: ExperimentTemplate;
}

export interface UpdateExperimentTemplateStopConditionInput {
  readonly source: string;
  readonly value?: string;
}

export interface UpdateExperimentTemplateTargetInput {
  readonly resourceType: string;
  readonly resourceArns?: [];
  readonly resourceTags?: {[key: string]: any};
  readonly filters?: [];
  readonly selectionMode: string;
}

export interface ValidationException {
  readonly message?: string;
}


