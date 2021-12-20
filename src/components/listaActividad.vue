<template>
  <div>
    <ul>
        <li v-for="item in actividades" :key="item.id"><elementoActividad :actividad="item"></elementoActividad></li>
    </ul>
    <button @click="agregarActividad()">Agregar</button>
  </div>
</template>

<script>
//Imports de componentes
import elementoActividad from '../components/elementoActividad.vue'
//Fin imports de componentes
export default {
  name: 'listaActividad',
  components:{
    elementoActividad
  },
  data(){
      return{
        actividades:[]
      }
  },
  methods: {
    async obtenerActividad(){
        //Conexion con backend
    },
    agregarActividad(){
        //formulario para agregar habito
        alert("agregare una actividad")
    }
  },
    mounted(){
        this.obtenerActividad()
    }
}
</script>

<style scoped>

</style>