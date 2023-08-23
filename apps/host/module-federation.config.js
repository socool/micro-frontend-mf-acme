module.exports = {
  name: 'host',
  remotes: ['shop', 'cart', 'about'],
  shared: (name, config) => {
    if (name === 'lodash') {
      return false;
    }
  },
};
