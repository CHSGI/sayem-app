import "dotenv/config";
import app from "./app";
import { env } from "./config/env";
import { purgeExpiredRefreshTokens } from "./services/auth";

const PURGE_INTERVAL_MS = 60 * 60 * 1000; // 1 hour

app.listen(env.PORT, () => {
  console.log(`Sayem API running on http://localhost:${env.PORT}`);
  purgeExpiredRefreshTokens().catch((err) =>
    console.error("Initial refresh token purge failed:", err)
  );
  setInterval(() => {
    purgeExpiredRefreshTokens().catch((err) =>
      console.error("Scheduled refresh token purge failed:", err)
    );
  }, PURGE_INTERVAL_MS);
});
