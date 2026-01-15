# Automation Exercise Website - Comprehensive Test Plan

## Application Overview

Automation Exercise is a full-fledged e-commerce practice website designed for QA engineers to practice automation testing. The website includes user authentication (signup/login), product browsing and management, shopping cart functionality, checkout process, contact form submission, and various testing scenarios. The site features product categories, brand filters, search functionality, and a comprehensive test cases section with predefined automation scenarios.

## Test Scenarios

### 1. User Authentication

**Seed:** `tests/seed.spec.ts`

#### 1.1. Test Case 1: Register User with Valid Data

**File:** `tests/authentication/register-valid.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/login
  2. Verify the signup form is visible with 'New User Signup!' section
  3. Enter a unique name in the Name field
  4. Enter a unique email address in the Email field
  5. Click the 'Signup' button
  6. Verify the account registration form appears with title 'Enter Account Information'
  7. Fill in all required fields (password, date of birth, first name, last name, address, country, state, city, zipcode, mobile number)
  8. Select appropriate options for newsletter and special offers if present
  9. Click the 'Create Account' button

**Expected Results:**
  - User successfully registers with the provided details
  - Account created message is displayed
  - User is logged in and redirected to home page or account page

#### 1.2. Test Case 2: Register User with Existing Email

**File:** `tests/authentication/register-existing-email.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/login
  2. Enter a name in the Name field
  3. Enter an email address that already exists in the system (e.g., test@example.com)
  4. Click the 'Signup' button
  5. Observe the form validation

**Expected Results:**
  - Error message appears indicating email already exists
  - User is not registered
  - User remains on the signup page

#### 1.3. Test Case 3: Login with Valid Credentials

**File:** `tests/authentication/login-valid.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/login
  2. Verify the 'Login to your account' section is visible
  3. Enter a valid registered email address
  4. Enter the correct password for that account
  5. Click the 'Login' button
  6. Wait for page redirect

**Expected Results:**
  - User successfully logs in
  - User is redirected to the home page or account dashboard
  - Logged-in username appears in the header or account section

#### 1.4. Test Case 4: Login with Invalid Credentials

**File:** `tests/authentication/login-invalid.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/login
  2. Enter an invalid email address (e.g., invalid@test.com)
  3. Enter an incorrect password
  4. Click the 'Login' button
  5. Observe the error handling

**Expected Results:**
  - Error message displays indicating 'Your email or password is incorrect'
  - User is not logged in
  - User remains on the login page

#### 1.5. Test Case 5: Logout User

**File:** `tests/authentication/logout.spec.ts`

**Steps:**
  1. Log in with valid credentials (Test Case 3)
  2. Locate the logout button or option in the header/navigation menu
  3. Click the logout button
  4. Observe the page behavior

**Expected Results:**
  - User successfully logs out
  - User is redirected to home page
  - Logout confirmation message may appear
  - Login link appears in the navigation

#### 1.6. Test Case 6: Password Field Security

**File:** `tests/authentication/password-security.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/login
  2. Click on the password field in the login form
  3. Verify the password field type attribute
  4. Enter a password
  5. Observe the password characters

**Expected Results:**
  - Password field is of type 'password' or uses proper masking
  - Password characters are masked/hidden (not visible as plain text)
  - Passwords are not displayed in the field

#### 1.7. Test Case 7: Email Field Validation

**File:** `tests/authentication/email-validation.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/login
  2. Try entering invalid email formats in the signup email field (e.g., 'invalidemail', 'test@', '@domain.com')
  3. Try entering valid email formats
  4. Observe validation behavior

**Expected Results:**
  - Invalid email formats show validation error or warning
  - Valid email formats are accepted
  - Appropriate error messages guide the user

### 2. Product Browsing and Management

**Seed:** `tests/seed.spec.ts`

#### 2.1. Test Case 8: View All Products

**File:** `tests/products/view-all-products.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/
  2. Click on the 'Products' link in the navigation menu
  3. Wait for the products page to load
  4. Verify the product list is displayed

**Expected Results:**
  - All Products page loads successfully
  - Product grid is displayed with multiple products
  - Each product shows: product image, price, name, and 'Add to cart' button
  - Product count is visible or can be determined by scrolling

#### 2.2. Test Case 9: View Product Details

**File:** `tests/products/view-product-details.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/products
  2. Locate a product in the list
  3. Click the 'View Product' link below any product
  4. Wait for product detail page to load

