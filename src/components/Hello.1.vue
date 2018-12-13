<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>

        <div>
          <h2>Bem-vindo ao Admin da Loja de Carros</h2>
        </div>

        <div>
          <img src="https://lh3.googleusercontent.com/Ao_lbcRvE8h28GprgXNgfVgAZEibsIsTVCEriw0rtWYpOiT-VM1m6pwbKfdAOQ3eoUo3cVEr4nAgYia-n5cCYPb1xOJmZk2WP6DnDNotUUAirDEnFKT1U9kI4pAXct7O72ogTIRDJaqkqVZUEH9aMl53GHsbydSb1xFndqadW8faOs6Lwvi2c6fl6Ml68doXsxRjuD5Tc88_7tlHHJgBjaQaGmCcUxTGULfZyGTo3JNrGYNQDW-zdJOJjvX8ImHOJxULCqcMTW8siEAcDXU-fPAMoAMynFT0OJgbtu58ktQ-bbwFCMjQAyiSB5v4-OADa3eTzg6p1PKNrQaxQzaw6xOXTRbCt41ALdfAsrR5ZLeQXXdYx1igJUlEZe6yAfPRHn4fBbIiQyXTkN7lzJYiOTtWjauK9luo4kCAIZ3yBAYM6AzJ1UdSSD-C3Topd3FVcVLhFf0lmNgXUWiIy93cXOkUzFBj1ueyh8on2mctcIwPocKGFgj_EcVN8JKzYOEaB6JbOyqQXpLk7MKA0GJwMUcwFnVIk1ov0wKdFO-unwZJZ-UX-fphrP4Nd3F3w9bzTFFQRy6VfDoLEcco8EJ1lGuZIwdF-IJBBregGnNIcBcWxU8_Cqh_ij4UL9orMib8=w371-h278-no" alt="eu ae" class="mb-5">
        </div>

        <div class="teste">
          <input type="file" @change="onFileSelected" >
     
          
        </div>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
export default {
 
  methods:{
    onFileSelected(event){
      console.log(event)


    }

  }
}
</script>

