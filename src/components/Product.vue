<template>
  <div v-if="currentTutorial" class="edit-form">
    <h4>Products</h4>
    <form>
      <div class="form-group">
        <label for="title">Name</label>
        <input type="text" class="form-control" id="name"
          v-model="currentProduct.name"
        />
      </div>
      <div class="form-group">
        <label for="description">Price</label>
        <input type="text" class="form-control" id="price"
          v-model="currentProduct.price"
        />
      </div>

      <div class="form-group">
        <label>Quantity:</label>
        <input type="text" class="form-control" id="quantity"
          v-model="currentProduct.quantity"
        />
      </div>
    </form>
    <!--
    <button class="badge badge-primary mr-2"
      v-if="currentTutorial.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>
    -->

    <button class="badge badge-danger mr-2"
      @click="deleteProduct"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateProduct"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Product...</p>
  </div>
</template>

<script>
import ProductDataService from "../services/ProductDataService";

export default {
  name: "tutorial",
  data() {
    return {
      currentProduct: null,
      message: ''
    };
  },
  methods: {
    getProduct(id) {
      ProductDataService.get(id)
        .then(response => {
          this.currentProduct = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentTutorial.id,
        title: this.currentTutorial.title,
        description: this.currentTutorial.description,
        published: status
      };

      ProductDataService.update(this.currentProduct.id, data)
        .then(response => {
          console.log(response.data);
          this.currentProduct.published = status;
          this.message = 'The status was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateTutorial() {
      ProductDataService.update(this.currentProduct.id, this.currentProduct)
        .then(response => {
          console.log(response.data);
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteTutorial() {
      ProductDataService.delete(this.currentProduct.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "products" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getProduct(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
