<template>
  <div style="padding: 20px">
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card class="column" id="notStartedColumn" title="Não Iniciado">
          <template #extra>
            {{ filteredCards('BACKLOG').length }}
          </template>
          <a-card v-for="card in filteredCards('BACKLOG')" :key="card.id" :bordered="false" size="small">
            <a-card hoverable>
              <template #actions>
                <EditModal v-bind:card="card" @card-updated="fetchCards"/>
                <DeleteModal v-bind:card="card" @card-deleted="fetchCards"/>
              </template>
              <a-card-meta>
                <template #title>
                  {{ card.title }}
                </template>
                <template #description>
                  {{ card.description }}
                </template>
                <template #avatar>
                  <div class="avatar">
                    <a-avatar src="https://www.antdv.com/assets/logo.1ef800a8.svg" />
                  </div>
                </template>
              </a-card-meta>
            </a-card>
          </a-card>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card class="column" id="inProgressColumn" title="Em Progresso">
          <template #extra>
            {{ filteredCards('IN PROGRESS').length }}
          </template>
          <a-card v-for="card in filteredCards('IN PROGRESS')" :key="card.id" :bordered="false" size="small">
            <a-card hoverable>
              <template #actions>
                <EditModal v-bind:card="card" @card-updated="fetchCards"/>
                <DeleteModal v-bind:card="card" @card-deleted="fetchCards"/>
              </template>
              <a-card-meta>
                <template #title>
                  {{ card.title }}
                </template>
                <template #description>
                  {{ card.description }}
                </template>
                <template #avatar>
                  <div class="avatar">
                    <a-avatar src="https://www.antdv.com/assets/logo.1ef800a8.svg" />
                  </div>
                </template>
              </a-card-meta>
            </a-card>
          </a-card>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card class="column" id="completedColumn" title="Concluído">
          <template #extra>
            {{ filteredCards('COMPLETED').length }}
          </template>
          <a-card v-for="card in filteredCards('COMPLETED')" :key="card.id" :bordered="false" size="small">
            <a-card hoverable>
              <template #actions>
                <EditModal v-bind:card="card" @card-updated="fetchCards"/>
                <DeleteModal v-bind:card="card" @card-deleted="fetchCards"/>
              </template>
              <a-card-meta>
                <template #title>
                  {{ card.title }}
                </template>
                <template #description>
                  {{ card.description }}
                </template>
                <template #avatar>
                  <div class="avatar">
                    <a-avatar src="https://www.antdv.com/assets/logo.1ef800a8.svg" />
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
      try {
        await this.$store.dispatch('fetchCardsAction', '664270c9472c3c191f2576e1')
      } catch (error) {
        console.log(error)
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

.column {
  background-color: white; 
  border-radius: 5px;
  padding: 10px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  margin: 10px; 
}
</style>
