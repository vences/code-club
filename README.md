[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/vences/code-club)

The latest version of that repo can be tested here -> https://code-club.thefrenchy.workers.dev
For assignement 3 the workers is now running under -> https://club.vence.fun

## Routes

In order to segment assignement I used the following route for each of them:
- `/a1`: accepting `POST` request
- `/a2`: accepting `GET` request
- `/a3`: accepting all request

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

## Assignement 3: API, Bots and Cats

We saw the immutability of inbound requests, the available properties of Request.cf, how to create new subrequests, how to create new responses, get and set headers.


Create a worker (or expand existing code) to handle automated traffic differently. 
- Send human traffic to an origin
- Get additional ‘data’  from https://httpbin.org/get via a subrequest
- If the inbound request appears automated, always return JSON-formatted responses
- Use the inbound request data to filter bad bots
- For bad bots, return a JSON object indicating the request was blocked due to appearing to be non-human. Alternatively, return cats (http.cat/401)

Set an Origin Resolve Override for your subrequest origin. What is the effect?


(Optional) If you need an API endpoint in your lab account:
- Create a CNAME DNS record to petstore3.swagger.io 
- Set a Page Rule with Host Header Override = “petstore3.swagger.io”
