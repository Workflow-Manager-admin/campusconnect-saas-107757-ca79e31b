import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://vscode-internal-20-beta.beta01.cloud.kavia.ai:3001';

// Async thunks
export const fetchPlacements = createAsyncThunk(
  'placements/fetchPlacements',
  async (params, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const response = await axios.get(`${API_BASE_URL}/placements`, {
        headers: { Authorization: `Bearer ${token}` },
        params,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch placements');
    }
  }
);

export const fetchPlacementRounds = createAsyncThunk(
  'placements/fetchPlacementRounds',
  async (placementId, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const response = await axios.get(`${API_BASE_URL}/placements/${placementId}/rounds`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch placement rounds');
    }
  }
);

const placementsSlice = createSlice({
  name: 'placements',
  initialState: {
    placements: [],
    placementRounds: [],
    loading: false,
    error: null,
    selectedPlacement: null,
  },
  reducers: {
    setSelectedPlacement: (state, action) => {
      state.selectedPlacement = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlacements.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlacements.fulfilled, (state, action) => {
        state.loading = false;
        state.placements = action.payload;
      })
      .addCase(fetchPlacements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchPlacementRounds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlacementRounds.fulfilled, (state, action) => {
        state.loading = false;
        state.placementRounds = action.payload;
      })
      .addCase(fetchPlacementRounds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedPlacement, clearError } = placementsSlice.actions;
export default placementsSlice.reducer;
