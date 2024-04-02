const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

app.use(cors()); // Добавляем middleware для CORS

const app = express();

app.use('/send-message', createProxyMiddleware({
    target: 'https://api.telegram.org',
    changeOrigin: true,
    pathRewrite: {
        '^/send-message': '/bot{6404290504:AAExndIEoXBBSlTwiTQDWEwN8T4xEmvTV8A}/sendMessage',
    },
}));

app.listen(3001, () => {
    console.log('Прокси-сервер запущен на http://localhost:3001');
});