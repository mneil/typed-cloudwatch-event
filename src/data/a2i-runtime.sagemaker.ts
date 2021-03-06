/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface DeleteHumanLoop {
  readonly HumanLoopName: string;
}
export interface DescribeHumanLoop {
  readonly HumanLoopName: string;
}
export interface ListHumanLoops {
  readonly CreationTimeAfter?: Date;
  readonly CreationTimeBefore?: Date;
  readonly FlowDefinitionArn: string;
  readonly SortOrder?: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}
export interface StartHumanLoop {
  readonly HumanLoopName: string;
  readonly FlowDefinitionArn: string;
  readonly HumanLoopInput: HumanLoopInput;
  readonly DataAttributes?: HumanLoopDataAttributes;
}
export interface StopHumanLoop {
  readonly HumanLoopName: string;
}



interface ConflictException {
  readonly Message: string;
}

interface DeleteHumanLoopRequest {
  readonly HumanLoopName: string;
}

interface DeleteHumanLoopResponse {
}

interface DescribeHumanLoopRequest {
  readonly HumanLoopName: string;
}

interface DescribeHumanLoopResponse {
  readonly CreationTime: Date;
  readonly FailureReason: string;
  readonly FailureCode: string;
  readonly HumanLoopStatus: string;
  readonly HumanLoopName: string;
  readonly HumanLoopArn: string;
  readonly FlowDefinitionArn: string;
  readonly HumanLoopOutput: HumanLoopOutput;
}

interface HumanLoopDataAttributes {
  readonly ContentClassifiers: [];
}

interface HumanLoopInput {
  readonly InputContent: string;
}

interface HumanLoopOutput {
  readonly OutputS3Uri: string;
}

interface HumanLoopSummary {
  readonly HumanLoopName: string;
  readonly HumanLoopStatus: string;
  readonly CreationTime: Date;
  readonly FailureReason: string;
  readonly FlowDefinitionArn: string;
}

interface InternalServerException {
  readonly Message: string;
}

interface ListHumanLoopsRequest {
  readonly CreationTimeAfter: Date;
  readonly CreationTimeBefore: Date;
  readonly FlowDefinitionArn: string;
  readonly SortOrder: string;
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListHumanLoopsResponse {
  readonly HumanLoopSummaries: [];
  readonly NextToken: string;
}

interface ResourceNotFoundException {
  readonly Message: string;
}

interface ServiceQuotaExceededException {
  readonly Message: string;
}

interface StartHumanLoopRequest {
  readonly HumanLoopName: string;
  readonly FlowDefinitionArn: string;
  readonly HumanLoopInput: HumanLoopInput;
  readonly DataAttributes: HumanLoopDataAttributes;
}

interface StartHumanLoopResponse {
  readonly HumanLoopArn: string;
}

interface StopHumanLoopRequest {
  readonly HumanLoopName: string;
}

interface StopHumanLoopResponse {
}

interface ThrottlingException {
  readonly Message: string;
}

interface ValidationException {
  readonly Message: string;
}

