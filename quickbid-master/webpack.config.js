const path = require('path');

module.exports = {
  mode: 'development', // Set the mode to development or production
  entry: './src/index.js', // Your main entry file
  output: {
    filename: 'bundle.js',  // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output directory
    publicPath: '/', // Public URL of the output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use Babel loader
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Presets for ES6 and React
          },
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'], // Load CSS styles
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Handle image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', // Preserve the original name and path
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Serve files from the dist directory
    compress: true, // Enable gzip compression
    port: 9000, // Port for the dev server
    historyApiFallback: true, // Support for HTML5 history API
  },
  plugins: [
    // Add any necessary plugins here, e.g., HtmlWebpackPlugin for HTML generation
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // Split vendor code into separate bundles
    },
  },
};
