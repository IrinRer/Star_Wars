import { UsePagination } from 'constants/common';
import { useState } from 'react';

const usePagination: UsePagination = ({ contentPerPage, count }) => {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(count / contentPerPage); // число сколько должно быть страниц
  const lastContentIndex = page * contentPerPage; //  первый индекс для метода .slice();
  const firstContentIndex = lastContentIndex - contentPerPage; // последний индекс для метода .slice();

  // функция для перехода на определенную страницу.
  const setPageSAFE = (num: number) => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };

  return {
    totalPages: pageCount,
    setPage: setPageSAFE,
    firstContentIndex,
    lastContentIndex,
    page,
  };
};

export default usePagination;
