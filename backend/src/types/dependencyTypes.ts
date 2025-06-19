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
