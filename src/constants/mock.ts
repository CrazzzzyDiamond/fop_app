import { Quarter, TotalSums, Income } from '@/types/income';

export const TOTAL_TABLE_DATA: TotalSums = {
    quarter: {
        [Quarter.Q1]: {
            sum: 1000,
            percentage3: 30,
            percentage5: 50,
        },
        [Quarter.Q2]: {
            sum: 2000,
            percentage3: 60,
            percentage5: 100,
        },
        [Quarter.Q3]: {
            sum: 3000,
            percentage3: 90,
            percentage5: 150,
        },
        [Quarter.Q4]: {
            sum: 4000,
            percentage3: 120,
            percentage5: 200,
        },
    },
    half: {
        firstHalf: {
            sum: 5000,
            percentage3: 150,
            percentage5: 250,
        },
        secondHalf: {
            sum: 6000,
            percentage3: 180,
            percentage5: 300,
        },
    },
    year: {
        sum: 11000,
        percentage3: 330,
        percentage5: 550,
    }
}

export const INCOME_TABLE_DATA: Income[] = [
    {
        sum: 1000,
        date: '2021-01-01',
        currency: 'USD',
        uahSum: 28000,
        rate: '28',
        id: '1',
    },
    {
        sum: 2000,
        date: '2021-02-01',
        currency: 'USD',
        uahSum: 56000,
        rate: '28',
        id: '2',
    },
    {
        sum: 3000,
        date: '2021-03-01',
        currency: 'USD',
        uahSum: 84000,
        rate: '28',
        id: '3',
    },
    {
        sum: 4000,
        date: '2021-04-01',
        currency: 'USD',
        uahSum: 112000,
        rate: '28',
        id: '4',
    },
    {
        sum: 5000,
        date: '2021-05-01',
        currency: 'USD',
        uahSum: 140000,
        rate: '28',
        id: '5',
    },
    {
        sum: 6000,
        date: '2021-06-01',
        currency: 'USD',
        uahSum: 168000,
        rate: '28',
        id: '6',
    },
    {
        sum: 7000,
        date: '2021-07-01',
        currency: 'USD',
        uahSum: 196000,
        rate: '28',
        id: '7',
    },
    {
        sum: 8000,
        date: '2021-08-01',
        currency: 'USD',
        uahSum: 224000,
        rate: '28',
        id: '8',
    },
    {
        sum: 9000,
        date: '2021-09-01',
        currency: 'USD',
        uahSum: 252000,
        rate: '28',
        id: '9',
    },
    {
        sum: 10000,
        date: '2021-10-01',
        currency: 'USD',
        uahSum: 280000,
        rate: '28',
        id: '10',
    },
]