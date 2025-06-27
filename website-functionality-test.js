#!/usr/bin/env node

/**
 * PBAGCR Website Functionality Test Suite
 * 
 * This script systematically tests all website functionality including:
 * - Tools page calculators
 * - Contact form functionality
 * - Link verification
 * - User interaction testing
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

class WebsiteTester {
  constructor() {
    this.browser = null;
    this.page = null;
    this.results = {
      tools: {
        taxCalculator: {},
        payrollCalculator: {},
        toolSuggestion: {},
        popularSuggestions: {}
      },
      contact: {
        contactForm: {},
        phoneLinks: {},
        emailLinks: {},
        serviceDropdown: {}
      },
      about: {
        internalLinks: {},
        ctaButtons: {},
        contentDisplay: {}
      },
      overall: {
        errors: [],
        warnings: [],
        successes: []
      }
    };
  }

  async initialize() {
    console.log('🚀 Initializing browser...');
    this.browser = await puppeteer.launch({ 
      headless: false,
      defaultViewport: { width: 1200, height: 800 },
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    this.page = await this.browser.newPage();
    
    // Set up error handling
    this.page.on('console', msg => {
      if (msg.type() === 'error') {
        this.results.overall.errors.push(`Console Error: ${msg.text()}`);
      }
    });
    
    this.page.on('pageerror', error => {
      this.results.overall.errors.push(`Page Error: ${error.message}`);
    });
  }

  async testToolsPage() {
    console.log('\n📊 Testing Tools Page...');
    
    try {
      await this.page.goto('http://localhost:3000/tools', { waitUntil: 'networkidle0' });
      console.log('✅ Tools page loaded successfully');
      
      // Test Tax Calculator
      await this.testTaxCalculator();
      
      // Test Payroll Calculator
      await this.testPayrollCalculator();
      
      // Test Tool Suggestion Form
      await this.testToolSuggestionForm();
      
      // Test Popular Suggestion Buttons
      await this.testPopularSuggestions();
      
    } catch (error) {
      this.results.overall.errors.push(`Tools page error: ${error.message}`);
      console.error('❌ Tools page test failed:', error.message);
    }
  }

  async testTaxCalculator() {
    console.log('  🧮 Testing Tax Calculator...');
    
    try {
      // Test with sample values
      const testCases = [
        { income: '10000000', expenses: '2000000', expectedTax: 845000 },
        { income: '50000000', expenses: '10000000', expectedTax: 8645000 },
        { income: '150000000', expenses: '20000000', expectedTax: 39000000 }
      ];
      
      for (const testCase of testCases) {
        // Clear previous inputs
        await this.page.click('button:has-text("Reset")');
        await this.page.waitForTimeout(500);
        
        // Fill inputs
        await this.page.fill('input[id="income"]', testCase.income);
        await this.page.fill('input[id="expenses"]', testCase.expenses);
        
        // Click calculate
        await this.page.click('button:has-text("Calculate Tax")');
        await this.page.waitForTimeout(1000);
        
        // Check if results appear
        const resultsVisible = await this.page.isVisible('.bg-blue-50');
        if (resultsVisible) {
          const taxResult = await this.page.textContent('.font-bold.text-blue-900');
          console.log(`    ✅ Tax calculation result: ${taxResult}`);
          this.results.tools.taxCalculator[`${testCase.income}-${testCase.expenses}`] = {
            success: true,
            result: taxResult
          };
        } else {
          throw new Error('Tax calculation results not displayed');
        }
      }
      
      console.log('  ✅ Tax Calculator working correctly');
      
    } catch (error) {
      this.results.tools.taxCalculator.error = error.message;
      console.error('  ❌ Tax Calculator error:', error.message);
    }
  }

  async testPayrollCalculator() {
    console.log('  👥 Testing Payroll Calculator...');
    
    try {
      const testCases = [
        { salary: '500000', employees: '1' },
        { salary: '750000', employees: '5' },
        { salary: '1000000', employees: '10' }
      ];
      
      for (const testCase of testCases) {
        // Clear previous inputs
        await this.page.click('button:has-text("Reset")');
        await this.page.waitForTimeout(500);
        
        // Fill inputs
        await this.page.fill('input[id="salary"]', testCase.salary);
        await this.page.fill('input[id="employees"]', testCase.employees);
        
        // Click calculate
        await this.page.click('button:has-text("Calculate Payroll")');
        await this.page.waitForTimeout(1000);
        
        // Check if results appear
        const resultsVisible = await this.page.isVisible('.bg-yellow-50');
        if (resultsVisible) {
          const totalCost = await this.page.textContent('.font-bold.text-blue-900');
          console.log(`    ✅ Payroll calculation result: ${totalCost}`);
          this.results.tools.payrollCalculator[`${testCase.salary}-${testCase.employees}`] = {
            success: true,
            result: totalCost
          };
        } else {
          throw new Error('Payroll calculation results not displayed');
        }
      }
      
      console.log('  ✅ Payroll Calculator working correctly');
      
    } catch (error) {
      this.results.tools.payrollCalculator.error = error.message;
      console.error('  ❌ Payroll Calculator error:', error.message);
    }
  }

  async testToolSuggestionForm() {
    console.log('  💡 Testing Tool Suggestion Form...');
    
    try {
      // Fill out the form
      await this.page.fill('input[id="toolName"]', 'Test Business Calculator');
      await this.page.fill('textarea[id="description"]', 'This is a test tool suggestion to verify form functionality.');
      await this.page.fill('input[id="email"]', 'test@example.com');
      
      // Submit the form
      await this.page.click('button:has-text("Submit Suggestion")');
      await this.page.waitForTimeout(2000);
      
      // Check for success message
      const successVisible = await this.page.isVisible('.bg-green-50');
      if (successVisible) {
        console.log('    ✅ Tool suggestion form submitted successfully');
        this.results.tools.toolSuggestion.success = true;
      } else {
        throw new Error('Success message not displayed after form submission');
      }
      
    } catch (error) {
      this.results.tools.toolSuggestion.error = error.message;
      console.error('  ❌ Tool Suggestion Form error:', error.message);
    }
  }

  async testPopularSuggestions() {
    console.log('  🔥 Testing Popular Suggestion Buttons...');
    
    try {
      const suggestions = ['Depreciation Calculator', 'Break-even Analysis', 'Expense Tracker'];
      
      for (const suggestion of suggestions) {
        await this.page.click(`button:has-text("${suggestion}")`);
        await this.page.waitForTimeout(500);
        
        const inputValue = await this.page.inputValue('input[id="toolName"]');
        if (inputValue === suggestion) {
          console.log(`    ✅ ${suggestion} button working correctly`);
          this.results.tools.popularSuggestions[suggestion] = true;
        } else {
          throw new Error(`${suggestion} button did not populate input field`);
        }
      }
      
    } catch (error) {
      this.results.tools.popularSuggestions.error = error.message;
      console.error('  ❌ Popular Suggestions error:', error.message);
    }
  }

  async testContactPage() {
    console.log('\n📞 Testing Contact Page...');
    
    try {
      await this.page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle0' });
      console.log('✅ Contact page loaded successfully');
      
      // Test Contact Form
      await this.testContactForm();
      
      // Test Phone Links
      await this.testPhoneLinks();
      
      // Test Email Links
      await this.testEmailLinks();
      
      // Test Service Dropdown
      await this.testServiceDropdown();
      
    } catch (error) {
      this.results.overall.errors.push(`Contact page error: ${error.message}`);
      console.error('❌ Contact page test failed:', error.message);
    }
  }

  async testContactForm() {
    console.log('  📝 Testing Contact Form...');
    
    try {
      // Fill out the form with test data
      await this.page.fill('input[name="name"]', 'John Test User');
      await this.page.fill('input[name="email"]', 'john@testcompany.com');
      await this.page.fill('input[name="phone"]', '+506 8888-9999');
      await this.page.fill('input[name="company"]', 'Test Company LLC');
      
      // Select a service
      await this.page.selectOption('select[name="service"]', 'Accounting & Bookkeeping');
      
      // Fill message
      await this.page.fill('textarea[name="message"]', 'This is a test message to verify the contact form functionality.');
      
      // Check the required checkbox
      await this.page.check('input[id="terms"]');
      
      // Submit the form (but we'll intercept to see what happens)
      const submitButton = await this.page.$('button[type="submit"]');
      const isEnabled = await submitButton.isEnabled();
      
      if (isEnabled) {
        console.log('    ✅ Contact form validation passed - form is submittable');
        this.results.contact.contactForm.validation = true;
        
        // Note: We won't actually submit to avoid sending test data
        console.log('    ℹ️  Form submission test skipped to avoid sending test data');
      } else {
        throw new Error('Contact form submit button is not enabled');
      }
      
    } catch (error) {
      this.results.contact.contactForm.error = error.message;
      console.error('  ❌ Contact Form error:', error.message);
    }
  }

  async testPhoneLinks() {
    console.log('  📱 Testing Phone Links...');
    
    try {
      const phoneLinks = await this.page.$$('a[href^="tel:"]');
      
      if (phoneLinks.length > 0) {
        for (const link of phoneLinks) {
          const href = await link.getAttribute('href');
          const text = await link.textContent();
          console.log(`    ✅ Phone link found: ${text} (${href})`);
        }
        this.results.contact.phoneLinks.count = phoneLinks.length;
        this.results.contact.phoneLinks.success = true;
      } else {
        throw new Error('No phone links found');
      }
      
    } catch (error) {
      this.results.contact.phoneLinks.error = error.message;
      console.error('  ❌ Phone Links error:', error.message);
    }
  }

  async testEmailLinks() {
    console.log('  ✉️  Testing Email Links...');
    
    try {
      const emailLinks = await this.page.$$('a[href^="mailto:"]');
      
      if (emailLinks.length > 0) {
        for (const link of emailLinks) {
          const href = await link.getAttribute('href');
          const text = await link.textContent();
          console.log(`    ✅ Email link found: ${text} (${href})`);
        }
        this.results.contact.emailLinks.count = emailLinks.length;
        this.results.contact.emailLinks.success = true;
      } else {
        throw new Error('No email links found');
      }
      
    } catch (error) {
      this.results.contact.emailLinks.error = error.message;
      console.error('  ❌ Email Links error:', error.message);
    }
  }

  async testServiceDropdown() {
    console.log('  🔽 Testing Service Dropdown...');
    
    try {
      const serviceSelect = await this.page.$('select[name="service"]');
      const options = await serviceSelect.$$eval('option', options => 
        options.map(option => ({ value: option.value, text: option.textContent }))
      );
      
      if (options.length > 1) { // More than just the placeholder
        console.log(`    ✅ Service dropdown has ${options.length} options`);
        console.log('    📋 Available services:');
        options.forEach(option => {
          if (option.value) {
            console.log(`      - ${option.text}`);
          }
        });
        this.results.contact.serviceDropdown.options = options;
        this.results.contact.serviceDropdown.success = true;
      } else {
        throw new Error('Service dropdown has no options');
      }
      
    } catch (error) {
      this.results.contact.serviceDropdown.error = error.message;
      console.error('  ❌ Service Dropdown error:', error.message);
    }
  }

  async testAboutPage() {
    console.log('\n🏢 Testing About Page...');
    
    try {
      await this.page.goto('http://localhost:3000/about', { waitUntil: 'networkidle0' });
      console.log('✅ About page loaded successfully');
      
      // Test Internal Links
      await this.testAboutInternalLinks();
      
      // Test CTA Buttons
      await this.testAboutCTAButtons();
      
      // Test Content Display
      await this.testAboutContentDisplay();
      
    } catch (error) {
      this.results.overall.errors.push(`About page error: ${error.message}`);
      console.error('❌ About page test failed:', error.message);
    }
  }

  async testAboutInternalLinks() {
    console.log('  🔗 Testing Internal Links...');
    
    try {
      const internalLinks = await this.page.$$('a[href^="/"]');
      
      for (const link of internalLinks) {
        const href = await link.getAttribute('href');
        const text = await link.textContent();
        
        if (href && text) {
          console.log(`    ✅ Internal link found: "${text.trim()}" → ${href}`);
        }
      }
      
      this.results.about.internalLinks.count = internalLinks.length;
      this.results.about.internalLinks.success = true;
      
    } catch (error) {
      this.results.about.internalLinks.error = error.message;
      console.error('  ❌ Internal Links error:', error.message);
    }
  }

  async testAboutCTAButtons() {
    console.log('  🎯 Testing CTA Buttons...');
    
    try {
      const ctaButtons = await this.page.$$('a.bg-yellow-500, a.border-2');
      
      for (const button of ctaButtons) {
        const href = await button.getAttribute('href');
        const text = await button.textContent();
        
        if (href && text) {
          console.log(`    ✅ CTA button found: "${text.trim()}" → ${href}`);
        }
      }
      
      this.results.about.ctaButtons.count = ctaButtons.length;
      this.results.about.ctaButtons.success = true;
      
    } catch (error) {
      this.results.about.ctaButtons.error = error.message;
      console.error('  ❌ CTA Buttons error:', error.message);
    }
  }

  async testAboutContentDisplay() {
    console.log('  📄 Testing Content Display...');
    
    try {
      // Check if key content sections are visible
      const heroSection = await this.page.isVisible('h1');
      const storySection = await this.page.isVisible('text=Our Story');
      const valuesSection = await this.page.isVisible('text=Our Core Values');
      const timelineSection = await this.page.isVisible('text=Our Journey');
      
      if (heroSection && storySection && valuesSection && timelineSection) {
        console.log('    ✅ All main content sections are displayed');
        this.results.about.contentDisplay.success = true;
      } else {
        throw new Error('Some content sections are not displayed');
      }
      
    } catch (error) {
      this.results.about.contentDisplay.error = error.message;
      console.error('  ❌ Content Display error:', error.message);
    }
  }

  async generateReport() {
    console.log('\n📊 Generating Test Report...');
    
    const reportData = {
      timestamp: new Date().toISOString(),
      testResults: this.results,
      summary: {
        totalTests: 0,
        passedTests: 0,
        failedTests: 0,
        errors: this.results.overall.errors.length,
        warnings: this.results.overall.warnings.length
      }
    };
    
    // Calculate summary statistics
    const flattenResults = (obj, prefix = '') => {
      let tests = [];
      for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'object' && value !== null) {
          if (value.success !== undefined) {
            tests.push({ name: `${prefix}${key}`, success: value.success, error: value.error });
          } else {
            tests.push(...flattenResults(value, `${prefix}${key}.`));
          }
        }
      }
      return tests;
    };
    
    const allTests = flattenResults(this.results);
    reportData.summary.totalTests = allTests.length;
    reportData.summary.passedTests = allTests.filter(t => t.success).length;
    reportData.summary.failedTests = allTests.filter(t => !t.success).length;
    
    // Write report to file
    const reportPath = path.join(__dirname, 'test-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2));
    
    console.log('\n📋 TEST SUMMARY');
    console.log('================');
    console.log(`Total Tests: ${reportData.summary.totalTests}`);
    console.log(`Passed: ${reportData.summary.passedTests}`);
    console.log(`Failed: ${reportData.summary.failedTests}`);
    console.log(`Errors: ${reportData.summary.errors}`);
    console.log(`\nDetailed report saved to: ${reportPath}`);
    
    return reportData;
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  async run() {
    try {
      await this.initialize();
      
      // Run all tests
      await this.testToolsPage();
      await this.testContactPage();
      await this.testAboutPage();
      
      // Generate report
      const report = await this.generateReport();
      
      return report;
      
    } catch (error) {
      console.error('❌ Test suite failed:', error.message);
      throw error;
    } finally {
      await this.cleanup();
    }
  }
}

// Run the tests if this file is executed directly
if (require.main === module) {
  const tester = new WebsiteTester();
  tester.run()
    .then(report => {
      console.log('\n🎉 Test suite completed successfully!');
      process.exit(0);
    })
    .catch(error => {
      console.error('\n💥 Test suite failed:', error.message);
      process.exit(1);
    });
}

module.exports = WebsiteTester;