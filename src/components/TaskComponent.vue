<template>
  <a-card>
    <p>{{ task.title }}</p>
    <p>{{ task.description }}</p>
    <p>Responsável: {{ task.assignee }}</p>
    <p>Prazo: {{ task.dueDate }}</p>
  </a-card>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.task {
  background-color: white;
  padding: 16px;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  margin: 8px 0;
}

a-card {
  margin: 10px;
  width: 300px;
}
</style>
