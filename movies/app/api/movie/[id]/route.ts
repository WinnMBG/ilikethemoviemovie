import { getMovies } from "@/use_cases/methods";

export async function GET(request: Request) {
    return new Response(getMovies())
}
  