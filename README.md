
<div align="center">

[![Build Status](https://travis-ci.org/rmanguinho/clean-react.svg?branch=master)](https://travis-ci.org/rmanguinho/clean-react)
[![Coverage Status](https://coveralls.io/repos/github/rmanguinho/clean-react/badge.svg?branch=master)](https://coveralls.io/github/rmanguinho/clean-react?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/rmanguinho/clean-react/badge.svg)](https://snyk.io/test/github/rmanguinho/clean-react)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)
</div>

<div align='center'>

# **Blockchain-Based Real Estate Management**
</div>

[![alt text](./public/capa.png "Prototype Link")](https://www.udemy.com/course/react-com-mango/?referralCode=552F88858EAE76346C8B)

This system leverages blockchain technology for real estate management using the ERC721 and ERC4907 protocols, and tokenization for NFTs as registration and cadastral modifications.

The goal is to implement a property registration management system using modern technologies. The back-end is developed in Solidity along with Ethers, Hardhat, TypeScript, and Solidity compilers.

For the front-end, various methodologies were applied, such as a well-defined and decoupled architecture using TDD (Test-Driven Development) as a work methodology, Clean Architecture to distribute responsibilities across layers, always following SOLID, DRY, YAGNI, and KISS principles and applying Design Patterns to solve common problems.

<br /><br />

<div align="center" style="width: 100%; display: block;">
 <img src="./public/celo.png" width="300px" heigth="300px" />
</div>

</div>

<div style="padding: 0 5rem;">

# Index

- [About](#HowItWorks)
- [Applied Methodologies](#AppliedMethodologies)
- [Technologies Used](#TechnologiesUsed)
- [How to run the project](#Execute)

<div id="HowItWorks">

## 🔖&nbsp; How It Works?
</div>

BlockImobGov is a regularity consultation platform based on oracles, registration, and management of government properties registered on the blockchain. It allows users to invest and track their contracts with the government.

How it works:
- **REGISTRATION:** List of addresses registered on the blockchain and implementation of government multisig. Creation of NFTs (Non-Fungible Tokens) defining registered properties by authorized entities. Management is public and auditable.
- **CONSULTATION:** Verification of the regularity and data of properties, validated through government oracles to ensure data authenticity. Request for map verification regarding the geolocation of rural properties.
- **SALE AND LEASE:** After confirmation of the property's regularity, they will be eligible for sale or lease. All transactions will be conducted in cReal (Celo blockchain cryptocurrency backed by the Brazilian Real). The lease period will be defined in the contract, including tax deductions.
- **TOKENIZED REIT:** Once all properties are registered and regularized on the blockchain, the system will enable the tokenization of real estate funds with all property data and categorization.

BlockImobGov Accelerating Government Real Estate Transactions!

---

<div id="AppliedMethodologies">

 ## ㊎ Applied Methodologies
</div>

* TDD
* Clean Architecture
* DDD
* Reactive Programming
* Responsive Layout
* Conventional Commits
* GitFlow
* Modular Design
* Dependency Diagrams
* Use Cases
* Continuous Integration
* Continuous Delivery
* Continuous Deployment

## 📚 Principles

* Single Responsibility Principle (SRP)
* Open Closed Principle (OCP)
* Liskov Substitution Principle (LSP)
* Interface Segregation Principle (ISP)
* Dependency Inversion Principle (DIP)
* Separation of Concerns (SOC)
* Don't Repeat Yourself (DRY)
* You Aren't Gonna Need It (YAGNI)
* Keep It Simple, Silly (KISS)
* Composition Over Inheritance
* Small Commits

## ㌥ Design Patterns

* Factory
* Adapter
* Composite
* Decorator
* Dependency Injection
* Composition Root
* Builder
* Proxy

<div id="TechnologiesUsed">

## 🚀 Technologies Used
</div>

* [Typescript](https://www.typescriptlang.org/)
* [React](https://www.typescriptlang.org/)
* [React Testing Library](https://www.typescriptlang.org/)
* [React Router DOM](https://reactrouter.com/en/main)
* [Vitest](https://vitest.dev/)
* [Git](https://git-scm.com/)
* [Styled-Components](https://styled-components.com/)
* [Yarn](https://yarnpkg.com/)
* [Coveralls](https://coveralls.io/)
* [Husky](https://typicode.github.io/husky/#/)
* [Lint Staged](https://github.com/okonet/lint-staged)
* [Eslint](https://eslint.org/)
* [Celo Blockchain](https://celo.org/)

---

<div id="Execute">

## 🗂 How to Run the Client (Front-End)
</div>

```bash
    # Clone the repository
    $ git clone https://github.com/renancorreadev/blockchainImob.git

    # Enter the directory
    $ cd frontend

    # Install dependencies
    $ yarn install

    # Start the project
    $ yarn dev
```

---

## 🗂 How to Compile Contracts and Deploy (Back-End)

```bash
    # Clone the repository
    $ git clone https://github.com/renancorreadev/blockchainImob.git

    # Enter the directory
    $ cd backend

    # Install dependencies
    $ yarn install

    # Compile the project
    $ yarn compile

    # Deploy contracts
    $ yarn deploy

    # Verify contracts
    $ yarn verify
```
---

<p align="center"> 

    Developed by Renan César
</p>

</div>
