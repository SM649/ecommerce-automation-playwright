// playwright.config.js

import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests", // folder where test files live
  retries: 1, // re-run failed tests once
  reporter: [
  ["line"],
  ["allure-playwright"],
  ["html", { open: "never" }]
],
  use: {
    headless: false, // run tests without opening the browser
    screenshot: "only-on-failure", // take screenshots when test fails
    video: "retain-on-failure", // record videos for failed tests
    baseURL: "https://www.saucedemo.com/", // test site
    trace: 'on-first-retry',
  },
  // projects: [
  //   {
  //     name: 'Chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },
    
  //   {
  //     name: 'Firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },
  //   {
  //     name: 'WebKit',
  //     use: { ...devices['Desktop Safari'] },
  //   },
  // ]

});
