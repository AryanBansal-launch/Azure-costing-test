export default async function handler(request, context) {
  const url = new URL(request.url)

  if (url.pathname !== "/api/cloud-function") {
    return fetch(request)
  }

  const originResponse = await fetch(request)

  const headers = new Headers(originResponse.headers)

  headers.set("Cache-Control", "no-store, no-cache")

  return new Response(originResponse.body, {
    status: originResponse.status,
    statusText: originResponse.statusText,
    headers,
  })
}
