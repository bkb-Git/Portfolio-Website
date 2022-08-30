const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#886c57',
          '@layout-header-background': '#413b3b',
          '@layout-trigger-background': '#886c57',
          '@menu-icon-size': '16px',
          '@menu-icon-size-lg': '20px',
        },
      },
    },
  ],
};
