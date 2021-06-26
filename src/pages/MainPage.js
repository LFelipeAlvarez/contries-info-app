import { useContext } from 'react';
import { Loader } from '../components/Loader';
import { Main } from '../components/Main';
import { CountriesContext } from '../contexts/CountriesContext';

export const MainPage = () => {
    const { isLoading } = useContext(CountriesContext);
    return (
        isLoading
            ? <Loader />
            : <Main />
    );
}