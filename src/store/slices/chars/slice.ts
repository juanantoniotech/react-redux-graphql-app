import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CharsState {
  loading: boolean;
  count: number;
  previous: string | null;
  next: string | null;
  results: any[];
  error: string | null;
}

const initialState: CharsState = {
  loading: false,
  count: 0,
  previous: null,
  next: null,
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
      state.previous = action.payload.previous;
      state.next = action.payload.next;
      state.results = action.payload.results;
    },
  },
});

// Los actions creators se generan por cada función reductora
export const { fetching, success } = charsSlice.actions;
