<template>
  <v-app>
    <v-main>
      <main-board />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainBoard from './components/MainBoard/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    MainBoard
  }
})
</script>
