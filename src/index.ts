import { assignemet1 } from "./a1";
import { assignemet2 } from "./a2";
import { assignemet3 } from "./a3";
import { jsonResponse } from "./utils/jsonResponse";

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const path = new URL(request.url).pathname;

		// Routing based on the assignement
		try {
			if (path.startsWith('/a1')) {
				return assignemet1({request, env, ctx});
			} else if (path.startsWith('/a2')) {
				return assignemet2({request, env, ctx});
			} else if (path.startsWith('/a3')) {
				return assignemet3({request, env, ctx})
			}
		} catch(err) {
			return jsonResponse({
				error: JSON.stringify(err) 
			}, {
				status: 500
			})
		}
		return jsonResponse('Hello world!')
	},
};
