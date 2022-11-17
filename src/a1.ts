import { jsonResponse } from "./utils/jsonResponse";

export async function assignemet1(context: Context): Promise<Response> {
  const method = context.request.method;
  if (method == 'POST') {
    return jsonResponse({
      message: 'Thanks for your POST request',
    }, {
      status: 200,
    })
  }
  
  return jsonResponse({
    message: 'error',
  }, {
    status: 500,
  })
}