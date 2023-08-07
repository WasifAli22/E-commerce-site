import { Iproduct } from '@/views/utils/mock';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

let lg = console.log

export interface CounterState {
  totalAmount: number;
  totalQuantity: number;
  items:Array<any>
}

const initialState: CounterState = {
  items:[],
  totalAmount:0,
  totalQuantity:0

}
export type Cart = {
  items: Iproduct[];
  totalQuantity: number;
  totalAmount: number;
};

export const fetchCartData= async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/cart`);
    if(!res.ok) {
      console.log("Failed to fetch data")
    }
    const data = await res.json();
    console.log("fetch cart data is",data)
    return data
  } catch (error) {
    throw new Error(error as any)
  }
}
fetchCartData()

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state ,actions:PayloadAction<any>) => {
      const newItem : Iproduct = actions.payload.product;
      const existingItem = state.items.find(
        (item) => item.slug.current === newItem.slug.current
      )
      state.totalQuantity = state.totalQuantity + actions.payload.quantity;
      state.totalAmount = state.totalAmount + ( actions.payload.quantity * actions.payload.product.price) ;
      if (!existingItem) {
        const totalPrice = newItem.price * actions.payload.quantity;
        state.items.push({
          ...newItem,
          quantity: actions.payload.quantity,
          totalPrice,
        });
      }else {
        const totalPrice = existingItem.totalPrice + existingItem.price * actions.payload.quantity
        existingItem.quantity += actions.payload.quantity;
        existingItem.totalPrice = totalPrice;
      }
    },
    
    removeFromCart: (state,actions:PayloadAction<any>) => {
      const productSlug = actions.payload;
      const existingItem = state.items.find(
        (item) => item.slug.current === productSlug
      );

      state.totalQuantity--;
      state.totalAmount = state.totalAmount - existingItem?.price;
      if (existingItem?.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.slug.current !== productSlug
        );
      }else {
        existingItem!.quantity--;
        existingItem!.totalPrice = existingItem!.totalPrice -existingItem?.price
      }
    },
    clearCart: (state, action: PayloadAction<number>) => {
      state=initialState  
    },
  },
})

// Action creators are generated for each case reducer function
export const cartActions = counterSlice.actions

export default counterSlice.reducer