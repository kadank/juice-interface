import { BigNumber } from '@ethersproject/bignumber'
import { V2BallotState } from 'models/ballot'
import { ProjectMetadataV4 } from 'models/project-metadata'
import { V2FundingCycle, V2FundingCycleMetadata } from 'models/v2/fundingCycle'
import { Split } from 'models/v2/splits'
import { createContext } from 'react'

type V2ProjectLoadingStates = {
  ETHBalanceLoading: boolean
  balanceInDistributionLimitCurrencyLoading: boolean
  distributionLimitLoading: boolean
  fundingCycleLoading: boolean
  usedDistributionLimitLoading: boolean
}

export type V2ProjectContextType = {
  isPreviewMode?: boolean

  projectId: BigNumber | undefined
  projectMetadata: ProjectMetadataV4 | undefined
  tokenAddress: string | undefined
  tokenSymbol: string | undefined
  terminals: string[] | undefined // array of terminal addresses, 0xABC...
  primaryTerminal: string | undefined
  ETHBalance: BigNumber | undefined
  projectOwnerAddress: string | undefined
  balanceInDistributionLimitCurrency: BigNumber | undefined
  usedDistributionLimit: BigNumber | undefined // how much has been distributed

  fundingCycleMetadata: V2FundingCycleMetadata | undefined
  fundingCycle: V2FundingCycle | undefined
  ballotState: V2BallotState | undefined

  distributionLimit: BigNumber | undefined
  distributionLimitCurrency: BigNumber | undefined

  payoutSplits: Split[] | undefined
  reservedTokensSplits: Split[] | undefined

  primaryTerminalCurrentOverflow: BigNumber | undefined
  totalTokenSupply: BigNumber | undefined

  loading: V2ProjectLoadingStates
}

export const V2ProjectContext = createContext<V2ProjectContextType>({
  isPreviewMode: false,

  projectId: undefined,
  projectMetadata: undefined,
  tokenAddress: undefined,
  tokenSymbol: undefined,
  terminals: undefined,
  primaryTerminal: undefined,
  ETHBalance: undefined,
  projectOwnerAddress: undefined,
  balanceInDistributionLimitCurrency: undefined,
  usedDistributionLimit: undefined,

  fundingCycleMetadata: undefined,
  fundingCycle: undefined,
  ballotState: undefined,

  distributionLimit: undefined,
  distributionLimitCurrency: undefined,

  payoutSplits: undefined,
  reservedTokensSplits: undefined,

  primaryTerminalCurrentOverflow: undefined,
  totalTokenSupply: undefined,

  loading: {
    ETHBalanceLoading: false,
    balanceInDistributionLimitCurrencyLoading: false,
    distributionLimitLoading: false,
    fundingCycleLoading: false,
    usedDistributionLimitLoading: false,
  },
})
