import { useQuery } from "@tanstack/react-query";

export const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    return res.json();
}

export function useProducts() {
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    })
}

