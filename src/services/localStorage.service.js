import { LOCAL_STORAGE } from "@/shared/constants";

export function getLocalStorage() {
  const value = localStorage.getItem(LOCAL_STORAGE);
  if (!value) return "";
  return value;
}

export function setLocalStorage(inputValue) {
  localStorage.setItem(LOCAL_STORAGE, inputValue);
}
