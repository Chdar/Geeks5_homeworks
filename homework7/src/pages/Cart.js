import { useCartStore } from '../features/store'; 

const Cart = () => {
  const { cart } = useCartStore(); 

  return (
    <div>
      <h2>Корзина</h2>
      {cart.length === 0 ? <p>Корзина пуста</p> : (
        cart.map((item) => (
          <div key={`cart-${item.id}`}>{item.title}</div>
        ))
      )}
    </div>
  );
};

export default Cart;