**Expected Results:**
  - Product details page opens successfully
  - Product name, price, availability, rating, and description are displayed
  - Product details include: category, brand, product code, condition, and stock status

#### 2.3. Test Case 10: Search Products

**File:** `tests/products/search-product.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/products
  2. Locate the search box with placeholder 'Search Product'
  3. Enter a product name (e.g., 'Tshirt')
  4. Click the search button (magnifying glass icon)
  5. Wait for search results to load

**Expected Results:**
  - Search results display relevant products matching the keyword
  - Product list is filtered to show only matching items
  - Empty search results message appears if no matches found

#### 2.4. Test Case 11: Filter Products by Category

**File:** `tests/products/filter-by-category.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/products
  2. Verify the Category section in the sidebar with options: Women, Men, Kids
  3. Click on a category (e.g., 'Women')
  4. Wait for the product list to update

**Expected Results:**
  - Products are filtered by the selected category
  - Only products from the selected category are displayed
  - Product list updates without page reload or with smooth transition

#### 2.5. Test Case 12: Filter Products by Brand

**File:** `tests/products/filter-by-brand.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/products
  2. Verify the Brands section in the sidebar with multiple brand options (Polo, H&M, Madame, etc.)
  3. Click on a brand (e.g., 'Polo')
  4. Wait for the product list to update

**Expected Results:**
  - Products are filtered by the selected brand
  - Only products from the selected brand are displayed (e.g., 6 Polo products)
  - Product list updates accordingly

#### 2.6. Test Case 13: View Multiple Categories and Subcategories

**File:** `tests/products/view-categories.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/
  2. Verify the Category section shows Women, Men, Kids categories
  3. Click on 'Women' category to expand or navigate
  4. Observe if subcategories appear

**Expected Results:**
  - Categories are displayed clearly in the sidebar
  - Clicking a category shows its products
  - Subcategories are visible if they exist

#### 2.7. Test Case 14: Product Reviews and Ratings

**File:** `tests/products/product-reviews.spec.ts`

**Steps:**
  1. Navigate to a product details page (Test Case 9)
  2. Scroll down to find the reviews section
  3. Verify review form is present with fields for name, email, and review text
  4. Fill in the review form with valid data
  5. Click 'Submit' to post the review

**Expected Results:**
  - Review form is accessible on product detail page
  - User can enter their name, email, and review comment
  - Review is successfully submitted
  - New review appears in the reviews section

#### 2.8. Test Case 15: Add Product to Cart from Listing

**File:** `tests/products/add-to-cart-listing.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/products or home page
  2. Locate a product in the product list
  3. Click the 'Add to cart' button on the product card
  4. Observe the confirmation or cart update

**Expected Results:**
  - Product is successfully added to the cart
  - Confirmation message appears (optional)
  - Cart count/icon updates in the header
  - User can continue shopping or proceed to checkout

### 3. Shopping Cart and Checkout

**Seed:** `tests/seed.spec.ts`

#### 3.1. Test Case 16: View Shopping Cart

**File:** `tests/cart/view-cart.spec.ts`

**Steps:**
  1. Add one or more products to cart (Test Case 15)
  2. Click the 'Cart' link in the navigation menu
  3. Wait for cart page to load

**Expected Results:**
  - Cart page loads and displays all added products
  - Product details shown: product name, price, quantity, and total
  - Cart summary shows total amount
  - Buttons for Continue Shopping and Checkout are visible

#### 3.2. Test Case 17: Empty Cart Message

**File:** `tests/cart/empty-cart.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/view_cart without adding any products
  2. Observe the cart page content

**Expected Results:**
  - Empty cart message displays: 'Cart is empty! Click here to buy products.'
  - A link to products page is provided
  - No product listings appear in the cart

#### 3.3. Test Case 18: Remove Product from Cart

**File:** `tests/cart/remove-from-cart.spec.ts`

**Steps:**
  1. Add products to cart and navigate to cart page (Test Case 16)
  2. Locate the remove button/icon for a product (usually an X or trash icon)
  3. Click the remove button
  4. Wait for the cart to update

