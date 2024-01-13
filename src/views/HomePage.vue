<template>
  <a-layout>
    <HomeHeader />
    <Board />
    <a-divider style="height: 2px; background-color: #7cb305" />
    <a-layout-content style="padding: 24px">
      <div>
        <cards-list></cards-list>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import HomeHeader from "./HomeHeader.vue"
import Board from "./Board.vue"
import CardsList from '@/components/CardsList.vue'

export default {
  components: {
    HomeHeader,
    Board,
    CardsList
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
      ],
    };
  },
};
</script>
