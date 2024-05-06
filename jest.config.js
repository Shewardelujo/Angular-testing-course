//config of jest

module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"], // which means we want to call this file after jest is set Up
};
