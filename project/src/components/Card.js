import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Image } from "antd";
import { useEffect, useState } from "react";
import styles from './components.module.css';
import { useStoreProject } from "../features/store";

const CardComp = ({ product, isCartPage, isFavoritesPage, onRemove }) => {
    const { addToCart, removeFromCart, addToFavorites, removeFromFavorites, cart, favorites } = useStoreProject();
    
    const [clickHeart, setClickHeart] = useState(false);
    const [clickCart, setClickCart] = useState(false);

    // Синхронизация состояния кнопок с хранилищем
    useEffect(() => {
        setClickCart(cart.some((item) => item.id === product.id));
        setClickHeart(favorites.some((item) => item.id === product.id));
    }, [cart, favorites, product.id]);

    const handleCartClick = () => {
        if (isCartPage) {
            onRemove();
        } else {
            if (clickCart) {
                removeFromCart(product.id);
            } else {
                addToCart(product);
            }
            setClickCart(!clickCart);
        }
    };

    const handleHeartClick = () => {
        if (isFavoritesPage) {
            onRemove();
        } else {
            if (clickHeart) {
                removeFromFavorites(product.id);
            } else {
                addToFavorites(product);
            }
            setClickHeart(!clickHeart);
        }
    };

    return (
        <Card title={product.title} cover={<Image src={product.thumbnail} alt={product.title} />}>
            <p>Цена: {product.price}</p>
            <p>Рейтинг: {product.rating}</p>
            <div style={{ display: "flex", fontSize: "30px", justifyContent: "space-between" }}>
                <ShoppingCartOutlined
                    className={clickCart ? styles.clickedTwo : ""}
                    onClick={handleCartClick}
                    style={{ cursor: "pointer", color: clickCart ? "green" : undefined }}
                />
                <HeartOutlined
                    className={clickHeart ? styles.clicked : ""}
                    onClick={handleHeartClick}
                    style={{ cursor: "pointer", color: clickHeart ? "red" : undefined }}
                />
            </div>
        </Card>
    );
};

export default CardComp;