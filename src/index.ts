import { assignemet1 } from "./a1";
import { assignemet2 } from "./a2";
import { assignemet3 } from "./a3";
import { jsonResponse } from "./utils/jsonResponse";
import { Router } from 'itty-router'

// Create a new router
const router = Router()

router.get("/", () => {
	return jsonResponse('Hello world!')
})

router.post("/a1", () => {
	return assignemet1();
});

router.get("/a2", () => {
	return assignemet2();
})

router.all("/a3", async (request) => {
	return await assignemet3(request)
})
router.all("/a3/*", async (request) => {
	return await assignemet3(request)
})

router.all("*", () => {
	return jsonResponse({
		message: 'error',
	  }, {
		status: 500,
	  })
})

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		return router
			.handle(request, env, ctx)
			.catch(err => {
				return jsonResponse({
					error: JSON.stringify(err) 
				}, {
					status: 500
				})
			})
	}
};
