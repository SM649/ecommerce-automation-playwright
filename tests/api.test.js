import { test, expect } from '@playwright/test';

const AUTH_URL = 'https://fakestoreapi.com/auth/login';
const PRODUCT_URL = 'https://fakestoreapi.com/products';

test.describe('API Automation - E-commerce Flow', () => {

  // ✅ 1. Valid Login (accepts 200 or 201)
  test('🔐 Login API - Valid Credentials', async ({ request }) => {
    const response = await request.post(AUTH_URL, {
      data: {
        username: 'mor_2314',
        password: '83r5^_'
      }
    });

    console.log('Status Code:', response.status());
    expect([200, 201]).toContain(response.status());

    const body = await response.json();
    console.log('✅ Login Response:', body);

    expect(body).toHaveProperty('token');
  });

  // ✅ 2. Invalid Login (handle non-JSON response)
  test('🚫 Login API - Invalid Credentials', async ({ request }) => {
    const response = await request.post(AUTH_URL, {
      data: {
        username: 'wrong_user',
        password: 'bad_pass'
      }
    });

    console.log('Status Code:', response.status());
    expect(response.status()).toBe(401);

    // Some APIs return text instead of JSON, so handle both safely
    let bodyText;
    try {
      bodyText = await response.json();
    } catch {
      bodyText = await response.text();
    }

    console.log('❌ Invalid Login Response:', bodyText);
    expect(response.status()).toBe(401);
  });

  // ✅ 3. Product Data
  test('📦 Get Product Data API', async ({ request }) => {
    const response = await request.get(PRODUCT_URL);
    expect(response.status()).toBe(200);

    const products = await response.json();
    console.log('🛍️ Total Products:', products.length);

    expect(Array.isArray(products)).toBeTruthy();
    expect(products.length).toBeGreaterThan(0);
  });

});
