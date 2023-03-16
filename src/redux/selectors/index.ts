import { RootState } from "../store";

export const pathSelectors = (state: RootState) => state.path;
export const userSelectors = (state: RootState) => state.users;

