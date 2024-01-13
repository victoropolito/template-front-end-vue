<template>
  <div style="background-color: #ececec; padding: 20px">
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="Não Iniciado">
          <a-card hoverable :bordered="false" @click="teste" v-for="card in cards" :key="card.id" >
            <a-card-meta v-if="card.status === 'BACKLOG'" >
              <template #title>
                {{ card.title }}
              </template>
              <template #description>
                {{ card.description }}
              </template>
              <template #avatar>
                <div class="avatar">
                  <a-avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                  <a-avatar src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </div>
              </template>
            </a-card-meta>
          </a-card>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Em Progresso">
          <a-card hoverable :bordered="false" @click="teste" v-for="card in cards" :key="card.id" >
            <a-card-meta v-if="card.status === 'IN PROGRESS'" >
              <template #title>
                {{ card.title }}
              </template>
              <template #description>
                {{ card.description }}
              </template>
              <template #avatar>
                <div class="avatar">
                  <a-avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                  <a-avatar src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </div>
              </template>
            </a-card-meta>
          </a-card>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Concluído">
          <a-card hoverable :bordered="false" @click="teste" v-for="card in cards" :key="card.id" >
            <a-card-meta v-if="card.status === 'CONCLUDED'" >
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
      </a-col>
    </a-row>
  </div>
</template>

<script>
import api from "@/services/api.js"

export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    description: {
      type: String,
      required: true,
      default: ''
    },
    user_id: {
      type: String,
      required: true,
      default: ''
    }
  },
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
      const user_id = "87898254-f9a5-4dd2-88c9-3d58c50a029b"
      try {
        const response = await api.get(`/card/${user_id}`);
        this.cards = response.data;
        console.log(this.cards)
      } catch (error) {
        console.error('Erro ao buscar cards:', error);
      }

      return this.cards
    },
    teste() {
      console.log("clicou")
    }
  },
};
</script>

<style scoped>
.avatar {
  display: inline-block;
  margin: 0 10px;
}
</style>
