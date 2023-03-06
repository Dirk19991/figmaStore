import {
  createContext,
  Dispatch,
  FC,
  FunctionComponent,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export type AvailableCountries = 'UNITED STATES' | 'UNITED KINGDOM';

interface ICountryContext {
  country: AvailableCountries;
  setCountry: (country: AvailableCountries) => void;
}

interface CountryContextProps {
  children: ReactNode;
}

export const CountryContext = createContext<ICountryContext>({
  country: 'UNITED STATES',
  setCountry: () => {},
});

export const useCountryContext = () => useContext(CountryContext);

function CountryContextProvider({ children }: any) {
  const [country, setCountry] = useState<AvailableCountries>('UNITED STATES');

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
