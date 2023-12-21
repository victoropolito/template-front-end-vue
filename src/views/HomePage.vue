<template>
  <div>
    <HomeHeader />
    <div>
      <a-button class="task-button" @click="showCreateTaskModal">
        Criar Tarefa
      </a-button>
      <task-form :is-visible="isCreateTaskModalVisible" @create-task="createTask" />
    </div>
    <div class="columns">
      <TaskComponent title="Não Iniciado" :task="unstartedTasks" />
      <TaskComponent title="Em Progresso" :task="inProgressTasks" />
      <TaskComponent title="Completo" :task="completedTasks" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import { notification } from "ant-design-vue"
import TaskForm from "@/components/TaskForm.vue"
import HomeHeader from "@/components/HomeHeader.vue"
import TaskComponent from "@/components/TaskComponent.vue"

export default {
  components: {
    HomeHeader,
    TaskComponent,
    TaskForm
  },
  setup() {
    const isCreateTaskModalVisible = ref(false);
    const newTask = ref({
      title: "",
      description: "",
      dueDate: null,
      type: "",
      assignee: "",
    });

    const createTask = () => {
      // Aqui você pode adicionar a lógica para criar a tarefa
      // Deve incluir a adição da nova tarefa à coluna "Não Iniciado"

      // Exemplo de notificação de sucesso
      notification.success({
        message: "Tarefa Criada",
        description: `A tarefa "${newTask.value.title}" foi criada com sucesso.`,
      });

      // Limpar o formulário e fechar o modal
      newTask.value = {
        title: "",
        description: "",
        dueDate: null,
        type: "",
        assignee: "",
      };
      isCreateTaskModalVisible.value = false;
    };

    const showCreateTaskModal = () => {
      isCreateTaskModalVisible.value = true;
    };

    return {
      isCreateTaskModalVisible,
      newTask,
      showCreateTaskModal,
      createTask,
    };
  },
  data() {
    return {
      unstartedTasks: [
        {
          id: 1,
          title: "Tarefa 1 - Não Iniciada",
          description: "Descrição da Tarefa 1.",
          assignee: "Usuário 1",
          dueDate: "2023-11-01",
          status: "Não"
        },
      ],
      inProgressTasks: [
        {
          id: 2,
          title: "Tarefa 2 - Em Progresso",
          description: "Descrição da Tarefa 2.",
          assignee: "Usuário 2",
          dueDate: "2023-11-05",
        },
      ],
      completedTasks: [
        {
          id: 3,
          title: "Tarefa 3 - Completa",
          description: "Descrição da Tarefa 3.",
          assignee: "Usuário 3",
          dueDate: "2023-10-30",
        },
      ],
    };
  },
};
</script>

<style>
.task-button {
  background-color: #1890ff;
  color: white;
  padding: 16px;
  display: flex;
  align-items: center;
}

.columns {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}
</style>
