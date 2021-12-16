/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface DeleteObject {
  readonly Path: string;
}
export interface DescribeObject {
  readonly Path: string;
}
export interface GetObject {
  readonly Path: string;
  readonly Range: string;
}
export interface ListItems {
  readonly Path: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface PutObject {
  readonly Body: unknown;
  readonly Path: string;
  readonly ContentType: string;
  readonly CacheControl: string;
  readonly StorageClass: string;
  readonly UploadAvailability: string;
}



interface ContainerNotFoundException {
  readonly Message: string;
}

interface DeleteObjectRequest {
  readonly Path: string;
}

interface DeleteObjectResponse {
}

interface DescribeObjectRequest {
  readonly Path: string;
}

interface DescribeObjectResponse {
  readonly ETag: string;
  readonly ContentType: string;
  readonly ContentLength: number;
  readonly CacheControl: string;
  readonly LastModified: Date;
}

interface GetObjectRequest {
  readonly Path: string;
  readonly Range: string;
}

interface GetObjectResponse {
  readonly Body: unknown;
  readonly CacheControl: string;
  readonly ContentRange: string;
  readonly ContentLength: number;
  readonly ContentType: string;
  readonly ETag: string;
  readonly LastModified: Date;
  readonly StatusCode: number;
}

interface InternalServerError {
  readonly Message: string;
}

interface Item {
  readonly Name: string;
  readonly Type: string;
  readonly ETag: string;
  readonly LastModified: Date;
  readonly ContentType: string;
  readonly ContentLength: number;
}

interface ListItemsRequest {
  readonly Path: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListItemsResponse {
  readonly Items: [];
  readonly NextToken: string;
}

interface ObjectNotFoundException {
  readonly Message: string;
}

interface PutObjectRequest {
  readonly Body: unknown;
  readonly Path: string;
  readonly ContentType: string;
  readonly CacheControl: string;
  readonly StorageClass: string;
  readonly UploadAvailability: string;
}

interface PutObjectResponse {
  readonly ContentSHA256: string;
  readonly ETag: string;
  readonly StorageClass: string;
}

interface RequestedRangeNotSatisfiableException {
  readonly Message: string;
}

