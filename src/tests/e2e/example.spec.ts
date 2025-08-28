import {expect, Locator, test} from "@playwright/test";

test.describe.configure({mode: 'parallel'});
 
 
 test("Example Test1", async({page})=>{
    await page.goto("https://playwright.dev/");
 
    await expect(page).toHaveTitle(/Playwright/);
    let getStartedLink: Locator=page.locator("//a[text()='Get started");

});

 test("Example Test2", async({page})=>{
    await page.goto("https://playwright.dev/");
 
    await expect(page).toHaveTitle(/Playwright/);
    let getStartedLink: Locator=page.locator("//a[text()='Get started");

});

 test("Example Test3", async({page})=>{
    await page.goto("https://playwright.dev/");
 
    await expect(page).toHaveTitle(/Playwright/);
    let getStartedLink: Locator=page.locator("//a[text()='Get started");

});

 test("Example Test4", async({page})=>{
    await page.goto("https://playwright.dev/");
 
    await expect(page).toHaveTitle(/Playwright/);
    let getStartedLink: Locator=page.locator("//a[text()='Get started");

})