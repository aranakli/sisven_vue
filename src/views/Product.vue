<template>
    <div class="container">
    <h1>Products Listing</h1>
    <button @click="NewProduct()"
        class="btn btn-success mx-2">
        <font-awesome-icon icon="plus" />
    </button>
    <table class="table">
    <thead>
    <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Stock</th>
        <th scope="col">Category</th>
        <th scope="col">Actions</th>

    </tr>
    </thead>
    <tbody>

    <tr v-for="(product, index) in products" :key="index">
    <th scope="row">{{index+1}}</th>
        <td>{{ product.ID }}</td>
        <td>{{ product.Name }}</td>
        <td>{{ product.Price }}</td>
        <td>{{ product.Stock }}</td>
        <td>{{ product.Category }}</td>
        <td>{{ product.Actions }}</td>
        <td>
            <button @click="deleteProduct(product.id)"
            class="btn btn-danger mx-2">
            <font-awesome-icon icon="trash" />
            </button>
            <button @click="editProduct(product.id)"
            class="btn btn-warning mx-2">
            <font-awesome-icon icon="pencil" />
            </button>
        </td>
    </tr>
    </tbody>
    </table>
    </div>
</template>
<script>
    import axios from "axios"
    import Swal from "sweetalert2"
    export default{
        name:'Product',
        data() {
            return {
                products:[]
            }
        },
        methods: {
            deleteProduct(id){
                Swal.fire({
                    title: `Do you want to delete the Product with id ${id}?`,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                }).then((result)=>{
                /* Read more about isConfirmed, isDenied below */
                if(result.isConfirmed){
                    //Swal.fire('Saved!', '', 'success')
                    axios.delete(`http://127.0.0.1:8000/api/products/${id}`)
                    .then(response=>{
                        if(response.data.success){
                            Swal.fire('Deleted!! ', '', 'success')
                            this.products=response.data.products
                        }
                    })
                }
                })
            }
            editProduct(id){
                this.$router.push({name: 'EditarProduct', params: {`${id}`}})
            },
            NewProduct(){
                this.$router.push({name: 'NewProduct'});   
            }

        },
        mounted() {
            axios
                .get('http://127.0.0.1:8000/api/products')
                .then(response=>(this.products=response.data.products.data))
        },
    }
</script>