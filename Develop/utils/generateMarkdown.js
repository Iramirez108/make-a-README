// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


// function renderLicenseBadge(license) {
//     switch (license) {
//       case "MIT":
//        return licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
//         break;
//       case "GPLv2":
//          return licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
//         break;
//       case "Apache":
//         return licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
//         break;
//       case "GPLv3":
//        return licenseBadge =  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
//         break;
//       case "BSD 3-clause":
//         return licenseBadge =  "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
//         break;
//       case "Unlicense":
//         return licenseBadge = licenseBadge = "";
//     }
//     }


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   switch(license) {
//     case "MIT":
//       return licenseLink = "https://opensource.org/licenses/MIT";
//        break;
//      case "GPLv2":
//        return licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
//        break;
//      case "Apache":
//        return licenseLink = "https://opensource.org/licenses/Apache-2.0";
//        break;
//      case "GPLv3":
//       return licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
//        break;
//      case "BSD 3-clause":
//        return licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
//        break;
//      case "Unlicense":
//        return licenseLink = licenseBadge = "";
//   }
//   } 
  
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {  
//   switch(license) {
//   case "MIT":
//     return licenseSelection = "https://opensource.org/licenses/MIT";
//      break;
//    case "GPLv2":
//      return licenseSelection = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
//      break;
//    case "Apache":
//      return licenseSelection = "https://opensource.org/licenses/Apache-2.0";
//      break;
//    case "GPLv3":
//     return licenseSelection = "https://www.gnu.org/licenses/gpl-3.0";
//      break;
//    case "BSD 3-clause":
//      return licenseSelection = "https://opensource.org/licenses/BSD-3-Clause";
//      break;
//    case "Unlicense":
//      return licenseSelection = licenseBadge = "";
//   } 
//   }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.filename}
//   ##license
//   ${renderLicenseBadge(license)}
//   ${renderLicenseLink(license)}
//   ${renderLicenseSection(license)}

// `;
// }

// module.exports = generateMarkdown;
