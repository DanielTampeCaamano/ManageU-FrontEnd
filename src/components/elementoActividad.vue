<template>
  <section>
    <h4>{{item.titulo}}</h4>
    <span>{{item.fechaLimite}}</span>
    {{this.item.estado}}
    <button @click="cumplida()">lista</button>
    <button @click="descartada()">descartada</button>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'elementoActividad',
  props: {
    actividad:Object 
  },
  data(){
    return{
      item:{}
    }
  },
  methods:{
        async cumplida(){
          this.item.estado=2
          axios.post('http://localhost:8080/api/actividad/post',JSON.parse(JSON.stringify(this.item)))  
        },
        async descartada(){
          this.item.estado=3
          axios.post('http://localhost:8080/api/actividad/post',JSON.parse(JSON.stringify(this.item)))
        }
  },
  mounted(){
    this.item=this.actividad
  }
}
</script>

<style >

</style>