**Expected Results:**
  - Product is removed from the cart
  - Cart updates and product no longer appears
  - Cart total is recalculated
  - Empty cart message appears if all products are removed

#### 3.4. Test Case 19: Update Product Quantity in Cart

**File:** `tests/cart/update-quantity.spec.ts`

**Steps:**
  1. Add a product to cart and view cart
  2. Locate the quantity field for the product
  3. Change the quantity (increment/decrement)
  4. Observe the cart update

**Expected Results:**
  - Quantity field accepts numeric input
  - Cart total updates based on new quantity
  - Updated quantity persists or is immediately reflected

#### 3.5. Test Case 20: Cart Persistence After Login

**File:** `tests/cart/cart-persistence.spec.ts`

**Steps:**
  1. Add products to cart without logging in
  2. Click on 'Signup / Login' link
  3. Log in with valid credentials
  4. Navigate back to cart

**Expected Results:**
  - Products added to cart are still present after login
  - Cart items persist across login/logout
  - Cart data is properly maintained in the user session

#### 3.6. Test Case 21: Proceed to Checkout

**File:** `tests/checkout/proceed-checkout.spec.ts`

**Steps:**
  1. Add products to cart
  2. View cart
  3. Click 'Proceed To Checkout' or 'Checkout' button

**Expected Results:**
  - User is taken to checkout page
  - If not logged in, user is prompted to login or register
  - If logged in, checkout page displays shipping and billing information

#### 3.7. Test Case 22: Checkout as Guest (Register while Checkout)

**File:** `tests/checkout/checkout-register.spec.ts`

**Steps:**
  1. Add products to cart
  2. Proceed to checkout without logging in
  3. Select 'Register' option if available during checkout
  4. Fill in the registration form with new user details
  5. Fill in shipping and billing address information
  6. Select payment method
  7. Complete the purchase

**Expected Results:**
  - New account is created during checkout
  - User is registered with provided email and password
  - Order is placed successfully
  - Confirmation page or email is displayed

#### 3.8. Test Case 23: Checkout for Registered User

**File:** `tests/checkout/checkout-registered.spec.ts`

**Steps:**
  1. Log in with a registered account
  2. Add products to cart
  3. Click 'Cart'
  4. Click 'Proceed To Checkout'
  5. Verify pre-filled address information from account
  6. Select payment method if needed
  7. Click 'Place Order'

**Expected Results:**
  - Checkout page shows pre-filled address from account
  - User can review order summary
  - Order is placed successfully
  - Order confirmation is displayed

#### 3.9. Test Case 24: Place Order - Login Before Checkout

**File:** `tests/checkout/place-order-login.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/login
  2. Log in with valid credentials
  3. Add products to cart
  4. Proceed to checkout
  5. Fill in/confirm shipping address
  6. Select payment method
  7. Click 'Place Order'

**Expected Results:**
  - User successfully logs in
  - Cart items are preserved after login
  - Checkout page displays
  - Order is successfully placed with confirmation

#### 3.10. Test Case 25: View Order Invoice After Purchase

**File:** `tests/checkout/view-invoice.spec.ts`

**Steps:**
  1. Complete a purchase (Test Case 22 or 23)
  2. After order confirmation, look for 'Download Invoice' or 'View Invoice' button
  3. Click the button to download/view invoice

**Expected Results:**
  - Invoice is generated and available for download
  - Invoice contains order details, items, amounts, and dates
  - Invoice is in PDF or printable format

#### 3.11. Test Case 26: Address Details Verification in Checkout

**File:** `tests/checkout/verify-address.spec.ts`

**Steps:**
  1. Log in to account or register during checkout
  2. Proceed to checkout page
  3. Verify the display of shipping and billing addresses
  4. Confirm both addresses are shown correctly with full details

**Expected Results:**
  - Checkout page displays complete address information
  - Address format is clear with all fields visible
  - User can edit or modify address if needed

### 4. Contact Form and Communication

**Seed:** `tests/seed.spec.ts`

#### 4.1. Test Case 27: Submit Contact Form with Valid Data

**File:** `tests/contact/submit-contact-form.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/contact_us
  2. Verify the 'Contact Us' form is displayed with message: 'Note: Below contact form is for testing purpose.'
  3. Enter a name in the 'Name' field
  4. Enter a valid email address in the 'Email' field
  5. Enter a subject in the 'Subject' field
  6. Enter a message in the 'Your Message Here' text area
  7. Optionally attach a file using 'Choose File' button
  8. Click the 'Submit' button

