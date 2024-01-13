<template>
  <div>
    <a-button type="primary" @click="showModal">Nova task</a-button>
    <a-modal v-model:open="open" :confirm-loading="confirmLoading" @ok="handleOk">
      <create-issue-form></create-issue-form>
    </a-modal>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import CreateIssueForm from '@/components/Project/Issue/CreateIssueForm.vue'

  const open = ref(false);
  const confirmLoading = ref(false);
  const showModal = () => {
    open.value = true;
  };
  const handleOk = () => {
    CreateIssueForm.createNewCard()
    confirmLoading.value = true;
    setTimeout(() => {
      open.value = false;
      confirmLoading.value = false;
    }, 2000);
  };
</script>