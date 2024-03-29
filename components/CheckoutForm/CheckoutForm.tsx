import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import styles from './CheckoutForm.module.scss';
import cn from 'classnames';
import USAStates from 'shared/data/USAStates';
import UKCounties from 'shared/data/UKCounties';
import {
  AvailableCountries,
  useCountryContext,
} from 'context/CountryContextProvider';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import router from 'next/router';
import { useCartContext } from 'context/CartContextProvider';

const COUNTRIES = ['UNITED STATES', 'UNITED KINGDOM'] as const;

type Country = typeof COUNTRIES[number];
type Values = {
  [K in Country]: string;
};

type Inputs = {
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  address: string;
  postalCode: string;
  country: Country;
  state: string;
};

const VALUES: Values = {
  'UNITED STATES': 'USA',
  'UNITED KINGDOM': 'UK',
} as const;

const CheckoutForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  const { country, setCountry } = useCountryContext();
  const { clearCart, setOrdered } = useCartContext();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: 'onBlur' });

  const formSubmitHandler: SubmitHandler<Inputs> = async (data) => {
    try {
      setStatus('loading');
      await fetch('/api/orders', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      clearCart();
      setOrdered(true);
      router.push('/cart');
    } catch (error) {
      setStatus('error');
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form
        onSubmit={handleSubmit(formSubmitHandler)}
        className={styles.content}
      >
        <div className={styles.header}>Contact</div>
        <div className={cn(styles.inputWrapper, styles.bottom20)}>
          <input
            className={styles.input}
            {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
            placeholder='Email'
            type='text'
            data-cy='email'
          />
          <div data-cy='email-error' className={styles.error}>
            {errors?.email && 'Please enter email in correct format'}
          </div>
        </div>

        <div className={styles.header}>Shipping address</div>
        <select
          defaultValue={country}
          {...register('country', {
            required: true,
          })}
          className={cn(styles.input, styles.countrySelect, styles.bottom20)}
          name='country'
          id='country'
          onChange={(e) => setCountry(e.target.value as AvailableCountries)}
          data-cy='country'
        >
          {COUNTRIES.map((elem) => (
            <option key={elem} value={elem}>
              {VALUES[elem]}
            </option>
          ))}
        </select>
        <select
          {...register('state', {
            required: true,
          })}
          className={cn(styles.input, styles.stateSelect, styles.bottom20)}
          name='state'
          id='state'
          data-cy='state'
        >
          {country === 'UNITED STATES' &&
            USAStates.map((elem) => (
              <option key={elem} value={elem}>
                {elem}
              </option>
            ))}
          {country === 'UNITED KINGDOM' &&
            UKCounties.map((elem) => (
              <option key={elem} value={elem}>
                {elem}
              </option>
            ))}
        </select>
        <div className={cn(styles.name, styles.bottom20)}>
          <div className={cn(styles.inputWrapper, styles.nameWrapper)}>
            <input
              data-cy='first-name'
              {...register('firstName', { required: true })}
              className={cn(styles.input, styles.firstNameInput)}
              placeholder='First name'
              type='text'
            />
            <div className={styles.error} data-cy='first-name-error'>
              {errors?.firstName && 'Mandatory field'}
            </div>
          </div>
          <div className={cn(styles.inputWrapper, styles.nameWrapper)}>
            <input
              data-cy='last-name'
              {...register('lastName', { required: true })}
              className={cn(styles.input, styles.lastNameInput)}
              placeholder='Last name'
              type='text'
            />
            <div className={styles.error} data-cy='last-name-error'>
              {errors?.lastName && 'Mandatory field'}
            </div>
          </div>
        </div>
        <div className={cn(styles.inputWrapper, styles.bottom20)}>
          <input
            data-cy='city'
            {...register('city', { required: true })}
            className={cn(styles.input)}
            placeholder='City'
            type='text'
          />
          <div className={styles.error} data-cy='city-error'>
            {errors?.city && 'Mandatory field'}
          </div>
        </div>
        <div className={cn(styles.inputWrapper, styles.bottom20)}>
          <input
            data-cy='address'
            {...register('address', { required: true })}
            className={cn(styles.input)}
            placeholder='Address'
            type='text'
          />
          <div className={styles.error} data-cy='address-error'>
            {errors?.address && 'Mandatory field'}
          </div>
        </div>
        <div className={cn(styles.inputWrapper, styles.bottom20)}>
          <input
            data-cy='postal-code'
            {...register('postalCode', { required: true, pattern: /^\d+$/ })}
            className={cn(styles.input)}
            placeholder='Postal code'
            type='text'
          />
          <div className={styles.error} data-cy='postal-code-error'>
            {errors?.postalCode?.type === 'required' && 'Mandatory field'}
            {errors?.postalCode?.type === 'pattern' &&
              'Postal code can only contain numbers'}
          </div>
        </div>
        <div className={styles.placeOrderWrapper}>
          <Link href={'/cart'}>
            <div className={styles.return}>&#8249; Return to cart</div>
          </Link>

          <input
            data-cy='place-order'
            value={status === 'loading' ? 'Loading...' : 'Place order'}
            className={cn(styles.placeOrderButton)}
            disabled={!isValid}
            type='submit'
          />
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
