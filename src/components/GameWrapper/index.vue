<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { GameOption } from '@/models/Game/helpers'
import Game from '@/models/Game/Game'

interface GameWrapperProps {
  game: Game
}

const props = defineProps<GameWrapperProps>()

const betValue = ref(0)
const generatedValue = ref<GameOption | null>(null)

const availableOptions = computed(() => props.game.optionsList)
const gameName = computed(() => `${props.game.name} show`)
const isEqual = computed(() => {
  return betValue.value === generatedValue.value?.id
})
const resultAlertData = computed(() => {
  if (!generatedValue.value) {
    return {
      type: 'info',
      title: '',
      text: ''
    }
  }

  const title = isEqual.value ? 'You are win!' : 'You are lost...'
  const quote = isEqual.value ? 'Veni, vidi, vici' : 'Nobody believes in you. You’ve lost again, and again, and again. The lights are cut off, but you still are looking at your dream, reviewing it every day and say to yourself, “It’s not over until I win.”'
  const type = isEqual.value ? 'success' : 'error'

  return {
    title,
    text: quote,
    type
  }
})

watch(() => props.game.name, () => {
  generatedValue.value = null
  betValue.value = 0
})

const play = () => {
  generatedValue.value = props.game.randomValue
}
const onChangeBet = () => {
  generatedValue.value = null
}
</script>
<template>
  <v-container>
    <v-row
      v-if="generatedValue"
    >
      <v-col cols="12">
        <v-card
          :title="gameName"
          elevation="0"
          variant="outlined"
        >
          <v-card-text>
            {{ generatedValue.title }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-alert
          v-if="generatedValue"
          v-bind="resultAlertData"
          :icon="false"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-select
          v-model="betValue"
          variant="underlined"
          hide-details
          item-value="id"
          item-title="title"
          label="Your choose"
          :items="availableOptions"
          @update:model-value="onChangeBet"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-btn
          color="primary"
          @click="play"
        >
          Play
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
