/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface DescribeServices {
  readonly ServiceCode?: string;
  readonly FormatVersion?: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface GetAttributeValues {
  readonly ServiceCode: string;
  readonly AttributeName: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface GetProducts {
  readonly ServiceCode?: string;
  readonly Filters?: [];
  readonly FormatVersion?: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface AttributeValue {
  readonly Value?: string;
}

export interface DescribeServicesRequest {
  readonly ServiceCode?: string;
  readonly FormatVersion?: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface DescribeServicesResponse {
  readonly Services?: [];
  readonly FormatVersion?: string;
  readonly NextToken?: string;
}

export interface ExpiredNextTokenException {
  readonly Message?: string;
}

export interface Filter {
  readonly Type: string;
  readonly Field: string;
  readonly Value: string;
}

export interface GetAttributeValuesRequest {
  readonly ServiceCode: string;
  readonly AttributeName: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface GetAttributeValuesResponse {
  readonly AttributeValues?: [];
  readonly NextToken?: string;
}

export interface GetProductsRequest {
  readonly ServiceCode?: string;
  readonly Filters?: [];
  readonly FormatVersion?: string;
  readonly NextToken?: string;
  readonly MaxResults?: number;
}

export interface GetProductsResponse {
  readonly FormatVersion?: string;
  readonly PriceList?: [];
  readonly NextToken?: string;
}

export interface InternalErrorException {
  readonly Message?: string;
}

export interface InvalidNextTokenException {
  readonly Message?: string;
}

export interface InvalidParameterException {
  readonly Message?: string;
}

export interface NotFoundException {
  readonly Message?: string;
}

export interface Service {
  readonly ServiceCode?: string;
  readonly AttributeNames?: [];
}


