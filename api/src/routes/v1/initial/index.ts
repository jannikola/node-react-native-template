import { Router } from "express";

const mockedData = {
  club: "Liverpool",
  league: "Premier League / England",
  website: "https://www.liverpoolfc.com/",
  position: "1st",
  stadium: "Anfield Road",
};

export class InitialRoutes {
  private router: Router = Router();

  public getRouter(): Router {
    this.router.get("/initial", async (req, res) => {
      try {
        res.send(mockedData);
      } catch (e) {
        res.send({ e });
      }
    });

    return this.router;
  }
}
