<template>
  <h1>Teste Hover</h1>
  <draggable 
    v-model="meals"
    tag="ul"
    >
    <template #item="{ element: meal }">
      <li>
        {{ meal }}
      </li>
    </template>
  </draggable>
</template>

<script setup>
import { ref } from 'vue'
import draggable from 'vuedraggable'

const meals = ref([
  'Japa',
  'Lanchão',
  'Churrasco'
])
</script>