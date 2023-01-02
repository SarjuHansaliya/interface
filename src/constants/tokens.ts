import { ChainId, Token, CHAINS } from '@pangolindex/sdk'

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const PNG: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(
    ChainId.FUJI,
    CHAINS[ChainId.FUJI].contracts!.png,
    18,
    CHAINS[ChainId.FUJI].png_symbol,
    'Pangolin'
  ),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    CHAINS[ChainId.AVALANCHE].contracts!.png,
    18,
    CHAINS[ChainId.AVALANCHE].png_symbol,
    'Pangolin'
  ),
  [ChainId.WAGMI]: new Token(
    ChainId.WAGMI,
    CHAINS[ChainId.WAGMI].contracts!.png,
    18,
    CHAINS[ChainId.WAGMI].png_symbol,
    'Wagmi Pangolin'
  ),
  [ChainId.COSTON]: new Token(
    ChainId.COSTON,
    CHAINS[ChainId.COSTON].contracts!.png,
    18,
    CHAINS[ChainId.COSTON].png_symbol,
    'Coston Pangolin'
  ),
  [ChainId.SONGBIRD]: new Token(
    ChainId.SONGBIRD,
    CHAINS[ChainId.SONGBIRD].contracts!.png,
    18,
    CHAINS[ChainId.SONGBIRD].png_symbol,
    'Songbird Pangolin'
  ),
  [ChainId.HEDERA_TESTNET]: new Token(
    ChainId.HEDERA_TESTNET,
    CHAINS[ChainId.HEDERA_TESTNET].contracts!.png,
    8,
    CHAINS[ChainId.HEDERA_TESTNET].png_symbol,
    'Songbird Pangolin'
  ),
  [ChainId.NEAR_MAINNET]: new Token(
    ChainId.NEAR_MAINNET,
    CHAINS[ChainId.NEAR_MAINNET].contracts!.png,
    18,
    CHAINS[ChainId.NEAR_MAINNET].png_symbol,
    'Pangolin Near'
  ),
  [ChainId.NEAR_TESTNET]: new Token(
    ChainId.NEAR_TESTNET,
    CHAINS[ChainId.NEAR_TESTNET].contracts!.png,
    18,
    CHAINS[ChainId.NEAR_TESTNET].png_symbol,
    'Pangolin Near'
  ),
  [ChainId.COSTON2]: new Token(
    ChainId.COSTON2,
    CHAINS[ChainId.COSTON2].contracts!.png,
    18,
    CHAINS[ChainId.COSTON2].png_symbol,
    'Pangolin Coston2'
  ),
  [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM, ZERO_ADDRESS, 18, '', ''),
  [ChainId.POLYGON]: new Token(ChainId.POLYGON, ZERO_ADDRESS, 18, '', ''),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, ZERO_ADDRESS, 18, '', ''),
  [ChainId.XDAI]: new Token(ChainId.XDAI, ZERO_ADDRESS, 18, '', ''),
  [ChainId.BSC]: new Token(ChainId.BSC, ZERO_ADDRESS, 18, '', ''),
  [ChainId.ARBITRUM]: new Token(ChainId.ARBITRUM, ZERO_ADDRESS, 18, '', ''),
  [ChainId.CELO]: new Token(ChainId.CELO, ZERO_ADDRESS, 18, '', ''),
  [ChainId.OKXCHAIN]: new Token(ChainId.OKXCHAIN, ZERO_ADDRESS, 18, '', ''),
  [ChainId.VELAS]: new Token(ChainId.VELAS, ZERO_ADDRESS, 18, '', ''),
  [ChainId.AURORA]: new Token(ChainId.AURORA, ZERO_ADDRESS, 18, '', ''),
  [ChainId.CRONOS]: new Token(ChainId.CRONOS, ZERO_ADDRESS, 18, '', ''),
  [ChainId.FUSE]: new Token(ChainId.FUSE, ZERO_ADDRESS, 18, '', ''),
  [ChainId.MOONRIVER]: new Token(ChainId.MOONRIVER, ZERO_ADDRESS, 18, '', ''),
  [ChainId.MOONBEAM]: new Token(ChainId.MOONBEAM, ZERO_ADDRESS, 18, '', ''),
  [ChainId.OP]: new Token(ChainId.OP, ZERO_ADDRESS, 18, '', '')
}

