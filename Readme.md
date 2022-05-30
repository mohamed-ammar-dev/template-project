# Nodejs Express App

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 16.14.2
- Install [Redis](https://phoenixnap.com/kb/install-redis-on-ubuntu-20-04)

# Getting started
- Clone the repository
```
git clone  <git lab template url> <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build the project
```
npm run build
```
- Run the project
```
npm run dev
```
  Navigate to `http://localhost:3000`

- API Document endpoints

  swagger-ui Endpoint : http://localhost:3000/api-docs 


## Getting TypeScript
Add Typescript to project `npm`.
```
npm install -g typescript
```


## Testing
The tests are  written in Mocha and the assertions done using Chai

```
"mocha": "^10.0.0",
"sinon": "^14.0.0",
"chai": "^4.3.6",
"chai-as-promised": "^7.1.1",
"@faker-js/faker": "^7.1.0",
```

### Running tests using NPM Scripts
````
npm run test

````
Test files are created under test folder.


# About
- Hexagonal Structure
- Modular Structure
- Dependency Injection
- Postgres Database
- Sequelize (ORM)
- Redis
- Joi (Data Validator)
- Refresh Token
- Open API (Swagger)
- Localization (Arabic, English)
- Error Handler
- Clean Code
- Design Pattern
