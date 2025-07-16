import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";
import ComputerService from "@services/computerService";
import ApiError from "@exeptions/api-error";
import { computerDependencyTypes } from "@ownTypes/dependencyTypes";

@injectable()
export default class ComputerController {
  constructor(
    @inject(computerDependencyTypes.ComputerService)
    private readonly computerService: ComputerService
  ) {}
  getAllComputers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const computers = await this.computerService.getAllComputers(req.query);
      res.json(computers);
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  getAllUserComputers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = (req.user as any).id;
      const computers = await this.computerService.getAllUserComputers(
        userId,
        req.query
      );
      res.json(computers);
    } catch (error) {
      next(error);
    }
  };

  getAllUserComputersCount = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = (req.user as any).id;
      const computers = await this.computerService.userComputersCount(userId);
      res.json(computers.length);
    } catch (error) {
      next(error);
    }
  };

  getAdminPublicComputers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const computers = await this.computerService.adminPublicComputers(
        req.query
      );
      res.json(computers);
    } catch (error) {
      next(error);
    }
  };

  getUserPublicComputers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const computers = await this.computerService.userPublicComputers(
        req.query
      );
      res.json(computers);
    } catch (error) {
      next(error);
    }
  };

  async getComputerById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const computer = await this.computerService.getComputerById(id);
      res.json(computer);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  createComputer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) return;
      const userId = req.user.id;
      const computerData = { ...req.body, user: { connect: { id: userId } } };
      await this.computerService.create(computerData);
      res.json({ message: "Computer created successfully" });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  updateComputer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const updateData = req.body;
      await this.computerService.update(id, updateData);
      res.json({ message: "Computer updated successfully" });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  deleteComputer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      await this.computerService.delete(id);
      res.json({ message: "Computer deleted successfully" });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };
}
