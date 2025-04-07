import {HouseController} from "../controller/houseController";
import {FakeService} from "../db/fake/fakeService";
import {PostgresService} from "../db/postgres/postgresService";

export class HouseHandler {
    getHouses(){
        const ctrl = new HouseController(new FakeService());
        const ctrl2 = new HouseController(new PostgresService(""));
    }
}