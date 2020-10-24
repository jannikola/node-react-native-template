import { Router } from "express";
export class InitialRoutes {
  private router: Router = Router();

  public getRouter(): Router {
    this.router.get("/initial", async (req, res) => {
      try {
        res.send("The sedulous hyena ate the antelope!");
      } catch (e) {
        res.send({ e });
      }
    });

    return this.router;
  }
}
