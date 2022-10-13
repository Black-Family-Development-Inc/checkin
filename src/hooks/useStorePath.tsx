const currentPath = window.location.pathname;
const savedPage = "savedPage";

export const useStorePath = () => {
  localStorage.removeItem(savedPage);
  localStorage.setItem(savedPage, currentPath);
};

export const getStoredPath = () => {
  return localStorage.getItem(savedPage);
};
