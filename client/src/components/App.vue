 <template>
    <div>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link to="/home" class="navbar-brand">Home</router-link>
          </div>
          <div class="navbar-collapse collapse navbar-responsive-collapse">
            <ul class="nav navbar-nav">
              <li><router-link to="/secretquote" v-if="user.authenticated">Secret Quote</router-link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><router-link to="/login" v-if="user.authenticated" @click="logout()">Logout</router-link></li>
               <li><router-link to="/login" v-if="!user.authenticated">Login</router-link></li>
               <li><router-link to="/signup"  v-if="!user.authenticated">Sign Up</router-link></li>
            </ul>
          </div>
        </div>
      </nav>


      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </template>

  <script>
  import 'bootstrap';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-material-design';
  import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
  import 'bootstrap-material-design/dist/css/ripples.css';
  import auth from '../auth';

  export default {
    data() {
      return {
        user: auth.user,
      };
    },
    methods: {
      logout() {
        auth.logout();
      },
    },
  };
  </script>
