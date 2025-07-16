import { container } from "@config/container";
import ComputerController from "@controllers/computerController";
import authMiddleware from "@middlewares/authMiddleware";
import { computerDependencyTypes } from "@ownTypes/dependencyTypes";
import { Router } from "express";

const computerRouter = Router();

const computerController = container.get<ComputerController>(
  computerDependencyTypes.ComputerController
);
computerRouter.post("/", authMiddleware, computerController.createComputer);
computerRouter.get("/list", computerController.getAllComputers);
computerRouter.get(
  "/admins-public/list",
  computerController.getAdminPublicComputers
);
computerRouter.get(
  "/users-public/list",
  computerController.getUserPublicComputers
);

computerRouter.get(
  "/user-computers/list",
  authMiddleware,
  computerController.getAllUserComputers
);
computerRouter.get(
  "/user-computers/count",
  authMiddleware,
  computerController.getAllUserComputersCount
);
computerRouter.get("/:id", computerController.getComputerById);
computerRouter.patch("/:id", computerController.updateComputer);
computerRouter.delete("/:id", computerController.deleteComputer);

export default computerRouter;
