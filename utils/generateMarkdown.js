// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
[!(License: ${data.license.shortname}](${data.license.badge})](${data.license.link})
## Table of Contents
* [Description](#description) 
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [License](#license)
* [Contribution Guidelines](#contribution-guidelines)
* [Testing Instructions](#testing-instructions)
* [Questions](#questions)

## Description
${data.description}

## Installation Instructions
${data.install}

## Usage Information
${data.usage} 

## License
${data.title} is covered under ${data.license.name}

## Contribution Guidelines
${data.contribution}

## Testing Instructions
${data.test}

## Questions
See [Github](github.com/${data.username}) for more information and other projects 

Contact me at ${data.email} with other questions
`;
}

module.exports = generateMarkdown;
