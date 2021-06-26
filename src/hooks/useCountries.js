import { useEffect, useState } from "react";
import { filterByName } from "../helpers/filterByName";
import { filterByRegion } from "../helpers/filterByRegion";
import { getAllCountries } from "../helpers/getAllCountries";

export const useCountries = () => {

    const [countries, setCountries] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllCountries().then(fetchCountries => {
            const mutables = filterByRegion(
                filterByName(fetchCountries, localStorage.getItem('inputSearchCountries') || ''),
                localStorage.getItem('selectFilterCountries') || ''
            );
            setCountries({
                mutables,
                inmutables: fetchCountries
            });
            setIsLoading(false);
        });

    }, []);

    return {
        countries,
        setCountries,
        isLoading
    };
}
