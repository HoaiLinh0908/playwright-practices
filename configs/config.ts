export const getConfig = () => {
  return {
    testEnv: process.env.TEST_ENV || "QA",
    userPassword: process.env.USER_PASSWORD || "",
  };
};
