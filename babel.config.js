module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~', //root 지시자를 ~로 설정
        rootPathSuffix: 'src',
      },
    ],
  ],
};
