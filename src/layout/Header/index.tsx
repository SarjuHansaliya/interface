import {
  NetworkSelection,
  useAccountBalanceHook,
  TokenInfoModal,
  Tokens,
  useOnClickOutside,
  useWalletModalToggleWithChainId,
  useModalOpen as useModalOpenComponents,
  ApplicationModal as ApplicationModalComponents,
  WalletModal,
  useActiveWeb3React,
  useApplicationState
} from '@pangolindex/components'
import React, { useState, useRef, useMemo, useCallback } from 'react'
import { usePNGCirculationSupply } from '../../hooks'
import Web3Status from '../../components/Web3Status'
import LanguageSelection from '../../components/LanguageSelection'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useToggleModal } from '../../state/application/hooks'
import { useDarkModeManager } from '../../state/user/hooks'
import NightMode from '../../assets/svg/nightMode.svg'
import LightMode from '../../assets/svg/lightMode.svg'
import { ReactComponent as DiscordIcon } from 'src/assets/svg/discord.svg'
import {
  HeaderFrame,
  HeaderControls,
  HeaderElement,
  HeaderElementWrap,
  AccountElement,
  PNGAmount,
  PNGWrapper,
  NetworkCard,
  BalanceText,
  ThemeMode,
  LegacyButtonWrapper,
  SupportButton,
  Logo
} from './styled'
import { Hidden, MEDIA_WIDTHS } from 'src/theme'
import { useChainId } from 'src/hooks'
import { DISCORD_SUPPORT, NETWORK_CURRENCY, NETWORK_LABELS, supportedWallets } from 'src/constants'
import { useMedia } from 'react-use'
import { MobileHeader } from './MobileHeader'
import { CHAINS, Chain } from '@pangolindex/sdk'
import { useTotalPngEarnedHook } from 'src/state/stake/multiChainsHooks'
import { useWallet } from 'src/state/user/hooks'
import SwitchSubgraph from 'src/components/SwitchSubgraph'

interface Props {
  activeMobileMenu: boolean
  handleMobileMenu: () => void
}

export default function Header({ activeMobileMenu, handleMobileMenu }: Props) {
  const { account } = useActiveWeb3React()
  const chainId = useChainId()
  const { PNG } = Tokens
  const useETHBalances = useAccountBalanceHook[chainId]

  const accounts = useMemo(() => (account ? [account] : []), [account])

  const userEthBalance = useETHBalances(chainId, accounts)?.[account ?? '']

  const [showPngBalanceModal, setShowPngBalanceModal] = useState(false)
  const [openNetworkSelection, setOpenNetworkSelection] = useState(false)

  const node = useRef<HTMLDivElement>()
  const open = useModalOpen(ApplicationModal.FARM)
  const toggle = useToggleModal(ApplicationModal.FARM)

  const walletModalOpen = useModalOpenComponents(ApplicationModalComponents.WALLET)
  const toggleWalletModal = useWalletModalToggleWithChainId()
  const { walletModalChainId } = useApplicationState()
  const [, setWallet] = useWallet()

  useOnClickOutside(node, open ? toggle : undefined)

  const [isDark, toggleDarkMode] = useDarkModeManager()

  const closeNetworkSelection = () => {
    setOpenNetworkSelection(false)
  }

  function closePngBalanceModal() {
    setShowPngBalanceModal(false)
  }

  const isMobile = useMedia(`(max-width: ${MEDIA_WIDTHS.upToMedium}px)`)

  const png = PNG[chainId]

  const unclaimedPNG = useTotalPngEarnedHook[chainId]()

  const { data: pngCirculationSupply } = usePNGCirculationSupply()

  const handleSelectChain = useCallback(
    (chain: Chain) => {
      setOpenNetworkSelection(false)
      toggleWalletModal(chain.chain_id)
    },
    [setOpenNetworkSelection, toggleWalletModal]
  )

  const closeWalletModal = useCallback(() => {
    toggleWalletModal(undefined)
  }, [toggleWalletModal])

  const onWalletConnect = useCallback(
    connectorKey => {
      toggleWalletModal(undefined)
      setWallet(connectorKey)
    },
    [setWallet, toggleWalletModal]
  )

  return (
    <HeaderFrame>
      {isMobile ? (
        <MobileHeader activeMobileMenu={activeMobileMenu} handleMobileMenu={handleMobileMenu} />
      ) : (
        <HeaderControls>
          <HeaderElement>
            <LegacyButtonWrapper>
              <SwitchSubgraph />
              <SupportButton href={DISCORD_SUPPORT} target="_blank">
                <DiscordIcon style={{ width: '18px', fill: isDark ? '#fff' : undefined }} />
                <span style={{ whiteSpace: 'nowrap', marginLeft: '5px' }}>Support</span>
              </SupportButton>
            </LegacyButtonWrapper>
            <Hidden upToSmall={true}>
              <NetworkSelection
                open={openNetworkSelection}
                closeModal={closeNetworkSelection}
                onToogleWalletModal={handleSelectChain}
              />
              {chainId && NETWORK_LABELS[chainId] && (
                <NetworkCard
                  title={NETWORK_LABELS[chainId]}
                  onClick={() => setOpenNetworkSelection(!openNetworkSelection)}
                >
                  <Logo src={CHAINS[chainId].logo} />
                  {NETWORK_LABELS[chainId]}
                </NetworkCard>
              )}
            </Hidden>
            {CHAINS[chainId].png_symbol && (
              <PNGWrapper onClick={() => setShowPngBalanceModal(true)}>
                <PNGAmount active={!!account} style={{ pointerEvents: 'auto' }}>
                  {CHAINS[chainId].png_symbol}
                </PNGAmount>
              </PNGWrapper>
            )}
            <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
              {account && userEthBalance ? (
                <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                  {userEthBalance?.toSignificant(4)} {NETWORK_CURRENCY[chainId]}
                </BalanceText>
              ) : null}
              <Web3Status />
            </AccountElement>
          </HeaderElement>
          <HeaderElementWrap>
            <LanguageSelection />
            <ThemeMode onClick={() => toggleDarkMode()}>
              {isDark ? (
                <img width={'16px'} src={LightMode} alt={'Setting'} />
              ) : (
                <img width={'16px'} src={NightMode} alt={'NightMode'} />
              )}
            </ThemeMode>
          </HeaderElementWrap>
        </HeaderControls>
      )}
      <TokenInfoModal
        open={showPngBalanceModal}
        unclaimedAmount={unclaimedPNG}
        circulationSupply={pngCirculationSupply}
        closeModal={closePngBalanceModal}
        token={png}
      />

      <WalletModal
        open={walletModalOpen}
        closeModal={closeWalletModal}
        onWalletConnect={onWalletConnect}
        initialChainId={walletModalChainId}
        supportedWallets={supportedWallets}
      />
    </HeaderFrame>
  )
}
