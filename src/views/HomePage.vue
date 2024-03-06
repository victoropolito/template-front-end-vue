<template>
  <a-layout>
    <HomeHeader />
    <Board />
    <!-- <Login /> -->
    <!-- <div>
      <a-button type="primary">
        <router-link to="./login">Login</router-link>
      </a-button>
    </div> -->
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
// import Login from '@/views/login/Login.vue'

export default {
  components: {
    HomeHeader,
    Board,
    CardsList,
    // Login
  },
  methods: {
    fetchCards() {
      // Call the fetchCards method in CardsList component
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