/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateEndpoint {
  readonly OutpostId: string;
  readonly SubnetId: string;
  readonly SecurityGroupId: string;
  readonly AccessType?: string;
  readonly CustomerOwnedIpv4Pool?: string;
}
export interface DeleteEndpoint {
  readonly EndpointId: string;
  readonly OutpostId: string;
}
export interface ListEndpoints {
  readonly NextToken?: string;
  readonly MaxResults?: number;
}



interface AccessDeniedException {
  readonly Message: string;
}

interface ConflictException {
  readonly Message: string;
}

interface CreateEndpointRequest {
  readonly OutpostId: string;
  readonly SubnetId: string;
  readonly SecurityGroupId: string;
  readonly AccessType: string;
  readonly CustomerOwnedIpv4Pool: string;
}

interface CreateEndpointResult {
  readonly EndpointArn: string;
}

interface DeleteEndpointRequest {
  readonly EndpointId: string;
  readonly OutpostId: string;
}

interface Endpoint {
  readonly EndpointArn: string;
  readonly OutpostsId: string;
  readonly CidrBlock: string;
  readonly Status: string;
  readonly CreationTime: Date;
  readonly NetworkInterfaces: [];
  readonly VpcId: string;
  readonly SubnetId: string;
  readonly SecurityGroupId: string;
  readonly AccessType: string;
  readonly CustomerOwnedIpv4Pool: string;
}

interface InternalServerException {
  readonly Message: string;
}

interface ListEndpointsRequest {
  readonly NextToken: string;
  readonly MaxResults: number;
}

interface ListEndpointsResult {
  readonly Endpoints: [];
  readonly NextToken: string;
}

interface NetworkInterface {
  readonly NetworkInterfaceId: string;
}

interface ResourceNotFoundException {
  readonly Message: string;
}

interface ValidationException {
  readonly Message: string;
}

