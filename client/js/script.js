

window.fbAsyncInit = function() {
  FB.init({
    appId      : '268682936876371',
    xfbml      : true,
    version    : 'v2.8'
  });
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
}, true);
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response) {
    console.log(response)
    if (response.status === 'connected') {
      // Logged into your app and Facebook.

      testAPI();
    } else {
      console.log('please login')
    }
}

function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', {fields: 'email,name,id'}, function(response) {
      console.log('Successful login for: ' + response.name);
    });
}

var app = new Vue({
  el:'#login-button',
  data: {
    statusLogin: true
  },
  computed: {
    classObjectLogin : function() {
      return {
        'nav-item': true,
        'is-tab': true,
        'hidden': this.statusLogin ? false : true
      }
    },
    classObjectLogout : function() {
      return {
        'nav-item': true,
        'is-tab': true,
        'hidden': this.statusLogin ? true : false
      }
    }
  },
  methods: {
    LoginProses : function() {
      FB.login(function(response) {
        // handle the response
        FB.api('/me',{fields: 'email,name,id,gender'}, function(res) {
          console.log(res);
          axios.post('http://localhost:3000/api/cust', {
            name        : res.name,
            facebookid  : res.id,
            email       : res.email,
          })
          .then(function(res) {
            localStorage.setItem('token', res.data)
            app.statusLogin = true
            window.location.reload()
          })
        })
        // console.log(response);
      }, {scope: 'email,public_profile', return_scopes: true});
    },
    LogoutProses : function() {
      FB.logout(function() {
        localStorage.removeItem('token')
        window.location.reload()
      })
    },
    checkLogin : function() {
      if(localStorage.getItem('token')) {
        this.statusLogin = true
      } else {
        this.statusLogin = false
      }
    }
  },
  mounted: function() {
    this.checkLogin()
  }
})
