const { request } = require("express");

const db = require('../data/dbConfig');
const { returning, intersect } = require("../data/dbConfig");
const Hobbits = require('./hobbitsModel');

describe('hobbits model', () => {
    describe('insert', () => {
        beforeEach(async () => {
            await db('hobbits').truncate();
        });

        it('should insert the provided hobbits into the db', async () => {
            await Hobbits.insert({name: 'gaffer'});
            await Hobbits.insert({name: 'sam'});

            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(2);
        });

        it('should return the hobit we inserted', async () => {
            let hobbit = await Hobbits.insert({name: 'sam'});
            expect(hobbit.name).toBe('sam');

            hobbit = await Hobbits.insert({name: 'gaffer'});
            expect(hobbit.name).toBe('gaffer');
        });

        it('is pointless', () => {
            expect(true).toBe(true);
        })
    })
})