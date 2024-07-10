const path = require('path');

module.exports = {
  watch : true,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', ".tsx", ".css"], // 해결할 파일 확장자 목록
    modules: [
      path.resolve(__dirname, 'src'), // 모듈을 찾을 기본 경로 설정
      'node_modules' // npm 모듈이 설치된 경로
    ],
  },
  entry : {
    index : path.resolve(__dirname, 'src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react"
              ],
            },
          },
          "ts-loader",
        ],
      },
    ],
  },
}