module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
          '@app':           './src/app',
          '@features':      './src/features',
          '@shared':        './src/shared',
          '@infrastructure':'./src/infrastructure',
          '@config':        './src/config',
          '@auth':          './src/features/auth',
          '@chat':          './src/features/chat',
          '@contacts':      './src/features/contacts',
          '@groups':        './src/features/groups',
          '@profile':       './src/features/profile',
          '@settings':      './src/features/settings',
          '@calls':         './src/features/calls',
          '@stories':       './src/features/stories',
          '@notifications': './src/features/notifications',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
