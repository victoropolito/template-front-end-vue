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
// import cardService from "@/services/cardService.js";

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

      console.log('Saved!', this.form);
    },
    changeForm(formObject) {
      if (formObject.type === "change") {
        return
      }
      this.form = formObject
    },
  },
};
</script>
