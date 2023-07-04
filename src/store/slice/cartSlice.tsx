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

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,actions:PayloadAction<any>) => {
      state.totalQuantity +=actions.payload.quantity
    },
    removeFromCart: (state,actions:PayloadAction<any>) => {
      state.totalQuantity -=actions.payload.quantity
    },
    clearCart: (state, action: PayloadAction<number>) => {
      state=initialState  
    },
  },
})

// Action creators are generated for each case reducer function
export const cartActions = counterSlice.actions

export default counterSlice.reducer