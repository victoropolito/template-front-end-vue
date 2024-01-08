<template>
  <a-layout>
    <HomeHeader />
    <a-layout-content style="padding: 24px">
      <ColumnsComponent>
        <template v-slot:not-started>
          <TaskComponent
            v-for="task in tasks.filter(t => t.status === 'Not Started')"
            :key="task.id"
            :title="task.title"
            :description="task.description"
            :dueDate="task.dueDate"
            :type="task.type"
            :responsible="task.responsible"
          />
        </template>
        <template v-slot:in-progress>
          <TaskComponent
            v-for="task in tasks.filter(t => t.status === 'In Progress')"
            :key="task.id"
            :title="task.title"
            :description="task.description"
            :dueDate="task.dueDate"
            :type="task.type"
            :responsible="task.responsible"
          />
        </template>
        <template v-slot:completed>
          <TaskComponent
            v-for="task in tasks.filter(t => t.status === 'Completed')"
            :key="task.id"
            :title="task.title"
            :description="task.description"
            :dueDate="task.dueDate"
            :type="task.type"
            :responsible="task.responsible"
          />
        </template>
      </ColumnsComponent>
    </a-layout-content>
  </a-layout>
</template>

<script>
import HomeHeader from "@/components/HomeHeader.vue"
import TaskComponent from "@/components/TaskComponent.vue"
import ColumnsComponent from "@/components/ColumnsComponent.vue"

export default {
  components: {
    HomeHeader,
    ColumnsComponent,
    TaskComponent,
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Task 1",
          description: "Description of Task 1",
          dueDate: "2024-01-15",
          type: "Bug",
          responsible: "John Doe",
          status: "Not Started",
        },
        // Add more tasks as needed
      ],
    };
  },
};
</script>
