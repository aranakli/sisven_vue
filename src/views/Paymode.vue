<template>
    <div class="container">
        <h1 class="text-start">Paymode list |
            <button @click="newPaymode()" class="btn btn-success mx-2">
                <font-awesome-icon icon="plus" />
            </button>
        </h1>
        <table class="table">
          <thead>
            <tr>
                <th scope="col">Code</th>
                <th scope="col">Name</th>
                <th scope="col">Observation</th>
                <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pay_mode, index) in pay_modes" :key="index">
                <th>{{ pay_mode.id }}</th>
                <td>{{ pay_mode.name }}</td>
                <td>{{ pay_mode.observation }}</td>
              <td>
                <button @click="deletePaymode(pay_mode.id)" class="btn btn-danger mx-2">
                  <font-awesome-icon icon="trash" />
                </button>
                <button @click="editPaymode(pay_mode.id)" class="btn btn-warning mx-2">
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
        name: 'Paymode',
        data() {
            return {
                pay_modes: []
            }
        },
        methods: {
            deletePaymode(id) {
                Swal.fire({
                    title: `Do you want to delete the pay_mode with id ${id}?`,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.delete(`http://127.0.0.1:8000/api/pay_modes/${id}`)
                        .then(response => {
                            if (response.data.success) {
                                Swal.fire('Delete !! ', '', 'success')
                                this.pay_modes = response.data.pay_modes
                            }
                        })
                    }
                })
            },
            editPaymode(id) {
              this.$router.push({name: 'EditPaymode', params: { id: `${id}` }} )
          },
          newPaymode() {
              this.$router.push({name: 'NewPaymode'});
          }
        },
        mounted() {
            axios
                .get('http://127.0.0.1:8000/api/pay_modes')
                .then(response => (this.pay_modes = response.data.pay_modes))
        },
    }
    </script>