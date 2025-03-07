export enum Quarter {
    Q1 = 'Q1',
    Q2 = 'Q2',
    Q3 = 'Q3',
    Q4 = 'Q4',
}

export enum Month {
    January = 'January',
    February = 'February',
    March = 'March',
    April = 'April',
    May = 'May',
    June = 'June',
    July = 'July',
    August = 'August',
    September = 'September',
    October = 'October',
    November = 'November',
    December = 'December',
}

export interface Income {
    sum: number;
    date: string;
    currency: string;
    uahSum: number;
    rate: string;
    id: string;
}

export interface ParsedIncomeTable {
    [Quarter.Q1]: {
        [Month.January]: Income[];
        [Month.February]: Income[];
        [Month.March]: Income[];
    };
    [Quarter.Q2]: {
        [Month.April]: Income[];
        [Month.May]: Income[];
        [Month.June]: Income[];
    };
    [Quarter.Q3]: {
        [Month.July]: Income[];
        [Month.August]: Income[];
        [Month.September]: Income[];
    };
    [Quarter.Q4]: {
        [Month.October]: Income[];
        [Month.November]: Income[];
        [Month.December]: Income[];
    };
}

interface Total {
    sum: number;
    percentage3: number;
    percentage5: number;
}

export interface TotalSums {
    quarter: {
        [Quarter.Q1]: Total;
        [Quarter.Q2]: Total;
        [Quarter.Q3]: Total;
        [Quarter.Q4]: Total;
    }
    half: {
        firstHalf: Total;
        secondHalf: Total;
    }
    year: Total;
}