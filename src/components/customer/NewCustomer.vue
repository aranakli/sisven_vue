<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> New</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Customer
            </div>
            <div class="card-body">
                <form @submit.prevent="saveCustomer">
                    <div class="row mb-3">
                            <label for="id" class="form-label">Id : </label>
                            <div class="input-group">
                                <div class="input-group-text"> <font-awesome-icon icon="tag" /> </div>
                                <input type="text" class="form-control" id="id" placeholder="Customer Id"
                                    disabled v-model='customers.id'>
                            </div>
                        </div>
                    <div class="row mb-3">
                        <label for="document_number" class="form-label">Document Number</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <input type="number" required class="form-control" id="document_number" placeholder="Document number" 
                            v-model="customers.document_number">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="first_name" class="form-label">First Name</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <input type="text" required class="form-control" id="first_name" placeholder="First name" 
                            v-model="customers.first_name">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="last_name" class="form-label">Last Name</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <input type="text" required class="form-control" id="last_name" placeholder="Last name" 
                            v-model="customers.last_name">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="address" class="form-label">Address</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <input type="text" required class="form-control" id="address" placeholder="Address" 
                            v-model="customers.address">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="birthdate" class="form-label">Birthdate</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <input type="date" required class="form-control" id="birthdate" placeholder="Birthdate" 
                            v-model="customers.birthdate">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="phone_number" class="form-label">Phone number</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <input type="text" required class="form-control" id="phone_number" placeholder="Phone number" 
                            v-model="customers.phone_number">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="email" class="form-label">Email</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <input type="email" required class="form-control" id="email" placeholder="Email" 
                            v-model="customers.email">
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
    name: 'NewCustomer',
    data() {
        return {
            customers: {
                id: 0,
                document_number: 0,
                first_name: '',
                last_name: '',
                address: '',
                birthdate: 0,
                phone_number: 0,
                email: ''
            }
        }
    },
    methods: {
        cancel() {
            this.$router.push({ name: 'Customer' })
        },
        async saveCustomer() {
            this.customers.id = this.id
            const res = await axios.post(`http://127.0.0.1:8000/api/customers/`, this.customers)
            console.log(res);
            if (res.status == 200) {
                this.$router.push({name: 'Customer'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Customer has been saved',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted() {
        // axios.get(`http://127.0.0.1:8000/api/customers/`)
        //     .then(response => {
        //         this.customers = response.data.customers
        //     })
    }
}
</script>