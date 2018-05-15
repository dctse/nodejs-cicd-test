const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello World! CI/CD rocks! Again! No more!';
});

console.log('starting to listen on port 3000...'); // eslint-disable-line no-console
app.listen(3000);
