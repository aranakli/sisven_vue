<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> Edit Paymode</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Paymode
            </div>
            <div class="card-body">
                <form @submit.prevent="updatePaymode">
                    <div class="row mb-3">
                        <label for="id" class="form-label">Id: </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /> </div>
                            <input type="text" class="form-control" id="id" placeholder="Paymode Id" disabled
                                v-model="pay_mode.id">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="name" class="form-label">Name : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /> </div>
                            <input type="text" class="form-control" id="name" placeholder="Paymode name"
                                v-model="pay_mode.name">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="observation" class="form-label">Observation : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /> </div>
                            <input type="text" class="form-control" id="observation" placeholder="Paymode observation"
                                v-model="pay_mode.observation">
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
    name: 'EditPaymode',
    data() {
        return {
            pay_mode: {
                id: 0,
                name: '',
                observation: ''
            }
        }
    },
    methods: {
        cancel() {
            this.$router.push({ name: 'Paymode' })
        },
        async updatePaymode() {
            const res = await axios.put(`http://127.0.0.1:8000/api/pay_modes/${this.pay_mode.id}`, this.pay_mode)
            if (res.status == 200) {
                this.$router.push({ name: 'Paymode' })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'The pay_mode has been updated',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    
    mounted() {
        this.pay_mode.id = this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/pay_modes/${this.pay_mode.id}`)
            .then(response => {
                this.pay_mode = response.data.pay_mode;
            })
    }
}

</script>