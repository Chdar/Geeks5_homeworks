import { useFavoritesStore } from '../features/store'; 

const Favorites = () => {
  const { favorites } = useFavoritesStore(); 

  return (
    <div>
      <h2>Избранное</h2>
      {favorites.length === 0 ? <p>Нет избранных товаров</p> : (
        favorites.map((item) => (
          <div key={`fav-${item.id}`}>{item.title}</div>
        ))
      )}
    </div>
  );
};

export default Favorites;