export const USDC: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 6, 'USDC', 'USD Coin'),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
    6,
    'USDC',
    'USD Coin'
  ),
  [ChainId.WAGMI]: new Token(ChainId.WAGMI, ZERO_ADDRESS, 6, 'USDC', 'USD Coin'),
  [ChainId.COSTON]: new Token(ChainId.COSTON, ZERO_ADDRESS, 18, '', ''),
  [ChainId.SONGBIRD]: new Token(ChainId.SONGBIRD, ZERO_ADDRESS, 18, '', ''),
  [ChainId.HEDERA_TESTNET]: new Token(ChainId.HEDERA_TESTNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.NEAR_MAINNET]: new Token(ChainId.NEAR_MAINNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.NEAR_TESTNET]: new Token(ChainId.NEAR_TESTNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.COSTON2]: new Token(ChainId.COSTON2, ZERO_ADDRESS, 18, '', ''),
  [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM, ZERO_ADDRESS, 18, '', ''),
  [ChainId.POLYGON]: new Token(ChainId.POLYGON, ZERO_ADDRESS, 18, '', ''),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, ZERO_ADDRESS, 18, '', ''),
  [ChainId.XDAI]: new Token(ChainId.XDAI, ZERO_ADDRESS, 18, '', ''),
  [ChainId.BSC]: new Token(ChainId.BSC, ZERO_ADDRESS, 18, '', ''),
  [ChainId.ARBITRUM]: new Token(ChainId.ARBITRUM, ZERO_ADDRESS, 18, '', ''),
  [ChainId.CELO]: new Token(ChainId.CELO, ZERO_ADDRESS, 18, '', ''),
  [ChainId.OKXCHAIN]: new Token(ChainId.OKXCHAIN, ZERO_ADDRESS, 18, '', ''),
  [ChainId.VELAS]: new Token(ChainId.VELAS, ZERO_ADDRESS, 18, '', ''),
  [ChainId.AURORA]: new Token(ChainId.AURORA, ZERO_ADDRESS, 18, '', ''),
  [ChainId.CRONOS]: new Token(ChainId.CRONOS, ZERO_ADDRESS, 18, '', ''),
  [ChainId.FUSE]: new Token(ChainId.FUSE, ZERO_ADDRESS, 18, '', ''),
  [ChainId.MOONRIVER]: new Token(ChainId.MOONRIVER, ZERO_ADDRESS, 18, '', ''),
  [ChainId.MOONBEAM]: new Token(ChainId.MOONBEAM, ZERO_ADDRESS, 18, '', ''),
  [ChainId.OP]: new Token(ChainId.OP, ZERO_ADDRESS, 18, '', '')
}

export const APEIN: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'APEIN', 'Ape In'),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    '0x938FE3788222A74924E062120E7BFac829c719Fb',
    18,
    'APEIN',
    'Ape In'
  ),
  [ChainId.WAGMI]: new Token(ChainId.WAGMI, ZERO_ADDRESS, 18, 'APEIN', 'Ape In'),
  [ChainId.COSTON]: new Token(ChainId.COSTON, ZERO_ADDRESS, 18, '', ''),
  [ChainId.SONGBIRD]: new Token(ChainId.SONGBIRD, ZERO_ADDRESS, 18, '', ''),
  [ChainId.HEDERA_TESTNET]: new Token(ChainId.HEDERA_TESTNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.NEAR_MAINNET]: new Token(ChainId.NEAR_MAINNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.NEAR_TESTNET]: new Token(ChainId.NEAR_TESTNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.COSTON2]: new Token(ChainId.COSTON2, ZERO_ADDRESS, 18, '', ''),
  [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM, ZERO_ADDRESS, 18, '', ''),
  [ChainId.POLYGON]: new Token(ChainId.POLYGON, ZERO_ADDRESS, 18, '', ''),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, ZERO_ADDRESS, 18, '', ''),
  [ChainId.XDAI]: new Token(ChainId.XDAI, ZERO_ADDRESS, 18, '', ''),
  [ChainId.BSC]: new Token(ChainId.BSC, ZERO_ADDRESS, 18, '', ''),
  [ChainId.ARBITRUM]: new Token(ChainId.ARBITRUM, ZERO_ADDRESS, 18, '', ''),
  [ChainId.CELO]: new Token(ChainId.CELO, ZERO_ADDRESS, 18, '', ''),
  [ChainId.OKXCHAIN]: new Token(ChainId.OKXCHAIN, ZERO_ADDRESS, 18, '', ''),
  [ChainId.VELAS]: new Token(ChainId.VELAS, ZERO_ADDRESS, 18, '', ''),
  [ChainId.AURORA]: new Token(ChainId.AURORA, ZERO_ADDRESS, 18, '', ''),
  [ChainId.CRONOS]: new Token(ChainId.CRONOS, ZERO_ADDRESS, 18, '', ''),
  [ChainId.FUSE]: new Token(ChainId.FUSE, ZERO_ADDRESS, 18, '', ''),
  [ChainId.MOONRIVER]: new Token(ChainId.MOONRIVER, ZERO_ADDRESS, 18, '', ''),
  [ChainId.MOONBEAM]: new Token(ChainId.MOONBEAM, ZERO_ADDRESS, 18, '', ''),
  [ChainId.OP]: new Token(ChainId.OP, ZERO_ADDRESS, 18, '', '')
}

