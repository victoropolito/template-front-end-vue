<template>
  <div class="task-column">
    <div class="column-title">
      {{ title }}
    </div>
    <div class="tasks">
      <TaskComponent v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    tasks: Array,
  },
  methods: {
    moveTaskToInProgress(task) {
      // TO-DO DRAG TASKS
    },
  },
};
</script>

<style scoped>
.task-column {
  background-color: #f0f2f5;
  padding: 16px;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  margin: 16px;
  min-width: 400px;
}

.column-title {
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
