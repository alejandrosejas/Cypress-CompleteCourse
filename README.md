# The Complete Cypress 10+ Course: From Zero to Expert!

## Getting Started <a name = "getting_started"></a>

### Prerequisites

#### Install Node

<ol>
    <li>Install NodeJS on your machine</li>
    <li>Inside the Project directory, run: "npm init"</li>
    <li>During the init process, make sure set the 'test command' to: "cypress open"</li>
</ol>

#### Install TypeScript

<ol>
    <li>Inside the Project directory, run: "npm install --save-dev typescript"</li>
</ol>

#### Install Cypress

<ol>
    <li>Inside the Project directory, run: "npm install cypress --save-dev"</li>
    <li>In 'package.json' file, replace the 'test' script for: "runner": "cypress open"</li>
    <li>Inside the project's terminal run: "npm run runner" to open Cypress for the first time</li>
    <li>Create an Empty Spec and name it "helloworld.cy.ts"</li>
    <li>Create a new file called: "tsconfig.json" inside your Cypress Folder with the following: https://docs.cypress.io/guides/tooling/typescript-support#Install-TypeScript</li>
    <li>Run again the helloworld test</li>
    <li>In 'package.json' file, add the following to the 'runner' script: "cypress open --e2e --browser chrome"</li>
</ol>

#### Install 'xPath Dependency' Package

<ol>
    <li>Run: 'npm install -D cypress-xpath'</li>
    <li>In your framework support file [cypress/support/e2e.ts] add: require('cypress-xpath')</li>
    <li>Add "cypress-xpath" to your 'tsconfig.json file</li>
</ol>

#### Install 'Cypress Real Events' Package

<ol>
    <li>Run: 'npm i -D cypress-real-events'</li>
    <li>Add the following into your cypress/support/e2e.ts file</li>
    <li>```import "cypress-real-events";```</li>
    <li>Include Ts declarations, add 'cypress-real-events' to the Types section of your tsconfig.json file</li>
</ol>

### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo.

## Usage <a name = "usage"></a>

Add notes about how to use the system.
