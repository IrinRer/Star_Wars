import { AxiosError } from 'axios';

export const DATA_SLICE_ALIAS = 'data';

export interface DataItem {
  name: string;
  gender: string;
  eye_color: string;
  birth_year: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
}

export interface DataSlice {
  characters: Array<DataItem>;
  totalCount: number;
  page: number;
  selectedCharacter: DataItem | null;
  searchCharacter: string;
  loading: boolean;
  loadingSearch: boolean;
  error: AxiosError | null;
}
