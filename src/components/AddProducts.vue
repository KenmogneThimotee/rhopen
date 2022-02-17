<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">name</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="product.name"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">price</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="product.price"
          name="description"
        />
      </div>

      <div class="form-group">
        <label for="description">quantity</label>
        <input
          class="form-control"
          id="quantity"
          required
          v-model="product.quantity"
          name="description"
        />
      </div>

      <button @click="saveProduct" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newProduct">Add</button>
    </div>
  </div>
</template>

<script>
import ProductDataService from "../services/ProductDataService";

export default {
  name: "add-product",
  data() {
    return {
      product: {
        id: null,
        name: "",
        price: "",
        quantity: false
      },
      submitted: false
    };
  },
  methods: {
    saveProduct() {
      var data = {
        name: this.product.name,
        price: this.product.price,
        quantity: this.product.quantity,
      };

      ProductDataService.create(data)
        .then(response => {
          this.product.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newProduct() {
      this.submitted = false;
      this.product = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
