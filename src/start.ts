import { createStart, createMiddleware } from '@tanstack/react-start'
import {
  getCookie,
  setCookie,
} from '@tanstack/react-start/server';

import { THEMES } from './constants/themes';
import { COOKIES } from './constants/cookies';

/////////////////////////
//#region MIDDLEWARE ////
/////////////////////////

const themeMiddleware = createMiddleware().server(async ({ next }) => {
    const storedTheme = getCookie(THEMES.KEY)
    if (storedTheme === THEMES.WINTER || storedTheme === THEMES.ABYSS) {
        // Set a request header to pass the theme to the client
        setCookie(THEMES.KEY,
            storedTheme,
            { path: COOKIES.BASE_PATH, maxAge: COOKIES.AGE.YEAR });
        return next({ context: { theme: storedTheme } });
    }
    setCookie(THEMES.KEY,
        THEMES.ABYSS,
        { path: COOKIES.BASE_PATH, maxAge: COOKIES.AGE.YEAR });
    return next({ context: { theme: THEMES.ABYSS } });
});

/////////////////////////
//#endregion ////////////
/////////////////////////

export const startInstance = createStart(() => ({
  requestMiddleware: [themeMiddleware],
}));
