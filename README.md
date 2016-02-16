# Streeks
A daily goals-based streak tracker.

# Tech Stack
Backbone JS | Mongo DB | Node JS | Express Stack

# Repo Initialization

## Files
- Add project specific `.gitignore` file
- Add project specific `.bowerrc` file
- Copy `.jshintrc` file from GitHub [gist](https://gist.github.com/psullivan6/e7d9f6611bd163e52951)
- Add project specific `.env` file for environmental variables
- Manually install `requirejs` via the [requirejs site](http://requirejs.org/docs/download.html#latest) into the `/libs` directory, but also install it via the `package.json` file and `npm`

---

## Package Managers
- Initialize a Node project: `$ npm init`

---

# Database

MongoDB database served by heroku add-on: MongoLab. Thus, MongoDB must be installed and the CLI working properly.

## Authentication

**User:** admin
**Password:** the "db name" + "admin"

## Local connection:

Run `mongod --dbpath ./_source/api/data/db` to set the mongo db directory to the correct local location and start the connection.

---

# Errors

**Error:** `Uncaught SyntaxError: Unexpected token <` in `main.js`:
**Reasoning:** `main.js` is not being referenced correctly in relation to the location of `index.html`

**Cause:** While running the server and performing POST requests via POSTMAN
**Error:** `SyntaxError: Unexpected token -`
**Reasoning:** The `POST` request is not being made with the `Content-Type:application/json` Header OR an empty request body