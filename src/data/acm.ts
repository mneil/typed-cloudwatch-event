/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface AddTagsToCertificate {
  readonly CertificateArn: string;
  readonly Tags: [];
}
export interface DeleteCertificate {
  readonly CertificateArn: string;
}
export interface DescribeCertificate {
  readonly CertificateArn: string;
}
export interface ExportCertificate {
  readonly CertificateArn: string;
  readonly Passphrase: unknown;
}
export interface GetCertificate {
  readonly CertificateArn: string;
}
export interface ImportCertificate {
  readonly CertificateArn?: string;
  readonly Certificate: unknown;
  readonly PrivateKey: unknown;
  readonly CertificateChain?: unknown;
  readonly Tags?: [];
}
export interface ListCertificates {
  readonly CertificateStatuses?: [];
  readonly Includes?: Filters;
  readonly NextToken?: string;
  readonly MaxItems?: number;
}
export interface ListTagsForCertificate {
  readonly CertificateArn: string;
}
export interface PutAccountConfiguration {
  readonly ExpiryEvents?: ExpiryEventsConfiguration;
  readonly IdempotencyToken: string;
}
export interface RemoveTagsFromCertificate {
  readonly CertificateArn: string;
  readonly Tags: [];
}
export interface RenewCertificate {
  readonly CertificateArn: string;
}
export interface RequestCertificate {
  readonly DomainName: string;
  readonly ValidationMethod?: string;
  readonly SubjectAlternativeNames?: [];
  readonly IdempotencyToken?: string;
  readonly DomainValidationOptions?: [];
  readonly Options?: CertificateOptions;
  readonly CertificateAuthorityArn?: string;
  readonly Tags?: [];
}
export interface ResendValidationEmail {
  readonly CertificateArn: string;
  readonly Domain: string;
  readonly ValidationDomain: string;
}
export interface UpdateCertificateOptions {
  readonly CertificateArn: string;
  readonly Options: CertificateOptions;
}



interface AccessDeniedException {
  readonly Message: string;
}

interface AddTagsToCertificateRequest {
  readonly CertificateArn: string;
  readonly Tags: [];
}

interface CertificateDetail {
  readonly CertificateArn: string;
  readonly DomainName: string;
  readonly SubjectAlternativeNames: [];
  readonly DomainValidationOptions: [];
  readonly Serial: string;
  readonly Subject: string;
  readonly Issuer: string;
  readonly CreatedAt: Date;
  readonly IssuedAt: Date;
  readonly ImportedAt: Date;
  readonly Status: string;
  readonly RevokedAt: Date;
  readonly RevocationReason: string;
  readonly NotBefore: Date;
  readonly NotAfter: Date;
  readonly KeyAlgorithm: string;
  readonly SignatureAlgorithm: string;
  readonly InUseBy: [];
  readonly FailureReason: string;
  readonly Type: string;
  readonly RenewalSummary: RenewalSummary;
  readonly KeyUsages: [];
  readonly ExtendedKeyUsages: [];
  readonly CertificateAuthorityArn: string;
  readonly RenewalEligibility: string;
  readonly Options: CertificateOptions;
}

interface CertificateOptions {
  readonly CertificateTransparencyLoggingPreference: string;
}

interface CertificateSummary {
  readonly CertificateArn: string;
  readonly DomainName: string;
}

interface ConflictException {
  readonly message: string;
}

interface DeleteCertificateRequest {
  readonly CertificateArn: string;
}

interface DescribeCertificateRequest {
  readonly CertificateArn: string;
}

interface DescribeCertificateResponse {
  readonly Certificate: CertificateDetail;
}

interface DomainValidation {
  readonly DomainName: string;
  readonly ValidationEmails: [];
  readonly ValidationDomain: string;
  readonly ValidationStatus: string;
  readonly ResourceRecord: ResourceRecord;
  readonly ValidationMethod: string;
}

interface DomainValidationOption {
  readonly DomainName: string;
  readonly ValidationDomain: string;
}

