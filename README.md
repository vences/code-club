[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/vences/code-club)

The latest version of that repo can be tested here -> https://code-club.thefrenchy.workers.dev

## Routes

In order to segment assignement I used the following route for each of them:
- `/a1`: accepting `POST` request
- `/a2`: accepting `GET` request

## Assignement 1: Respond to POST requests

* After getting Wrangler and Github set up; we’ve seen how to access the URL  property of an incoming request and do conditional logic based on it.
* In https://developers.cloudflare.com/workers/runtime-apis/request/ you can see that there are many other properties of the request which you can access.

* Using the examples shown here, and the Request documentation, update your Hello Worker template so that is gives a different response for requests with a POST method.
  * Bonus points if you make it response in a JSON format, as is often useful for POST requests
* Place your completed assignment in your Github repository

## Assignement 2: Random Responses

Today, your “Hello Worker” project returns the same response every time. Let’s use an API and a Lookup Table to make things more interesting, and a return 1 of 4 Random Responses  to each GET request.

You can see a good example in MDN of the basic idea [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) - using Math.Random and Math.Floor to get a random integer between 1 and max. You can simply use 4 for your max value, and otherwise follow this example exactly. 

We also have a quick example of a [lookup table](https://developers.cloudflare.com/workers/examples/country-code-redirect/) in our own documentation.

Using these concepts, update your Hello Worker script to return this random response. You’ll want to copy your project in Github, so that your week 1 assignment is still available for reference. You can use the “import project” feature on the UI, or follow these command line instructions 
