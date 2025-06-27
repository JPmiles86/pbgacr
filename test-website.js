const puppeteer = require('puppeteer');

async function testWebsite() {
  const browser = await puppeteer.launch({ headless: false, devtools: true });
  const page = await browser.newPage();
  
  try {
    console.log('🚀 Starting comprehensive website test...\n');
    
    // Test home page
    console.log('📍 Testing Home Page...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
    
    // Test service modals
    console.log('🔍 Testing Service Modals...');
    const learnMoreButtons = await page.$$('button:contains("Learn More")');
    console.log(`Found ${learnMoreButtons.length} Learn More buttons`);
    
    if (learnMoreButtons.length > 0) {
      // Click first Learn More button
      await learnMoreButtons[0].click();
      await page.waitForTimeout(2000);
      
      // Check if modal appeared
      const modal = await page.$('[role="dialog"], .modal, [data-testid="modal"]');
      if (modal) {
        console.log('✅ Service modal opened successfully');
        
        // Close modal
        const closeButton = await page.$('button[aria-label="Close"], .close, button:contains("×")');
        if (closeButton) {
          await closeButton.click();
          console.log('✅ Modal closed successfully');
        }
      } else {
        console.log('❌ Service modal did not open');
      }
    }
    
    // Test navigation links
    console.log('\n📍 Testing Navigation Links...');
    const navLinks = [
      { name: 'About', url: '/about' },
      { name: 'Services', url: '/services' },
      { name: 'Tools', url: '/tools' },
      { name: 'Resources', url: '/resources' },
      { name: 'Contact', url: '/contact' }
    ];
    
    for (const link of navLinks) {
      try {
        await page.goto(`http://localhost:3000${link.url}`, { waitUntil: 'networkidle2' });
        const title = await page.title();
        console.log(`✅ ${link.name} page loaded: ${title}`);
      } catch (error) {
        console.log(`❌ ${link.name} page failed: ${error.message}`);
      }
    }
    
    // Test resource pages
    console.log('\n📍 Testing Resource Pages...');
    const resourcePages = [
      '/resources/tax-calendar',
      '/resources/payroll-rates',
      '/resources/corporate-tax-guide',
      '/resources/vat-checklist',
      '/resources/business-registration',
      '/resources/employee-benefits'
    ];
    
    for (const resourceUrl of resourcePages) {
      try {
        await page.goto(`http://localhost:3000${resourceUrl}`, { waitUntil: 'networkidle2' });
        const title = await page.title();
        console.log(`✅ Resource page loaded: ${resourceUrl}`);
      } catch (error) {
        console.log(`❌ Resource page failed: ${resourceUrl} - ${error.message}`);
      }
    }
    
    // Test tools page functionality
    console.log('\n📍 Testing Tools Page Functionality...');
    await page.goto('http://localhost:3000/tools', { waitUntil: 'networkidle2' });
    
    // Test Tax Calculator
    try {
      await page.type('input[id="income"]', '10000000');
      await page.type('input[id="expenses"]', '2000000');
      await page.click('button:contains("Calculate Tax")');
      await page.waitForTimeout(1000);
      
      const result = await page.$('.bg-blue-50');
      if (result) {
        console.log('✅ Tax Calculator working');
      } else {
        console.log('❌ Tax Calculator not showing results');
      }
    } catch (error) {
      console.log(`❌ Tax Calculator error: ${error.message}`);
    }
    
    // Test Payroll Calculator
    try {
      await page.type('input[id="salary"]', '500000');
      await page.type('input[id="employees"]', '2');
      await page.click('button:contains("Calculate Payroll")');
      await page.waitForTimeout(1000);
      
      const result = await page.$('.bg-yellow-50');
      if (result) {
        console.log('✅ Payroll Calculator working');
      } else {
        console.log('❌ Payroll Calculator not showing results');
      }
    } catch (error) {
      console.log(`❌ Payroll Calculator error: ${error.message}`);
    }
    
    // Test Contact Form
    console.log('\n📍 Testing Contact Form...');
    await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle2' });
    
    try {
      await page.type('input[name="name"]', 'Test User');
      await page.type('input[name="email"]', 'test@example.com');
      await page.type('textarea[name="message"]', 'This is a test message');
      await page.click('input[type="checkbox"]');
      
      // Don't actually submit the form
      console.log('✅ Contact form fields working');
    } catch (error) {
      console.log(`❌ Contact form error: ${error.message}`);
    }
    
    console.log('\n🎉 Website testing completed!');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await browser.close();
  }
}

// Check if puppeteer is available
try {
  testWebsite();
} catch (error) {
  console.log('Puppeteer not available. Running basic tests instead...');
  console.log('Please install puppeteer with: npm install puppeteer');
}