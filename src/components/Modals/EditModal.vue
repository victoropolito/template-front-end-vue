<template>
  <a-space wrap>
    <a-button type="link" @click="showModal">
      <EllipsisOutlined />
    </a-button>
    <a-modal
      v-model:open="open"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      title="Editar Card"
    >
      <EditIssueForm @change="changeForm" v-bind:card="card"/>
    </a-modal>
  </a-space>
</template>

<script>
// import api from "@/services/api.js";
import EditIssueForm from "@/components/Project/Issue/EditIssueForm.vue";
import { EllipsisOutlined } from "@ant-design/icons-vue";

export default {
  props: {
    card: {
      type: Object,
    }
  },
  components: {
    EllipsisOutlined,
    EditIssueForm,
  },
  data() {
    return {
      open: false,
      confirmLoading: false,
      form: {},
    }
  },
  methods: {
    async editCard() {
      const id = this.card.id;

      try {
        await this.$store.dispatch('editCard', { cardId: id, updatedCardData: this.form });
        return true;
      } catch (error) {
        console.error('Error editing card:', error);
        throw error;
      }
    },
    showModal() {
      this.open = true;
    },
    async handleOk() {
      this.confirmLoading = true;

      try {
        await this.editCard();
        this.confirmLoading = false;
        this.open = false;
        this.$emit('card-updated');
      } catch (error) {
        console.error('Error editing/deleting card:', error);
      }
    },
    changeForm(formObject) {
      if (formObject.type === "change") {
        return;
      }
      this.form = formObject;
      console.log(this.form);
    },
    teste() {
      console.log(this.card)
    }
  },
};
</script>
