export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "Set_User":
      return {
        ...state,
        user: action.user,
      };
    case "Add_To_Cart":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "Remove_From_Cart":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product id : ${action.id} as it is not available in the cart`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};
export default reducer;
