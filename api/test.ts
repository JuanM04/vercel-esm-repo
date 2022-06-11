import fetch from "node-fetch";

export default async function hanlder(req, res) {
  const result = await fetch("https://swapi.dev/api/people/1/").then((res) =>
    res.json()
  );
  res.json(result);
}
