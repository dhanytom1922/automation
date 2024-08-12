const LoginActions = require("../actions/login.actions");

describe("Login Flow", () => {
  it("should successfully log in", async () => {
    await LoginActions.login("00031", "adminkevin2", "999999");
  });
});
