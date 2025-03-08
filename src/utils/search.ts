export function handleSearch(service: string, params: Record<string, string>) {
  const searchParams = new URLSearchParams()

  // Add destination parameter
  if (service === "flight") {
    searchParams.set("origin", params.origin)
    searchParams.set("destination", params.destination)
  } else {
    searchParams.set("destination", params.location)
  }

  // Add dates parameter
  searchParams.set("dates", params.dates)

  // Redirect to example.com with the parameters
  window.location.href = `https://example.com?${searchParams.toString()}`
}

