import { getRandomInt } from "./utils/getRandomInt";
import { jsonResponse } from "./utils/jsonResponse";

const responseTab = [
  'Response 1', 
  'Response 2', 
  'Response 3', 
  'Response 4', 
  'Response 5', 
];

export async function assignemet2(context: Context): Promise<Response> {
  const random = getRandomInt(5);
  const method = context.request.method;
  if (method == 'GET') {
    return jsonResponse({
      message: `${responseTab[random]}`,
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