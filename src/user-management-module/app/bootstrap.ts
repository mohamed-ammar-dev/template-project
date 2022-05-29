import { server } from "../../config/server";
import userAuthRouter from "./routes/auth/userAuthRouter";
// import userProfileRouter from "./routes/user/userProfileRouter";

const app = server.app;

app.use("/auth/user", userAuthRouter);

// app.use("/user/profile", userProfileRouter);