export const OOE: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'OOE', 'OpenOcean'),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    '0x0ebd9537A25f56713E34c45b38F421A1e7191469',
    18,
    'OOE',
    'OpenOcean'
  ),
  [ChainId.WAGMI]: new Token(ChainId.WAGMI, ZERO_ADDRESS, 18, 'OOE', 'OpenOcean'),
  [ChainId.COSTON]: new Token(ChainId.COSTON, ZERO_ADDRESS, 18, '', ''),
  [ChainId.SONGBIRD]: new Token(ChainId.SONGBIRD, ZERO_ADDRESS, 18, '', ''),
  [ChainId.HEDERA_TESTNET]: new Token(ChainId.HEDERA_TESTNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.NEAR_MAINNET]: new Token(ChainId.NEAR_MAINNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.NEAR_TESTNET]: new Token(ChainId.NEAR_TESTNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.COSTON2]: new Token(ChainId.COSTON2, ZERO_ADDRESS, 18, '', ''),
  [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM, ZERO_ADDRESS, 18, '', ''),
  [ChainId.POLYGON]: new Token(ChainId.POLYGON, ZERO_ADDRESS, 18, '', ''),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, ZERO_ADDRESS, 18, '', ''),
  [ChainId.XDAI]: new Token(ChainId.XDAI, ZERO_ADDRESS, 18, '', ''),
  [ChainId.BSC]: new Token(ChainId.BSC, ZERO_ADDRESS, 18, '', ''),
  [ChainId.ARBITRUM]: new Token(ChainId.ARBITRUM, ZERO_ADDRESS, 18, '', ''),
  [ChainId.CELO]: new Token(ChainId.CELO, ZERO_ADDRESS, 18, '', ''),
  [ChainId.OKXCHAIN]: new Token(ChainId.OKXCHAIN, ZERO_ADDRESS, 18, '', ''),
  [ChainId.VELAS]: new Token(ChainId.VELAS, ZERO_ADDRESS, 18, '', ''),
  [ChainId.AURORA]: new Token(ChainId.AURORA, ZERO_ADDRESS, 18, '', ''),
  [ChainId.CRONOS]: new Token(ChainId.CRONOS, ZERO_ADDRESS, 18, '', ''),
  [ChainId.FUSE]: new Token(ChainId.FUSE, ZERO_ADDRESS, 18, '', ''),
  [ChainId.MOONRIVER]: new Token(ChainId.MOONRIVER, ZERO_ADDRESS, 18, '', ''),
  [ChainId.MOONBEAM]: new Token(ChainId.MOONBEAM, ZERO_ADDRESS, 18, '', ''),
  [ChainId.OP]: new Token(ChainId.OP, ZERO_ADDRESS, 18, '', '')
}

export const ORBS: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'ORBS', 'Orbs'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0x340fE1D898ECCAad394e2ba0fC1F93d27c7b717A', 18, 'ORBS', 'Orbs'),
  [ChainId.WAGMI]: new Token(ChainId.WAGMI, ZERO_ADDRESS, 18, 'ORBS', 'Orbs'),
  [ChainId.COSTON]: new Token(ChainId.COSTON, ZERO_ADDRESS, 18, '', ''),
  [ChainId.SONGBIRD]: new Token(ChainId.SONGBIRD, ZERO_ADDRESS, 18, '', ''),
  [ChainId.HEDERA_TESTNET]: new Token(ChainId.HEDERA_TESTNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.NEAR_MAINNET]: new Token(ChainId.NEAR_MAINNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.NEAR_TESTNET]: new Token(ChainId.NEAR_TESTNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.COSTON2]: new Token(ChainId.COSTON2, ZERO_ADDRESS, 18, '', ''),
  [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM, ZERO_ADDRESS, 18, '', ''),
  [ChainId.POLYGON]: new Token(ChainId.POLYGON, ZERO_ADDRESS, 18, '', ''),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, ZERO_ADDRESS, 18, '', ''),
  [ChainId.XDAI]: new Token(ChainId.XDAI, ZERO_ADDRESS, 18, '', ''),
  [ChainId.BSC]: new Token(ChainId.BSC, ZERO_ADDRESS, 18, '', ''),
  [ChainId.ARBITRUM]: new Token(ChainId.ARBITRUM, ZERO_ADDRESS, 18, '', ''),
  [ChainId.CELO]: new Token(ChainId.CELO, ZERO_ADDRESS, 18, '', ''),
  [ChainId.OKXCHAIN]: new Token(ChainId.OKXCHAIN, ZERO_ADDRESS, 18, '', ''),
  [ChainId.VELAS]: new Token(ChainId.VELAS, ZERO_ADDRESS, 18, '', ''),
  [ChainId.AURORA]: new Token(ChainId.AURORA, ZERO_ADDRESS, 18, '', ''),
  [ChainId.CRONOS]: new Token(ChainId.CRONOS, ZERO_ADDRESS, 18, '', ''),
  [ChainId.FUSE]: new Token(ChainId.FUSE, ZERO_ADDRESS, 18, '', ''),
  [ChainId.MOONRIVER]: new Token(ChainId.MOONRIVER, ZERO_ADDRESS, 18, '', ''),
  [ChainId.MOONBEAM]: new Token(ChainId.MOONBEAM, ZERO_ADDRESS, 18, '', ''),
  [ChainId.OP]: new Token(ChainId.OP, ZERO_ADDRESS, 18, '', '')
}
