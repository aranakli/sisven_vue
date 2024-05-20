<!--REVISAR-->

<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> Edit</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Customer
            </div>
            <div class="card-body">
                <form @submit.prevent="updateCostumer">
                    <div class="row mb-3">
                        <label for="id" class="form-label">Código</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /> </div>
                            <input type="text" class="form-control" id="id" placeholder="Codigo de customer"
                                disabled v-model='customer.id'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="document" class="form-label">Document Number</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                        <input type="number" required class="form-control" id="document" placeholder="Document number"
                            v-model="customer.document_number">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="firstname" class="form-label">First Name</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                        <input type="text" required class="form-control" id="firstname" placeholder="First name"
                            v-model="customer.first_name">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="lastname" class="form-label">Last Name</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                        <input type="text" required class="form-control" id="lastname" placeholder="Last name"
                            v-model="customer.last_name">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="address" class="form-label">Address</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                        <input type="text" required class="form-control" id="address" placeholder="Address"
                            v-model="customer.address">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="birthdate" class="form-label">Birthdate</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                        <input type="date" required class="form-control" id="birthdate" placeholder="birthdate"
                            v-model="customer.birthdate">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="phone" class="form-label">Phone number</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                        <input type="text" required class="form-control" id="phone" placeholder="phone"
                            v-model="customer.phone_number">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="email" class="form-label">Email</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                        <input type="text" required class="form-control" id="email" placeholder="email"
                            v-model="customer.email">
                        </div>
                    </div>

                    <button class="btn btn-primary" type="submit">Guardar</button>
                    <button class="btn btn-secundary mx-2" @click="cancelar">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: 'EditCustomer',
    data() {
        return {
            customer: {
                id: 0,
                document_number: 0,
                first_name: '',
                last_name: '',
                address: '',
                birthdate: '',
                phone_number: 0,
                email: ""
            },
        }
    },
    methods: {
        cancel() {
            this.$router.push({ name: 'Customers' })
        },
        async updateCostumer() {
            const res = await axios.post(`http://127.0.0.1:8000/api/customers/`, this.customer)
            console.log(res);
            if (res.status == 200) {
                this.$router.push({name: 'Customers'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'La customer ha sido guardada',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted() {
        
    }
}
</script>