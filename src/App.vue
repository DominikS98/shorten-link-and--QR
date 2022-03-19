<template>
  <div id="box">
    <nav class="menu">
      <router-link to="/form" replace>Skrócenie linka</router-link>
      <router-link to="/" replace>Główna</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  justify-content: center;
}
#box {
  padding: 0;
  margin: 0;
  height: 100vh;
}
.menu {
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  padding: 30px;
  box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 0.2);
}

.menu a {
  font-weight: bold;
  color: #2c3e50;
}

.menu a.router-link-exact-active {
  color: #42b983;
}
</style>
