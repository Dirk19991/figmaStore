import { ChangeEventHandler, useState } from 'react';
import styles from './CheckoutForm.module.scss';
import cn from 'classnames';
import USAStates from 'shared/data/USAStates';
import UKCounties from 'shared/data/UKCounties';
import {
  AvailableCountries,
  useCountryContext,
} from 'context/CountryContextProvider';

const COUNTRIES = ['UNITED STATES', 'UNITED KINGDOM'] as const;

type Country = typeof COUNTRIES[number];
type Values = {
  [K in Country]: string;
};

const VALUES: Values = {
  'UNITED STATES': 'USA',
  'UNITED KINGDOM': 'UK',
} as const;

const CheckoutForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedCountry, setSelectedCountry] =
    useState<Country>('UNITED STATES');

  const { country, setCountry } = useCountryContext();

  const emailHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };

  const firstNameHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLastName(e.target.value);
  };

  const selectCountryHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedCountry(e.target.value as Country);
    setCountry(e.target.value as AvailableCountries);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.content}>
        <div className={styles.header}>Contact</div>
        <input
          value={email}
          onChange={emailHandler}
          className={cn(styles.input, styles.contactInput)}
          placeholder='Email'
          type='text'
        />
        <div className={styles.header}>Shipping address</div>
        <select
          onChange={selectCountryHandler}
          value={selectedCountry}
          className={cn(styles.input, styles.countrySelect)}
          name='country'
          id='country'
        >
          {COUNTRIES.map((elem) => (
            <option value={elem}>{VALUES[elem]}</option>
          ))}
        </select>
        <select
          className={cn(styles.input, styles.stateSelect)}
          name='state'
          id='state'
        >
          {country === 'UNITED STATES' &&
            USAStates.map((elem) => <option value={elem}>{elem}</option>)}
          {country === 'UNITED KINGDOM' &&
            UKCounties.map((elem) => <option value={elem}>{elem}</option>)}
        </select>
        <div className={styles.name}>
          <input
            value={firstName}
            onChange={firstNameHandler}
            className={cn(styles.input, styles.firstNameInput)}
            placeholder='First name'
            type='text'
          />
          <input
            value={lastName}
            onChange={lastNameHandler}
            className={cn(styles.input, styles.lastNameInput)}
            placeholder='Last name'
            type='text'
          />
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
