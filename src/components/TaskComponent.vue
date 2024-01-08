<template>
  <a-card :title="title" style="width: 300px; margin-bottom: 16px">
    <p>{{ description }}</p>
    <p>Data de Entrega: {{ dueDate }}</p>
    <p>Tipo: {{ type }}</p>
    <p>Responsável: {{ responsible }}</p>
  </a-card>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    dueDate: String,
    type: String,
    responsible: String,
  },
};
</script>
