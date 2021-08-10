module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          whitelist: ["API_KEY", "GEO_API_KEY"],
          allowUndefined: false,
        },
      ],
    ],
  };
};
