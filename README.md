# Articles API

## How to run

1. Git clone this repo and access the root dir
2. Run `yarn install` to install all packages
3. Run `yarn build` to build application
4. Run `yarn start` to start Node server
5. Use Postman or similar to test endpoints available on [Articles API](https://www.getpostman.com/collections/4815c31710a030078ea8)

## Use cases

- When a user visits an article, a like button is rendered and displays the total number of likes
- When a user clicks the like button, the count increments by one.
- How would the client-side, server-side + database be strucutured?

#### Bonus

- How can you improve the feature to make it more resilient against abuse/exploitation
- How can you improve the feature to make it scale to millions of users and perform without issues?
- A million concurrent users clicking the button at the same time
- A million concurrent users requesting the article's like count at the same time
