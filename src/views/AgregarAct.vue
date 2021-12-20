<template>
  <div>
    <h3>Nueva Actividad</h3>
    <button @click="salir()">Cancelar</button>
    <form>
        <h5>Titulo</h5>
        <input type="text" v-model="actividad.titulo">
        <h5>Importancia</h5>
        <input type="number" max="3" min="1" v-model="actividad.importancia">
        <h5>Carga de Trabajo</h5>
        <input type="number" max="3" min="1" v-model="actividad.cargaTrabajo">
        <h5>Fecha Limite</h5>
        <input type="date" v-model="actividad.fechaLimite">
        <h5>Descripción</h5>
        <textarea  cols="100" rows="5" v-model="actividad.descripcion"></textarea>
    </form>
    <button @click="guardarAct()">Guardar</button>
    {{actividad.fechaLimite}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AgregarAct',
  data(){
      return{
          actividad:{
            titulo:"",
            importancia:1,
            cargaTrabajo:1,
            fechaLimite:"",
            descripcion:""
          },
      }
  },
    methods:{
        async guardarAct(){
            const habitos = await axios.get('http://localhost:8080/api/actividad/get')
            let aux = habitos.data.length + 1
            
            let objeto={
              id:aux,
              titulo:this.actividad.titulo,
              importancia:this.actividad.importancia,
              cargaTrabajo:this.actividad.cargaTrabajo,
              fechaLimite:this.actividad.fechaLimite.replaceAll("-","/"),
              descripcion:this.actividad.descripcion,
              estado:1
                
            }
            axios.post('http://localhost:8080/api/actividad/post',objeto)
            this.salir()
        },
        salir(){
            this.$router.push("/home");
        }
    }
}
</script>

<style scoped>
textarea{
  resize: none;
}
div{
    color: #e4e4e4;
    background: #f07fd1;
}
</style>