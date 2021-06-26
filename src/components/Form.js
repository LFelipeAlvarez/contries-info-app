import React, { useContext, useEffect } from 'react'
import { CountriesContext } from '../contexts/CountriesContext';
import { filterByName } from '../helpers/filterByName';
import { filterByRegion } from '../helpers/filterByRegion';

export const Form = ({ inputState, selectValue }) => {

    const { countries, setCountries } = useContext(CountriesContext);
    const { inmutables } = countries;
    const { inputValue, setInputValue } = inputState;

    useEffect(() => {
        if (inputValue !== localStorage.getItem('inputSearchCountries')) {//Para evitar doble render al cargar la pagina
            localStorage.setItem('inputSearchCountries', inputValue);
            const currentRegion = selectValue;
            const currentCountriesByRegion = filterByRegion(inmutables, currentRegion);
            setCountries({
                ...countries,
                mutables: filterByName(currentCountriesByRegion, inputValue)
            });
        }
    }, [inputValue]);

    return (
        <form className="form">
            <input onChange={e => setInputValue(e.target.value)} type="text" className="form__input" placeholder="Search for a country..." value={inputValue} />
        </form>
    )
}
