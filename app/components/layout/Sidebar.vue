<script lang="ts" setup>
import Menu from './Menu.vue';
</script>

<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" alt="logo" width="100px" class="mx-auto" />
    </NuxtLink>

    <Menu />

    <UiButton class="absolute bottom-4 w-100 m-auto transition-colors hover:text-primary"
      >Logout
      <Icon name="line-md:logout" size="20" />
    </UiButton>
  </aside>
</template>
