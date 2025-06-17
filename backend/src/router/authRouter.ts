import { Router } from "express";
// import authController from "@controllers/authController";
import { body } from "express-validator";
import authMiddleware from "@middlewares/authMiddleware";
import { AuthController } from "@controllers/authController";
import { container } from "@config/container";
import { userDedpendencyTypes } from "@ownTypes/dependencyTypes";

const authRouter = Router();

const authController = container.get<AuthController>(
  userDedpendencyTypes.AuthController
);

authRouter.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  authController.registration
);
// authRouter.post("/login", authController.login);
// authRouter.post("/logout", authController.logout);
// authRouter.get("/activate/:link", authController.activate);
// authRouter.get("/refresh", authController.refresh);
// authRouter.get("/users", authMiddleware, authController.getUsers);

export default authRouter;
