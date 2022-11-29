import { jsonResponse } from "./utils/jsonResponse";

// itty-router do not folllow Request specification  
// Type 'Request' is missing the following properties from type 'Request': clone, headers, redirect, fetcher, and 3 more.ts(2345)
export async function assignemet3(request: any): Promise<Response> {
  if (request.cf === undefined || request.cf.botManagement === undefined) {
    return jsonResponse({
      message: `Context error, your workers is not executed in the right context`,
    }, {
      status: 500,
    })
  }
  const score = request.cf.botManagement.score
  if (score < 40) {
    const response = await fetch("https://httpbin.org/get");
    if(!response.ok){
      return jsonResponse({
        message: `Error fetching the origin`,
      }, {
        status: 500,
      })
    }
    const originalBody = await response.json();
    return jsonResponse({
      message: `Hello bot here the info: ${JSON.stringify(originalBody)}`
    }, {
      status: 200,
    })
  }
  const url = request.url.replace('/a3/','/httpbin/')

  return await fetch(url, {
    headers: request.headers,
    cf: {
      resolveOverride: 'httpbin.vence.fun',
    }
  })
}