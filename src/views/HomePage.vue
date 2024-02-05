<template>
  <a-layout>
    <HomeHeader />
    <Board />
    <a-layout-content style="padding: 24px 40px">
      <div>
        <cards-list @card-updated="fetchCards"/>
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
  methods: {
    fetchCards() {
      // Call the fetchCards method in CardsList component
      this.$refs.cardsList.fetchCards();
    },
  },
}
</script>
