# Registration Form Exercise Instructions

This is a step-by-step guide to complete a user registration form exercise using GitHub Copilot. The objective is to build a simple SPA (Single-Page Application) featuring a registration form with client-side validation and corresponding unit tests.

## Prerequisites
- Basic understanding of HTML, CSS, and JavaScript
- Familiarity with Tailwind CSS for styling
- Experience with JavaScript testing frameworks (e.g., Jest)

## Step 1: Create the HTML Structure for the Registration Form

**Prompt for GitHub Copilot:**
"Generate a simple HTML form structure with inputs for username, email, and password, and a submit button."

### If Public Code block is enabled, you may receive an message saying "Sorry, the response matched public code so it was blocked..."

A simple solution is to rephrase and change some of the names of the fields in your prompt. For example, you can change "username" to "developername" and "email" to "developeremail". This is just one way to work around the issue. Try to be creative and come up with your own ideas, and if successful, don't forget to share them with the community!

Revised prompt: "Generate a simple HTML scaffolding with a form structure and inputs for developername, developeremail, and developerpassword, and a register button."

## Step 2: Style the Form with Tailwind CSS

**Prompt for GitHub Copilot:**
"Provide Tailwind CSS classes for styling a form with rounded inputs and a prominent submit button."

## Step 3: Implement Validation Functions in JavaScript

**Prompt for GitHub Copilot:**
"Write a JavaScript function to validate a username as alphanumeric with a length of 4 to 12 characters."

**Prompt for GitHub Copilot:**
"Write a JavaScript function to validate an email address using a standard email format."

**Prompt for GitHub Copilot:**
"Write a JavaScript function to validate a password with a minimum of 8 characters including both letters and numbers."

## Step 4: Integrate Validation Functions with the Form

**Prompt for GitHub Copilot:**
"How can I make a JavaScript function run to validate input fields on form submission?"

**Ask where to add the code snippet:**
"Where do I need to add the JavaScript code to validate the form fields on submission?"

## Step 4.1: Display the values below the form
**Prompt for GitHub Copilot: Few shots prompt**
"Generate a div element to display the values of the form fields below the form. For testing purposes, display all the values for the developerusername, developeremail, and the number of characters for the password."

## Step 5: Generate Unit Tests for the Validation Functions

**Prompt for GitHub Copilot:**
> Make the validate.js tab active
"Write Jest test cases for the following functions: `validateUsername`, `validateEmail`, and `validatePassword`."

**Prompt for GitHub Copilot:**
"What do I need in order to run Jest tests for the form validation functions?"

**Path issues:**
Are the paths correct in the selected code? validate.js is located one folder below where validate.test.js is.

## Step 6: Execute and Review

Run the tests to ensure all validations are working as expected. Review the form in a web browser, test its functionality, and resolve any issues that arise.

### Iterate and Improve

In case you get any errors, try to understand the issue and make the necessary changes to fix it. If you get stuck, use GitHub Copilot Chat to ask for help by pasting in the error message or code snippet into the Chat window.

---
