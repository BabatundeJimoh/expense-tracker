import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: [
    {
      id: "2736448273337",
      items: "Maggi,Yam,Flour,Onion,Rice",
      date: "12/04/2023",
      amount: "GHC 160.00",
    },
    {
      id: "273654629383",
      items: "Powdered pepper,Water,Oil,Rice",
      date: "24/04/2023",
      amount: "GHC 200.00",
    },
  ],
};

const mySlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
    },
    updateCustomer: (state, action) => {
      const { id, items, date, amount } = action.payload;
      const customerToUpdate = state.customers.find(
        (customer) => customer.id === id
      );

      if (customerToUpdate) {
        customerToUpdate.items = items;
        customerToUpdate.date = date;
        customerToUpdate.amount = amount;
      }
    },
    deleteCustomer: (state, action) => {
      state.customers = state.customers.filter(
        (customer) => customer.id !== action.payload
      );
    },
  },
});

export const { addCustomer, updateCustomer, deleteCustomer } = mySlice.actions;
export default mySlice.reducer;
