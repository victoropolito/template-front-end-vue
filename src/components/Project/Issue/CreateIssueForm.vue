<template>
  <div>
    <a-page-header title="Projeto Chameleon" sub-title="Novo Card"/>
    <a-form>
      <a-form-item label="Título">
        <a-input name="title" v-model:value="newCard.title" />
      </a-form-item>
      <a-form-item label="Descrição">
        <a-textarea name="description" v-model:value="newCard.description"/>
      </a-form-item>
      <!-- <a-form-item label="Data de Entrega">
        <a-date-picker
          v-model:value="newCard.dueDate"
          mode="date"
          format="DD/MM/YYYY"
          placeholder="Selecione uma data"
        />
      </a-form-item> -->
      <!-- <a-form-item label="Tipo">
        <a-select v-model:value="newCard.type">
          <a-select-option value="bug">🐞 Bug</a-select-option>
          <a-select-option value="feature">✅ Melhoria</a-select-option>
        </a-select>
      </a-form-item> -->
      <a-form-item label="Responsável">
        <a-input v-model:value="newCard.user_id" />
      </a-form-item>
    </a-form>
  </div>
</template>

<script>

export default {
  props: {
    form: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      cards: [],
      newCard: {
        title: '',
        description: '',
        // dueDate: '',
        // type: '',
        user_id: '',
        status: 'BACKLOG'
      },
    }
  },
  watch: {
    newCard: {
      handler(value){
        this.$emit('change', value)
      },
      deep: true
    }
  },
};
</script>
