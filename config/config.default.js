'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1546089587725_3031';

  // add your config here
  config.middleware = [];

  config.card = {
    appId: '',
    appSecret: '',
  };

  return config;
};
