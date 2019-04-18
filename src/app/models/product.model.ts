export default interface ProductModel{
    _id: string,
    name: string,
    price: number,
    image: string,
    description: string,
    views: number
    tags: { 
        electro: boolean,
        home: boolean,
        sport: boolean
    },
    _acl: { 
        creator: string 
    }
}