import {FakeService} from "../db/fake/fakeService";
import {PostgresService} from "../db/postgres/postgresService";
import { IDBService } from "../db/types/dbService";

export class HouseController{

    dbService: IDBService

    constructor(dbService: IDBService){
        this.dbService = dbService;
    }
    
    async getHousesByType(type: string, minPrice: number, maxPrice: number): House[]{
        const houses = this.dbService.getHouses(type, minPrice, maxPrice)
        return houses
    }
}