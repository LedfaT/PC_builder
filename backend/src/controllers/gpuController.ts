import { gpuDependencyTypes } from "@ownTypes/dependencyTypes";
import { GpuService } from "@services/gpuService";
import { inject, injectable } from "inversify";

@injectable()
export class GpuController {
  gpuService: GpuService;

  constructor(@inject(gpuDependencyTypes.GpuService) gpuService: GpuService) {
    this.gpuService = gpuService;
  }
}
