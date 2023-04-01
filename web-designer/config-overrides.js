module.exports = {
  // ... other configuration options
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: 'handlebars-loader'
      }
    ]
  }
};
