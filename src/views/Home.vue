<template>
  <div id="cuerpo">
    <section id="perfil">
      <retratoPerfil></retratoPerfil>
      <logros></logros>
    </section>
    <section id="lista_habitos">
      <listaHabito></listaHabito>
    </section>
    <section id="lista_habitos">
      <listaActividad></listaActividad>
    </section>
  </div>
</template>

<script>
//Imports de componentes
import retratoPerfil from '@/components/retratoPerfil.vue'
import listaActividad from '@/components/listaActividad.vue'
import listaHabito from '@/components/listaHabito.vue'
import logros from '@/components/logros.vue'
//Fin imports de componentes
export default {
  name: 'Home',
  components: {
    retratoPerfil,
    listaActividad,
    listaHabito,
    logros
  }
}
</script>


<style scoped>
#cuerpo{
  padding: 1%;
  background: whitesmoke;
  width: 98%;
}
</style>
