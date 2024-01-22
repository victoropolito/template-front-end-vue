<template>
  <a-layout>
    <HomeHeader />
    <Board />
    <a-layout-content style="padding: 24px">
      <div>
        <cards-list />
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import HomeHeader from "./HomeHeader.vue"
import Board from "./Board.vue"
import CardsList from '@/components/CardsList.vue'

export default {
  components: {
    HomeHeader,
    Board,
    CardsList
  },
}
</script>
