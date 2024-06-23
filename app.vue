<template>
  <div class="container bg-gray-400 ">
    <h1 class="text-3xl font-bold">Blogs</h1>

  </div>
</template>
<script>
const {data} = useFetch('https://jsonplaceholder.typicode.com/todos')
console.log('data=>',data.value)
</script>
