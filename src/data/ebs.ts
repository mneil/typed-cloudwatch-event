/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CompleteSnapshot {
  readonly SnapshotId: string;
  readonly ChangedBlocksCount: number;
  readonly Checksum?: string;
  readonly ChecksumAlgorithm?: string;
  readonly ChecksumAggregationMethod?: string;
}

export interface GetSnapshotBlock {
  readonly SnapshotId: string;
  readonly BlockIndex: number;
  readonly BlockToken: string;
}

export interface ListChangedBlocks {
  readonly FirstSnapshotId?: string;
  readonly SecondSnapshotId: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
  readonly StartingBlockIndex?: number;
}

export interface ListSnapshotBlocks {
  readonly SnapshotId: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
  readonly StartingBlockIndex?: number;
}

export interface PutSnapshotBlock {
  readonly SnapshotId: string;
  readonly BlockIndex: number;
  readonly BlockData: unknown;
  readonly DataLength: number;
  readonly Progress?: number;
  readonly Checksum: string;
  readonly ChecksumAlgorithm: string;
}

export interface StartSnapshot {
  readonly VolumeSize: number;
  readonly ParentSnapshotId?: string;
  readonly Tags?: [];
  readonly Description?: string;
  readonly ClientToken?: string;
  readonly Encrypted?: boolean;
  readonly KmsKeyArn?: string;
  readonly Timeout?: number;
}

export interface AccessDeniedException {
  readonly Message?: string;
  readonly Reason: string;
}

export interface Block {
  readonly BlockIndex?: number;
  readonly BlockToken?: string;
}

export interface ChangedBlock {
  readonly BlockIndex?: number;
  readonly FirstBlockToken?: string;
  readonly SecondBlockToken?: string;
}

export interface CompleteSnapshotRequest {
  readonly SnapshotId: string;
  readonly ChangedBlocksCount: number;
  readonly Checksum?: string;
  readonly ChecksumAlgorithm?: string;
  readonly ChecksumAggregationMethod?: string;
}

export interface CompleteSnapshotResponse {
  readonly Status?: string;
}

export interface ConcurrentLimitExceededException {
  readonly Message?: string;
}

export interface ConflictException {
  readonly Message?: string;
}

export interface GetSnapshotBlockRequest {
  readonly SnapshotId: string;
  readonly BlockIndex: number;
  readonly BlockToken: string;
}

export interface GetSnapshotBlockResponse {
  readonly DataLength?: number;
  readonly BlockData?: unknown;
  readonly Checksum?: string;
  readonly ChecksumAlgorithm?: string;
}

export interface InternalServerException {
  readonly Message?: string;
}

export interface ListChangedBlocksRequest {
  readonly FirstSnapshotId?: string;
  readonly SecondSnapshotId: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
  readonly StartingBlockIndex?: number;
}

export interface ListChangedBlocksResponse {
  readonly ChangedBlocks?: [];
  readonly ExpiryTime?: Date;
  readonly VolumeSize?: number;
  readonly BlockSize?: number;
  readonly NextToken?: string;
}

export interface ListSnapshotBlocksRequest {
  readonly SnapshotId: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
  readonly StartingBlockIndex?: number;
}

export interface ListSnapshotBlocksResponse {
  readonly Blocks?: [];
  readonly ExpiryTime?: Date;
  readonly VolumeSize?: number;
  readonly BlockSize?: number;
  readonly NextToken?: string;
}

export interface PutSnapshotBlockRequest {
  readonly SnapshotId: string;
  readonly BlockIndex: number;
  readonly BlockData: unknown;
  readonly DataLength: number;
  readonly Progress?: number;
  readonly Checksum: string;
  readonly ChecksumAlgorithm: string;
}

export interface PutSnapshotBlockResponse {
  readonly Checksum?: string;
  readonly ChecksumAlgorithm?: string;
}

export interface RequestThrottledException {
  readonly Message?: string;
  readonly Reason?: string;
}

export interface ResourceNotFoundException {
  readonly Message?: string;
  readonly Reason?: string;
}

export interface ServiceQuotaExceededException {
  readonly Message?: string;
  readonly Reason?: string;
}

export interface StartSnapshotRequest {
  readonly VolumeSize: number;
  readonly ParentSnapshotId?: string;
  readonly Tags?: [];
  readonly Description?: string;
  readonly ClientToken?: string;
  readonly Encrypted?: boolean;
  readonly KmsKeyArn?: string;
  readonly Timeout?: number;
}

export interface StartSnapshotResponse {
  readonly Description?: string;
  readonly SnapshotId?: string;
  readonly OwnerId?: string;
  readonly Status?: string;
  readonly StartTime?: Date;
  readonly VolumeSize?: number;
  readonly BlockSize?: number;
  readonly Tags?: [];
  readonly ParentSnapshotId?: string;
  readonly KmsKeyArn?: string;
}

export interface Tag {
  readonly Key?: string;
  readonly Value?: string;
}

export interface ValidationException {
  readonly Message?: string;
  readonly Reason?: string;
}


