import router from '../main';

// URL and endpoint constants
const API_URL = 'http://localhost:8080/';
const LOGIN_URL = `${API_URL}sessions/create/`;
const SIGNUP_URL = `${API_URL}users/`;

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false,
  },

  // Send a request to the login URL and save the returned JWT
  login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token);
      localStorage.setItem('access_token', data.access_token);

      this.user.authenticated = true;

      // Redirect to a specified route
      if (redirect) {
        router.go(redirect);
      }
    });// .error((err) => {
    //   context.error = err;
    // });
  },

  /* eslint no-param-reassign: ["error", { "props": false }] */
  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds)
    .then((data) => {
      localStorage.setItem('id_token', data.id_token);
      localStorage.setItem('access_token', data.access_token);

      this.user.authenticated = true;

      if (redirect) {
        router.go(redirect);
      }
    })
    .catch((err) => {
      context.error = err;
    });
  },

  // To log out, we just need to remove the token
  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('access_token');
    this.user.authenticated = false;
  },

  checkAuth() {
    this.user.authenticated = localStorage.getItem('id_token');
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
    const accessToken = localStorage.getItem('access_token');
    return {
      Authorization: `Bearer ${accessToken}`,
      'Access-Control-Allow-Origin': '*',
    };
  },
};
