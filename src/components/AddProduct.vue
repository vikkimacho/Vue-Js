<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="Product.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="Product.description"
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

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import ProductDataService from "../services/ProductDataService";

@Component
export default class AddProduct extends Vue {
  private Product: any = {
    id: null,
    title: "",
    description: "",
    published: false,
  };

  private submitted = false;

  saveProduct() {
    // var data = {
    //   title: this.Product.title,
    //   description: this.Product.description,
    // };

    // ProductDataService.create(data)
    //   .then((response) => {
    //     this.Product.id = response.data.id;
    //     console.log(response.data);
    //     this.submitted = true;
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }

  newProduct() {
    // this.submitted = false;
    // this.Product = {};
  }
}
</script>

<style scoped>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>