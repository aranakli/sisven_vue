<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold"> New</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Paymode
            </div>
            <div class="card-body">
                <form @submit.prevent="savePaymode">
                    <div class="row mb-3">
                        <label for="id" class="form-label">Id : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /> </div>
                            <input type="text" class="form-control" id="id" placeholder="Paymode Id"
                                disabled v-model='pay_modes.id'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="name" class="form-label">Name : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /> </div>
                            <input type="text" class="form-control" id="name" placeholder="Paymode name"
                                v-model='pay_modes.name'>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="observation" class="form-label">Observation : </label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /> </div>
                            <input type="text" class="form-control" id="observation" placeholder="Paymode observation"
                                v-model='pay_modes.observation'>
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Save</button>
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
    name: 'NewPaymode',
    data() {
        return {
            pay_modes: {
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
        async savePaymode() {
            this.pay_modes.id = this.id
            const res = await axios.post(`http://127.0.0.1:8000/api/pay_modes/`, this.pay_modes)
            console.log(res);
            if (res.status == 200) {
                this.$router.push({name: 'Paymode'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Paymode has been saved',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted() {
        // axios.get(`http://127.0.0.1:8000/api/pay_modes/`)
        //     .then(response => {
        //         this.pay_modes = response.data.pay_modes
        //     })
    }
}
</script>