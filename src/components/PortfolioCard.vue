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
        <button class="btn btn-danger font-weight-bolder" @click="sellStock">Sell</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "portfolioCard",
  props: {
    brand: Object,
    sell: Function,
    increaseFunds: Function
  },
  data() {
    return {
      qty: null
    };
  },
  methods: {
    sellStock() {
      if (this.qty && this.qty <= this.brand.owned) {
        const order = {
          id: this.brand.id,
          qty: this.qty,
          price: this.qty * this.brand.currentPrice
        };
        console.log("potfolio sell order", order);
        console.log("portfolio sell price", order.price);
        this.sell(order);
        this.increaseFunds(order.price);
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