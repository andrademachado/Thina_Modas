import styled from "styled-components";

export const Imagem = styled.div`
width: 100%;
height: 560px;
background-size: cover;
background-repeat: no-repeat;
position: relative;
display: flex;
align-items: center;
justify-content: center;



&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-attachment: rgba(0,0,0,0.4);
    

}
`

export const BannerContent = styled.div<{
    fontFamily?: string;
    textColor?: string;
    titleLetterSpacing?: string;
    subtitleLetterSpacing?:string;
}>`
    
    position: relative;
    z-index: 2;
    text-align: center;
    color: ${props => props.textColor || 'white'};
    max-width: 600px;
    padding: 20px;
    font-family: ${props => props.fontFamily || "'Montserrat', sans-serif"};
    

    h2{
        font-size: 3rem;
        margin-bottom: 1rem;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        font-weight: 700;
        letter-spacing: ${props => props.titleLetterSpacing || '1.4px'};
    }

    p{
        font-size: 1.5rem;
        margin-bottom: 2rem;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        font-weight: 400;
        letter-spacing: ${props => props.subtitleLetterSpacing || '1.4px'};
    }
`