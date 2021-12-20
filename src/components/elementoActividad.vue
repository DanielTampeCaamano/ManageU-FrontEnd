<template>
  <section>
    <h4>{{actividad.titulo}}</h4>
    <span>{{actividad.fechaLimite}}</span>
    <button @click="cumplida()">lista</button>
    <button @click="descartada()">descartada</button>
  </section>
</template>

<script>
export default {
  name: 'elementoActividad',
  props: {
    actividad:Object //{id:Long, titulo:String, relevancia:int(1_100), fechaLimite:String}
  },
  methods:{
        cumplida(){
            //Agregar combios de estados a la actividad que se presenta el actividad.id
            alert("cumpliste la actividad")
        },
        descartada(){
            alert("No cumpliste la actividad")
        }
  }
}
</script>

<style scoped>

</style>