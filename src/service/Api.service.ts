import { type HeroFullResponse } from "./Interfaces";
export class Api {
    private static instance: Api|null = null
    private API = "https://api.opendota.com/api/";

    public static getInstance(): Api {
        if (Api.instance == null) {
            Api.instance = new Api();
        }
        return Api.instance;
    }

    public async listHeroes(): Promise<Array<HeroFullResponse>> {
        const response = await fetch(this.API + 'constants/heroes');
        const heroes: Array<HeroFullResponse> = Object.values(await response.json());
        return heroes;
    }
}