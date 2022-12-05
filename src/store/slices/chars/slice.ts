import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface CharsState {
  loading: boolean;
  count: number;
  previousPage: string | null;
  nextPage: string | null;
  results: any[];
  error: string | null;
}

const initialState: CharsState = {
  loading: false,
  count: 0,
  previousPage: null,
  nextPage: null,
  results: [],
  error: null,
};

export const charsSlice = createSlice({
  name: "chars",
  initialState,
  reducers: {
    fetching: (state: CharsState) => {
      state.loading = true;
    },
    success: (state: CharsState, action: PayloadAction<any>) => {
      state.loading = false;
      state.count = action.payload.count;
      state.previousPage = action.payload.previous;
      state.nextPage = action.payload.next;
      state.results = action.payload.results;
    },
    error: (state: CharsState, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Los actions creators se generan por cada función reductora
export const { fetching, success, error } = charsSlice.actions;
