<template>
  <div>
    <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
    <img
            src="@/assets/logo.png"
            alt="Logo"
            class="logo"
          >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item>
        <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
          Log in
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

export default {
  setup() {
    const formState = reactive({
      username: '',
      password: ''
    });

    const onFinish = async () => {
      const isValid = await checkCredentials(formState.username, formState.password);
      if (isValid) {
        redirectToHomePage();
      } else {
        console.log('Credenciais inválidas');
        // Lógica para lidar com credenciais inválidas
      }
    };

    const checkCredentials = async (username, password) => {
      try {
        const response = await fetch('@/services/auth/credentials.txt');
        const text = await response.text();
        const credentials = text.split('\n').reduce((acc, line) => {
          const [key, value] = line.split('=');
          acc[key.trim()] = value.trim();
          return acc;
        }, {});

        return credentials.username === username && credentials.password === password;
      } catch (error) {
        console.error('Erro ao verificar credenciais:', error);
        return false;
      }
    };

    const redirectToHomePage = () => {
      // Redirecionar para a página inicial
      window.location.href = '/home';
    };

    return {
      formState,
      onFinish,
      UserOutlined,
      LockOutlined
    };
  }
};
</script>

<style scoped>
.login-form {
  max-width: 300px;
  margin: auto;
  margin-top: 100px;
}

.logo {
  width: 40px;
  height: 40px;
  justify-content: center;
}
</style>
