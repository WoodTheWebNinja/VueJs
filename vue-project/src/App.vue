<script setup>
import { RouterView } from 'vue-router'
</script>



<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
     
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation"><span
                class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li class="nav-item"><router-link class="nav-link active" aria-current="page" to="/">Home</router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/dashbord">Dashbord</router-link></li>
            </ul>
            
        </div>
    </div>
</nav>
<!-- Header-->
<header class="bg-dark   py-5">
    <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
            <h1 class="display-4 fw-bolder">Demo E-com</h1>
            <p class="lead fw-normal text-white-50 mb-0">hompeage template</p>
        </div>
    </div>
</header>




  <RouterView />
</template>


<script>

import ProductDataService from '@/services/ProductDataService'
export default {
 
  data () {
    return {
      showSideBar: false,
      inventory: [],
      cart: {}
    }
  },

  mounted () {
    ProductDataService.getAll()
      .then(response => {
        this.inventory = response.data
        console.log(response.data)
      })
  }
}

</script>
