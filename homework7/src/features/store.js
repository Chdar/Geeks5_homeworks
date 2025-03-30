import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  users: JSON.parse(localStorage.getItem('users')) || [],
  currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,

  register: (newUser) => set((state) => {
    const existingUser = state.users.find(user => user.email === newUser.email);
    if (existingUser) {
      alert('Пользователь уже зарегистрирован!');
      return {}; 
    }
    const updatedUsers = [...state.users, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    return { users: updatedUsers };
  }),

  login: (email, password) => set((state) => {
    const user = state.users.find(u => u.email === email && u.password === password);
    if (!user) {
      alert('Неверные данные!');
      return { currentUser: null };
    }
    localStorage.setItem('currentUser', JSON.stringify(user));
    return { currentUser: user };
  }),

  logout: () => set(() => {
    localStorage.removeItem('currentUser');
    return { currentUser: null };
  })
}));

export const useCartStore = create((set) => ({
  cart: [],

  addToCart: (item) => set((state) => {
    const exists = state.cart.some(cartItem => cartItem.id === item.id);
    if (!exists) {
      return { cart: [...state.cart, item] };
    }
    return {}; 
  }),

  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter(item => item.id !== id)
  }))
}));

export const useFavoritesStore = create((set) => ({
  favorites: [],

  addToFavorites: (item) => set((state) => {
    const exists = state.favorites.some(favItem => favItem.id === item.id);
    if (!exists) {
      return { favorites: [...state.favorites, item] };
    }
    return {}; 
  }),

  removeFromFavorites: (id) => set((state) => ({
    favorites: state.favorites.filter(item => item.id !== id)
  }))
}));

export const useFilters = create((set) => ({
  category: '',
  searchQuery: '',

  setCategory: (category) => set({ category }),
  setSearchQuery: (query) => set({ searchQuery: query })
}));