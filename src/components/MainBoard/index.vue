<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { gamesList } from '@/components/MainBoard/helpers'
import { GameType } from '@/models/Game/helpers'
import GameWrapper from '@/components/GameWrapper/index.vue'

const games = reactive(Array.from(gamesList.values()))
const activeGame = ref<GameType>(GameType.coin)
const activeTab = computed(() => {
  return gamesList.get(activeGame.value)
})
</script>
<template>
  <v-container>
    <v-card>
      <v-tabs
        v-model="activeGame"
        bg-color="primary"
      >
        <v-tab
          v-for="(game, index) in games"
          :key="index"
          :value="game.value"
        >
          {{ game.title }}
        </v-tab>
      </v-tabs>

      <v-card-text>
        <game-wrapper :game="activeTab.game" />
      </v-card-text>
    </v-card>
  </v-container>
</template>
