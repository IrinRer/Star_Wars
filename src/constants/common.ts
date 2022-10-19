export const tag = {
  female: 'purple',
  male: 'green',
  hermaphrodite: 'yellow',
};

export enum NOT_FOUND {
  NA = 'n/a',
  UNKNOWN = 'unknown',
}

export interface UsePaginationProps {
  contentPerPage: number;
  count: number;
}
export interface UsePaginationReturn {
  page: number;
  totalPages: number;
  firstContentIndex: number;
  lastContentIndex: number;
  setPage: (page: number) => void;
}

export type UsePagination = (UsePaginationProps) => UsePaginationReturn;
