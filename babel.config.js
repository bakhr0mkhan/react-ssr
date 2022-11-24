module.exports = {
    presets: ['@babel/env', '@babel/react'],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-async-to-generator',
    ]
};