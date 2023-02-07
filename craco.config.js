const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#1c3879',
          '@menu-icon-size': '16px',
          '@menu-icon-size-lg': '20px',
        },
      },
    },
  ],
};
