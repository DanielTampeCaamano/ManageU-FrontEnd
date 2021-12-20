<template>
  <div id="retrato">
    <img src="../assets/Marca_del_cazador.jpg" alt="Imagen de Perfil">
    <span>8/8</span>
    <h1>Nombre de usuario</h1>
  </div>
</template>

<script>
export default {
  name: 'logros'
}
</script>

<style>
#retrato{
   border: 1px solid black;
   width:50%;
   text-align: center ;
}
img{
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}
</style>