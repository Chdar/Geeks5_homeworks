import React from "react";
import { useStoreProject } from "../features/store";
import CardComp from "../components/Card";
import { List } from "antd";

const Favorites = () => {
    const { favorites, removeFromFavorites } = useStoreProject();

    return (
        <div>
            <h2>Избранное</h2>
            {favorites.length === 0 ? (
                <p>Список избранного пуст</p>
            ) : (
                <List
                    dataSource={favorites}
                    grid={{ gutter: 16, column: 4 }}
                    renderItem={(item) => (
                        <List.Item key={item.id}>
                            <CardComp product={item} isFavoritesPage={true} onRemove={() => removeFromFavorites(item.id)} />
                        </List.Item>
                    )}
                />
            )}
        </div>
    );
};

export default Favorites;