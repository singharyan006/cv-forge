# Contributing to CV Forge

Thank you for considering contributing to CV Forge! This document outlines the process for contributing to this project.

## Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for CV Forge. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

**Before Submitting A Bug Report**

* Check if you can reproduce the problem in the latest version of CV Forge.
* Perform a search to see if the problem has already been reported. If it has and the issue is still open, add a comment to the existing issue instead of opening a new one.

**How Do I Submit A (Good) Bug Report?**

Bugs are tracked as GitHub issues. Create an issue and provide the following information:

* Use a clear and descriptive title
* Describe the exact steps which reproduce the problem
* Provide specific examples to demonstrate the steps
* Describe the behavior you observed after following the steps
* Explain which behavior you expected to see instead and why
* Include screenshots and animated GIFs if possible
* If the problem wasn't triggered by a specific action, describe what you were doing before the problem happened

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for CV Forge, including completely new features and minor improvements to existing functionality.

**Before Submitting An Enhancement Suggestion**

* Check if the enhancement has already been suggested.
* Determine which repository the enhancement should be suggested in.
* Perform a search to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

**How Do I Submit A (Good) Enhancement Suggestion?**

Enhancement suggestions are tracked as GitHub issues. Create an issue and provide the following information:

* Use a clear and descriptive title
* Provide a step-by-step description of the suggested enhancement
* Provide specific examples to demonstrate the steps
* Describe the current behavior and explain which behavior you expected to see instead and why
* Include screenshots and animated GIFs which help demonstrate the steps or point out the part of CV Forge which the suggestion is related to
* Explain why this enhancement would be useful to most CV Forge users
* List some other applications where this enhancement exists, if applicable

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Include screenshots and animated GIFs in your pull request whenever possible
* Follow the JavaScript styleguide
* Include thoughtfully-worded, well-structured tests
* Document new code
* End all files with a newline

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

### Project Structure

```
src/
├── assets/          # Static assets like images
├── components/      # React components
│   ├── forms/       # Form input components
│   ├── preview/     # CV preview components
│   └── settings/    # Settings and customization components
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
│   ├── dataUtils.js # Data management utilities
│   ├── pdfUtils.js  # PDF generation functions
│   └── localStorage.js # Local storage helpers
├── styles/          # CSS files
├── data/            # Sample data
├── App.jsx          # Main App component
├── App.css          # App styles
├── main.jsx         # React entry point
└── index.css        # Global styles
```

### Coding Style

* Use descriptive variable names
* Use 2-space indentation
* Use meaningful comments
* Keep functions small and focused on a single task
* Follow React best practices and hooks rules

### Testing

* Write tests for your components and utility functions
* Run tests with `npm test`
* Ensure all existing tests pass before submitting a pull request

### Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

## Style Guides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

### JavaScript Styleguide

All JavaScript must adhere to the standard JavaScript style guide and ESLint rules configured in the project.

### Documentation Styleguide

* Use Markdown
* Document all public APIs
* Provide examples for functions and components

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

* `bug` - Issues related to bugs in the codebase
* `documentation` - Issues related to documentation
* `enhancement` - Issues for new features or improvements
* `good first issue` - Good for newcomers
* `help wanted` - Extra attention is needed

Thank you for contributing to CV Forge!
