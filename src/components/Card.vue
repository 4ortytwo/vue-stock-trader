<template>
  <div class="w-50 p-2">
    <div class="my-4 border rounded-lg">
      <div
        class="container rounded-top text-success d-flex align-items-end p-2"
        style="background-color: #DBF9E2"
      >
        <h4 class="mr-1">{{brand.name}}</h4>
        <span>(Price: {{brand.currentPrice}})</span>
      </div>
      <div class="container d-flex justify-content-between p-3">
        <input type="text" class="border rounded py-2 px-3" placeholder="Quantity" />
        <button class="btn btn-success font-weight-bolder">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    brand: Object
  }
};
</script>

<style>
h4 {
  margin: 0;
}
</style>