<template>
  <div class="container text-start">
      <h1 class="text-primary fw-bold"> Edit Customer</h1>
      <div class="card">
          <div class="card-header fw-bold">
              Customer
          </div>
          <div class="card-body">
              <form @submit.prevent="updateCustomer">
                <div class="row mb-3">
                  <label for="id" class="form-label">Id : </label>
                  <div class="input-group">
                      <div class="input-group-text"> <font-awesome-icon icon="tag" /> </div>
                      <input type="text" class="form-control" id="id" 
                          disabled v-model='customer.id'>
                  </div>
              </div>
          <div class="row mb-3">
              <label for="document_number" class="form-label">Document Number</label>
              <div class="input-group">
                  <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                  <input type="number" required class="form-control" id="document_number" placeholder="Document number" 
                  v-model="customer.document_number">
              </div>
          </div>
          <div class="row mb-3">
              <label for="first_name" class="form-label">First Name</label>
              <div class="input-group">
                  <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                  <input type="text" required class="form-control" id="first_name" placeholder="First name" 
                  v-model="customer.first_name">
              </div>
          </div>
          <div class="row mb-3">
              <label for="last_name" class="form-label">Last Name</label>
              <div class="input-group">
                  <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                  <input type="text" required class="form-control" id="last_name" placeholder="Last name" 
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
                  <input type="date" required class="form-control" id="birthdate" placeholder="Birthdate" 
                  v-model="customer.birthdate">
              </div>
          </div>
          <div class="row mb-3">
              <label for="phone_number" class="form-label">Phone number</label>
              <div class="input-group">
                  <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                  <input type="text" required class="form-control" id="phone_number" placeholder="Phone number" 
                  v-model="customer.phone_number">
              </div>
          </div>
          <div class="row mb-3">
              <label for="email" class="form-label">Email</label>
              <div class="input-group">
                  <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                  <input type="email" required class="form-control" id="email" placeholder="Email" 
                  v-model="customer.email">
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
  name: 'NewCustomer',
  data() {
      return {
          customer: {
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
      async updateCustomer() {
          const res = await axios.put(`http://127.0.0.1:8000/api/customers/${this.customer.id}`, this.customers)
          if (res.status == 200) {
              this.$router.push({ name: 'Customer' })
              Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'The customer has been updated',
                  showConfirmButton: false,
                  timer: 2000
              })
          }
      }
  },
  
  mounted() {
      this.customer.id = this.$route.params.id;
      axios.get(`http://127.0.0.1:8000/api/customers/${this.customer.id}`)
          .then(response => {
              this.customer = response.data.customer;
          })
  }
}

</script>