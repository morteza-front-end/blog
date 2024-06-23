<template>
  <div class="container  ">
    <h1 class="text-3xl font-bold">Blogs</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3 py-3">
      <div class="border border-gray-400 rounded-lg px-4 py-2" v-for="post in list" :key="post?.id">
        <h1 class="text-xl font-medium">
          {{ post?.title }}
        </h1>
        <p class="text-base mt-3">
          {{ post?.body }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const list = reactive([])
const {data} = await useFetch('https://jsonplaceholder.typicode.com/posts')
list.push(...data.value)
</script>
