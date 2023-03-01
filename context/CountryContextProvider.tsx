import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface ICountryContext {
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
}

export const CountryContext = createContext<ICountryContext>({
  country: '',
  setCountry: () => {},
});

export const useCountryContext = () => useContext(CountryContext);

function CountryContextProvider({ children }) {
  const [country, setCountry] = useState('UNITED STATES');

  const countryValue = {
    country,
    setCountry,
  };

  return (
    <CountryContext.Provider value={countryValue}>
      {children}
    </CountryContext.Provider>
  );
}
export default CountryContextProvider;
