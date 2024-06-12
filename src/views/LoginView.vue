<template>
  <a-layout class="login-layout">
    <a-row type="flex" justify="center" align="middle" class="login-row">
      <a-col>
        <a-card class="login-card" bordered>
          <div class="header-logo mb-4 center-card">
            <img src="@/assets/logo.png" alt="Logo" class="logo">
          </div>

          <div>Email</div>

          <a-input
            v-model:value="form.email"
            placeholder="seumail@exemplo.com"
            prefix-icon="mail"
          ></a-input>

          <div class="d-flex align-center justify-space-between">
            Senha
          </div>

          <a-input
            v-model:value="form.password"
            :type="visible ? 'text' : 'password'"
            placeholder="Insira sua senha"
            prefix-icon="lock"
            :suffix="visible ? 'eye-invisible' : 'eye'"
            @click:suffix="visible = !visible"
          ></a-input>

          <a-alert
            v-if="showError"
            type="error"
            show-icon
            class="mb-12"
            message="Erro ao fazer login. Verifique suas credenciais."
          ></a-alert>

          <a-button
            :disabled="!validForm"
            type="primary"
            block
            @click="handleLogin"
          >
            Acessar
          </a-button>

          <div class="text-center mt-2">
            <RouterLink to="/create" class="text-blue text-decoration-none">
              Cadastrar agora <a-icon type="right" />
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
        email: '',
        password: '',
      },
      visible: false,
      showError: false,
    };
  },
  computed: {
    validForm() {
      return this.form.email && this.form.password
    },
  },
  methods: {
    async handleLogin() {
      try {
        await this.$store.dispatch('createUserSessionStore', { userForm: this.form })
        this.showError = false
        return this.$router.push('/home')
      } catch (error) {
        console.error('Error during login:', error)
        this.showError = true
      }
    },
  },
};
</script>

<style scoped>
.login-layout {
  min-height: 100vh;
}

.login-row {
  height: 100vh;
}

.login-card {
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

.text-blue {
  color: #0081ff;
}

.text-decoration-none {
  text-decoration: none;
}
</style>