import { jsonResponse } from "./utils/jsonResponse";

export async function assignemet3(context: Context): Promise<Response> {
  if (context.request.cf === undefined || context.request.cf.botManagement === undefined) {
    return jsonResponse({
      message: `Context error, your workers is not executed in the right context`,
    }, {
      status: 500,
    })
  }
  const score = context.request.cf.botManagement.score
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
  const url = context.request.url.replace('/a3/','/httpbin/')

  return await fetch(url, {
    headers: context.request.headers,
    cf: {
      resolveOverride: 'httpbin.vence.fun',
    }
  })
}