<template>
  <div>
    <a-form ref="form" name="basic" layout="vertical" :model="form">
      <a-form-item label="Título" :rules="[{ required: true, message: 'Por favor, insira o novo título' }]">
        <a-input name="title" v-model:value="editCard.title"/>
      </a-form-item>
      <a-form-item label="Descrição" :rules="[{ required: true, message: 'Por favor, insira a nova descrição' }]">
        <a-textarea name="description" v-model:value="editCard.description"/>
      </a-form-item>
      <a-form-item label="Responsável" :rules="[{ required: true, message: 'Por favor, insira o novo responsável' }]">
        <a-input v-model:value="userIdToName" />
      </a-form-item>
      <a-form-item label="Status" :rules="[{ required: true, message: 'Por favor, defina o novo status' }]">
        <a-select v-model:value="editCard.status">
          <a-select-option value="BACKLOG">Não iniciado</a-select-option>
          <a-select-option value="IN PROGRESS">Em Progresso</a-select-option>
          <a-select-option value="CONCLUDED">Concluído</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>

export default {
  props: {
    card: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      cards: [],
      editCard: {
        title: '',
        description: '',
        user_id: '87898254-f9a5-4dd2-88c9-3d58c50a029b',
        status: ''
      },
    }
  },
  computed: {
    userIdToName() {
      return this.editCard.user_id === null ? null : 'Victor Polito'
    }
  },
  watch: {
    editCard: {
      handler(value){
        this.$emit('change', value)
      },
      deep: true
    }
  },
};
</script>
