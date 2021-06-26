import React, { useContext, useEffect } from 'react'
import { CountriesContext } from '../contexts/CountriesContext';
import { filterByName } from '../helpers/filterByName';
import { filterByRegion } from '../helpers/filterByRegion';

export const Filter = ({ selectState, inputValue }) => {

    const { countries, setCountries } = useContext(CountriesContext);
    const { inmutables } = countries;

    const { selectValue, setSelectValue } = selectState;

    useEffect(() => {
        if (localStorage.getItem('selectFilterCountries') !== selectValue) {
            const results = filterByName(inmutables, inputValue);
            localStorage.setItem('selectFilterCountries', selectValue);
            setCountries({
                ...countries,
                mutables: filterByRegion(results, selectValue)
            });
        }

    }, [selectValue]);

    return (
        <select className="filter" onChange={e => setSelectValue(e.target.value)} value={selectValue}>
            <option className="filter__option" value="" style={{ display: 'none' }}>Filter by Region</option>
            <option className="filter__option" value="all">All</option>
            <option className="filter__option" value="Africa">Africa</option>
            <option className="filter__option" value="Americas">America</option>
            <option className="filter__option" value="Asia">Asia</option>
            <option className="filter__option" value="Europe">Europe</option>
            <option className="filter__option" value="Oceania">Oceania</option>
        </select>


    )
}
