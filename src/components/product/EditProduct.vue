<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold">Edit Product</h1>
    <div class="card">
      <div class="card-header fw-bold">Product</div>
      <div class="card-body">
        <form @submit.prevent="updateProduct">
          <div class="row mb-3">
            <label for="id" class="form-label">ID</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="tag" />
              </div>
              <input
                type="text"
                class="form-control"
                id="id"
                placeholder="Product ID"
                disabled
                v-model="product.id"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="name" class="form-label">Name</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="box" />
              </div>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Product name"
                v-model="product.name"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="price" class="form-label">Price</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="dollar-sign" />
              </div>
              <input
                type="number"
                class="form-control"
                id="price"
                placeholder="Product price"
                v-model="product.price"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="stock" class="form-label">Stock</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="warehouse" />
              </div>
              <input
                type="number"
                class="form-control"
                id="stock"
                placeholder="Product stock"
                v-model="product.stock"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="category" class="form-label">Category</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="list" />
              </div>
              <select
                class="form-control"
                id="category"
                v-model="product.category_id"
              >
                <option v-for="category in categories" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select>
            </div>
          </div>
          <button class="btn btn-primary" type="submit">Update</button>
          <button class="btn btn-secondary mx-2" @click="cancel">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'EditProduct',
  data() {
    return {
      product: {
        id: null,
        name: '',
        price: 0,
        stock: 0,
        category_id: ''
      },
      categories: []
    };
  },
  methods: {
  cancel() {
    this.$router.push({ name: 'Products' });
  },
  async updateProduct() {
    try {
      const res = await axios.put(`http://127.0.0.1:8000/api/products/${this.product.id}`, this.product);
      console.log(res); // Log para ver la respuesta completa
      if (res.status === 200) {
        console.log('Product updated successfully');
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.data.message,
          showConfirmButton: false,
          timer: 2000
        });
        this.$router.push({ name: 'Products' });
      } else {
        console.error('Unexpected status code:', res.status);
        Swal.fire('Error!', `Unexpected status code: ${res.status}`, 'error');
      }
    } catch (error) {
      console.error('Error during update:', error); // Log para ver detalles del error
      let errorMessage = 'There was a problem updating the product.';
      if (error.response) {
        // El servidor respondió con un estado distinto a 2xx
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
        errorMessage = `Server responded with status ${error.response.status}: ${error.response.data.message}`;
      } else if (error.request) {
        // La solicitud fue hecha pero no hubo respuesta
        console.error('Request data:', error.request);
        errorMessage = 'No response received from server.';
      } else {
        // Algo ocurrió al configurar la solicitud
        console.error('Error message:', error.message);
      }
      Swal.fire('Error!', errorMessage, 'error');
    }
  },
  async fetchProduct() {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/products/${this.$route.params.id}`);
      if (response.data.product) {
        this.product = response.data.product;
      } else {
        Swal.fire('Error!', 'Product not found.', 'error');
        this.$router.push({ name: 'Products' });
      }
    } catch (error) {
      Swal.fire('Error!', 'There was a problem getting the product.', 'error');
    }
  },
  async fetchCategories() {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/categories');
      this.categories = res.data.categories;
    } catch (error) {
      Swal.fire('Error!', 'There was a problem getting the categories.', 'error');
      }
    }
  },
  mounted() {
    this.fetchProduct();
    this.fetchCategories();
  }
};
</script>
