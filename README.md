# 🛍️ E-Commerce Automation Suite (Playwright)

## 🎯 Project Overview
This project is a **professional Playwright automation framework** built for the demo e-commerce website [SauceDemo](https://www.saucedemo.com/).  
It covers **UI**, **API**, **Cross-Browser**, and **CI/CD pipeline** — simulating a real QA automation environment.

---

## 🧱 Features
- 🔐 **Login Automation** – Valid/Invalid users (data-driven from JSON)
- 🛒 **Product & Cart Automation** – Add/remove products, validate totals
- 📦 **Checkout Flow** – Form validation & order completion
- 🌐 **API Tests** – Login & Product data verification
- 📊 **Reports** – Playwright HTML + Allure integration
- 🧩 **Cross-Browser Testing** – Chromium, Firefox, Safari
- ⚙️ **CI/CD Pipeline** – GitHub Actions automation
- 🧠 **Page Object Model (POM)** for clean structure

---

## 🗂️ Project Structure

ecommerce-automation-playwright/
├── tests/
│ ├── login.test.js
│ ├── product.test.js
│ ├── cart.test.js
│ ├── checkout.test.js
│ ├── api.test.js
├── pages/
│ ├── LoginPage.js
│ ├── ProductPage.js
│ ├── CartPage.js
│ └── CheckoutPage.js
├── test-data/
│ └── users.json
├── utils/
│ └── helpers.js
├── playwright.config.js
├── package.json
└── README.md

---

## 🚀 Run Locally

```bash
# Clone repo
git clone https://github.com/<your-username>/ecommerce-automation-playwright.git
cd ecommerce-automation-playwright

# Install dependencies
npm install

# Run tests
npx playwright test

# Open HTML Report
npx playwright show-report
