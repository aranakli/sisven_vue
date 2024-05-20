<template>
    <div class="container">
    <h1 class="text-start">List of Paymodes |
        <button @click="NewPaymode()"
        class="btn btn-success mx-2">
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
    <tr v-for="(paymode, index) in pay_mode" :key="index">
        <th>{{ paymode.id }}</th>
        <td>{{ paymode.name }}</td>
        <td>{{ paymode.observation }}</td>
        <td>
            <button @click="deletePaymode(paymode.id)"
            class="btn btn-danger mx-2">
            <font-awesome-icon icon="trash" />
            </button>
            <button @click="editPaymode(paymode.id)"
            class="btn btn-warning mx-2">
            <font-awesome-icon icon="pencil" />
            </button>
        </td>
    </tr>
    </tbody>
    </table>
    </div>
</template>
<script>
    import axios from "axios";
    export default{
        name:'Paymode',
        data() {
            return {
                pay_mode:[]
            }
        },
        methods:{
            deletePaymode(id){
                Swal.fire({
                    title: `Do you want to delete the Paymode with id ${id}`,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                }).then((result)=>{
                    /* Read more about isConfirmed, isDenied below */
                    if(result.isConfirmed){
                        //Swal.fire('Saved!', '', 'success')
                        axios.delete(`http://127.0.0.1:8000/api/paymode/${id}`)
                        .then(response=>{
                            if(response.data.success){
                                Swal.fire('Deleted!!', '', 'success')
                                this.paymode = response.data.paymode
                            }
                        })
                    }
                })
            },
            EditPaymode(id){
                this.$router.push({name: 'EditPaymode', params: {id: `${id}`}} )
            },
            NewPaymode(){
                this.$router.push({name: 'NewPaymode'})
            }
        },
        mounted() {
            axios
                .get('http://127.0.0.1:8000/api/paymode')
                .then(response=>(this.pay_mode=response.data.pay_mode))
        },
    }
</script>