/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface SendCommand {
  readonly SessionToken?: string;
  readonly StartSession?: StartSessionRequest;
  readonly StartTransaction?: StartTransactionRequest;
  readonly EndSession?: EndSessionRequest;
  readonly CommitTransaction?: CommitTransactionRequest;
  readonly AbortTransaction?: AbortTransactionRequest;
  readonly ExecuteStatement?: ExecuteStatementRequest;
  readonly FetchPage?: FetchPageRequest;
}



interface AbortTransactionRequest {
}

interface AbortTransactionResult {
  readonly TimingInformation: TimingInformation;
}

interface BadRequestException {
  readonly Message: string;
  readonly Code: string;
}

interface CapacityExceededException {
  readonly Message: string;
}

interface CommitTransactionRequest {
  readonly TransactionId: string;
  readonly CommitDigest: unknown;
}

interface CommitTransactionResult {
  readonly TransactionId: string;
  readonly CommitDigest: unknown;
  readonly TimingInformation: TimingInformation;
  readonly ConsumedIOs: IOUsage;
}

interface EndSessionRequest {
}

interface EndSessionResult {
  readonly TimingInformation: TimingInformation;
}

interface ExecuteStatementRequest {
  readonly TransactionId: string;
  readonly Statement: string;
  readonly Parameters: [];
}

interface ExecuteStatementResult {
  readonly FirstPage: Page;
  readonly TimingInformation: TimingInformation;
  readonly ConsumedIOs: IOUsage;
}

interface FetchPageRequest {
  readonly TransactionId: string;
  readonly NextPageToken: string;
}

interface FetchPageResult {
  readonly Page: Page;
  readonly TimingInformation: TimingInformation;
  readonly ConsumedIOs: IOUsage;
}

interface IOUsage {
  readonly ReadIOs: number;
  readonly WriteIOs: number;
}

interface InvalidSessionException {
  readonly Message: string;
  readonly Code: string;
}

interface LimitExceededException {
  readonly Message: string;
}

interface OccConflictException {
  readonly Message: string;
}

interface Page {
  readonly Values: [];
  readonly NextPageToken: string;
}

interface RateExceededException {
  readonly Message: string;
}

interface SendCommandRequest {
  readonly SessionToken: string;
  readonly StartSession: StartSessionRequest;
  readonly StartTransaction: StartTransactionRequest;
  readonly EndSession: EndSessionRequest;
  readonly CommitTransaction: CommitTransactionRequest;
  readonly AbortTransaction: AbortTransactionRequest;
  readonly ExecuteStatement: ExecuteStatementRequest;
  readonly FetchPage: FetchPageRequest;
}

interface SendCommandResult {
  readonly StartSession: StartSessionResult;
  readonly StartTransaction: StartTransactionResult;
  readonly EndSession: EndSessionResult;
  readonly CommitTransaction: CommitTransactionResult;
  readonly AbortTransaction: AbortTransactionResult;
  readonly ExecuteStatement: ExecuteStatementResult;
  readonly FetchPage: FetchPageResult;
}

interface StartSessionRequest {
  readonly LedgerName: string;
}

interface StartSessionResult {
  readonly SessionToken: string;
  readonly TimingInformation: TimingInformation;
}

interface StartTransactionRequest {
}

interface StartTransactionResult {
  readonly TransactionId: string;
  readonly TimingInformation: TimingInformation;
}

interface TimingInformation {
  readonly ProcessingTimeMilliseconds: number;
}

interface ValueHolder {
  readonly IonBinary: unknown;
  readonly IonText: string;
}

