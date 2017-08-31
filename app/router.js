'use strict';

module.exports = app => {
  app.get('/', 'home.index');

  app.get('/twitter/success', 'home.oauthSuccessCallback');
  app.passport.mount('twitter', {
    successRedirect: '/twitter/success',
  });
};
