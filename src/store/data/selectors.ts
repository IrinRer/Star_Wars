import { RootState } from 'store';

export const getCharacters = (state: RootState) => state.data.characters;
export const getSelectorCharacters = (state: RootState) => state.data.selectedCharacter;
export const getLoading = (state: RootState) => state.data.loading;
export const getSearchCharacters = (state: RootState) => state.data.searchCharacter;
export const getSearchLoading = (state: RootState) => state.data.loadingSearch;