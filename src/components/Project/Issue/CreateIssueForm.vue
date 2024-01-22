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
