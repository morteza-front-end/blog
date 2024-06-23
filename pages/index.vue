<script setup lang="ts">
const list = reactive([])
const {data} = await useFetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=2')
list.push(...data.value)
</script>
<template>
<h1 class="text-3xl font-bold">Blogs</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3 py-3">
      <BlogsCard  v-for="post in list" :key="post.id" :post="post" />
    </div>
</template>