**Expected Results:**
  - Form is successfully submitted
  - Success message appears: 'Success! Your details have been submitted successfully.'
  - Form fields are cleared or success page is displayed

#### 4.2. Test Case 28: Contact Form Field Validation

**File:** `tests/contact/form-validation.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/contact_us
  2. Try submitting the form with empty fields
  3. Try submitting with only some fields filled
  4. Try submitting with invalid email format

**Expected Results:**
  - Validation errors appear for empty required fields
  - Email field shows validation error for invalid format
  - Form prevents submission if required fields are empty

#### 4.3. Test Case 29: File Upload in Contact Form

**File:** `tests/contact/file-upload.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/contact_us
  2. Click 'Choose File' button in the contact form
  3. Select a valid file (PDF, image, or document)
  4. Verify the file is selected
  5. Submit the form

**Expected Results:**
  - File upload input opens file browser dialog
  - Selected file name displays in the form
  - File is included when form is submitted

#### 4.4. Test Case 30: Contact Form with Special Characters

**File:** `tests/contact/special-characters.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/contact_us
  2. Fill in the name field with special characters or unicode characters
  3. Fill in other fields with special characters
  4. Submit the form

**Expected Results:**
  - Form accepts and processes special characters correctly
  - No validation errors for special characters
  - Form submission succeeds with special character data

### 5. Homepage and Navigation

**Seed:** `tests/seed.spec.ts`

#### 5.1. Test Case 31: Verify Homepage Layout

**File:** `tests/homepage/verify-layout.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/
  2. Wait for page to fully load
  3. Verify navigation menu is visible with all links
  4. Verify featured products section is displayed
  5. Verify category and brand sections are visible

**Expected Results:**
  - Homepage loads completely
  - Navigation bar is visible with Home, Products, Cart, Signup/Login, Test Cases, API Testing, Video Tutorials, Contact us links
  - Featured Items section displays products with prices and 'Add to cart' buttons
  - Recommended Items section is visible
  - Category and Brand sections are displayed in sidebar

#### 5.2. Test Case 32: Scroll Up Functionality with Arrow Button

**File:** `tests/homepage/scroll-up-arrow.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/
  2. Scroll down to the bottom of the page
  3. Locate the scroll-up arrow button (usually at bottom right)
  4. Click the arrow button
  5. Observe page scroll behavior

**Expected Results:**
  - Arrow button is visible when page is scrolled down
  - Clicking the arrow smoothly scrolls the page to the top
  - User is brought to the top of the homepage

#### 5.3. Test Case 33: Scroll Up Without Arrow Button

**File:** `tests/homepage/scroll-up-no-arrow.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/
  2. Scroll down significantly to the bottom of the page
  3. Observe if any other scroll-up mechanism exists
  4. Use keyboard shortcut or alternative method if available to scroll up

**Expected Results:**
  - Page can be scrolled up using standard methods (scroll wheel, keyboard)
  - Scroll-up arrow may not be visible but scroll functionality works
  - Page scrolls smoothly to the top

#### 5.4. Test Case 34: Verify Featured Items Section

**File:** `tests/homepage/featured-items.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/
  2. Locate the 'Features Items' section on homepage
  3. Verify product carousel or grid is displayed
  4. Verify product details: image, price, name, and action buttons

**Expected Results:**
  - Featured Items section is prominent on homepage
  - Multiple featured products are displayed
  - Each product shows: image, price, name, 'Add to cart' button, and 'View Product' link

#### 5.5. Test Case 35: Verify Recommended Items Section

**File:** `tests/homepage/recommended-items.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/
  2. Scroll down to find the 'recommended items' section
  3. Verify carousel or grid of recommended products is displayed

**Expected Results:**
  - Recommended Items section is visible
  - Products are displayed in a carousel or grid format
  - 'Add to cart' buttons are functional for recommended items

