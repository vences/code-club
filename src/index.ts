/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { assignemet1 } from "./a1";
import { assignemet2 } from "./a2";
import { jsonResponse } from "./utils/jsonResponse";

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const path = new URL(request.url).pathname;

		// Routing based on the assignement
		if (path == '/a1') {
			return assignemet1({request, env, ctx});
		} else if (path == '/a2') {
			return assignemet2({request, env, ctx});
		}
		return jsonResponse('Hello world!')
	},
};
