import { RootState } from 'store';

export const getCharacters = (state: RootState) => state.data.characters;