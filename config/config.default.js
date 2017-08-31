'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1504170129240_1329';

  // add your config here
  config.passportTwitter = {
      key: 'Q0tKWFsrpyr6ZeYdCSbYNLag8',
      secret: '6q6B2kbIGmrN712Cay93MPxI68ex17lwC2pGB7xS1I72CTiIfU',
  };

  return config;
};
