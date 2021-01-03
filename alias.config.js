/*
 * 进入 WebStorm preferences -> Language & Framework -> JavaScript -> Webpack，选择这个文件即可
 */
const resolve = (dir) => require('path').join(__dirname, dir);

module.exports = {
  resolve: {
    alias: {
      '@': resolve('examples'),
      '@packages': resolve('packages'),
    },
  },
};
