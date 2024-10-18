<template>
    <div class="container">
        <div class="row">
            <!--Exibe uma mensagem enquanto aguarda dados da api-->
            <div v-if="loading" class="col-12 text-center">
                <p>Carregando...</p>

            </div>

            <!--Exibe uma mensagem de erro caso a api falhe-->
            <div v-if="error" class="col-12 text-center">  
                <p>Ops, algum erro aconteceu;</p>
            </div>

            <div v-else v-for="characters in characters":key= "characters.id=" class="col-md-4"">
                <div class="card mb-4">
                    <img :src="character.imageUri" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">{{ characters.name }}</h5>

                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import { keyFor } from 'core-js/fn/symbol';

export default {
    data(){
        return{
            characters:[],
            loading:true,
            error: false
        }
    }
}
</script>

<style></style>