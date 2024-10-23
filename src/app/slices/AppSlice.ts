import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../utils/Types";
import { pokemonTabs } from "../../utils/Constants";

const initialState:AppTypeInitialState = {
    toasts:[],
    currentPokemonTab: pokemonTabs.description,
};

export const AppSlice = createSlice({
    name:"app",
    initialState,
    reducers:{
        setToast:(state, action)=>{
            const toasts = [...state.toasts];
            toasts.push(action.payload);
            state.toasts=toasts;
        },
        clearToasts:(state)=>{
            state.toasts=[];
        },
        setPokemonTab:(state,action)=>{
            state.currentPokemonTab=action.payload;
        }
    }
})

export const {setToast, clearToasts, setPokemonTab} = AppSlice.actions;