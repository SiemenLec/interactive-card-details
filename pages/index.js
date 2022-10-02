import Head from 'next/head';
import { useState } from 'react';
import useForm from '../hooks/useForm';
import CardBack from '../components/CardBack';
import CardFront from '../components/CardFront';
import validate from '../hooks/FormValidationRules';

export default function Home() {
  const { values, errors, handleChange, handleChangeCC, handleSubmit } =
    useForm(succes, validate);

  const [isSubmitted, setIsSubmitted] = useState(false);
  function succes() {
    setIsSubmitted(true);
  }

  return (
    <div>
      <Head>
        <title>Interactive Card Details Form</title>
        <meta name="description" content="Interactive Card Details Form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col md:flex-row h-screen">
          <div className="bg-[url('/assets/bg-main-mobile.png')] md:bg-[url('/assets/bg-main-desktop.png')] md:mr-36 lg:mr-0 shrink-0 bg-cover h-64 md:h-screen md:w-96">
            <div className="absolute z-10 left-2 top-32 md:top-40 md:left-36">
              <CardFront
                cardNumber={values.cardNumber || ''}
                cardholderName={values.cardholderName || ''}
                expMonth={values.expMonth || ''}
                expYear={values.expYear || ''}
              />
            </div>
            <div className="absolute z-0 left-10 top-6 md:top-96 md:left-44 ">
              <CardBack cvc={values.cvc || ''} />
            </div>
          </div>

          {isSubmitted ? (
            // Thank You Screen
            <div className="flex flex-col h-full md:mx-auto justify-center items-center">
              <img src="/assets/icon-complete.svg" alt="completed" />
              <h1 className="text-3xl mt-6">THANK YOU!</h1>
              <p className=" text-dark-grayish-violet pt-2">
                We&apos;ve added your card details
              </p>
              <button className="bg-very-dark-violet mt-8 text-white w-80 p-4 rounded-lg">
                Confirm
              </button>
            </div>
          ) : (
            // Form
            <form
              onSubmit={handleSubmit}
              className="pt-20 md:pt-0 px-6  flex flex-col md:justify-center md:mx-auto md:w-[30rem]"
            >
              {/* Input Group */}
              <div className="flex flex-col">
                <label
                  htmlFor="cardholder-name"
                  className=" text-very-dark-violet"
                >
                  CARDHOLDER NAME
                </label>
                <input
                  onChange={handleChange}
                  value={values.cardholderName || ''}
                  type="text"
                  name="cardholderName"
                  id="cardholder-name"
                  className={
                    'border-2 p-2 rounded-md mt-1 mb-4  text-dark-grayish-violet ' +
                    (errors.cardholderName ? 'border-error-red ' : '')
                  }
                  placeholder="e.g. Jane Appleseed"
                />
                {/* Error */}
                {errors.cardholderName && (
                  <label className="text-error-red text-sm -mt-3 mb-1">
                    {errors.cardholderName}
                  </label>
                )}
              </div>

              {/* Input Group */}
              <div className="flex flex-col">
                <label htmlFor="card-number" className=" text-very-dark-violet">
                  CARD NUMBER
                </label>
                <input
                  onChange={handleChangeCC}
                  value={values.cardNumber || ''}
                  type="text"
                  name="cardNumber"
                  id="card-number"
                  className={
                    'border-2 p-2 rounded-md mt-1 mb-4  text-dark-grayish-violet ' +
                    (errors.cardNumberFormat ||
                    errors.cardNumberEmpty ||
                    errors.cardNumberLength
                      ? 'border-error-red '
                      : '')
                  }
                  placeholder="e.g. 1234 5678 9123 0000"
                />
                {/* Errors */}
                {errors.cardNumberFormat && (
                  <label className="text-error-red text-sm -mt-3 mb-1">
                    {errors.cardNumberFormat}
                  </label>
                )}
                {errors.cardNumberEmpty && (
                  <label className="text-error-red text-sm -mt-3 mb-1">
                    {errors.cardNumberEmpty}
                  </label>
                )}
                {errors.cardNumberLength && (
                  <label className="text-error-red text-sm -mt-3 mb-1">
                    {errors.cardNumberLength}
                  </label>
                )}
              </div>
              {/* Triple Input Group */}
              <div className="flex">
                {/* Column 1 */}
                <div className="w-1/2">
                  <label htmlFor="" className=" text-very-dark-violet">
                    EXP. DATE (MM/YY)
                  </label>
                  <div className="flex">
                    <input
                      onChange={handleChange}
                      value={values.expMonth || ''}
                      type="text"
                      name="expMonth"
                      id="exp-date-m"
                      placeholder="MM"
                      className={
                        'border-2 p-2 rounded-md mt-1 min-w-0 mr-2 text-dark-grayish-violet ' +
                        (errors.expMonthEmpty || errors.expFormat
                          ? 'border-error-red '
                          : '')
                      }
                    />

                    <input
                      onChange={handleChange}
                      value={values.expYear || ''}
                      type="text"
                      name="expYear"
                      id="exp-date-y"
                      placeholder="YY"
                      className={
                        'border-2 p-2 rounded-md mt-1 min-w-0 mr-2 text-dark-grayish-violet ' +
                        (errors.expMonthEmpty || errors.expFormat
                          ? 'border-error-red '
                          : '')
                      }
                    />
                  </div>
                  {errors.expMonthEmpty && (
                    <label className="text-error-red text-sm -mt-3 mb-1">
                      {errors.expMonthEmpty}
                    </label>
                  )}
                  {errors.expFormat && (
                    <label className="text-error-red text-sm -mt-3 mb-1">
                      {errors.expFormat}
                    </label>
                  )}
                </div>

                {/* Column 2 */}
                <div className="w-1/2">
                  <div className="flex flex-col">
                    <label htmlFor="" className=" text-very-dark-violet">
                      CVC
                    </label>
                    <input
                      onChange={handleChange}
                      value={values.cvc || ''}
                      type="text"
                      name="cvc"
                      id="cvc"
                      className={
                        'border-2 p-2 rounded-md mt-1 text-dark-grayish-violet ' +
                        (errors.cvcEmpty || errors.cvcFormat
                          ? 'border-error-red'
                          : '')
                      }
                      placeholder="e.g. 123"
                    />
                  </div>
                  {errors.cvcEmpty && (
                    <label className="text-error-red text-sm -mt-3 mb-1">
                      {errors.cvcEmpty}
                    </label>
                  )}
                  {errors.cvcFormat && (
                    <label className="text-error-red text-sm -mt-3 mb-1">
                      {errors.cvcFormat}
                    </label>
                  )}
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="bg-very-dark-violet mt-4 text-white w-full p-4 rounded-lg"
              >
                Confirm
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
