import { useEffect, useState } from "react";
import CartModalEmpty from "./CartModalEmpty";
import CartModalFull from "./CartModalFull";
import { useProductCategories } from "../contexts/ProductsCategoriesProvider";

function CartModal({ isCartOpen, setCartOpen }) {
  const { cart } = useProductCategories();
  const [isEmpty, setIsEmpty] = useState(cart.length === 0 ? true : false);
  useEffect(() => {
    setIsEmpty(cart.length === 0 ? true : false);
  }, [cart]);

  if (isEmpty) return <CartModalEmpty />;
  if (!isEmpty)
    return (
      <CartModalFull
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
        cart={cart}
      />
    );
}

export default CartModal;
