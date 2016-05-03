# Load Stripe
Asynchronously loads the stripe javascript api in the browser returning a promise.
The stripe api is also `promisified` using [stripe-as-promised](https://github.com/bendrucker/stripe-as-promised).

# Installation

#### Npm
```console
npm install load-stripe
```

# Example

```js
const load = require("load-stripe");

// Optionally override the stripe api version
load.version = 'https://js.stripe.com/v2/'; // This is the default.

// Async load stripe when you need it.
load("MY_PUBLISHABLE_API_KEY").then((stripe)=> {
	return stripe.card.createToken(some_source).then(...);
});
```

### Contributions

* Use `npm test` to run tests.

Please feel free to create a PR!
