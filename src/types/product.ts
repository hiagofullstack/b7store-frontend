export type Product = {
    id: number;
    name: string;
    label: string;
    image: string;
    price: number;
    liked: boolean;
}

export type ProductComplete = {
    id: number;
    label: string;
    images: string[];
    price: number;
    liked: boolean;
    description: string;
}