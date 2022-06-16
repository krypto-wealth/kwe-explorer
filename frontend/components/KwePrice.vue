<template>
  <a
    href="https://coinmarketcap.com/currencies/kwe/"
    target="_blank"
    class="kwe-price"
    :class="`kwe-price--${trendType}`"
  >
    <div class="kwe-price__label">{{ network.tokenSymbol }}</div>
    <div class="kwe-price__price">${{ USDConversion }}</div>
    <div class="kwe-price__trend">({{ USD24hChange }}%)</div>
  </a>
</template>

<script>
import { network } from '@/frontend.config.js'

export default {
  data() {
    return {
      network,
    }
  },
  computed: {
    USDConversion() {
      return parseFloat(this.$store.state.fiat.usd).toFixed(3)
    },
    USD24hChange() {
      return parseFloat(this.$store.state.fiat.usd_24h_change).toFixed(2)
    },
    trendType() {
      const value = this.$store.state.fiat.usd_24h_change
      if (value < 0) return 'down'

      return 'up'
    },
  },
}
</script>

<style lang="scss">
.kwe-price {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-end;
  background: #eaedf3;
  border-radius: 99px;
  padding: 7px 11px 8px 11px;
  transition: none !important;

  .kwe-price__label {
    font-size: 13px;
    line-height: 1;
    font-weight: 500;
    color: rgba(white, 0.9);
  }

  .kwe-price__price {
    font-size: 14px;
    line-height: 14px;
    font-weight: 500;
    color: white;
    margin-left: 5px;
  }

  .kwe-price__trend {
    font-size: 12px;
    line-height: 13px;
    font-weight: 500;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    color: white;
    margin-left: 7px;
  }

  $good: #1dc584;
  $bad: #ea3943;

  &--up {
    background: $good;
  }

  &--down {
    background: $bad;
  }

  &:hover {
    text-decoration: none;
    background: linear-gradient(130deg, #b01f6c, #3c127b);
  }
}
</style>
