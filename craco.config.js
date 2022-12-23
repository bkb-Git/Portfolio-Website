const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#1c3879',
          '@layout-body-background': '#fff',
          '@layout-header-background': '#fff',
          '@layout-trigger-background': '#ab6400',
          '@menu-icon-size': '16px',
          '@menu-icon-size-lg': '20px',
        },
      },
    },
  ],
};