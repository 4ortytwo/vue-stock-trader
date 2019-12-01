<template>
  <div class="w-50 p-2">
    <div class="my-1 border rounded-lg">
      <div
        class="container rounded-top text-success d-flex align-items-end p-2"
        style="background-color: #DBF9E2"
      >
        <h4 class="mr-1">{{brand.name}}</h4>
        <span>(Price: {{brand.currentPrice}})</span>
      </div>
      <div class="container d-flex justify-content-between p-3">
        <input
          type="number"
          class="border rounded py-2 px-3"
          placeholder="Quantity"
          v-model.number="qty"
        />
        <button class="btn btn-success font-weight-bolder" @click="buyStock">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stockCard",
  props: {
    brand: Object,
    buy: Function,
    deductFunds: Function
  },
  data() {
    return {
      qty: null
    };
  },
  methods: {
    buyStock() {
      if (this.qty) {
        const order = {
          id: this.brand.id,
          qty: this.qty,
          price: this.qty * this.brand.currentPrice
        };
        console.log("stock buy order", order);
        this.deductFunds(order.price);
        this.buy(order);
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