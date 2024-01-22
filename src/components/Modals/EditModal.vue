<template>
  <div>
    <EllipsisOutlined @click="showModal" />
    <a-modal
    v-model:open="open"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
    >
      <a-button type="primary" @click="teste">
        teste
      </a-button>
      <EditIssueForm @change="changeForm" v-bind:card="card"/>
    </a-modal>
  </div>
</template>

<script>
import api from "@/services/api.js";
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
      const id = this.card.id

      try {
        const response = await api.patch(`/card/${id}`, this.form);
        return response.data;
      } catch (error) {
        console.error("Erro ao editar este card:", error);
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
      } catch (error) {
        console.error("Erro ao editar card!", error);
      }

      console.log("Salvou!", this.form);
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
