import { useState } from 'react';
import { CountriesList } from '../components/CountriesList'
import { Filter } from '../components/Filter'
import { Form } from '../components/Form'

export const Main = () => {
    const [inputValue, setInputValue] = useState(localStorage.getItem('inputSearchCountries') || '');
    const [selectValue, setSelectValue] = useState(localStorage.getItem('selectFilterCountries') || '');

    return (
        <main className="main">
            <div className="main__inner">
                <div className="main__head">
                    <Form inputState={{ inputValue, setInputValue }} selectValue={selectValue} />
                    <Filter inputValue={inputValue} selectState={{ selectValue, setSelectValue }} />
                </div>
                <CountriesList />
            </div>
        </main>
    )
}
