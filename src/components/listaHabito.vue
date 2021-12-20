<template>
  <div>
    <ul>
      <li v-for="habito in habitos" :key="habito.id"><elementoHabito :habito="habito"></elementoHabito></li>
    </ul>
    <button @click="agregarHabito()">Agregar</button>
  </div>
</template>

<script>
import axios from 'axios'
//Imports de componentes
import elementoHabito from '../components/elementoHabito.vue'
//Fin imports de componentes
export default {
  name: 'listaHabito',
  components:{
    elementoHabito
  },
  data(){
    return{
      habitos:[]
    }
  },
  methods:{
    async obtenerHabitos(){
        const datos = await axios.get('http://localhost:8080/api/habito/get')
        this.habitos = datos.data
    },
    agregarHabito(){
        this.$router.push('AgregarHab')
    }
  },
  mounted(){
    this.obtenerHabitos();
  }
}
</script>

<style scoped>

</style>