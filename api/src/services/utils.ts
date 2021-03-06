import axios from 'axios';
import config from '../utils/config';
import { query } from '../utils/connector';
import { ensure } from '../utils/utils';

const KWE_DENOM = 'kwe-finance';

interface Price {
  usd: number;
  usd_24h_change: number;
}

interface PriceWrapper {
  [coin: string]: Price;
}

export const authenticationToken = async (token: string): Promise<boolean> => axios
  .get(`https://www.google.com/recaptcha/api/siteverify?secret=${config.recaptchaSecret}&response=${token}`)
  .then((res) => res.data.success)
  .catch((err) => {
    // TODO add logger
    console.log(err);
    throw new Error('Can not extract recaptcha token...');
  });

export const getKwePrice = async (): Promise<Price> => axios
  .get<PriceWrapper>(`https://api.coingecko.com/api/v3/simple/price?ids=${KWE_DENOM}&vs_currencies=usd&include_24hr_change=true`)
  .then((res) => res.data[KWE_DENOM])
  .then((res) => ({ ...res }))
  .catch((err) => {
    console.log(err);
    throw new Error('Can not extract kwe price from coingecko...');
  });

interface LastBlock {
  id: number;
  timestamp: string;
}

export const getLastBlock = async (): Promise<LastBlock> => {
  const res = await query<LastBlock>('SELECT id, current_timestamp as timestamp FROM block ORDER BY id DESC limit 1', []);
  ensure(res.length > 0, 'Last block is not found');
  return {
    id: res[0].id,
    timestamp: res[0].timestamp,
  };
};
