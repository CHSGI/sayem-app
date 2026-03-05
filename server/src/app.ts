import express from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import authRoutes from "./routes/auth";
import { errorHandler } from "./middleware/error";
import { swaggerDocument } from "./config/swagger";
import { env } from "./config/env";

const app = express();

const isWildcard = env.CORS_ORIGIN === "*";
app.use(
  cors({
    origin: isWildcard ? true : env.CORS_ORIGIN.split(",").map((o) => o.trim()),
    credentials: !isWildcard,
  }),
);
app.use(morgan("dev"));
app.use(express.json({ limit: "1mb" }));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  customSiteTitle: "Sayem Route API Docs",
  customCss: ".swagger-ui .topbar { display: none }",
}));

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "sayem-api" });
});

app.use("/api/auth", authRoutes);

app.use(errorHandler);

export default app;
