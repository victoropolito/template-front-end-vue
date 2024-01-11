<!-- src/components/CardsList.vue -->
<template>
  <div>
    <h2>Lista de Cards</h2>
    <ul>
      <li v-for="card in cards" :key="card.id">
        {{ card.title }} - {{ card.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [],
    };
  },
  mounted() {
    this.fetchCards();
  },
  methods: {
    async fetchCards() {
      try {
        const response = await this.$axios.get('http://localhost:3333/cards');
        this.cards = response.data;
        console.log(this.cards)
      } catch (error) {
        console.error('Erro ao buscar cards:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Adicione estilos aqui, se necessário */
</style>
