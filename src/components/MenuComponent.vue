<template>
  <div>
    <ul class="menu-nav">
        <li class="menu-item"><router-link to="/" class="menu-link">Home</router-link></li>
        <li class="menu-item"><router-link to="/collatz" class="menu-link">Collatz</router-link></li>
    </ul>
  </div>
</template>
<script>
    export default {
        name: "MenuComponent"
    }
</script>

<style>
    img {
        width:"150px";
        height: 150px;
    }

    ul.menu-nav {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
        background-color: #333;
        overflow: hidden;
    }

    li.menu-item {
        color: white;
        margin: 0;
    }

    li.menu-item a.menu-link {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 20px;
        text-decoration: none;
        transition: background-color 0.3s;
    }

    li.menu-item a.menu-link:hover {
        background-color: #555;
    }

    li.menu-item a.menu-link.router-link-active {
        background-color: #04AA6D;
    }
</style>