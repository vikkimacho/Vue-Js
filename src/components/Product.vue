<template>
  <div v-if="currentProduct" class="edit-form">
    <h4>Product</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentProduct.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentProduct.description"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentProduct.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button
      class="badge badge-primary mr-2"
      v-if="currentProduct.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button
      v-else
      class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2" @click="deleteProduct">
      Delete
    </button>

    <button type="submit" class="badge badge-success" @click="updateProduct">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Product...</p>
  </div>
</template>

<script lang="ts">
// import { Component, Vue } from "vue-property-decorator";
// import ProductDataService from "../services/ProductDataService";

// @Component
// export default class Product extends Vue {
//   private currentProduct: any = null;
//   private message: string = "";

//   getProduct(id: string) {
//     ProductDataService.get(id)
//       .then((response) => {
//         this.currentProduct = response.data;
//         console.log(response.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

//   updatePublished(status: boolean) {
//     var data = {
//       id: this.currentProduct.id,
//       title: this.currentProduct.title,
//       description: this.currentProduct.description,
//       published: status,
//     };

//     ProductDataService.update(this.currentProduct.id, data)
//       .then((response) => {
//         this.currentProduct.published = status;
//         console.log(response.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

//   updateProduct() {
//     ProductDataService.update(this.currentProduct.id, this.currentProduct)
//       .then((response) => {
//         console.log(response.data);
//         this.message = "The Product was updated successfully!";
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

//   deleteProduct() {
//     ProductDataService.delete(this.currentProduct.id)
//       .then((response) => {
//         console.log(response.data);
//         this.$router.push({ name: "Products" });
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

//   mounted() {
//     this.message = "";
//     this.getProduct(this.$route.params.id);
//   }
// }
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>