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
        actividades:[
            {
                id:1, 
                titulo:"Titulo de Actividad de prueba 1", 
                relevancia:35, 
                fechaLimite:"21:35 19/12/2021"  
            },
            {
                id:1, 
                titulo:"Titulo de Actividad de prueba 2", 
                relevancia:35, 
                fechaLimite:"21:35 19/12/2021"  
            },
        ]
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