import api from './api'

export async function editCard(cardData) {
  try {
    const response = await api.patch(`/card/${card.id}`, cardData)
    return response.data;
  } catch (error) {
    console.error('Erro ao editar o card:', error)
    throw error
  }
}