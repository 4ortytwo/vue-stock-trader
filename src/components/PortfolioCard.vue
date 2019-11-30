<template>
  <div class="w-50 p-2">
    <div class="my-1 border rounded-lg">
      <div
        class="container rounded-top text-primary d-flex align-items-end p-2"
        style="background-color: #BDDBFC"
      >
        <h4 class="mr-1">{{brand.name}}</h4>
        <span>(Price: {{brand.currentPrice}} | Quantity: {{brand.owned}})</span>
      </div>
      <div class="container d-flex justify-content-between p-3">
        <input
          type="number"
          class="border rounded py-2 px-3"
          placeholder="Quantity"
          v-model.number="qty"
        />
        <button class="btn btn-danger font-weight-bolder">Sell</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "portfolioCard",
  props: {
    brand: Object,
    index: Number
  },
  data() {
    return {
      qty: null
    };
  },
  methods: {
    ...mapActions({ sell: "sell" }),
    sellStock() {
      if (this.qty) {
        console.log({ index: this.index, qty: this.qty });
        this.sell({ index: this.index, qty: this.qty });
        this.qty = null;
      }
    }
  }
};
</script>

<style>
h4 {
  margin: 0;
}
</style>