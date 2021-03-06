/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface GetIceServerConfig {
  readonly ChannelARN: string;
  readonly ClientId?: string;
  readonly Service?: string;
  readonly Username?: string;
}
export interface SendAlexaOfferToMaster {
  readonly ChannelARN: string;
  readonly SenderClientId: string;
  readonly MessagePayload: string;
}



interface ClientLimitExceededException {
  readonly Message: string;
}

interface GetIceServerConfigRequest {
  readonly ChannelARN: string;
  readonly ClientId: string;
  readonly Service: string;
  readonly Username: string;
}

interface GetIceServerConfigResponse {
  readonly IceServerList: [];
}

interface IceServer {
  readonly Uris: [];
  readonly Username: string;
  readonly Password: string;
  readonly Ttl: number;
}

interface InvalidArgumentException {
  readonly Message: string;
}

interface InvalidClientException {
  readonly message: string;
}

interface NotAuthorizedException {
  readonly Message: string;
}

interface ResourceNotFoundException {
  readonly Message: string;
}

interface SendAlexaOfferToMasterRequest {
  readonly ChannelARN: string;
  readonly SenderClientId: string;
  readonly MessagePayload: string;
}

interface SendAlexaOfferToMasterResponse {
  readonly Answer: string;
}

interface SessionExpiredException {
  readonly message: string;
}

