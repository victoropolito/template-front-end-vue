<template>
  <a-row gutter="16">
    <a-col :span="8">
      <a-card title="Não Iniciado">
        <slot name="not-started">
          <CardsList
            v-if="task in cards.status.filter(t => t.status === 'BACKLOG')"
            :title="task.title"
            :description="task.description"
            :responsible="task.user_id"
          />
        </slot>
      </a-card>
    </a-col>
    <a-col :span="8">
      <a-card title="Em Progresso">
        <slot name="in-progress" />
      </a-card>
    </a-col>
    <a-col :span="8">
      <a-card title="Concluído">
        <slot name="completed" />
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import CardsList from "./CardsList.vue"

export default {
  components: {
    CardsList
  }
}

</script>
