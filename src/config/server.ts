import { Sequelize } from "sequelize";
import express from "express";
import cors from "cors";
import { createNamespace } from "cls-hooked";
import { language } from "../shared/middleware/language";
import { config } from "dotenv";
import { resolve } from "path";
import { serve, setup } from "swagger-ui-express";
import swaggerDocument from "../../../documentation/index.json";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
});

const environment = process.env.NODE_ENV ?? "development";
const port = process.env.PORT || 3000;
const app = express();

if (environment == "development") {
  config({ path: resolve(__dirname, "../../../dev.env") });
  app.use("/api-docs", serve, setup(swaggerDocument));
}
if (environment == "production") config();

import { DB_CONFIG } from "./dbConfig";
import { redis } from "./dbCache";

app.use(helmet());
app.use(limiter);
app.use(express.json({ limit: "10kb" }));
app.use(cors());
app.use(language);

const startServer = () => {
  app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
  });
};

const dbConnection = () => {
  const namespace = createNamespace("my-very-own-namespace");
  Sequelize.useCLS(namespace);

  const dbName = DB_CONFIG.dbName;
  const dbUser = DB_CONFIG.dbUser;
  const dbPassword = DB_CONFIG.dbPassword;
  const dbPort: any = DB_CONFIG.dbPort;
  const dbHost = DB_CONFIG.dbHost;
  const dialect: any = DB_CONFIG.dialect;

  const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect,
    host: dbHost,
    port: dbPort,
    logging: false,
    pool: {
      max: 20,
      min: 0,
      acquire: 100000,
    },
    //FOR HEROUKU DB ERROR
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });

  try {
    sequelize.authenticate();
    sequelize.sync();

    console.log("Database connected...");
  } catch (error) {
    console.log("<----------- CAN NOT CONNECT TO THE DB ---------->");

    console.log(error);

    process.exit(1);
  }

  return sequelize;
};

export const server = {
  dataBaseConnection: dbConnection(),
  cacheConnection: redis.connect(),
  startServer,
  app,
};
