<template>
    <div class="col-sm-4 col-sm-offset-4">
      <h2>Log In</h2>
      <p>Log in to your account to get some great quotes.</p>
      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>
      <div class="form-group label-floating">
          <label for="loginUsr" class="control-label">Username</label>
          <input type="text" class="form-control" id="loginUsr" v-model="credentials.username">
          <span class="help-block">Enter your username</span>
      </div>
      <div class="form-group">
          <label for="loginPw" class="control-label">Password</label>
          <input type="password" class="form-control" id="loginPw" v-model="credentials.password">
          <span class="help-block">Enter your password</span>
      </div>
      <button class="btn btn-primary btn-raised" @click="submit()">Access</button>
    </div>
  </template>

  <script>
  import auth from '../auth';

  export default {
    data() {
      return {
        // We need to initialize the component with any
        // properties that will be used in it
        credentials: {
          username: '',
          password: '',
        },
        error: '',
      };
    },
    methods: {
      submit() {
        const credentials = {
          username: this.credentials.username,
          password: this.credentials.password,
        };
        // We need to pass the component's this context
        // to properly make use of http in the auth service
        auth.login(this, credentials, 'secretquote');
      },
    },
  };
  </script>
