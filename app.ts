import express from 'express';
import http from 'http';

import { router } from './route/router'

/** Express 物件 */
const app: express.Application = express();

// 設定通訊埠
app.set('port', 3000);

// 設定 JSON 數據格式
app.use(express.json());

// 啟動所有路由
for (const route of router) {
    app.use(route.getRouter());
}

/** 建立 http 伺服器 */
const server = http.createServer(app).listen(app.get('port'), () => { console.log(`[Server ] 伺服器啟動，監聽通訊埠: 3000`); });

// 錯誤處裡
server.on('error', (error: Error) => { console.log(`stack: ${error.stack}, name: ${error.name}, message: ${error.message}`); });