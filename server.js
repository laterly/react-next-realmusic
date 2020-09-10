const Koa = require("koa");
const Router = require("koa-router");
const next = require("next");
const dev = process.env.NODE_ENV === "development";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = new Koa();
const router = new Router();
app.prepare().then(() => {
  server.use(router.routes());
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });
  server.listen(3000, () => {
    console.log("koa server listen on 3000");
  });
});
