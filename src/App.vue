<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/Actividades">Actividades</router-link>
    <router-link to="/Habitos">Habitos</router-link>
    <router-link to="/Perfil">Perfil</router-link>
  </nav>
  <router-view/>
</template>

<style>
body{
  background: rgb(221, 195, 224);
}
#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
  
nav {
  width: 90%;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 1%;
  margin: 0px ;
  border-bottom: 1px solid black;
  text-align: left ;
  font-weight: bold;
}
  
nav a {
  background: whitesmoke;
    font-weight: bold;
    color: #2c3e50;
    padding-left: 1%;
    padding-right: 1%;
    padding-top: 0.5%;
    border: 1px solid black;
}
  
nav a.router-link-exact-active {
    color: whitesmoke;
    background: gray;
}
</style>
