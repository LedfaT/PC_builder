export const userDedpendencyTypes = {
  AuthService: Symbol.for("AuthService"),
  AuthController: Symbol.for("AuthController"),
  TokenService: Symbol.for("TokenService"),
  MailService: Symbol.for("MailService"),
};

export const cpuDependencyTypes = {
  CpuService: Symbol.for("CpuService"),
  CpuController: Symbol.for("CpuController"),
};

export const gpuDependencyTypes = {
  GpuService: Symbol.for("GpuService"),
  GpuController: Symbol.for("GpuController"),
};

export const ssdDependencyTypes = {
  SsdService: Symbol.for("SsdService"),
  SsdController: Symbol.for("SsdController"),
};
