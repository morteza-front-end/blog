<script setup lang="ts">
const route = useRoute()
const postId = route.params.slug

const config = useRuntimeConfig()
const {data} =await useFetch(`${config.public.baseUrl}/posts/${postId}`)

</script>
<template>
<div class="container px-4 py-6">
    <h1 class="text-3xl font-bold">
{{data.title }}
    </h1>
    <p class="text-lg font-normal">
{{ data.body }}
    </p>
</div>
</template>