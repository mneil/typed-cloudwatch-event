/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateToken {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly grantType: string;
  readonly deviceCode: string;
  readonly code: string;
  readonly refreshToken: string;
  readonly scope: [];
  readonly redirectUri: string;
}
export interface RegisterClient {
  readonly clientName: string;
  readonly clientType: string;
  readonly scopes: [];
}
export interface StartDeviceAuthorization {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly startUrl: string;
}



interface AccessDeniedException {
  readonly error: string;
  readonly error_description: string;
}

interface AuthorizationPendingException {
  readonly error: string;
  readonly error_description: string;
}

interface CreateTokenRequest {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly grantType: string;
  readonly deviceCode: string;
  readonly code: string;
  readonly refreshToken: string;
  readonly scope: [];
  readonly redirectUri: string;
}

interface CreateTokenResponse {
  readonly accessToken: string;
  readonly tokenType: string;
  readonly expiresIn: number;
  readonly refreshToken: string;
  readonly idToken: string;
}

interface ExpiredTokenException {
  readonly error: string;
  readonly error_description: string;
}

interface InternalServerException {
  readonly error: string;
  readonly error_description: string;
}

interface InvalidClientException {
  readonly error: string;
  readonly error_description: string;
}

interface InvalidClientMetadataException {
  readonly error: string;
  readonly error_description: string;
}

interface InvalidGrantException {
  readonly error: string;
  readonly error_description: string;
}

interface InvalidRequestException {
  readonly error: string;
  readonly error_description: string;
}

interface InvalidScopeException {
  readonly error: string;
  readonly error_description: string;
}

interface RegisterClientRequest {
  readonly clientName: string;
  readonly clientType: string;
  readonly scopes: [];
}

interface RegisterClientResponse {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly clientIdIssuedAt: number;
  readonly clientSecretExpiresAt: number;
  readonly authorizationEndpoint: string;
  readonly tokenEndpoint: string;
}

interface SlowDownException {
  readonly error: string;
  readonly error_description: string;
}

interface StartDeviceAuthorizationRequest {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly startUrl: string;
}

interface StartDeviceAuthorizationResponse {
  readonly deviceCode: string;
  readonly userCode: string;
  readonly verificationUri: string;
  readonly verificationUriComplete: string;
  readonly expiresIn: number;
  readonly interval: number;
}

interface UnauthorizedClientException {
  readonly error: string;
  readonly error_description: string;
}

interface UnsupportedGrantTypeException {
  readonly error: string;
  readonly error_description: string;
}
