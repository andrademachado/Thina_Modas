class Thina {
    title:string
    preco:string
    infos: string
    image:string
    id:number

    constructor (
        id:number,
        title: string,
        preco: string,
        infos: string,
        image: string
    ){
        this.id = id
        this.image=image
        this.infos=infos
        this.preco=preco
        this.title=title
    }    
}

export default Thina





