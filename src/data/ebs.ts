/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CompleteSnapshot {
  readonly SnapshotId: string;
  readonly ChangedBlocksCount: number;
  readonly Checksum: string;
  readonly ChecksumAlgorithm: string;
  readonly ChecksumAggregationMethod: string;
}
export interface GetSnapshotBlock {
  readonly SnapshotId: string;
  readonly BlockIndex: number;
  readonly BlockToken: string;
}
export interface ListChangedBlocks {
  readonly FirstSnapshotId: string;
  readonly SecondSnapshotId: string;
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly StartingBlockIndex: number;
}
export interface ListSnapshotBlocks {
  readonly SnapshotId: string;
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly StartingBlockIndex: number;
}
export interface PutSnapshotBlock {
  readonly SnapshotId: string;
  readonly BlockIndex: number;
  readonly BlockData: unknown;
  readonly DataLength: number;
  readonly Progress: number;
  readonly Checksum: string;
  readonly ChecksumAlgorithm: string;
}
export interface StartSnapshot {
  readonly VolumeSize: number;
  readonly ParentSnapshotId: string;
  readonly Tags: [];
  readonly Description: string;
  readonly ClientToken: string;
  readonly Encrypted: boolean;
  readonly KmsKeyArn: string;
  readonly Timeout: number;
}



interface AccessDeniedException {
  readonly Message: string;
  readonly Reason: string;
}

interface Block {
  readonly BlockIndex: number;
  readonly BlockToken: string;
}

interface ChangedBlock {
  readonly BlockIndex: number;
  readonly FirstBlockToken: string;
  readonly SecondBlockToken: string;
}

interface CompleteSnapshotRequest {
  readonly SnapshotId: string;
  readonly ChangedBlocksCount: number;
  readonly Checksum: string;
  readonly ChecksumAlgorithm: string;
  readonly ChecksumAggregationMethod: string;
}

interface CompleteSnapshotResponse {
  readonly Status: string;
}

interface ConcurrentLimitExceededException {
  readonly Message: string;
}

interface ConflictException {
  readonly Message: string;
}

interface GetSnapshotBlockRequest {
  readonly SnapshotId: string;
  readonly BlockIndex: number;
  readonly BlockToken: string;
}

interface GetSnapshotBlockResponse {
  readonly DataLength: number;
  readonly BlockData: unknown;
  readonly Checksum: string;
  readonly ChecksumAlgorithm: string;
}

interface InternalServerException {
  readonly Message: string;
}

interface ListChangedBlocksRequest {
  readonly FirstSnapshotId: string;
  readonly SecondSnapshotId: string;
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly StartingBlockIndex: number;
}

interface ListChangedBlocksResponse {
  readonly ChangedBlocks: [];
  readonly ExpiryTime: Date;
  readonly VolumeSize: number;
  readonly BlockSize: number;
  readonly NextToken: string;
}

interface ListSnapshotBlocksRequest {
  readonly SnapshotId: string;
  readonly NextToken: string;
  readonly MaxResults: number;
  readonly StartingBlockIndex: number;
}

interface ListSnapshotBlocksResponse {
  readonly Blocks: [];
  readonly ExpiryTime: Date;
  readonly VolumeSize: number;
  readonly BlockSize: number;
  readonly NextToken: string;
}

interface PutSnapshotBlockRequest {
  readonly SnapshotId: string;
  readonly BlockIndex: number;
  readonly BlockData: unknown;
  readonly DataLength: number;
  readonly Progress: number;
  readonly Checksum: string;
  readonly ChecksumAlgorithm: string;
}

interface PutSnapshotBlockResponse {
  readonly Checksum: string;
  readonly ChecksumAlgorithm: string;
}

interface RequestThrottledException {
  readonly Message: string;
  readonly Reason: string;
}

interface ResourceNotFoundException {
  readonly Message: string;
  readonly Reason: string;
}

interface ServiceQuotaExceededException {
  readonly Message: string;
  readonly Reason: string;
}

interface StartSnapshotRequest {
  readonly VolumeSize: number;
  readonly ParentSnapshotId: string;
  readonly Tags: [];
  readonly Description: string;
  readonly ClientToken: string;
  readonly Encrypted: boolean;
  readonly KmsKeyArn: string;
  readonly Timeout: number;
}

interface StartSnapshotResponse {
  readonly Description: string;
  readonly SnapshotId: string;
  readonly OwnerId: string;
  readonly Status: string;
  readonly StartTime: Date;
  readonly VolumeSize: number;
  readonly BlockSize: number;
  readonly Tags: [];
  readonly ParentSnapshotId: string;
  readonly KmsKeyArn: string;
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}

interface ValidationException {
  readonly Message: string;
  readonly Reason: string;
}
