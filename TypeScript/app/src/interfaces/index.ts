export interface Reviews {
    name: string,
    profession: string,
    description: string,
    img: string
}


export interface Feature {
    category: number
    color: string
    discount: boolean
    images: string[]
    price: number
    quantity: number
    rating: number
    slug: string
    title: string
}


export interface Recent {
    category: number
    color: string
    discount: boolean
    images: string[]
    price: number
    quantity: number
    rating: number
    slug: string
    title: string
}


export  interface DispatchData {
    type: string,
    payload: Data
}

export interface Tokens {
    refresh: string,
    access: string
}


export interface Data {
    username: string,
    password: string,
    email?: string
}

