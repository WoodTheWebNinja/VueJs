<template>
 
 <section class="py-5">
  <div class="home">
    <h1>Homepage</h1>
  </div>

      <div class="container px-4 px-lg-5 mt-5">
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      <table class="table" >
      <thead>
      <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Type</th>
      </tr>
      </thead>
      <tbody v-for="(product) in inventory" :key="product.id">
      <tr>
      <th scope="row">{{ product.id}}</th>
      <td>Name: {{ product.name}}</td>
      <td> Description: {{ product.description}}</td>
      <td> Price: ${{ product.price.CAD.toFixed(2)}}</td>
      <td>Type : {{ product.type}}</td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
    </section>
    
</template>
<style>
@media (min-width: 1024px) {
  .home {
    min-height: 20vh;
    display: flex;
    align-items: center;
  }
}
</style>
  <script>
console.log("homepage");
  </script>
  