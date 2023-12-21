<template>
  <div class="header">
    <div class="left">
      <!-- Espaço para a logo -->
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
    </div>
    <div class="center">
      <!-- Input de pesquisa -->
      <a-input v-model="searchInput" placeholder="Pesquisar..." />
    </div>
    <div class="right">
      <div class="user-info">
        <!-- Espaço para avatar -->
        <a-avatar :src="user.avatar" :size="40" class="avatar" />
        <!-- Nome e e-mail do usuário separados verticalmente -->
        <div class="user-details">
          <div>{{ user.name }}</div>
          <div>{{ user.email }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: '',
      user: {
        avatar: 'file:///C:/Users/Victor/Documents/UFOP/TCC_I/template-front/template-front-end-vue/src/assets/static/profile-photo.jpg',
        name: 'Victor Polito',
        email: 'victor.polito@aluno.ufop.edu.br',
      },
    };
  },
};
</script>

<style scoped>
.header {
  background-color: #1890ff;
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
</style>
