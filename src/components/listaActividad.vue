<template>
  <div>
    <ul>
        <li v-for="item in actividades" :key="item.id"><elementoActividad :actividad="item"></elementoActividad></li>
    </ul>
    <button @click="agregarActividad()">Agregar</button>
  </div>
</template>

<script>
import axios from 'axios'
//Imports de componentes
import elementoActividad from '@/components/elementoActividad.vue'
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
        const datos = await axios.get('http://localhost:8080/api/actividad/get')
        this.actividades = datos.data
    },
    agregarActividad(){
        this.$router.push('AgregarAct')
    }
  },
    mounted(){
        this.obtenerActividad()
    }
}
</script>

<style scoped>

</style>