/**
 * STOP. This file is autogenerated. DO NOT EDIT by hand
 */
export interface CreateMember {
  readonly ClientRequestToken: string;
  readonly InvitationId: string;
  readonly NetworkId: string;
  readonly MemberConfiguration: MemberConfiguration;
}
export interface CreateNetwork {
  readonly ClientRequestToken: string;
  readonly Name: string;
  readonly Description: string;
  readonly Framework: string;
  readonly FrameworkVersion: string;
  readonly FrameworkConfiguration: NetworkFrameworkConfiguration;
  readonly VotingPolicy: VotingPolicy;
  readonly MemberConfiguration: MemberConfiguration;
  readonly Tags: {[key: string]: any};
}
export interface CreateNode {
  readonly ClientRequestToken: string;
  readonly NetworkId: string;
  readonly MemberId: string;
  readonly NodeConfiguration: NodeConfiguration;
  readonly Tags: {[key: string]: any};
}
export interface CreateProposal {
  readonly ClientRequestToken: string;
  readonly NetworkId: string;
  readonly MemberId: string;
  readonly Actions: ProposalActions;
  readonly Description: string;
  readonly Tags: {[key: string]: any};
}
export interface DeleteMember {
  readonly NetworkId: string;
  readonly MemberId: string;
}
export interface DeleteNode {
  readonly NetworkId: string;
  readonly MemberId: string;
  readonly NodeId: string;
}
export interface GetMember {
  readonly NetworkId: string;
  readonly MemberId: string;
}
export interface GetNetwork {
  readonly NetworkId: string;
}
export interface GetNode {
  readonly NetworkId: string;
  readonly MemberId: string;
  readonly NodeId: string;
}
export interface GetProposal {
  readonly NetworkId: string;
  readonly ProposalId: string;
}
export interface ListInvitations {
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListMembers {
  readonly NetworkId: string;
  readonly Name: string;
  readonly Status: string;
  readonly IsOwned: boolean;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListNetworks {
  readonly Name: string;
  readonly Framework: string;
  readonly Status: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListNodes {
  readonly NetworkId: string;
  readonly MemberId: string;
  readonly Status: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListProposalVotes {
  readonly NetworkId: string;
  readonly ProposalId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListProposals {
  readonly NetworkId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}
export interface ListTagsForResource {
  readonly ResourceArn: string;
}
export interface RejectInvitation {
  readonly InvitationId: string;
}
export interface TagResource {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}
export interface UntagResource {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}
export interface UpdateMember {
  readonly NetworkId: string;
  readonly MemberId: string;
  readonly LogPublishingConfiguration: MemberLogPublishingConfiguration;
}
export interface UpdateNode {
  readonly NetworkId: string;
  readonly MemberId: string;
  readonly NodeId: string;
  readonly LogPublishingConfiguration: NodeLogPublishingConfiguration;
}
export interface VoteOnProposal {
  readonly NetworkId: string;
  readonly ProposalId: string;
  readonly VoterMemberId: string;
  readonly Vote: string;
}



interface AccessDeniedException {
  readonly Message: string;
}

interface ApprovalThresholdPolicy {
  readonly ThresholdPercentage: number;
  readonly ProposalDurationInHours: number;
  readonly ThresholdComparator: string;
}

interface CreateMemberInput {
  readonly ClientRequestToken: string;
  readonly InvitationId: string;
  readonly NetworkId: string;
  readonly MemberConfiguration: MemberConfiguration;
}

interface CreateMemberOutput {
  readonly MemberId: string;
}

interface CreateNetworkInput {
  readonly ClientRequestToken: string;
  readonly Name: string;
  readonly Description: string;
  readonly Framework: string;
  readonly FrameworkVersion: string;
  readonly FrameworkConfiguration: NetworkFrameworkConfiguration;
  readonly VotingPolicy: VotingPolicy;
  readonly MemberConfiguration: MemberConfiguration;
  readonly Tags: {[key: string]: any};
}

interface CreateNetworkOutput {
  readonly NetworkId: string;
  readonly MemberId: string;
}

interface CreateNodeInput {
  readonly ClientRequestToken: string;
  readonly NetworkId: string;
  readonly MemberId: string;
  readonly NodeConfiguration: NodeConfiguration;
  readonly Tags: {[key: string]: any};
}

interface CreateNodeOutput {
  readonly NodeId: string;
}

interface CreateProposalInput {
  readonly ClientRequestToken: string;
  readonly NetworkId: string;
  readonly MemberId: string;
  readonly Actions: ProposalActions;
  readonly Description: string;
  readonly Tags: {[key: string]: any};
}

interface CreateProposalOutput {
  readonly ProposalId: string;
}

interface DeleteMemberInput {
  readonly NetworkId: string;
  readonly MemberId: string;
}

interface DeleteMemberOutput {
}

interface DeleteNodeInput {
  readonly NetworkId: string;
  readonly MemberId: string;
  readonly NodeId: string;
}

interface DeleteNodeOutput {
}

interface GetMemberInput {
  readonly NetworkId: string;
  readonly MemberId: string;
}

interface GetMemberOutput {
  readonly Member: Member;
}

interface GetNetworkInput {
  readonly NetworkId: string;
}

interface GetNetworkOutput {
  readonly Network: Network;
}

interface GetNodeInput {
  readonly NetworkId: string;
  readonly MemberId: string;
  readonly NodeId: string;
}

interface GetNodeOutput {
  readonly Node: Node;
}

interface GetProposalInput {
  readonly NetworkId: string;
  readonly ProposalId: string;
}

interface GetProposalOutput {
  readonly Proposal: Proposal;
}

interface IllegalActionException {
  readonly Message: string;
}

interface InternalServiceErrorException {
}

interface InvalidRequestException {
  readonly Message: string;
}

interface Invitation {
  readonly InvitationId: string;
  readonly CreationDate: Date;
  readonly ExpirationDate: Date;
  readonly Status: string;
  readonly NetworkSummary: NetworkSummary;
  readonly Arn: string;
}

interface InviteAction {
  readonly Principal: string;
}

interface ListInvitationsInput {
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListInvitationsOutput {
  readonly Invitations: [];
  readonly NextToken: string;
}

interface ListMembersInput {
  readonly NetworkId: string;
  readonly Name: string;
  readonly Status: string;
  readonly IsOwned: boolean;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListMembersOutput {
  readonly Members: [];
  readonly NextToken: string;
}

interface ListNetworksInput {
  readonly Name: string;
  readonly Framework: string;
  readonly Status: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListNetworksOutput {
  readonly Networks: [];
  readonly NextToken: string;
}

interface ListNodesInput {
  readonly NetworkId: string;
  readonly MemberId: string;
  readonly Status: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListNodesOutput {
  readonly Nodes: [];
  readonly NextToken: string;
}

interface ListProposalVotesInput {
  readonly NetworkId: string;
  readonly ProposalId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListProposalVotesOutput {
  readonly ProposalVotes: [];
  readonly NextToken: string;
}

interface ListProposalsInput {
  readonly NetworkId: string;
  readonly MaxResults: number;
  readonly NextToken: string;
}

interface ListProposalsOutput {
  readonly Proposals: [];
  readonly NextToken: string;
}

interface ListTagsForResourceRequest {
  readonly ResourceArn: string;
}

interface ListTagsForResourceResponse {
  readonly Tags: {[key: string]: any};
}

interface LogConfiguration {
  readonly Enabled: boolean;
}

interface LogConfigurations {
  readonly Cloudwatch: LogConfiguration;
}

interface Member {
  readonly NetworkId: string;
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly FrameworkAttributes: MemberFrameworkAttributes;
  readonly LogPublishingConfiguration: MemberLogPublishingConfiguration;
  readonly Status: string;
  readonly CreationDate: Date;
  readonly Tags: {[key: string]: any};
  readonly Arn: string;
  readonly KmsKeyArn: string;
}

interface MemberConfiguration {
  readonly Name: string;
  readonly Description: string;
  readonly FrameworkConfiguration: MemberFrameworkConfiguration;
  readonly LogPublishingConfiguration: MemberLogPublishingConfiguration;
  readonly Tags: {[key: string]: any};
  readonly KmsKeyArn: string;
}

interface MemberFabricAttributes {
  readonly AdminUsername: string;
  readonly CaEndpoint: string;
}

interface MemberFabricConfiguration {
  readonly AdminUsername: string;
  readonly AdminPassword: string;
}

interface MemberFabricLogPublishingConfiguration {
  readonly CaLogs: LogConfigurations;
}

interface MemberFrameworkAttributes {
  readonly Fabric: MemberFabricAttributes;
}

interface MemberFrameworkConfiguration {
  readonly Fabric: MemberFabricConfiguration;
}

interface MemberLogPublishingConfiguration {
  readonly Fabric: MemberFabricLogPublishingConfiguration;
}

interface MemberSummary {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly Status: string;
  readonly CreationDate: Date;
  readonly IsOwned: boolean;
  readonly Arn: string;
}

interface Network {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly Framework: string;
  readonly FrameworkVersion: string;
  readonly FrameworkAttributes: NetworkFrameworkAttributes;
  readonly VpcEndpointServiceName: string;
  readonly VotingPolicy: VotingPolicy;
  readonly Status: string;
  readonly CreationDate: Date;
  readonly Tags: {[key: string]: any};
  readonly Arn: string;
}

interface NetworkEthereumAttributes {
  readonly ChainId: string;
}

interface NetworkFabricAttributes {
  readonly OrderingServiceEndpoint: string;
  readonly Edition: string;
}

interface NetworkFabricConfiguration {
  readonly Edition: string;
}

interface NetworkFrameworkAttributes {
  readonly Fabric: NetworkFabricAttributes;
  readonly Ethereum: NetworkEthereumAttributes;
}

interface NetworkFrameworkConfiguration {
  readonly Fabric: NetworkFabricConfiguration;
}

interface NetworkSummary {
  readonly Id: string;
  readonly Name: string;
  readonly Description: string;
  readonly Framework: string;
  readonly FrameworkVersion: string;
  readonly Status: string;
  readonly CreationDate: Date;
  readonly Arn: string;
}

interface Node {
  readonly NetworkId: string;
  readonly MemberId: string;
  readonly Id: string;
  readonly InstanceType: string;
  readonly AvailabilityZone: string;
  readonly FrameworkAttributes: NodeFrameworkAttributes;
  readonly LogPublishingConfiguration: NodeLogPublishingConfiguration;
  readonly StateDB: string;
  readonly Status: string;
  readonly CreationDate: Date;
  readonly Tags: {[key: string]: any};
  readonly Arn: string;
  readonly KmsKeyArn: string;
}

interface NodeConfiguration {
  readonly InstanceType: string;
  readonly AvailabilityZone: string;
  readonly LogPublishingConfiguration: NodeLogPublishingConfiguration;
  readonly StateDB: string;
}

interface NodeEthereumAttributes {
  readonly HttpEndpoint: string;
  readonly WebSocketEndpoint: string;
}

interface NodeFabricAttributes {
  readonly PeerEndpoint: string;
  readonly PeerEventEndpoint: string;
}

interface NodeFabricLogPublishingConfiguration {
  readonly ChaincodeLogs: LogConfigurations;
  readonly PeerLogs: LogConfigurations;
}

interface NodeFrameworkAttributes {
  readonly Fabric: NodeFabricAttributes;
  readonly Ethereum: NodeEthereumAttributes;
}

interface NodeLogPublishingConfiguration {
  readonly Fabric: NodeFabricLogPublishingConfiguration;
}

interface NodeSummary {
  readonly Id: string;
  readonly Status: string;
  readonly CreationDate: Date;
  readonly AvailabilityZone: string;
  readonly InstanceType: string;
  readonly Arn: string;
}

interface Proposal {
  readonly ProposalId: string;
  readonly NetworkId: string;
  readonly Description: string;
  readonly Actions: ProposalActions;
  readonly ProposedByMemberId: string;
  readonly ProposedByMemberName: string;
  readonly Status: string;
  readonly CreationDate: Date;
  readonly ExpirationDate: Date;
  readonly YesVoteCount: number;
  readonly NoVoteCount: number;
  readonly OutstandingVoteCount: number;
  readonly Tags: {[key: string]: any};
  readonly Arn: string;
}

interface ProposalActions {
  readonly Invitations: [];
  readonly Removals: [];
}

interface ProposalSummary {
  readonly ProposalId: string;
  readonly Description: string;
  readonly ProposedByMemberId: string;
  readonly ProposedByMemberName: string;
  readonly Status: string;
  readonly CreationDate: Date;
  readonly ExpirationDate: Date;
  readonly Arn: string;
}

interface RejectInvitationInput {
  readonly InvitationId: string;
}

interface RejectInvitationOutput {
}

interface RemoveAction {
  readonly MemberId: string;
}

interface ResourceAlreadyExistsException {
  readonly Message: string;
}

interface ResourceLimitExceededException {
  readonly Message: string;
}

interface ResourceNotFoundException {
  readonly Message: string;
  readonly ResourceName: string;
}

interface ResourceNotReadyException {
  readonly Message: string;
}

interface TagResourceRequest {
  readonly ResourceArn: string;
  readonly Tags: {[key: string]: any};
}

interface TagResourceResponse {
}

interface ThrottlingException {
}

interface TooManyTagsException {
  readonly Message: string;
  readonly ResourceName: string;
}

interface UntagResourceRequest {
  readonly ResourceArn: string;
  readonly TagKeys: [];
}

interface UntagResourceResponse {
}

interface UpdateMemberInput {
  readonly NetworkId: string;
  readonly MemberId: string;
  readonly LogPublishingConfiguration: MemberLogPublishingConfiguration;
}

interface UpdateMemberOutput {
}

interface UpdateNodeInput {
  readonly NetworkId: string;
  readonly MemberId: string;
  readonly NodeId: string;
  readonly LogPublishingConfiguration: NodeLogPublishingConfiguration;
}

interface UpdateNodeOutput {
}

interface VoteOnProposalInput {
  readonly NetworkId: string;
  readonly ProposalId: string;
  readonly VoterMemberId: string;
  readonly Vote: string;
}

interface VoteOnProposalOutput {
}

interface VoteSummary {
  readonly Vote: string;
  readonly MemberName: string;
  readonly MemberId: string;
}

interface VotingPolicy {
  readonly ApprovalThresholdPolicy: ApprovalThresholdPolicy;
}
