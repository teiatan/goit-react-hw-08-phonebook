//import { useContext } from "react";
import { Context } from "./context";

//кольори використовуємо в styled файлах:
//background-color: ${props => (props.theme.footer.backgroundColor)};

class Theme {
    constructor({header, main, footer}) {

        this.header = header ?? {
            backgroundColor: "rgb(3, 169, 161)",
            textColor: "white",
        };

        this.main = main ?? {

        };

        this.footer = footer ?? {
            backgroundColor: "rgb(3, 169, 161)",
            textColor: "white",
        };
    }
}

//світла тема дефолтна
export const light = new Theme({});

export const dark = new Theme({
    header: {
        backgroundColor: "black",
        textColor: "white",
    },
    //main: {},
    footer: {
        backgroundColor: "black",
        textColor: "white",
    }
});

//функціонал перемикання теми через контекст

let theme = 'ligth';
export function themeChanging() {
    switch (theme) {
        case "light":
            theme="dark";
            break;
        case "dark":
            theme="light"
            break;
        default:
            
    }
}

const value = 'light';

export function ContextProvider ({children}) {
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
};

