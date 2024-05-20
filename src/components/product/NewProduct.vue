<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> New Product</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Product
            </div>
            <div class="card-body">
                <form @submit.prevent="saveProduct">
                    <div class="row mb-3">
                        <label for="id" class="form-label">ID</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /> </div>
                            <input type="text" class="form-control" id="id" placeholder="Product ID"
                                disabled v-model='product.id'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="name" class="form-label">Name</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="box" /></div>
                        <input type="text" required class="form-control" id="name" placeholder="Product Name"
                            v-model="product.name">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="price" class="form-label">Price</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="dollar-sign" /></div>
                        <input type="number" required class="form-control" id="price" placeholder="Product Price"
                            v-model="product.price">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="stock" class="form-label">Stock</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="warehouse" /></div>
                        <input type="number" required class="form-control" id="stock" placeholder="Product Stock"
                            v-model="product.stock">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="category" class="form-label">Category</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tags" /></div>
                        <input type="text" required class="form-control" id="category" placeholder="Product Category"
                            v-model="product.category">
                        </div>
                    </div>

                    <button class="btn btn-primary" type="submit">Save</button>
                    <button class="btn btn-secondary mx-2" @click="cancel">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: 'NewProduct',
    data() {
        return {
            product: {
                id: 0,
                name: '',
                price: 0,
                stock: 0,
                category: ''
            },
        }
    },
    methods: {
        cancel() {
            this.$router.push({ name: 'Products' })
        },
        async saveProduct() {
            try {
                const res = await axios.post(`http://127.0.0.1:8000/api/products/`, this.product)
                if (res.status == 200) {
                    this.$router.push({name: 'Products'})
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'The product has been saved',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            } catch (error) {
                console.error(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            }
        }
    }
}
</script>

<style scoped>
</style>
