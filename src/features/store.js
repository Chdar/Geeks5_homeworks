import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFilters = create((set) => ({
    type: 'all',
    setType: (type) => set({ type }),
}));

export const useStoreProject = create(
    persist(
        (set, get) => ({
            clicked: false,
            cart: [],
            favorites: [],

            addToCart: (product) => {
                const { cart } = get();
                if (!cart.some((item) => item.id === product.id)) {
                    set({ cart: [...cart, product], clicked: true });
                }
            },

            removeFromCart: (id) =>
                set((state) => ({
                    cart: state.cart.filter((item) => item.id !== id),
                })),

            addToFavorites: (product) => {
                const { favorites } = get();
                if (!favorites.some((item) => item.id === product.id)) {
                    set({ favorites: [...favorites, product] });
                }
            },

            removeFromFavorites: (id) =>
                set((state) => ({
                    favorites: state.favorites.filter((item) => item.id !== id),
                })),
        }),
        { name: "store" }
    )
);