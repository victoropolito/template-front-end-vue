<template>
  <a-row>
    <a-col :span="24">
      <div class="header">
        <div class="left">
          <!-- Espaço para a logo -->
          <img
            src="@/assets/logo.png"
            alt="Logo"
            class="logo"
          >
        </div>
        <div class="center">
          <!-- Input de pesquisa -->
          <a-input
            v-model="searchInput"
            placeholder="Pesquisar..."
          />
        </div>
        <div class="right">
          <div class="user-info">
            <a-space
              :size="16"
              wrap
            >
              <a-avatar
                :size="40"
                src="https://www.antdv.com/assets/logo.1ef800a8.svg"
              >
                <template #icon>
                  <UserOutlined />
                </template>
              </a-avatar>
              <template #icon>
                <UserOutlined />
              </template>
              <div class="user-details">
                <div>{{ user.name }}</div>
                <div>{{ user.email }}</div>
              </div>
            </a-space>
          </div>
        </div>
      </div>
    </a-col>
  </a-row>
</template>

<script>
import { UserOutlined } from '@ant-design/icons-vue'

export default {
  components: {
    UserOutlined
  },
  data() {
    return {
      searchInput: "",
      user: {
        avatar: '',
        name: "Victor Polito",
        email: "victor.polito@aluno.ufop.edu.br",
      },
    };
  },
};
</script>

<style scoped>
.header {
  background-color: #F6F7F9;
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 40px;
  height: 40px;
}

.user-info {
  display: flex;
  align-items: center;
}

.avatar {
  margin-right: 10px;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.gutter-box {
  background: #0092ff;
  padding: 8px 0;
}
</style>
