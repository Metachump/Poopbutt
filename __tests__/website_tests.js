const testCases = [
  // Test case for text-to-image functionality
  { input: 'Hello, World!', expectedOutput: 'image1.png' },
  { input: 'Python is great', expectedOutput: 'image2.png' },

  // Test case for payment processing
  { input: { amount: 25.0, currency: 'USD', cardNumber: '4242424242424242', expMonth: 12, expYear: 2025, cvc: '123' }, expectedOutput: 'success' },

  // Test case for responsive design
  { input: { width: 320, height: 480 }, expectedOutput: 'mobileView' },
  { input: { width: 1024, height: 768 }, expectedOutput: 'desktopView' },

  // Test case for SEO
  { input: 'metaDescription', expectedOutput: 'Create and purchase custom shirts with unique text-to-image designs' },
  { input: 'metaKeywords', expectedOutput: 'custom shirts, text-to-image, personalized' }
];