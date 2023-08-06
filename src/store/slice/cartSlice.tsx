import { Iproduct } from '@/views/utils/mock';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

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
// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// export interface CounterState {
//   items:Array<any>
//   totalAmount: number;
//   totalQuantity: number;
//   totalPrice : number,
//   // incQty: () => void;
//   // decQty: () => void;
//   toggleCartItemQuantity: (id: string, value: "inc" | "dec") => void;
//   onAdd: (product: any, quantity: number) => void;
//   showCart: boolean;
// }

// const initialState: CounterState = {
//   items: [],
//   totalAmount: 0,
//   totalQuantity: 0,
//   // incQty: () => { },
//   // decQty: () => { },
//   onAdd: () => { },
//   toggleCartItemQuantity: () => { },
//   totalPrice: 0,
//   showCart: false
// }

// export const counterSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     incQty : (state, actions:PayloadAction<any> ) => {
//       // state.totalQuantity = state.totalQuantity + 1
//       state.totalQuantity + 1
//     },
//     deQty : (state, actions:PayloadAction<any> ) => {
//       if(state.totalQuantity - 1 < 1) {
//         state.totalQuantity = 1
//       }else {
//         state.totalQuantity -1;
//       }
//     },
//     addToCart: (state,actions:PayloadAction<any>) => {
//       state.totalQuantity +=actions.payload.quantity
//     },
//     removeFromCart: (state,actions:PayloadAction<any>) => {
//       state.totalQuantity -=actions.payload.quantity
//     },
//     clearCart: (state, action: PayloadAction<number>) => {
//       state=initialState  
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const cartActions = counterSlice.actions

// export default counterSlice.reducer