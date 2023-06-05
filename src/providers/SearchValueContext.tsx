import { createContext, useContext, useState } from "react";

interface iSearchContextProps {
  children: React.ReactNode;
}

const SearchValueContext = createContext({
  searchValue: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  setSearchValue: (_value: string) => {},
});

export const SearchValueProvider = ({ children }: iSearchContextProps) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchValueContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchValueContext.Provider>
  );
};

export const useSearchValue = () => useContext(SearchValueContext);
