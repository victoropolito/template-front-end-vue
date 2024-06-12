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
      <EditIssueForm @change="changeForm" :card="card"/>
    </a-modal>
  </a-space>
</template>

<script>
import EditIssueForm from "@/components/Project/Issue/EditIssueForm.vue";
import { EllipsisOutlined } from "@ant-design/icons-vue";
import { mapState } from 'vuex';

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
  computed: {
    ...mapState(['user']),
    userId() {
      return this.user.id;
    }
  },
  methods: {
    async editCard() {
      const id = this.card.id;

      try {
        await this.$store.dispatch('editCard', { cardId: id, updatedCardData: { ...this.form, user_id: this.userId } });
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
        console.error('Error editing card:', error);
        this.confirmLoading = false;
      }
    },
    changeForm(formObject) {
      if (formObject.type === "change") {
        return;
      }
      this.form = formObject;
    },
  },
}
</script>
