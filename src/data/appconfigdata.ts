/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface GetLatestConfiguration {
  readonly ConfigurationToken: string;
}
export interface StartConfigurationSession {
  readonly ApplicationIdentifier: string;
  readonly ConfigurationProfileIdentifier: string;
  readonly EnvironmentIdentifier: string;
  readonly RequiredMinimumPollIntervalInSeconds: number;
}



interface BadRequestDetails {
  readonly InvalidParameters: {[key: string]: any};
}

interface BadRequestException {
  readonly Details: BadRequestDetails;
  readonly Message: string;
  readonly Reason: string;
}

interface GetLatestConfigurationRequest {
  readonly ConfigurationToken: string;
}

interface GetLatestConfigurationResponse {
  readonly Configuration: unknown;
  readonly ContentType: string;
  readonly NextPollConfigurationToken: string;
  readonly NextPollIntervalInSeconds: number;
}

interface InternalServerException {
  readonly Message: string;
}

interface InvalidParameterDetail {
  readonly Problem: string;
}

interface ResourceNotFoundException {
  readonly Message: string;
  readonly ReferencedBy: {[key: string]: any};
  readonly ResourceType: string;
}

interface StartConfigurationSessionRequest {
  readonly ApplicationIdentifier: string;
  readonly ConfigurationProfileIdentifier: string;
  readonly EnvironmentIdentifier: string;
  readonly RequiredMinimumPollIntervalInSeconds: number;
}

interface StartConfigurationSessionResponse {
  readonly InitialConfigurationToken: string;
}

interface ThrottlingException {
  readonly Message: string;
}
