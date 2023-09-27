import { Router, IRouter } from "express";

const router: IRouter = Router();

router.get("/", (req, res) =>
  res
    .json({
      message: "Hello world!",
    })
    .status(200)
);

export { router };
