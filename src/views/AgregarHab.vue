<template>
  <div>
    <h3>Nuevo Habito</h3>
    <button @click="salir()">Cancelar</button>
    <form>
        <h5>Titulo</h5>
        <input type="text" v-model="habito.titulo">
        <h5>Periodicidad</h5>
        <span>minutos/horas/dias/meses/años</span>
        <input id="minutos" type="number" max="60" min="00" v-model="habito.periodicidad[0]">
        <input id="horas" type="number" max="24" min="00" v-model="habito.periodicidad[1]">
        <input id="dias" type="number" max="30" min="00" v-model="habito.periodicidad[2]">
        <input id="meses" type="number" max="12" min="00" v-model="habito.periodicidad[3]">
        <input id="años" type="number" min="00" v-model="habito.periodicidad[4]">
        
    </form>
    <button @click="guardarHab()">Guardar</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AgregarHab',
  data(){
      return{
          habito:{
              titulo:"",
              periodicidad:[0,0,0,0,0],
          },
          periodicidad:""
      }
  },
    methods:{
        async guardarHab(){
            this.habito.periodicidad.forEach(el => {this.periodicidad = this.periodicidad+this.fill(el,2)+"/"});
            this.periodicidad = this.periodicidad.substring(0, this.periodicidad.length - 1)
            let ahora = new Date(Date.now());
            ahora = ahora.getFullYear()+"/"+this.fill(ahora.getMonth(),2)+"/"+this.fill(ahora.getUTCDay(),2)

            const habitos = await axios.get('http://localhost:8080/api/habito/get')
            let aux = habitos.data.length + 1
            
            let objeto={
                id:aux,
                titulo: this.habito.titulo,
                periodicidad: this.periodicidad,
                ultimoCumplimiento: ahora,
                proximoCumplimiento: ahora,
                cumplido: 0,
                noCumplido: 0,
            }
            axios.post('http://localhost:8080/api/habito/post',objeto)
            this.salir();
        },
        fill(number, len){
            return "0".repeat(len - number.toString().length) + number.toString();
        },
        salir(){
            this.$router.push('/home');
        }
    },

}
</script>