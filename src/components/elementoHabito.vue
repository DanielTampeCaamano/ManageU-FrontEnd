<template>
  <section>
    <h4> {{item.titulo}} </h4>
    <span> {{item.proximoCumplimiento}} </span>
    <button @click="cumplida()">cumplida</button>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'elementoHabito',
  props: {
    habito:Object
  },
  data(){
    return {
      item:{}
    }
  },
  methods:{
      async cumplida(){
          this.item.cumplido++
          axios.post('http://localhost:8080/api/habito/post',JSON.parse(JSON.stringify(this.item)))
      }
  }, mounted(){
    this.item = this.habito
  }
}
</script>

<style scoped>

</style>