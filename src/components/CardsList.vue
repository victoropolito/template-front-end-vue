<!-- <template>
  <div style="padding: 20px">
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="Não Iniciado">
          <template #extra>
            {{ filteredCards('BACKLOG').length }}
          </template>
          <draggable
            :list="filteredCards('BACKLOG')"
            :group="{ name: 'cards', pull: 'clone', put: false }"
            @change="handleDragChange('BACKLOG')"
          >
            <template #item="{ element }">
              <a-card :bordered="false" size="small" hoverable>
                <template #actions>
                  <EditModal v-bind:card="card"/>
                  <DeleteModal v-bind:card="card"/>
                </template>
                <a-card-meta>
                  <template #title>
                    {{ element.title }}
                  </template>
                  <template #description>
                    {{ element.description }}
                  </template>
                  <template #avatar>
                    <div class="avatar">
                      <a-avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                    </div>
                  </template>
                </a-card-meta>
              </a-card>
            </template>
          </draggable>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Em Progresso">
          <template #extra>
            {{ filteredCards('IN PROGRESS').length }}
          </template>
          <draggable
            :list="filteredCards('IN PROGRESS')"
            :group="{ name: 'cards', pull: 'clone', put: false }"
            @change="handleDragChange('IN PROGRESS')"
          >
            <template #item="{ element }">
              <a-card :bordered="false" size="small" hoverable>
                <a-card-meta>
                  <template #title>
                    {{ element.title }}
                  </template>
                  <template #description>
                    {{ element.description }}
                  </template>
                  <template #avatar>
                    <div class="avatar">
                      <a-avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                    </div>
                  </template>
                </a-card-meta>
              </a-card>
            </template>
          </draggable>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Concluído">
          <template #extra>
            {{ filteredCards('CONCLUDED').length }}
          </template>
          <draggable
            :list="filteredCards('CONCLUDED')"
            :group="{ name: 'cards', pull: 'clone', put: false }"
            @change="handleDragChange('CONCLUDED')"
          >
            <template #item="{ element }">
              <a-card :bordered="false" size="small" hoverable>
                <a-card-meta>
                  <template #title>
                  {{ element.title }}
                </template>
                <template #description>
                  {{ element.description }}
                </template>
                <template #avatar>
                  <div class="avatar">
                    <a-avatar src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                    <a-avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                  </div>
                </template>
                </a-card-meta>
              </a-card>
            </template>
          </draggable>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import api from '@/services/api.js'
import EditModal from '@/components/Modals/EditModal.vue'
import DeleteModal from '@/components/Modals/DeleteModal.vue'
import draggable from 'vuedraggable'

export default {
  components: {
    EditModal,
    DeleteModal,
    draggable
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
    handleDragChange(status) {
      const updatedCards = this.cards
        .filter((card) => card.status === status)
        .map((card, index) => ({ ...card, order: index + 1 }));
      this.$store.dispatch('updateCardsOrder', updatedCards);
    },
  }
};
</script> -->


<template>
  <div style="padding: 20px">
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card class="column" id="notStartedColumn" title="Não Iniciado">
          <template #extra>
            {{ filteredCards('BACKLOG').length }}
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
            {{ filteredCards('CONCLUDED').length }}
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

.column {
  background-color: white; /* Adicionando cor de fundo branco */
  border-radius: 5px; /* Arredondando as bordas */
  padding: 10px; /* Adicionando espaço interno */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adicionando uma leve sombra */
  margin: 10px; /* Adicionando margem entre as colunas */
}

</style>
