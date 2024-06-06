<template>
  <a-modal
    :visible="isVisible"
    title="Criar Tarefa"
    @ok="onCreateTask"
  >
    <a-form>
      <a-form-item label="Título">
        <a-input v-model="formData.title" />
      </a-form-item>
      <a-form-item label="Descrição">
        <a-input v-model="formData.description" />
      </a-form-item>
      <a-form-item label="Data de Entrega">
        <a-date-picker v-model="formData.dueDate" />
      </a-form-item>
      <a-form-item label="Tipo">
        <a-select v-model="formData.type">
          <a-select-option value="bug">
            Bug
          </a-select-option>
          <a-select-option value="melhoria">
            Melhoria
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="Responsável">
        <a-input v-model="formData.assignee" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
export default {
  props: {
    isVisible: Boolean,
  },
  data() {
    return {
      formData: {
        title: "",
        description: "",
        dueDate: null,
        type: "",
        assignee: "",
        status: ""
      },
    };
  },
  methods: {
    onCreateTask() {
      this.$emit('create-task', this.formData); // Emitir um evento com os dados do formulário
    },
  },
};
</script>
