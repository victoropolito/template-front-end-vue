<template>
  <a-layout class="create-layout">
    <a-row type="flex" justify="center" align="middle" class="create-row">
      <a-col>
        <a-card class="create-card" bordered>
          <div class="header-logo mb-4 center-card">
            <img src="@/assets/logo.png" alt="Logo" class="logo">
          </div>

          <div class="text-subtitle-1 text-medium-emphasis">Nome</div>
          <a-input
            v-model:value="form.name"
            placeholder="Nome & Sobrenome"
            prefix-icon="user"
          ></a-input>

          <div class="text-subtitle-1 text-medium-emphasis">Email</div>
          <a-input
            v-model:value="form.email"
            placeholder="seumail@exemplo.com"
            prefix-icon="mail"
          ></a-input>

          <div class="text-subtitle-1 text-medium-emphasis">Senha</div>
          <a-input
            v-model:value="form.password"
            :type="visible ? 'text' : 'password'"
            placeholder="Insira sua senha"
            prefix-icon="lock"
            :suffix="visible ? 'eye-invisible' : 'eye'"
            @click:suffix="visible = !visible"
          ></a-input>

          <div class="d-flex align-center justify-center mb-3">
            <a-avatar size="large" icon="camera" class="avatar-uploader">
              <input type="file" ref="fileInput" class="file-input" @change="handleFileUpload" />
            </a-avatar>
          </div>

          <a-button
            type="primary"
            block
            @click="submitForm"
          >
            Criar
          </a-button>

          <div class="text-center mt-2">
            <RouterLink to="/" class="text-blue text-decoration-none">
              Voltar <a-icon type="right" />
            </RouterLink>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        photo: null,
      },
      visible: false,
    };
  },
  methods: {
    async submitForm() {
      try {
        await this.$store.dispatch('createUserStore', { userForm: this.form })
        return this.$router.push('/')
      } catch (error) {
        console.error('Error during creation:', error)
      }
    },
    handleFileUpload() {
      const file = this.$refs.fileInput.files[0];
      console.log('Arquivo selecionado:', file);
      this.form.photo = file;
    }
  }
};
</script>

<style scoped>
.create-layout {
  min-height: 100vh;
}

.create-row {
  height: 100vh;
}

.create-card {
  width: 100%;
  max-width: 448px;
}

.header-logo {
  margin-bottom: 20px;
}

.logo {
  width: 150px;
  height: 150px;
}

.center-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-uploader {
  position: relative;
}

.file-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.text-blue {
  color: #0081ff;
}

.text-decoration-none {
  text-decoration: none;
}
</style>