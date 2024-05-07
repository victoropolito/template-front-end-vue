<template>
  <a-layout>
    <HomeHeader />
    <Board />
    <a-layout-content class="card-list-board">
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
    CardsList,
  },
  methods: {
    fetchCards() {
      this.$refs.cardsList.fetchCards();
    },
  },
}
</script>

<style>
.card-list-board {
  padding: 24px 40px; 
  background-color: #F6F7F9;
}
</style>