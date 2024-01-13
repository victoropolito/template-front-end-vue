<template>
  <div>
    <a-page-header title="Projeto Chameleon" sub-title="Novo Card"/>
    <a-form>
      <a-form-item label="Título">
        <a-input v-model="newCard.title" />
      </a-form-item>
      <a-form-item label="Descrição">
        <a-textarea v-model="newCard.description"/>
      </a-form-item>
      <a-form-item label="Data de Entrega">
        <a-date-picker placeholder="Data de entrega" v-model="newCard.dueDate" />
      </a-form-item>
      <a-form-item label="Tipo">
        <a-select v-model="newCard.type">
          <a-select-option value="bug">🐞 Bug</a-select-option>
          <a-select-option value="feature">✅ Melhoria</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="Responsável">
        <a-input v-model="newCard.assignee" />
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
//import { createCard } from '@/services/postCard.js'
import { fetchAllCards } from '@/services/getCards.js'
import api from "@/services/api.js"

export default {
  data() {
    return {
      cards: [],
      newCard: {
        title: '',
        description: '',
      },
    }
  },
  mounted() {
    this.fetchAllCards();
  },
  methods: {
    async fetchAllCards() {
      try {
        this.cards = await fetchAllCards();
      } catch (error) {
        console.error('Erro ao buscar todos os cards:', error);
      }
    },
    async createCard(cardData) {
      const user_id = "87898254-f9a5-4dd2-88c9-3d58c50a029b"
      try {
        const response = await api.post(`/card/${user_id}`, cardData)
        return response.data;
      } catch (error) {
        console.error('Erro ao criar um novo card:', error)
        throw error
      }
    }
  },
};
</script>
