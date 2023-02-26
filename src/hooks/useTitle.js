/** @format */

import { useEffect } from 'react';

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - 쇼핑몰 프로젝트`;
  }, [title]);
  return null;
};
