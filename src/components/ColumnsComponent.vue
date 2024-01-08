<template>
  <a-row gutter="16">
    <a-col :span="8">
      <a-card title="Não Iniciado">
        <slot name="not-started"></slot>
      </a-card>
    </a-col>
    <a-col :span="8">
      <a-card title="Em Progresso">
        <slot name="in-progress"></slot>
      </a-card>
    </a-col>
    <a-col :span="8">
      <a-card title="Concluído">
        <slot name="completed"></slot>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
export default {};
</script>
