import { APIRequestContext, expect } from '@playwright/test';

export class PokeApiPage {
  constructor(private request: APIRequestContext) { }

  async getPokemon(name: string) {
    const response = await this.request.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    expect(response.status()).toBe(200);
    return response.json();
  }

  async getSpecies(url: string) {
    const response = await this.request.get(url);
    expect(response.status()).toBe(200);
    return response.json();
  }

  async getEvolutionChain(url: string) {
    const response = await this.request.get(url);
    expect(response.status()).toBe(200);
    return response.json();
  }
}