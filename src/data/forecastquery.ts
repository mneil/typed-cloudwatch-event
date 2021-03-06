/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface QueryForecast {
  readonly ForecastArn: string;
  readonly StartDate?: string;
  readonly EndDate?: string;
  readonly Filters: {[key: string]: any};
  readonly NextToken?: string;
}



interface DataPoint {
  readonly Timestamp: string;
  readonly Value: unknown;
}

interface Forecast {
  readonly Predictions: {[key: string]: any};
}

interface InvalidInputException {
  readonly Message: string;
}

interface InvalidNextTokenException {
  readonly Message: string;
}

interface LimitExceededException {
  readonly Message: string;
}

interface QueryForecastRequest {
  readonly ForecastArn: string;
  readonly StartDate: string;
  readonly EndDate: string;
  readonly Filters: {[key: string]: any};
  readonly NextToken: string;
}

interface QueryForecastResponse {
  readonly Forecast: Forecast;
}

interface ResourceInUseException {
  readonly Message: string;
}

interface ResourceNotFoundException {
  readonly Message: string;
}

