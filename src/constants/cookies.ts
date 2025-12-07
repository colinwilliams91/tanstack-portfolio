
export const COOKIES = {
    BASE_PATH: '/',
    AGE: {
        YEAR: (60 * 60 * 24 * 365), // 1 year
        MONTH: (60 * 60 * 24 * 30), // 30 days
        WEEK: (60 * 60 * 24 * 7),   // 7 days
        DAY: (60 * 60 * 24),        // 1 day
    } as const,
} as const;
