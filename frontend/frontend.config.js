export const network = {
  id: 'kwe-mainnet',
  name: 'Mainnet',
  tokenSymbol: 'KWE',
  tokenDecimals: 18,
  ss58Format: 42,
  coinGeckoDenom: 'kwe-finance',
  nodeWs: 'ws://localhost:9945',
  backendWs: 'ws://localhost:8081/v1/graphql',
  backendHttp: 'http://localhost:8081/v1/graphql',
  verificatorApi: 'http://localhost:8001/api/verificator/submit-verification',
  googleAnalytics: '',
  theme: '@/assets/scss/themes/kwe.scss',
}
export const paginationOptions = [10, 20, 50, 100]
