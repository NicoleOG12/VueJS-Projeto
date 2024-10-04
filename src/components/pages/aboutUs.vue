<template>

<div @submit.prevent='fillList'>
        <div @load="fillList">dvgdssdfv </div>
</div>

<div class="tableee">
    <div v-for="(integrante, index) in integranteList" :key="index">
        <p>ID:{{index + 1}}</p>
        <p>Nome: {{integrante.nome}}</p>
        <p>Idade: {{integrante.idade}}</p>
        <p>Frase: {{integrante.frase}}</p>
        <img src={{integrante.image}}> 
    <hr>
</div>
</div>
</template>

<script>


export default{
    data(){
        return {
            integranteList:[],
            nome:'',
            idade:'',
            frase:'',
            image:''
        }
    },
    methods: {
        fillList(){
            this.integranteList.push(
            integranteList[0].nome='Clara'

        )
        }}}
</script>



<style>
    .tablee {
        display: grid;
        grid-template-columns:200px, 200px, 200px;
    }
</style>