/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AssociateGatewayToServer {
  readonly GatewayArn: string;
  readonly ServerArn: string;
}
export interface CreateGateway {
  readonly ActivationKey: string;
  readonly GatewayDisplayName: string;
  readonly GatewayType: string;
  readonly Tags?: [];
}
export interface DeleteGateway {
  readonly GatewayArn: string;
}
export interface DeleteHypervisor {
  readonly HypervisorArn: string;
}
export interface DisassociateGatewayFromServer {
  readonly GatewayArn: string;
}
export interface ImportHypervisorConfiguration {
  readonly Host: string;
  readonly KmsKeyArn?: string;
  readonly Name: string;
  readonly Password?: string;
  readonly Tags?: [];
  readonly Username?: string;
}
export interface ListGateways {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface ListHypervisors {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface ListTagsForResource {
  readonly ResourceArn: string;
}
export interface ListVirtualMachines {
  readonly MaxResults?: number;
  readonly NextToken?: string;
}
export interface PutMaintenanceStartTime {
  readonly DayOfMonth?: number;
  readonly DayOfWeek?: number;
  readonly GatewayArn: string;
  readonly HourOfDay: number;
  readonly MinuteOfHour: number;
}
export interface TagResource {
  readonly ResourceARN: string;
  readonly Tags: [];
}
export interface TestHypervisorConfiguration {
  readonly GatewayArn: string;
  readonly Host: string;
  readonly Password?: string;
  readonly Username?: string;
}
export interface UntagResource {
  readonly ResourceARN: string;
  readonly TagKeys: [];
}
export interface UpdateGatewayInformation {
  readonly GatewayArn: string;
  readonly GatewayDisplayName?: string;
}
export interface UpdateHypervisor {
  readonly Host?: string;
  readonly HypervisorArn: string;
  readonly Password?: string;
  readonly Username?: string;
}



interface AccessDeniedException {
  readonly ErrorCode: string;
  readonly Message: string;
}

interface AssociateGatewayToServerInput {
  readonly GatewayArn: string;
  readonly ServerArn: string;
}

interface AssociateGatewayToServerOutput {
  readonly GatewayArn: string;
}

interface ConflictException {
  readonly ErrorCode: string;
  readonly Message: string;
}

interface CreateGatewayInput {
  readonly ActivationKey: string;
  readonly GatewayDisplayName: string;
  readonly GatewayType: string;
  readonly Tags: [];
}

interface CreateGatewayOutput {
  readonly GatewayArn: string;
}

interface DeleteGatewayInput {
  readonly GatewayArn: string;
}

interface DeleteGatewayOutput {
  readonly GatewayArn: string;
}

interface DeleteHypervisorInput {
  readonly HypervisorArn: string;
}

interface DeleteHypervisorOutput {
  readonly HypervisorArn: string;
}

interface DisassociateGatewayFromServerInput {
  readonly GatewayArn: string;
}

interface DisassociateGatewayFromServerOutput {
  readonly GatewayArn: string;
}

interface Gateway {
  readonly GatewayArn: string;
  readonly GatewayDisplayName: string;
  readonly GatewayType: string;
  readonly HypervisorId: string;
  readonly LastSeenTime: Date;
}

interface Hypervisor {
  readonly Host: string;
  readonly HypervisorArn: string;
  readonly KmsKeyArn: string;
  readonly Name: string;
  readonly State: string;
}

interface ImportHypervisorConfigurationInput {
  readonly Host: string;
  readonly KmsKeyArn: string;
  readonly Name: string;
  readonly Password: string;
  readonly Tags: [];
  readonly Username: string;
}

interface ImportHypervisorConfigurationOutput {
  readonly HypervisorArn: string;
}

interface InternalServerException {
  readonly ErrorCode: string;
  readonly Message: string;
}

interface ListGatewaysInput {
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListGatewaysOutput {
  readonly Gateways: [];
  readonly NextToken: string;
}

interface ListHypervisorsInput {
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListHypervisorsOutput {
  readonly Hypervisors: [];
  readonly NextToken: string;
}

interface ListTagsForResourceInput {
  readonly ResourceArn: string;
}

interface ListTagsForResourceOutput {
  readonly ResourceArn: string;
  readonly Tags: [];
}

interface ListVirtualMachinesInput {
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListVirtualMachinesOutput {
  readonly NextToken: string;
  readonly VirtualMachines: [];
}

interface PutMaintenanceStartTimeInput {
  readonly DayOfMonth: number;
  readonly DayOfWeek: number;
  readonly GatewayArn: string;
  readonly HourOfDay: number;
  readonly MinuteOfHour: number;
}

interface PutMaintenanceStartTimeOutput {
  readonly GatewayArn: string;
}

interface ResourceNotFoundException {
  readonly ErrorCode: string;
  readonly Message: string;
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}

interface TagResourceInput {
  readonly ResourceARN: string;
  readonly Tags: [];
}

interface TagResourceOutput {
  readonly ResourceARN: string;
}

interface TestHypervisorConfigurationInput {
  readonly GatewayArn: string;
  readonly Host: string;
  readonly Password: string;
  readonly Username: string;
}

interface TestHypervisorConfigurationOutput {
}

interface UntagResourceInput {
  readonly ResourceARN: string;
  readonly TagKeys: [];
}

interface UntagResourceOutput {
  readonly ResourceARN: string;
}

interface UpdateGatewayInformationInput {
  readonly GatewayArn: string;
  readonly GatewayDisplayName: string;
}

interface UpdateGatewayInformationOutput {
  readonly GatewayArn: string;
}

interface UpdateHypervisorInput {
  readonly Host: string;
  readonly HypervisorArn: string;
  readonly Password: string;
  readonly Username: string;
}

interface UpdateHypervisorOutput {
  readonly HypervisorArn: string;
}

interface ValidationException {
  readonly ErrorCode: string;
  readonly Message: string;
}

interface VirtualMachine {
  readonly HostName: string;
  readonly HypervisorId: string;
  readonly LastBackupDate: Date;
  readonly Name: string;
  readonly Path: string;
  readonly ResourceArn: string;
}

