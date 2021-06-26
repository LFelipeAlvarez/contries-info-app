import { useContext } from "react";
import { CountriesContext } from "../contexts/CountriesContext"
import { Country } from "./Country"

export const CountriesList = () => {
    const { countries } = useContext(CountriesContext);
    const { mutables } = countries;

    return (
        <div className="cards-list">
            {mutables.map(singleCountry => {
                const { alpha3Code, flag, name, population, region, capital } = singleCountry;
                return (
                    <Country
                        key={alpha3Code}
                        flag={flag}
                        name={name}
                        population={population}
                        region={region}
                        capital={capital}
                        code={alpha3Code}
                    />
                )
            })}
        </div>
    )
}
