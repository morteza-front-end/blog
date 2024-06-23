<script setup lang="ts">
interface Props{
    post: {
        title:string
body:string,
id:number
    }
}
 defineProps<Props>()
</script>
<template>
<div class="border border-gray-400 rounded-lg px-4 py-2">
        <h1 class="text-xl font-medium">
          {{ post.title }}
        </h1>
        <p class="text-base mt-3">
          {{ post.body }}
        </p>
      </div>
</template>