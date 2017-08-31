'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg';
    }

    * oauthSuccessCallback() {
      this.ctx.body = 'oauth success';
    }

  }
  return HomeController;
};
