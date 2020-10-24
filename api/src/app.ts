import express from "express";
import * as routes from "./routes/routes";

const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
  response.send("Hello world!");
});

routes.apiRoutes(app).catch((e) => console.log({ e }));

app.listen(PORT);

// app.get("/", (req, res) => {
//   res.send("The sedulous hyena ate the antelope!");
// });
// app.listen((port, err) => {
//   if (err) {
//     return console.error(err);
//   }
//   return console.log(`server is listening on ${PORT}`);
// });
