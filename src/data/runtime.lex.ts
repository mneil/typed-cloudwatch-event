/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface DeleteSession {
  readonly botName: string;
  readonly botAlias: string;
  readonly userId: string;
}
export interface GetSession {
  readonly botName: string;
  readonly botAlias: string;
  readonly userId: string;
  readonly checkpointLabelFilter?: string;
}
export interface PostContent {
  readonly botName: string;
  readonly botAlias: string;
  readonly userId: string;
  readonly sessionAttributes?: string;
  readonly requestAttributes?: string;
  readonly contentType: string;
  readonly accept?: string;
  readonly inputStream: unknown;
  readonly activeContexts?: string;
}
export interface PostText {
  readonly botName: string;
  readonly botAlias: string;
  readonly userId: string;
  readonly sessionAttributes?: {[key: string]: any};
  readonly requestAttributes?: {[key: string]: any};
  readonly inputText: string;
  readonly activeContexts?: [];
}
export interface PutSession {
  readonly botName: string;
  readonly botAlias: string;
  readonly userId: string;
  readonly sessionAttributes?: {[key: string]: any};
  readonly dialogAction?: DialogAction;
  readonly recentIntentSummaryView?: [];
  readonly accept?: string;
  readonly activeContexts?: [];
}



interface ActiveContext {
  readonly name: string;
  readonly timeToLive: ActiveContextTimeToLive;
  readonly parameters: {[key: string]: any};
}

interface ActiveContextTimeToLive {
  readonly timeToLiveInSeconds: number;
  readonly turnsToLive: number;
}

interface BadGatewayException {
  readonly Message: string;
}

interface BadRequestException {
  readonly message: string;
}

interface Button {
  readonly text: string;
  readonly value: string;
}

interface ConflictException {
  readonly message: string;
}

interface DeleteSessionRequest {
  readonly botName: string;
  readonly botAlias: string;
  readonly userId: string;
}

interface DeleteSessionResponse {
  readonly botName: string;
  readonly botAlias: string;
  readonly userId: string;
  readonly sessionId: string;
}

interface DependencyFailedException {
  readonly Message: string;
}

interface DialogAction {
  readonly type: string;
  readonly intentName: string;
  readonly slots: {[key: string]: any};
  readonly slotToElicit: string;
  readonly fulfillmentState: string;
  readonly message: string;
  readonly messageFormat: string;
}

interface GenericAttachment {
  readonly title: string;
  readonly subTitle: string;
  readonly attachmentLinkUrl: string;
  readonly imageUrl: string;
  readonly buttons: [];
}

interface GetSessionRequest {
  readonly botName: string;
  readonly botAlias: string;
  readonly userId: string;
  readonly checkpointLabelFilter: string;
}

interface GetSessionResponse {
  readonly recentIntentSummaryView: [];
  readonly sessionAttributes: {[key: string]: any};
  readonly sessionId: string;
  readonly dialogAction: DialogAction;
  readonly activeContexts: [];
}

interface IntentConfidence {
  readonly score: unknown;
}

interface IntentSummary {
  readonly intentName: string;
  readonly checkpointLabel: string;
  readonly slots: {[key: string]: any};
  readonly confirmationStatus: string;
  readonly dialogActionType: string;
  readonly fulfillmentState: string;
  readonly slotToElicit: string;
}

interface InternalFailureException {
  readonly message: string;
}

interface LimitExceededException {
  readonly retryAfterSeconds: string;
  readonly message: string;
}

interface LoopDetectedException {
  readonly Message: string;
}

interface NotAcceptableException {
  readonly message: string;
}

interface NotFoundException {
  readonly message: string;
}

interface PostContentRequest {
  readonly botName: string;
  readonly botAlias: string;
  readonly userId: string;
  readonly sessionAttributes: string;
  readonly requestAttributes: string;
  readonly contentType: string;
  readonly accept: string;
  readonly inputStream: unknown;
  readonly activeContexts: string;
}

interface PostContentResponse {
  readonly contentType: string;
  readonly intentName: string;
  readonly nluIntentConfidence: string;
  readonly alternativeIntents: string;
  readonly slots: string;
  readonly sessionAttributes: string;
  readonly sentimentResponse: string;
  readonly message: string;
  readonly encodedMessage: string;
  readonly messageFormat: string;
  readonly dialogState: string;
  readonly slotToElicit: string;
  readonly inputTranscript: string;
  readonly encodedInputTranscript: string;
  readonly audioStream: unknown;
  readonly botVersion: string;
  readonly sessionId: string;
  readonly activeContexts: string;
}

interface PostTextRequest {
  readonly botName: string;
  readonly botAlias: string;
  readonly userId: string;
  readonly sessionAttributes: {[key: string]: any};
  readonly requestAttributes: {[key: string]: any};
  readonly inputText: string;
  readonly activeContexts: [];
}

interface PostTextResponse {
  readonly intentName: string;
  readonly nluIntentConfidence: IntentConfidence;
  readonly alternativeIntents: [];
  readonly slots: {[key: string]: any};
  readonly sessionAttributes: {[key: string]: any};
  readonly message: string;
  readonly sentimentResponse: SentimentResponse;
  readonly messageFormat: string;
  readonly dialogState: string;
  readonly slotToElicit: string;
  readonly responseCard: ResponseCard;
  readonly sessionId: string;
  readonly botVersion: string;
  readonly activeContexts: [];
}

interface PredictedIntent {
  readonly intentName: string;
  readonly nluIntentConfidence: IntentConfidence;
  readonly slots: {[key: string]: any};
}

interface PutSessionRequest {
  readonly botName: string;
  readonly botAlias: string;
  readonly userId: string;
  readonly sessionAttributes: {[key: string]: any};
  readonly dialogAction: DialogAction;
  readonly recentIntentSummaryView: [];
  readonly accept: string;
  readonly activeContexts: [];
}

interface PutSessionResponse {
  readonly contentType: string;
  readonly intentName: string;
  readonly slots: string;
  readonly sessionAttributes: string;
  readonly message: string;
  readonly encodedMessage: string;
  readonly messageFormat: string;
  readonly dialogState: string;
  readonly slotToElicit: string;
  readonly audioStream: unknown;
  readonly sessionId: string;
  readonly activeContexts: string;
}

interface RequestTimeoutException {
  readonly message: string;
}

interface ResponseCard {
  readonly version: string;
  readonly contentType: string;
  readonly genericAttachments: [];
}

interface SentimentResponse {
  readonly sentimentLabel: string;
  readonly sentimentScore: string;
}

interface UnsupportedMediaTypeException {
  readonly message: string;
}

