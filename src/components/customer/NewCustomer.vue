<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">New Customer</h1>
        <div class="card">
            <div class="card-header fw-bold">Customer</div>
            <div class="card-body">
                <form @submit.prevent="saveCustomer">
                    <div class="row mb-3">
                        <label for="document" class="form-label">Document Number</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <input type="number" required class="form-control" id="document" placeholder="Document number" v-model="customer.document_number">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="firstname" class="form-label">First Name</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <input type="text" required class="form-control" id="firstname" placeholder="First name" v-model="customer.first_name">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="lastname" class="form-label">Last Name</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <input type="text" required class="form-control" id="lastname" placeholder="Last name" v-model="customer.last_name">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="address" class="form-label">Address</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <input type="text" required class="form-control" id="address" placeholder="Address" v-model="customer.address">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="birthdate" class="form-label">Birthdate</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <input type="date" required class="form-control" id="birthdate" placeholder="Birthdate" v-model="customer.birthdate">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="phone" class="form-label">Phone number</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <input type="text" required class="form-control" id="phone" placeholder="Phone number" v-model="customer.phone_number">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="email" class="form-label">Email</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <input type="email" required class="form-control" id="email" placeholder="Email" v-model="customer.email">
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
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'NewCustomer',
    data() {
        return {
            customer: {
                document_number: '',
                first_name: '',
                last_name: '',
                address: '',
                birthdate: '',
                phone_number: '',
                email: ''
            }
        };
    },
    methods: {
        cancel() {
            this.$router.push({ name: 'Customer' });
        },
        async saveCustomer() {
            try {
                const res = await axios.post('http://127.0.0.1:8000/api/customers/', this.customer);
                if (res.status === 200) {
                    this.$router.push({ name: 'Customers' });
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Customer has been saved',
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            } catch (error) {
                console.error('Error saving customer:', error);
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Error saving customer',
                    text: error.response.data.message || 'An error occurred',
                    showConfirmButton: true
                });
            }
        }
    }
};
</script>
