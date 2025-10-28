import {  Titulo, Card, Imagem,  Preco, Info  } from './styles'

type Props ={
    title:string;
    preco:string;
    infos:string;
    image: string;
}


const Product =({ title,preco, infos,image }:Props) => (
    <Card>
        <Imagem src={image} alt={title}/>
        <Titulo>{title}</Titulo>
        <Preco>{preco}</Preco>
        <Info>{infos}</Info>
    </Card>
    
)

export default Product