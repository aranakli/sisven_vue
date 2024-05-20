<template>
    <div class="container">
      <h1>Listado de Productos</h1>
      <button @click="newProduct" class="btn btn-success mx-2">
        <font-awesome-icon icon="plus" />
      </button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Stock</th>
            <th scope="col">Categoría</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="product.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.category.name }}</td>
            <td>
              <button @click="editProduct(product.id)" class="btn btn-warning mx-2">
                <font-awesome-icon icon="pencil" />
              </button>
              <button @click="deleteProduct(product.id)" class="btn btn-danger mx-2">
                <font-awesome-icon icon="trash" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import Swal from "sweetalert2";
  
  export default {
    name: "Products",
    data() {
      return {
        products: []
      };
    },
    methods: {
      fetchProducts() {
        axios
          .get("http://127.0.0.1:8000/api/products")
          .then(response => {
            this.products = response.data.products;
          })
          .catch(error => {
            Swal.fire("¡Error!", "Hubo un problema al obtener los productos.", "error");
          });
      },
      deleteProduct(id) {
        Swal.fire({
          title: `¿Deseas eliminar el producto con ID ${id}?`,
          showCancelButton: true,
          confirmButtonText: "Eliminar"
        }).then(result => {
          if (result.isConfirmed) {
            axios
              .delete(`http://127.0.0.1:8000/api/products/${id}`)
              .then(response => {
                if (response.data.success) {
                  Swal.fire("¡Eliminado!", "", "success");
                  this.fetchProducts();
                }
              })
              .catch(error => {
                Swal.fire("¡Error!", "Hubo un problema al eliminar el producto.", "error");
              });
          }
        });
      },
      editProduct(id) {
        this.$router.push({ name: "EditProduct", params: { id } });
      },
      newProduct() {
        this.$router.push({ name: "NewProduct" });
      }
    },
    mounted() {
      this.fetchProducts();
    }
  };
  </script>
  