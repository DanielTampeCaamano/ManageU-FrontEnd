<template>
  <section>
    <h4> {{habito.titulo}} </h4>
    <span> {{habito.proximoCumplimiento}} </span>
    <button @click="cumplida()">cumplida</button>
  </section>
</template>

<script>
export default {
  name: 'elementoHabito',
  props: {
    habito:Object //{titulo:String, proximoCumplimiento:String}
  },
  methods:{
      cumplida(){
          //+1 cumplido
          alert("Cumpliste el habito por este periodo")
      }
  }
}
</script>

<style scoped>

</style>