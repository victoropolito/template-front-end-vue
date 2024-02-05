<template>
  <a-space wrap>
    <a-button danger @click="showModal">    
      <DeleteOutlined />
    </a-button>
  </a-space>
  <a-modal
    v-model:open="open"
    :confirm-loading="confirmLoading"
    @ok="handleOk"  
    title="Deletar tarefa"
  >
    <p>Essa ação é irreversível!</p>
  </a-modal>
</template>

<script>
// import api from "@/services/api.js"
import { DeleteOutlined  } from '@ant-design/icons-vue'

export default {
  components: {
    DeleteOutlined 
  },
  props: {
    card: {
      type: Object
    }
  },
  data() {
    return {
      open: false,
      confirmLoading: false,
      form: {},
    }
  },
  methods: {
    async deleteCard() {
      const id = this.card.id;

      try {
        await this.$store.dispatch('deleteCardStore', id);
        return true;
      } catch (error) {
        console.error('Error deleting card:', error);
        throw error;
      }
    },
    showModal() {
      this.open = true;
    },
    async handleOk() {
      this.confirmLoading = true;
      try {
        await this.deleteCard();
        this.confirmLoading = false;
        this.open = false;
        this.$emit('card-updated');
      } catch (error) {
        console.error(error);
      }

      console.log("Excluiu!", this.form);
    },
  }
}
</script>