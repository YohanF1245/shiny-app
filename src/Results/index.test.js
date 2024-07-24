import { formatJobList, formatFetchParams } from "./";
import { describe, expect, test} from "vitest";

const answersTrue = {1: true, 2: true, 3: true, 4:true, 5:true, 6:true};

const answersFalse = {1: false, 2: false, 3: false, 4:false, 5:false, 6:false};

test('premier test', () => {
    const expectState= 'item2,'
    expect(formatJobList('item2',3,1)).toEqual(expectState)
})

describe('la fonction formatJobList', () => {
    test('ajoute une virgule a un item', () => {
        const expectState= 'item2,'
        expect(formatJobList('item2',3,1)).toEqual(expectState)
    })
    test('ne met pas de virgule pour le derniver item', () => {
        const expectState= 'item3'
        expect(formatJobList('item3',3,2)).toEqual(expectState)
    })
})

describe('la fonction formatFetchParams', () => {
    test('ajoute un & a un item', () => {
        const expectState= "a1=false&a2=true"
        expect(formatFetchParams({1:false,2:true})).toEqual(expectState)
    })
    test('n ajoute rien a la fin de la string', () => {
        const expectState="a1=false"
        expect(formatFetchParams({1:false})).toEqual(expectState)
    })
})

