//https://swapi.dev/api/people/1

interface Jedi {
  name: string;
}

export default async function BuildWordE(): Promise<Jedi> {
  const data: Response = await fetch('https://swapi.dev/api/people/1');
  const jsonData = await data.json();
  const thing = "hi";

  const lukeSkywalker: Jedi = {
    name: jsonData.name,
  };

  return lukeSkywalker;
}
