<template>
    <div class="container">
        <h1 class="text-start">Categories list |
            <button @click="newCategorie()" class="btn btn-success mx-2">
                <font-awesome-icon icon="plus" />
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(categorie, index) in categories" :key="index">
                    <td>{{ categorie.id }}</td>
                    <td>{{ categorie.name }}</td>
                    <td>{{ categorie.description }}</td>
                    <td>
                        <button @click="deleteCategorie(categorie.id)" class="btn btn-danger mx-2">
                            <font-awesome-icon icon="trash" />
                        </button>
                        <button @click="editCategorie(categorie.id)" class="btn btn-warning mx-2">
                            <font-awesome-icon icon="pencil" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: 'Categorie',
    data() {
        return {
            categories: []
        }
    },
    methods: {
        deleteCategorie(id) {
            Swal.fire({
                title: `Do you want to delete the categorie with id ${id}?`,
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/categories/${id}`)
                    .then(response => {
                        if (response.data.success) {
                            Swal.fire('Delete !! ', '', 'success')
                            this.categories = response.data.categories
                        }
                    })
                }
            })
        },
        editCategorie(id) {
            this.$router.push({name: 'EditCategorie', params: { id: `${id}` }} )
        },
        newCategorie() {
            this.$router.push({name: 'NewCategorie'});
        }
    },
    mounted() {
        axios
            .get('http://127.0.0.1:8000/api/categories')
            .then(response => (this.categories = response.data.categories))
    },
}
</script>