#### 5.6. Test Case 36: Newsletter Subscription

**File:** `tests/homepage/newsletter-subscription.spec.ts`

**Steps:**
  1. Navigate to any page on the website (homepage, products, etc.)
  2. Locate the subscription section in the footer with 'Your email address' field
  3. Enter a valid email address
  4. Click the subscription button (arrow or submit icon)
  5. Observe the response

**Expected Results:**
  - Subscription field accepts valid email addresses
  - Subscription is processed (success message may appear)
  - User is subscribed to the newsletter

### 6. Search and Filter Functionality

**Seed:** `tests/seed.spec.ts`

#### 6.1. Test Case 37: Search with Multiple Keywords

**File:** `tests/search/search-multiple-keywords.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/products
  2. Enter different search terms: 'Tshirt', 'Dress', 'Jeans', etc.
  3. Verify results for each search
  4. Clear search and try new term

**Expected Results:**
  - Search works for multiple product types
  - Accurate results are returned for each search query
  - Irrelevant products are filtered out

#### 6.2. Test Case 38: Search with No Results

**File:** `tests/search/search-no-results.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/products
  2. Search for a product that does not exist (e.g., 'xyz123nonexistent')
  3. Observe the result page

**Expected Results:**
  - No products are displayed
  - Message appears indicating no products found or empty results

#### 6.3. Test Case 39: Search Case Sensitivity

**File:** `tests/search/search-case-sensitivity.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/products
  2. Search for 'tshirt' (lowercase)
  3. Clear and search for 'TSHIRT' (uppercase)
  4. Compare the results

**Expected Results:**
  - Search returns same results regardless of case (case-insensitive)
  - Both lowercase and uppercase searches return equivalent products

#### 6.4. Test Case 40: Filter and Search Combination

**File:** `tests/search/filter-search-combination.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/products
  2. Select a category (e.g., 'Women')
  3. Then perform a search within that category
  4. Verify results are filtered by both category and search term

**Expected Results:**
  - Results show only products matching both category AND search criteria
  - Applied filters are visually indicated
  - Results count is accurate for combined filters

### 7. Error Handling and Edge Cases

**Seed:** `tests/seed.spec.ts`

#### 7.1. Test Case 41: Invalid URL Navigation

**File:** `tests/error-handling/invalid-url.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/invalid-page
  2. Observe the page behavior and error handling

**Expected Results:**
  - 404 error page is displayed
  - User is informed the page doesn't exist
  - Link to home page or valid pages is provided

#### 7.2. Test Case 42: Network Error Handling

**File:** `tests/error-handling/network-error.spec.ts`

**Steps:**
  1. Attempt to perform actions that would fail due to network issues (if possible in test environment)
  2. Observe error messages and recovery options

**Expected Results:**
  - Appropriate error messages are displayed
  - User is guided to retry or contact support

#### 7.3. Test Case 43: Form Submission with Network Delay

**File:** `tests/error-handling/network-delay.spec.ts`

**Steps:**
  1. Submit the contact form or another form
  2. Simulate or observe behavior during network latency

**Expected Results:**
  - Loading indicator or message appears during submission
  - Form prevents double submission
  - Timeout handling is in place if needed

#### 7.4. Test Case 44: Browser Back Button Behavior

**File:** `tests/error-handling/browser-back-button.spec.ts`

**Steps:**
  1. Navigate through multiple pages (home -> products -> product details -> cart)
  2. Use browser back button to navigate backwards
  3. Observe page states and data retention

**Expected Results:**
  - Back button correctly navigates to previous pages
  - Previously entered data in forms is retained (if not submitted)
  - Page states are correct after using back button

#### 7.5. Test Case 45: Session Timeout Handling

**File:** `tests/error-handling/session-timeout.spec.ts`

**Steps:**
  1. Log in to an account
  2. Leave the session idle for extended time if applicable
  3. Attempt to perform an action that requires authentication

**Expected Results:**
  - User is prompted to log in again if session expires
  - Session timeout message is displayed if applicable

#### 7.6. Test Case 46: Verify Error Messages Display

**File:** `tests/error-handling/error-messages.spec.ts`

**Steps:**
  1. Attempt various invalid actions: invalid login, invalid form data, etc.
  2. Observe error messages for clarity and helpfulness

**Expected Results:**
  - Error messages are clear and descriptive
  - Users understand what went wrong and how to fix it
  - Error messages are visible and not hidden

### 8. Performance and Usability

**Seed:** `tests/seed.spec.ts`

#### 8.1. Test Case 47: Page Load Performance

**File:** `tests/performance/page-load.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/ (homepage)
  2. Measure or observe page load time
  3. Check if all elements are loaded

