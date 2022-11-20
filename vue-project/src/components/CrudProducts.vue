<script setup>


</script>

<template>
  <div class="sectionb">
    <div>  <button class="btn-1 ">   <router-link class="nav-link" to="/add-product">Ajouter Produits</router-link>  </button> </div>
    <div>   <button class="btn-2 "> <router-link class="nav-link" to="/">Voir listes des produits</router-link> </button> </div>

  </div>
 

</template>


<style>
@media (min-width: 1024px) {
 

  .sectionb {
    min-height: 15vh;
    display: block; 
    padding: 10px 24px;
  }

  .sectionb button:hover {

    background-color: #558e3e;
  }

  .btn-1 {
    
   background: green;
   color: white;
   padding: 0.5rem;
   
  }


  .btn-2 {
    margin-top: 1rem;
    background: rgb(0, 9, 128);
    color: white;
    padding: 0.5rem;
    
   }

  
}
</style>