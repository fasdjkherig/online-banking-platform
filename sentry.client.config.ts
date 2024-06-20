import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://8cf7756fe554f1abd89bc5f16fdc1d83@o4507456912490496.ingest.de.sentry.io/4507456919830608",

  integrations: [Sentry.replayIntegration()],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
