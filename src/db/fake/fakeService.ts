import { Request, Response } from 'express';

const FAKE_HOUSES = [
    {   price: 1000000,
        name: "casa1",
        location: "mty1",
        description: "iuoiuou",
        rating: 4.1,
        terrainArea: 100,
        constructionArea: 200,
        duration: 60,
        type: "SALE"
    },
    {   price: 100000,
        name: "casa2",
        location: "mty2",
        description: "jliji",
        rating: 4.5,
        terrainArea: 400,
        constructionArea: 500,
        duration: 10,
        type: "RENT"
    },
    {   price: 5000,
        name: "casa3",
        location: "mty3",
        description: "ahvbadv",
        rating: 3.2,
        terrainArea: 150,
        constructionArea: 200,
        duration: 21,
        type: "RENT"
    },
    {   price: 200000,
        name: "casa4",
        location: "mty4",
        description: "1iuio",
        rating: 3.8,
        terrainArea: 320,
        constructionArea: 400,
        duration: 100,
        type: "SALE"
    }
];


export class FakeService {
    async getHouses(type: string, minPrice: number, maxPrice: number): Promise<House[]> {
        return FAKE_HOUSES;
    }

    async getHouseById(id: number): Promise<House>{
        return FAKE_HOUSES[id];
    }
}