import { test, expect } from '@playwright/test';
import { PokeApiPage } from '../../src/api/PokeApiPage';

test('Prueba de integración - Evolución de Squirtle', async ({ request }) => {

  const api = new PokeApiPage(request);

  // 1️⃣ Pokémon base
  const pokemon = await api.getPokemon('squirtle');
  const speciesUrl = pokemon.species.url;

  // 2️⃣ Species
  const species = await api.getSpecies(speciesUrl);
  const evolutionUrl = species.evolution_chain.url;

  // 3️⃣ Evolución
  const evolution = await api.getEvolutionChain(evolutionUrl);

  // 4️⃣ Extraer nombres
  const names: string[] = [];
  let current = evolution.chain;

  while (current) {
    names.push(current.species.name);
    current = current.evolves_to[0];
  }

  // 5️⃣ Obtener pesos
  const result: { name: string; weight: number }[] = [];

  for (const name of names) {
    const p = await api.getPokemon(name);
    result.push({ name: p.name, weight: p.weight });
  }

  // 6️⃣ Ordenar sin .sort()
  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i].name > result[j].name) {
        const tmp = result[i];
        result[i] = result[j];
        result[j] = tmp;
      }
    }
  }

  // 7️⃣ Mostrar salida
  console.log('Resultado final:');
  result.forEach(p =>
    console.log(`- ${p.name}: ${p.weight}`)
  );

  expect(result.length).toBeGreaterThan(0);
});
