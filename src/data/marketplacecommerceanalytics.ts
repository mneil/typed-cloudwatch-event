/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface GenerateDataSet {
  readonly dataSetType: string;
  readonly dataSetPublicationDate: Date;
  readonly roleNameArn: string;
  readonly destinationS3BucketName: string;
  readonly destinationS3Prefix?: string;
  readonly snsTopicArn: string;
  readonly customerDefinedValues?: {[key: string]: any};
}
export interface StartSupportDataExport {
  readonly dataSetType: string;
  readonly fromDate: Date;
  readonly roleNameArn: string;
  readonly destinationS3BucketName: string;
  readonly destinationS3Prefix?: string;
  readonly snsTopicArn: string;
  readonly customerDefinedValues?: {[key: string]: any};
}



interface GenerateDataSetRequest {
  readonly dataSetType: string;
  readonly dataSetPublicationDate: Date;
  readonly roleNameArn: string;
  readonly destinationS3BucketName: string;
  readonly destinationS3Prefix: string;
  readonly snsTopicArn: string;
  readonly customerDefinedValues: {[key: string]: any};
}

interface GenerateDataSetResult {
  readonly dataSetRequestId: string;
}

interface MarketplaceCommerceAnalyticsException {
  readonly message: string;
}

interface StartSupportDataExportRequest {
  readonly dataSetType: string;
  readonly fromDate: Date;
  readonly roleNameArn: string;
  readonly destinationS3BucketName: string;
  readonly destinationS3Prefix: string;
  readonly snsTopicArn: string;
  readonly customerDefinedValues: {[key: string]: any};
}

interface StartSupportDataExportResult {
  readonly dataSetRequestId: string;
}

