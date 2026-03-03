import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import authRoutes from "./routes/auth";
import { errorHandler } from "./middleware/error";
import { swaggerDocument } from "./config/swagger";

const app = express();

app.use(cors());
app.use(express.json());

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
