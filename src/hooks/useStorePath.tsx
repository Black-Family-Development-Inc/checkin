const savedPage = "savedPage";

export const useStorePath = () => {
  const currentPath = window.location.pathname;
  localStorage.removeItem(savedPage);
  localStorage.setItem(savedPage, currentPath);
};

export const getStoredLocation = () => {
  return localStorage.getItem(savedPage);
};
