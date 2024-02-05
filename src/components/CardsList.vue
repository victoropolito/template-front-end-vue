<template>
  <div style="padding: 20px">
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="Não Iniciado">
          <template #extra>
            {{ cards.length }}
          </template>
          <a-card v-for="card in cards" :key="card.id" :bordered="false" size="small">
            <a-card v-if="card.status === 'BACKLOG'" hoverable >
              <template #actions>
                <EditModal v-bind:card="card"/>
                <DeleteModal v-bind:card="card"/>
              </template>
              <a-card-meta >
                <template #title>
                  {{ card.title }}
                </template>
                <template #description>
                  {{ card.description }}
                </template>
                <template #avatar>
                  <div class="avatar">
                    <a-avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                  </div>
                </template>
              </a-card-meta>
            </a-card>
          </a-card>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Em Progresso">
          <template #extra>
            {{ cards.length }}
          </template>
          <a-card v-for="card in cards" :key="card.id" :bordered="false" size="small">
            <a-card v-if="card.status === 'IN PROGRESS'" hoverable>
              <template #actions>
                <EditModal v-bind:card="card" />
                <DeleteModal v-bind:card="card"/>
              </template>
              <a-card-meta >
                <template #title>
                  {{ card.title }}
                </template>
                <template #description>
                  {{ card.description }}
                </template>
                <template #avatar>
                  <div class="avatar">
                    <a-avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                  </div>
                </template>
              </a-card-meta>
            </a-card>
          </a-card>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Concluído">
          <template #extra>
            {{ cards.length }}
          </template>
          <a-card v-for="card in cards" :key="card.id" :bordered="false" size="small">
            <a-card v-if="card.status === 'CONCLUDED'" hoverable>
              <template #actions>
                <EditModal v-bind:card="card" />
                <DeleteModal v-bind:card="card"/>
              </template>
              <a-card-meta >
                <template #title>
                  {{ card.title }}
                </template>
                <template #description>
                  {{ card.description }}
                </template>
                <template #avatar>
                  <div class="avatar">
                    <a-avatar src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                    <a-avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                  </div>
                </template>
              </a-card-meta>
            </a-card>
          </a-card>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import api from '@/services/api.js'
import EditModal from '@/components/Modals/EditModal.vue'
import DeleteModal from '@/components/Modals/DeleteModal.vue'

export default {
  components: {
    EditModal,
    DeleteModal
  },
  mounted() {
    this.fetchCards()
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    },
  },
  methods: {
    async fetchCards() {
      const user_id = "87898254-f9a5-4dd2-88c9-3d58c50a029b"
      try {
        const response = await api.get(`/card/${user_id}`)
        this.$store.commit('setCards', response.data);
        console.log(this.cards);
      } catch (error) {
        console.error('Erro ao buscar cards:', error)
      }
    },
    filteredCards(status) {
      return this.cards.filter(card => card.status === status);
    },
  },
};
</script>

<style scoped>
.avatar {
  display: inline-block;
  margin: 0 10px;
}
</style>

<style scoped>
.avatar {
  display: inline-block;
  margin: 0 10px;
}
</style>
