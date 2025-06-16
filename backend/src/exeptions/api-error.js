module.exports = class ApiError extends Error {
  status;
  errors;

  constructor(status, message, errors = []) {
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

  static notFound(message) {
    return new ApiError(404, message);
  }

  static BadRequest(message, errors = []) {
    return new ApiError(400, message, errors);
  }
};
