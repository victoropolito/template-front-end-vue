<template>
  <div>
    <a-button type="primary" @click="showModal">Nova task</a-button>
    <a-modal
      v-model:open="open"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
    >
      <create-issue-form @change="changeForm" />
    </a-modal>
  </div>
</template>

<script>
import CreateIssueForm from "@/components/Project/Issue/CreateIssueForm.vue";
import api from "@/services/api.js";

export default {
  components: {
    CreateIssueForm,
  },
  data() {
    return {
      open: false,
      confirmLoading: false,
      form: {},
    };
  },
  methods: {
    async createCard() {
      const user_id = "87898254-f9a5-4dd2-88c9-3d58c50a029b";
      try {
        const response = await api.post(`/card/${user_id}`, this.form);
        return response.data;
      } catch (error) {
        console.error("Erro ao criar um novo card:", error);
        throw error;
      }
    },
    showModal() {
      this.open = true;
    },
    async handleOk() {
      this.confirmLoading = true;

      try {
        await this.createCard();
        this.confirmLoading = false;
        this.open = false;
      } catch (error) {
        console.error("Erro ao criar card!", error);
      }

      console.log("Salvou!", this.form);
    },
    changeForm(formObject) {
      if (formObject.type === "change") {
        return
      }
      this.form = formObject
      console.log(this.form)
    },
  },
};
</script>