**Expected Results:**
  - Homepage loads within acceptable time (typically under 3-4 seconds)
  - All images, styles, and content are properly loaded
  - Page is responsive and interactive

#### 8.2. Test Case 48: Image Loading and Display

**File:** `tests/performance/image-loading.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/products
  2. Verify all product images are loaded and displayed correctly
  3. Scroll through product list to ensure images load properly

**Expected Results:**
  - All product images load and display correctly
  - No broken image indicators are present
  - Images are appropriately sized and aligned

#### 8.3. Test Case 49: Mobile Responsiveness

**File:** `tests/performance/mobile-responsiveness.spec.ts`

**Steps:**
  1. Navigate to any page using mobile viewport (e.g., iPhone 375px or Android 360px width)
  2. Interact with navigation menu, forms, and product listings
  3. Verify text readability and button usability

**Expected Results:**
  - Page layout adapts to mobile screen size
  - Navigation menu is accessible (hamburger menu or similar)
  - Forms and inputs are easily usable on mobile
  - Text is readable without excessive horizontal scrolling

#### 8.4. Test Case 50: Button and Link Clickability

**File:** `tests/performance/button-clickability.spec.ts`

**Steps:**
  1. Navigate through various pages
  2. Test clicking different buttons and links (Add to cart, View Product, Submit, etc.)
  3. Verify all interactive elements respond to clicks

**Expected Results:**
  - All buttons are clickable and functional
  - Links navigate to correct destinations
  - Click responses are immediate and appropriate

### 9. Data Validation

**Seed:** `tests/seed.spec.ts`

#### 9.1. Test Case 51: User Registration Field Requirements

**File:** `tests/data-validation/registration-required-fields.spec.ts`

**Steps:**
  1. Navigate to https://automationexercise.com/login
  2. Attempt to register without filling required fields
  3. Try registering with only name filled
  4. Try registering with only email filled

**Expected Results:**
  - System indicates which fields are required
  - Validation prevents registration if required fields are empty
  - Clear error messages guide the user to fill required fields

#### 9.2. Test Case 52: Email Format Validation in Registration

**File:** `tests/data-validation/email-format-validation.spec.ts`

**Steps:**
  1. Navigate to signup form
  2. Attempt to register with invalid email formats: 'notanemail', 'test@', '@example.com', 'test @example.com'
  3. Verify validation behavior

**Expected Results:**
  - Invalid email formats are rejected with error message
  - Valid email formats are accepted
  - Error message clarifies the expected email format

#### 9.3. Test Case 53: Password Requirements

**File:** `tests/data-validation/password-requirements.spec.ts`

**Steps:**
  1. During registration, enter a password
  2. Check if there are password complexity requirements displayed
  3. Test with weak passwords and strong passwords

**Expected Results:**
  - System validates password strength if requirements exist
  - Password requirements are clearly communicated if present
  - System accepts valid passwords

#### 9.4. Test Case 54: Product Price Display

**File:** `tests/data-validation/product-price-display.spec.ts`

**Steps:**
  1. View multiple products on homepage and products page
  2. Verify prices are displayed consistently
  3. Add products to cart and verify prices in cart

**Expected Results:**
  - All products display prices clearly in a currency format (Rs.)
  - Prices are consistent across all pages
  - Cart shows correct product prices matching product detail page

#### 9.5. Test Case 55: Cart Total Calculation

**File:** `tests/data-validation/cart-total-calculation.spec.ts`

**Steps:**
  1. Add multiple products to cart with different quantities
  2. View cart and verify total calculation
  3. Manually calculate expected total (quantity × price for each item)
  4. Compare with displayed total

**Expected Results:**
  - Cart total is calculated correctly
  - Individual item totals are accurate
  - Overall cart total matches sum of item totals
