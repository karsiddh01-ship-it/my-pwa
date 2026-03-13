// Wait for page to fully load before running
document.addEventListener('DOMContentLoaded', function() {

  // Find the h1 element and change its text
  const heading = document.querySelector('h1');
  heading.textContent = 'Welcome, Sid — Dashboard Ready';

  // Log a message to DevTools console
  console.log('Dashboard loaded successfully');

});