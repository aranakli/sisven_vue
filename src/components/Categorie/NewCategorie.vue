<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> New</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Categorie
            </div>
            <div class="card-body">
                <form @submit.prevent="saveCategorie">
                    <div class="row mb-3">
                        <label for="id" class="form-label">Id : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /> </div>
                            <input type="text" class="form-control" id="id" placeholder="Categorie Id"
                                disabled v-model='categories.id'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="name" class="form-label">Name : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /> </div>
                            <input type="text" class="form-control" id="name" placeholder="Categorie name"
                                v-model='categories.name'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="description" class="form-label">Description : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /> </div>
                            <input type="text" class="form-control" id="description" placeholder="Nombre de la categorie"
                                v-model='categories.description'>
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Update</button>
                    <button class="btn btn-secundary mx-2" @click="cancelar">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: 'NewCategorie',
    data() {
        return {
            categories: {
                id: 0,
                name: '',
                description: ''
            }
        }
    },
    methods: {
        cancel() {
            this.$router.push({ name: 'Categories' })
        },
        async saveCategorie() {
            this.categories.id = this.id
            const res = await axios.post(`http://127.0.0.1:8000/api/categories/`, this.categories)
            console.log(res);
            if (res.status == 200) {
                this.$router.push({name: 'Categorie'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Categorie has been saved',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted() {
        // axios.get(`http://127.0.0.1:8000/api/categories/`)
        //     .then(response => {
        //         this.categories = response.data.categories
        //     })
    }
}
</script>