<template>
  <div>
    <a-button type="primary" size="large" @click="showModal">Nova task</a-button>
    <a-modal
      v-model:open="open"
      :confirm-loading="confirmLoading"
      :ok-button-props="{disabled: !formValid}"
      @ok="handleOk"
    >
      <create-issue-form @change="changeForm" :formValid="formValid" />
    </a-modal>
  </div>
</template>

<script>
import CreateIssueForm from "@/components/Project/Issue/CreateIssueForm.vue";

export default {
  components: {
    CreateIssueForm,
  },
  data() {
    return {
      open: false,
      confirmLoading: false,
      form: {},
      formValid: false,
    };
  },
  methods: {
    async createCard() {
      const user_id = "38707151-0338-4edb-bdf8-99c58512ab3e";
      
      try {
        await this.$store.dispatch('createCardStore', { userId: user_id, cardForm: this.form });
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
        await this.createCard();
        this.confirmLoading = false;
        this.open = false;
        this.$emit('card-updated');
      } catch (error) {
        console.error('Error creating card:', error);
      }
      this.form.title = ''
      this.form.description = ''
    },
    changeForm(formObject) {
      if (formObject.type === "change") {
        return
      }
      this.form = formObject;
      this.checkFormValidity();
    },
    checkFormValidity() {
      // Verifica se todos os campos obrigatórios estão preenchidos
      this.formValid = Object.values(this.form).every(value => !!value);
    },
  },
};
</script>
