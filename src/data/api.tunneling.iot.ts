/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CloseTunnel {
  readonly tunnelId: string;
  readonly delete?: boolean;
}

export interface DescribeTunnel {
  readonly tunnelId: string;
}

export interface ListTagsForResource {
  readonly resourceArn: string;
}

export interface ListTunnels {
  readonly thingName?: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface OpenTunnel {
  readonly description?: string;
  readonly tags?: [];
  readonly destinationConfig?: DestinationConfig;
  readonly timeoutConfig?: TimeoutConfig;
}

export interface TagResource {
  readonly resourceArn: string;
  readonly tags: [];
}

export interface UntagResource {
  readonly resourceArn: string;
  readonly tagKeys: [];
}

export interface CloseTunnelRequest {
  readonly tunnelId: string;
  readonly delete?: boolean;
}

export interface CloseTunnelResponse {
}

export interface ConnectionState {
  readonly status?: string;
  readonly lastUpdatedAt?: Date;
}

export interface DescribeTunnelRequest {
  readonly tunnelId: string;
}

export interface DescribeTunnelResponse {
  readonly tunnel?: Tunnel;
}

export interface DestinationConfig {
  readonly thingName?: string;
  readonly services: [];
}

export interface LimitExceededException {
  readonly message?: string;
}

export interface ListTagsForResourceRequest {
  readonly resourceArn: string;
}

export interface ListTagsForResourceResponse {
  readonly tags?: [];
}

export interface ListTunnelsRequest {
  readonly thingName?: string;
  readonly maxResults?: number;
  readonly nextToken?: string;
}

export interface ListTunnelsResponse {
  readonly tunnelSummaries?: [];
  readonly nextToken?: string;
}

export interface OpenTunnelRequest {
  readonly description?: string;
  readonly tags?: [];
  readonly destinationConfig?: DestinationConfig;
  readonly timeoutConfig?: TimeoutConfig;
}

export interface OpenTunnelResponse {
  readonly tunnelId?: string;
  readonly tunnelArn?: string;
  readonly sourceAccessToken?: string;
  readonly destinationAccessToken?: string;
}

export interface ResourceNotFoundException {
  readonly message?: string;
}

export interface Tag {
  readonly key: string;
  readonly value: string;
}

export interface TagResourceRequest {
  readonly resourceArn: string;
  readonly tags: [];
}

export interface TagResourceResponse {
}

export interface TimeoutConfig {
  readonly maxLifetimeTimeoutMinutes?: number;
}

export interface Tunnel {
  readonly tunnelId?: string;
  readonly tunnelArn?: string;
  readonly status?: string;
  readonly sourceConnectionState?: ConnectionState;
  readonly destinationConnectionState?: ConnectionState;
  readonly description?: string;
  readonly destinationConfig?: DestinationConfig;
  readonly timeoutConfig?: TimeoutConfig;
  readonly tags?: [];
  readonly createdAt?: Date;
  readonly lastUpdatedAt?: Date;
}

export interface TunnelSummary {
  readonly tunnelId?: string;
  readonly tunnelArn?: string;
  readonly status?: string;
  readonly description?: string;
  readonly createdAt?: Date;
  readonly lastUpdatedAt?: Date;
}

export interface UntagResourceRequest {
  readonly resourceArn: string;
  readonly tagKeys: [];
}

export interface UntagResourceResponse {
}


