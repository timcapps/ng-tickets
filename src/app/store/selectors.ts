import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import { RootState } from "./state";

export const selectRootState: MemoizedSelector<object, RootState> = createFeatureSelector<RootState>('root');