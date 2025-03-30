import { useStore } from "zustand";
import CardComp from "../components/Card";
import { useStoreProject } from "../features/store";
import { List } from "antd";

const Cart = () => {
    const { cart, removeFromCart } = useStoreProject();

    return (
        <div>
            <h2>Корзина</h2>
            <List
                dataSource={cart}
                grid={true}
                renderItem={(item) => (
                    <List.Item key={item.id}>
                        <CardComp product={item} isCartPage={true} onRemove={() => removeFromCart(item.id)} />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default Cart;