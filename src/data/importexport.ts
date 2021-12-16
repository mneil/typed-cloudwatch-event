/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CancelJob {
  readonly JobId: string;
  readonly APIVersion: string;
}
export interface CreateJob {
  readonly JobType: string;
  readonly Manifest: string;
  readonly ManifestAddendum: string;
  readonly ValidateOnly: boolean;
  readonly APIVersion: string;
}
export interface GetShippingLabel {
  readonly jobIds: [];
  readonly name: string;
  readonly company: string;
  readonly phoneNumber: string;
  readonly country: string;
  readonly stateOrProvince: string;
  readonly city: string;
  readonly postalCode: string;
  readonly street1: string;
  readonly street2: string;
  readonly street3: string;
  readonly APIVersion: string;
}
export interface GetStatus {
  readonly JobId: string;
  readonly APIVersion: string;
}
export interface ListJobs {
  readonly MaxJobs: number;
  readonly Marker: string;
  readonly APIVersion: string;
}
export interface UpdateJob {
  readonly JobId: string;
  readonly Manifest: string;
  readonly JobType: string;
  readonly ValidateOnly: boolean;
  readonly APIVersion: string;
}



interface Artifact {
  readonly Description: string;
  readonly URL: string;
}

interface BucketPermissionException {
  readonly message: string;
}

interface CancelJobInput {
  readonly JobId: string;
  readonly APIVersion: string;
}

interface CancelJobOutput {
  readonly Success: boolean;
}

interface CanceledJobIdException {
  readonly message: string;
}

interface CreateJobInput {
  readonly JobType: string;
  readonly Manifest: string;
  readonly ManifestAddendum: string;
  readonly ValidateOnly: boolean;
  readonly APIVersion: string;
}

interface CreateJobOutput {
  readonly JobId: string;
  readonly JobType: string;
  readonly Signature: string;
  readonly SignatureFileContents: string;
  readonly WarningMessage: string;
  readonly ArtifactList: [];
}

interface CreateJobQuotaExceededException {
  readonly message: string;
}

interface ExpiredJobIdException {
  readonly message: string;
}

interface GetShippingLabelInput {
  readonly jobIds: [];
  readonly name: string;
  readonly company: string;
  readonly phoneNumber: string;
  readonly country: string;
  readonly stateOrProvince: string;
  readonly city: string;
  readonly postalCode: string;
  readonly street1: string;
  readonly street2: string;
  readonly street3: string;
  readonly APIVersion: string;
}

interface GetShippingLabelOutput {
  readonly ShippingLabelURL: string;
  readonly Warning: string;
}

interface GetStatusInput {
  readonly JobId: string;
  readonly APIVersion: string;
}

interface GetStatusOutput {
  readonly JobId: string;
  readonly JobType: string;
  readonly LocationCode: string;
  readonly LocationMessage: string;
  readonly ProgressCode: string;
  readonly ProgressMessage: string;
  readonly Carrier: string;
  readonly TrackingNumber: string;
  readonly LogBucket: string;
  readonly LogKey: string;
  readonly ErrorCount: number;
  readonly Signature: string;
  readonly SignatureFileContents: string;
  readonly CurrentManifest: string;
  readonly CreationDate: Date;
  readonly ArtifactList: [];
}

interface InvalidAccessKeyIdException {
  readonly message: string;
}

interface InvalidAddressException {
  readonly message: string;
}

interface InvalidCustomsException {
  readonly message: string;
}

interface InvalidFileSystemException {
  readonly message: string;
}

interface InvalidJobIdException {
  readonly message: string;
}

interface InvalidManifestFieldException {
  readonly message: string;
}

interface InvalidParameterException {
  readonly message: string;
}

interface InvalidVersionException {
  readonly message: string;
}

interface Job {
  readonly JobId: string;
  readonly CreationDate: Date;
  readonly IsCanceled: boolean;
  readonly JobType: string;
}

interface ListJobsInput {
  readonly MaxJobs: number;
  readonly Marker: string;
  readonly APIVersion: string;
}

interface ListJobsOutput {
  readonly Jobs: [];
  readonly IsTruncated: boolean;
}

interface MalformedManifestException {
  readonly message: string;
}

interface MissingCustomsException {
  readonly message: string;
}

interface MissingManifestFieldException {
  readonly message: string;
}

interface MissingParameterException {
  readonly message: string;
}

interface MultipleRegionsException {
  readonly message: string;
}

interface NoSuchBucketException {
  readonly message: string;
}

interface UnableToCancelJobIdException {
  readonly message: string;
}

interface UnableToUpdateJobIdException {
  readonly message: string;
}

interface UpdateJobInput {
  readonly JobId: string;
  readonly Manifest: string;
  readonly JobType: string;
  readonly ValidateOnly: boolean;
  readonly APIVersion: string;
}

interface UpdateJobOutput {
  readonly Success: boolean;
  readonly WarningMessage: string;
  readonly ArtifactList: [];
}