interface ExpiryEventsConfiguration {
  readonly DaysBeforeExpiry: number;
}

interface ExportCertificateRequest {
  readonly CertificateArn: string;
  readonly Passphrase: unknown;
}

interface ExportCertificateResponse {
  readonly Certificate: string;
  readonly CertificateChain: string;
  readonly PrivateKey: string;
}

interface ExtendedKeyUsage {
  readonly Name: string;
  readonly OID: string;
}

interface Filters {
  readonly extendedKeyUsage: [];
  readonly keyUsage: [];
  readonly keyTypes: [];
}

interface GetAccountConfigurationResponse {
  readonly ExpiryEvents: ExpiryEventsConfiguration;
}

interface GetCertificateRequest {
  readonly CertificateArn: string;
}

interface GetCertificateResponse {
  readonly Certificate: string;
  readonly CertificateChain: string;
}

interface ImportCertificateRequest {
  readonly CertificateArn: string;
  readonly Certificate: unknown;
  readonly PrivateKey: unknown;
  readonly CertificateChain: unknown;
  readonly Tags: [];
}

interface ImportCertificateResponse {
  readonly CertificateArn: string;
}

interface InvalidArgsException {
  readonly message: string;
}

interface InvalidArnException {
  readonly message: string;
}

interface InvalidDomainValidationOptionsException {
  readonly message: string;
}

interface InvalidParameterException {
  readonly message: string;
}

interface InvalidStateException {
  readonly message: string;
}

interface InvalidTagException {
  readonly message: string;
}

interface KeyUsage {
  readonly Name: string;
}

interface LimitExceededException {
  readonly message: string;
}

interface ListCertificatesRequest {
  readonly CertificateStatuses: [];
  readonly Includes: Filters;
  readonly NextToken: string;
  readonly MaxItems: number;
}

interface ListCertificatesResponse {
  readonly NextToken: string;
  readonly CertificateSummaryList: [];
}

interface ListTagsForCertificateRequest {
  readonly CertificateArn: string;
}

interface ListTagsForCertificateResponse {
  readonly Tags: [];
}

interface PutAccountConfigurationRequest {
  readonly ExpiryEvents: ExpiryEventsConfiguration;
  readonly IdempotencyToken: string;
}

interface RemoveTagsFromCertificateRequest {
  readonly CertificateArn: string;
  readonly Tags: [];
}

interface RenewCertificateRequest {
  readonly CertificateArn: string;
}

interface RenewalSummary {
  readonly RenewalStatus: string;
  readonly DomainValidationOptions: [];
  readonly RenewalStatusReason: string;
  readonly UpdatedAt: Date;
}

interface RequestCertificateRequest {
  readonly DomainName: string;
  readonly ValidationMethod: string;
  readonly SubjectAlternativeNames: [];
  readonly IdempotencyToken: string;
  readonly DomainValidationOptions: [];
  readonly Options: CertificateOptions;
  readonly CertificateAuthorityArn: string;
  readonly Tags: [];
}

interface RequestCertificateResponse {
  readonly CertificateArn: string;
}

interface RequestInProgressException {
  readonly message: string;
}

interface ResendValidationEmailRequest {
  readonly CertificateArn: string;
  readonly Domain: string;
  readonly ValidationDomain: string;
}

interface ResourceInUseException {
  readonly message: string;
}

interface ResourceNotFoundException {
  readonly message: string;
}

interface ResourceRecord {
  readonly Name: string;
  readonly Type: string;
  readonly Value: string;
}

interface Tag {
  readonly Key: string;
  readonly Value: string;
}

interface TagPolicyException {
  readonly message: string;
}

interface ThrottlingException {
  readonly message: string;
}

interface TooManyTagsException {
  readonly message: string;
}

interface UpdateCertificateOptionsRequest {
  readonly CertificateArn: string;
  readonly Options: CertificateOptions;
}

interface ValidationException {
  readonly message: string;
}

