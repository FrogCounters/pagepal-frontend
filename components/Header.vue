<template>
  <div
    class="relative w-full flex flex-row justify-between p-6 items-center shadow"
  >
    <div id="header-logo">
      <NuxtLink to="/">
        <img src="~/assets/img/Logo.png" width="120" alt="PagePal Logo">
      </NuxtLink>
    </div>
    <NavBar />
  </div> 
</template>

<style scoped>
* {
  background-color: white;
}
</style>