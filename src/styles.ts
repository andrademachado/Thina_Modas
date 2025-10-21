import styled, { createGlobalStyle } from "styled-components";

export const cores={
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
        .visually-hidden {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
    }

    html, body, #root { height: 100%; margin: 0; padding: 0; }

    body {
        background-color: ${cores.branco};
        color: ${cores.preto};
        font-family: 'Roboto', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    img { max-width: 100%; height: auto; display: block; }
    a { color: inherit; text-decoration: none; }
    button { font-family: inherit; }
`;


export const Container = styled.div`
max-width: 1024px;
width: 100%;
margin: 0 auto;
`
