import styled, { createGlobalStyle } from "styled-components";

export const cores={
    branco: '#ffffff',
    preto: 'rgba(0, 0, 0, 1)',
    pretoCinza: 'rgba(0, 0, 0, 0.66)',
    cinza: 'rgba(0, 0, 0, 0.46)',
    rosa: 'rgba(251, 222, 234, 1)',
    rosaBranco: 'rgba(249, 245, 244, 1)',
    marrom: 'rgba(190, 144, 97, 1)',
    verde: 'rgba(2, 124, 63, 1)',
    vinho:'rgba(121, 25, 29, 1)'
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
padding: 0 24px;
`
