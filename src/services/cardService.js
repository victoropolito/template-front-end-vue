import api from "@/services/api.js";

export default {
  async createCard(user_id, data) {
    try {
      const response = await api.post(`/card/${user_id}`, data);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar um novo card:", error);
      throw error;
    }
  },

  async editCard(id, data) {
    try {
      const response = await api.patch(`/card/${id}`, data);
      return response.data;
    } catch (error) {
      console.error("Erro ao editar este card:", error);
      throw error;
    }
  },

  async deleteCard(id) {
    try {
      const response = await api.delete(`/card/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao deletar este card:", error);
      throw error;
    }
  },

  async getCards(user_id) {
    try {
      const response = await api.get(`/card/${user_id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar cards:", error);
      throw error;
    }
  },
};
