import api from './api'

const user_id = "87898254-f9a5-4dd2-88c9-3d58c50a029b"

export async function fetchAllCards() {
  try {
    const response = await api.get(`/card/${user_id}`)
    this.cards = response.data;
  } catch (error) {
    console.error('Erro ao buscar cards:', error)
  }
  return this.cards
}

export async function fetchCardsById() {
/* TO-DO */
}

export async function fetchCardsByUserId() {
/* TO-DO */
}

export async function fetchCardsByTitle() {
/* TO-DO */
}
