export default async function (url) {
  const res = await fetch(url)
  const data = await res.json()

  return data
}
