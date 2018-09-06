module.exports = {
  presets: [
    ['@babel/react'],
    ['@babel/env', { loose: true }]
  ],
  plugins: [
    ['@babel/proposal-object-rest-spread', { loose: true }]
  ]
}
