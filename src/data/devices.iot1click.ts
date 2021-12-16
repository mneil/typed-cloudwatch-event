/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface ClaimDevicesByClaimCode {
  readonly ClaimCode: string;
}
export interface DescribeDevice {
  readonly DeviceId: string;
}
export interface FinalizeDeviceClaim {
  readonly DeviceId: string;
  readonly Tags: {[key: string]: any};
}
export interface GetDeviceMethods {
  readonly DeviceId: string;
}
export interface InitiateDeviceClaim {
  readonly DeviceId: string;
}
export interface InvokeDeviceMethod {
  readonly DeviceId: string;
  readonly DeviceMethod: DeviceMethod;
  readonly DeviceMethodParameters: string;
}
export interface ListDeviceEvents {
  readonly DeviceId: string;
  readonly FromTimeStamp: Date;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly ToTimeStamp: Date;
}
export interface ListDevices {
  readonly DeviceType: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListTagsForResource {
  readonly ResourceArn: string;
}
export interface TagResource {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}
export interface UnclaimDevice {
  readonly DeviceId: string;
}
export interface UntagResource {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}
export interface UpdateDeviceState {
  readonly DeviceId: string;
  readonly Enabled: boolean;
}



interface Attributes {
}

interface ClaimDevicesByClaimCodeRequest {
  readonly ClaimCode: string;
}

interface ClaimDevicesByClaimCodeResponse {
  readonly ClaimCode: string;
  readonly Total: number;
}

interface DescribeDeviceRequest {
  readonly DeviceId: string;
}

interface DescribeDeviceResponse {
  readonly DeviceDescription: DeviceDescription;
}

interface Device {
  readonly Attributes: Attributes;
  readonly DeviceId: string;
  readonly Type: string;
}

interface DeviceClaimResponse {
  readonly State: string;
}

interface DeviceDescription {
  readonly Arn: string;
  readonly Attributes: {[key: string]: any};
  readonly DeviceId: string;
  readonly Enabled: boolean;
  readonly RemainingLife: unknown;
  readonly Type: string;
  readonly Tags: {[key: string]: any};
}

interface DeviceEvent {
  readonly Device: Device;
  readonly StdEvent: string;
}

interface DeviceEventsResponse {
  readonly Events: [];
  readonly NextToken: string;
}

interface DeviceMethod {
  readonly DeviceType: string;
  readonly MethodName: string;
}

interface Empty {
}

interface FinalizeDeviceClaimRequest {
  readonly DeviceId: string;
  readonly Tags: {[key: string]: any};
}

interface FinalizeDeviceClaimResponse {
  readonly State: string;
}

interface ForbiddenException {
  readonly Code: string;
  readonly Message: string;
}

interface GetDeviceMethodsRequest {
  readonly DeviceId: string;
}

interface GetDeviceMethodsResponse {
  readonly DeviceMethods: [];
}

interface InitiateDeviceClaimRequest {
  readonly DeviceId: string;
}

interface InitiateDeviceClaimResponse {
  readonly State: string;
}

interface InternalFailureException {
  readonly Code: string;
  readonly Message: string;
}

interface InvalidRequestException {
  readonly Code: string;
  readonly Message: string;
}

interface InvokeDeviceMethodRequest {
  readonly DeviceId: string;
  readonly DeviceMethod: DeviceMethod;
  readonly DeviceMethodParameters: string;
}

interface InvokeDeviceMethodResponse {
  readonly DeviceMethodResponse: string;
}

interface ListDeviceEventsRequest {
  readonly DeviceId: string;
  readonly FromTimeStamp: Date;
  readonly MaxResults: number;
  readonly NextToken: string;
  readonly ToTimeStamp: Date;
}

interface ListDeviceEventsResponse {
  readonly Events: [];
  readonly NextToken: string;
}

interface ListDevicesRequest {
  readonly DeviceType: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListDevicesResponse {
  readonly Devices: [];
  readonly NextToken: string;
}

interface ListTagsForResourceRequest {
  readonly ResourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly Tags: {[key: string]: any};
}

interface PreconditionFailedException {
  readonly Code: string;
  readonly Message: string;
}

interface RangeNotSatisfiableException {
  readonly Code: string;
  readonly Message: string;
}

interface ResourceConflictException {
  readonly Code: string;
  readonly Message: string;
}

interface ResourceNotFoundException {
  readonly Code: string;
  readonly Message: string;
}

interface TagResourceRequest {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}

interface UnclaimDeviceRequest {
  readonly DeviceId: string;
}

interface UnclaimDeviceResponse {
  readonly State: string;
}

interface UntagResourceRequest {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

interface UpdateDeviceStateRequest {
  readonly DeviceId: string;
  readonly Enabled: boolean;
}

interface UpdateDeviceStateResponse {
}

