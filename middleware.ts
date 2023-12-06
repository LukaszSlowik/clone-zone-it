import { chain } from "./middlewares/chain";
import { withI18nMiddleware } from "./middlewares/middleware-local";

export default chain([withI18nMiddleware]);

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
