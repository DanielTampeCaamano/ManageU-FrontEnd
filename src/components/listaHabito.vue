<template>
  <div>
    <ul>
      <li v-for="habito in habitos" :key="habito.id"><elementoHabito :habito="habito"></elementoHabito></li>
    </ul>
    <button @click="agregarHabito()">Agregar</button>
  </div>
</template>

<script>
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
      habitos:[
        {
          id:1,
          titulo:"Titulo de habito de prueba 1", 
          proximoCumplimiento:"22:07 19/12/2021"
        },
        {
          id:2,
          titulo:"Titulo de habito de prueba 2", 
          proximoCumplimiento:"22:07 19/12/2021"
        }
      ]
    }
  },
  methods:{
    async obtenerHabitos(){
      //Conexion con backend
    },
    agregarHabito(){
        //formulario para agregar habito
        alert("agregare un Habito")
    }
  },
  mounted(){
    this.obtenerHabitos();
  }
}
</script>

<style scoped>

</style>