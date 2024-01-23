<template>
  <div class="components-page-header-demo-responsive" style="border: 1px solid rgb(235, 237, 240)">
    <a-page-header title="Projeto A" sub-title="Projeto Chameleon" @back="redirectPage">
      <template #extra>
        <Modal/>
      </template>
      <template #footer>
        <a-tabs>
          <a-tab-pane key="1" tab="Filtrar" />
          <a-tab-pane key="2" tab="Ordenar" />
        </a-tabs>
      </template>
      <div class="content">
        <div class="main">
          <a-descriptions size="small" :column="2">
            <a-descriptions-item label="TO-DO">Cards</a-descriptions-item>
            <!-- <a-descriptions-item label="Association">
              <a>421421</a>
            </a-descriptions-item>
            <a-descriptions-item label="Creation Time">2017-01-10</a-descriptions-item>
            <a-descriptions-item label="Effective Time">2017-10-10</a-descriptions-item>
            <a-descriptions-item label="Remarks">
              Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
            </a-descriptions-item> -->
          </a-descriptions>
        </div>
        <!-- <div class="extra">
          <div
            :style="{
              display: 'flex',
              width: 'max-content',
              justifyContent: 'flex-end',
            }"
          >
            <a-statistic
              title="Status"
              value="Pending"
              :style="{
                marginRight: '32px',
              }"
            />
            <a-statistic title="Price" prefix="$" :value="568.08" />
          </div>
        </div> -->
      </div>
    </a-page-header>
    <TesteHover />
  </div>
</template>

<script>
import Modal from '@/components/Modals/Modal.vue'
import TesteHover from '@/components/TesteHover.vue'

export default {
  components: {
    Modal, TesteHover
  },
  methods: {
    redirectPage() {
      // () => $router.go(-1)
      console.log('voltou')
    }
  }
}
</script>

<style scoped>
.components-page-header-demo-responsive {
  padding-bottom: 20px;
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