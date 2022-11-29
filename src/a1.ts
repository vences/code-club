import { jsonResponse } from "./utils/jsonResponse";

export async function assignemet1(): Promise<Response> {
    return jsonResponse({
      message: 'Thanks for your POST request',
    }, {
      status: 200,
    })
}