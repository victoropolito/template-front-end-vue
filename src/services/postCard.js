import api from './api'

const user_id = "87898254-f9a5-4dd2-88c9-3d58c50a029b"

export async function createCard(cardData) {
  try {
    const response = await api.post(`/card/${user_id}`, cardData)
    return response.data;
  } catch (error) {
    console.error('Erro ao criar um novo card:', error)
    throw error
  }
}
