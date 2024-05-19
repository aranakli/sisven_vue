<template>
    <div class="container">
    <h1>List of Paymodes</h1>
    <table class="table">
    <thead>
    <tr>
        <th scope="col">Code</th>
        <th scope="col">Code</th>
        <th scope="col">Name</th>
        <th scope="col">Observation</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(paymode, index) in pay_mode" :key="index">
    <th scope="row">{{index+1}}</th>
        <td>{{ paymode.id }}</td>
        <td>{{ paymode.name }}</td>
        <td>{{ paymode.observation }}</td>
        
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
        mounted() {
            axios
                .get('http://127.0.0.1:8000/api/paymode')
                .then(response=>(this.pay_mode=response.data.pay_mode))
        },
    }
</script>