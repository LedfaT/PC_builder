import { Router } from "express";
// import authController from "@controllers/authController";
import { body } from "express-validator";
import authMiddleware from "@middlewares/authMiddleware";

const router = Router();

// router.post(
//   "/registration",
//   body("email").isEmail(),
//   body("password").isLength({ min: 3, max: 32 }),
//   authController.registration
// );
// router.post("/login", authController.login);
// router.post("/logout", authController.logout);
// router.get("/activate/:link", authController.activate);
// router.get("/refresh", authController.refresh);
// router.get("/users", authMiddleware, authController.getUsers);

export default router;
