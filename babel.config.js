module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx'],
        alias: {
          '@utils': './src/utils',
          '@components': './src/components',
          '@views': './src/views',
        },
      },
    ],
  ],
};
