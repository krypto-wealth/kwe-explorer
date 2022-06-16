export const network = {
  id: 'kwe-testnet',
  name: 'Testnet',
  tokenSymbol: 'KWE',
  tokenDecimals: 18,
  ss58Format: 42,
  coinGeckoDenom: undefined,
  nodeWs: 'wss://rpc-testnet.kwescan.com/ws',
  backendWs: 'wss://testnet.kwescan.com/api/v3',
  backendHttp: 'https://testnet.kwescan.com/api/v3',
  verificatorApi:
    'https://testnet.kwescan.com/api/verificator/submit-verification',
  googleAnalytics: '',
  theme: '@/assets/scss/themes/kwe.scss',
}
export const paginationOptions = [10, 20, 50, 100]
