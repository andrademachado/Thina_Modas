import { createGlobalStyle } from "styled-components";

const cores = {
    branco: '#fff',
    preto: '#0000',
    pretoCinza: '#000000A8',
    cinza: '#00000075',
    rosa: '#fbdeea',
    rosaBranco: '#F9F5F4',
    marrom: '#be9061',
    verde: '#027C3F',
    vinho: '#79191D'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:  Roboto flex, sans-serif;
    }

    body {
        background-color: ${cores.branco};
        color: ${cores.pretoCinza} ;
    }
`


