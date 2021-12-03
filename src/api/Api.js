export class Api {
  constructor() {}
  async getApi() {
    let response = await fetch("https://swapi.dev/api/planets");
    let data = await response.json();
    return data.results;
  }
}
