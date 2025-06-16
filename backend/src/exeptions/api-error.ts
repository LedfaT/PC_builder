module.exports = class ApiError extends Error {
  status;
  errors;

  constructor(status: number, message: string, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new ApiError(401, "User is Unuthorized");
  }

  static Forbidden() {
    return new ApiError(403, "Access denied");
  }

  static notFound(message: string) {
    return new ApiError(404, message);
  }

  static BadRequest(message: string, errors: any = []) {
    return new ApiError(400, message, errors);
  }
};
