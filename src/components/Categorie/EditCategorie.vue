<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> Editar</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Categorie
            </div>
            <div class="card-body">
                <form @submit.prevent="updateCategorie">
                    <div class="row mb-3">
                        <label for="id" class="form-label">Id: </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /> </div>
                            <input type="text" class="form-control" id="id" placeholder="Categorie Id" disabled
                                v-model="categories.id">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="name" class="form-label">Name : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /> </div>
                            <input type="text" class="form-control" id="name" placeholder="Categorie name"
                                v-model="categories.name">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="description" class="form-label">Description : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /> </div>
                            <input type="text" class="form-control" id="description" placeholder="Categorie description"
                                 v-model="categories.description">
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Update</button>
                    <button class="btn btn-secundary mx-2" @click="cancel">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: 'EditCategorie',
    data() {
        return {
            categories: {
                id: 0,
                name: '',
                description: ''
            },
        };
    },
    methods: {
        cancel() {
            this.$router.push({ name: 'Categorie' })
        },
        async updateCategorie() {
            try {
                const res = await axios.put(`http://127.0.0.1:8000/api/categories/${this.categories.id}`, this.categories)
                if (res.status == 200) {
                    this.$router.push({ name: 'Categories' })
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'The categorie has been updated',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            } catch (error) {
                console.error('Error updating categorie', error);
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Error. updated categories',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        },
        mounted() {
            this.categories.id = this.$route.params.id;
            axios.get(`http://127.0.0.1:8000/api/categories/${this.categories.id}`)
                .then(response => {
                    this.categories = response.data.categories;
                })
        }
    }
}
</script>