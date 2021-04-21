module.exports = {
  components: {
    categories: [
      {
        name: 'Utilities',
        include: [
          'src/components/Text/Text.js',
          'src/components/Link/Link.js',
          'src/components/Separator/Separator.js',
        ],
      },
      {
        name: 'Buttons',
        include: [
          'src/components/Button/Button.js',
          'src/components/ActionButton/ActionButton.js',
          'src/components/CompoundButton/CompoundButton.js',
        ],
      },
      {
        name: 'Input',
        include: [
          'src/components/Checkbox/Checkbox.js',
          'src/components/Slider/Slider.js',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'Fluent UI React'
};
