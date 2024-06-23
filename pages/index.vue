<script setup lang="ts">
const list = reactive([])
const config = useRuntimeConfig()
const {data} = await useFetch(`${config.public.baseUrl}/posts?_page=1&_limit=20`)
list.push(...data.value)
</script>
<template>
<h1 class="text-3xl font-bold">Blogs</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3 py-3">
      <nuxt-link v-for="post in list" :key="post.id" :to="`/blogs/${post.id}`">
        <BlogsCard   :post="post" />
        </nuxt-link>
      
    </div>
</template>