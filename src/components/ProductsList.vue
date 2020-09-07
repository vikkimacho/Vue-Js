<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Products List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(Product, index) in Products"
          :key="index"
          @click="setActiveProduct(Product, index)"
        >
          {{ Product.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllProducts">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentProduct">
        <h4>Product</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentProduct.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label>
          {{ currentProduct.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label>
          {{ currentProduct.published ? "Published" : "Pending" }}
        </div>

        <a
          class="badge badge-warning"
          :href="'/Products/' + currentProduct.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Product...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import ProductDataService from "../services/ProductDataService";

@Component
export default class ProductsList extends Vue {
  private Products: any[] = [];
  private currentProduct: any = null;
  private currentIndex = -1;
  private title = "";


  retrieveProducts() {
    // ProductDataService.getAll()
    //   .then((response) => {
    //     this.Products = response.data;
    //     console.log(response.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }

  refreshList() {
    this.retrieveProducts();
    // this.currentProduct = null;
    // this.currentIndex = -1;
  }

  setActiveProduct(Product: any, index: number) {
    // this.currentProduct = Product;
    // this.currentIndex = index;
  }

  removeAllProducts() {
    // ProductDataService.deleteAll()
    //   .then((response) => {
    //     console.log(response.data);
    //     this.refreshList();
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }

  searchTitle() {
    // ProductDataService.findByTitle(this.title)
    //   .then((response) => {
    //     this.Products = response.data;
    //     console.log(response.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }

  mounted() {
    this.retrieveProducts();
  }
}
</script>

<style scoped>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>