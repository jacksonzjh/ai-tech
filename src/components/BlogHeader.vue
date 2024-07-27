<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact>博客</router-link>
        <router-link to="/add" exact>写博客</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
</script>
<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}

a {
  color: #fff;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
}

nav {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  background: crimson;
  padding: 30px 0;
  margin-bottom: 40px;

}

.router-link-active {
  background: rgba(255, 255, 255, 0.8);
  color: #444;
}

</style>
