import { RootState } from 'store';

export const getCharacters = (state: RootState) => state.data.characters;
export const getSelectorCharacters = (state: RootState) => state.data.selectedCharacter;