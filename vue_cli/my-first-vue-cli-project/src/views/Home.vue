<template>
  <div class="home">
    <HelloNuxt/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloNuxt from '@/components/HelloNuxt.vue'

export default {
  name: 'home',
  components: {
    HelloNuxt
  }
}
</script>
