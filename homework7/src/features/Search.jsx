import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchProducts = async (query) => {
  const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  return response.json();
};

const Search = () => {
  const [query, setQuery] = useState('');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', query],
    queryFn: () => fetchProducts(query),
    enabled: query.length > 0, // Запрос выполняется только если строка поиска не пустая
  });

  return (
    <div>
      <input 
        type="text" 
        placeholder="Поиск товаров..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      {isLoading && <p>Загрузка...</p>}
      {isError && <p>Ошибка загрузки</p>}
      {data && data.products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default Search;