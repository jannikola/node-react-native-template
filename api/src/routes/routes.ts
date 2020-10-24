import * as express from "express";
import { InitialRoutes } from "./v1/initial";

export async function apiRoutes(app: express.Application) {
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  });

  app.use("/v1", new InitialRoutes().getRouter());
}
