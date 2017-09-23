# goodreads-graphql

[goodreads-graphql](https://github.com/kidchenko/goodreads-graphql) is a GraphQL implementation from scratch, wrapping the [GoodReads API](https://www.goodreads.com/api) using node.js, express, express-graphql in JavaScript. 

You can see a [live demo here](goodreads-graphql.herokuapp.com).

This is the implementation from [GraphQL Basics - Fun Fun Function]( https://youtu.be/lAJWHHUz8_8) espisode.

### Running

To run this project you need a [GoodReads API](https://www.goodreads.com/api) Key. 
With the API Key, you can create a file called `secret.js` in project root folder, with the code:

```javascript
module.exports = "__YOUR_API_KEY__";
```

or you can set the API key as `KEY` in your environment variables.

```bash
export KEY="__YOUR_API_KEY__"
```

To run in your machine: 

```bash
yarn install # or npm install
yarn dev # start server with nodemon
yarn start # start app
```