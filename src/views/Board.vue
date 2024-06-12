<template>
  <div class="components-page-header-demo-responsive">
    <a-page-header title="Chameleon Stack" @back="redirectPage">
      <template #extra>
        <Modal/>
      </template>
      <template #footer>
        <a-tabs>
          <a-tab-pane key="1" tab="Filtrar" />
        </a-tabs>
      </template>
    </a-page-header>
  </div>
</template>

<script>
import Modal from '@/components/Modals/Modal.vue'

export default {
  components: {
    Modal
  }
}
</script>

<style scoped>
.components-page-header-demo-responsive {
  padding-bottom: 20px;
  border: 1px solid rgb(235, 237, 240);
  background-color: #F6F7F9;
}
.components-page-header-demo-responsive tr:last-child td {
  padding-bottom: 0;
}
#components-page-header-demo-responsive .content {
  display: flex;
}
#components-page-header-demo-responsive .ant-statistic-content {
  font-size: 20px;
  line-height: 28px;
}
@media (max-width: 576px) {
  #components-page-header-demo-responsive .content {
    display: block;
  }

  #components-page-header-demo-responsive .main {
    width: 100%;
    margin-bottom: 12px;
  }

  #components-page-header-demo-responsive .extra {
    width: 100%;
    margin-left: 0;
    text-align: left;
  }
}
</style>