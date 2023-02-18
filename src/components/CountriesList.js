import { useContext } from "react";
import { CountriesContext } from "../contexts/CountriesContext";
import { Country } from "./Country";

export const CountriesList = () => {
  const { countries } = useContext(CountriesContext);
  const { mutables } = countries;

  return (
    <div className="cards-list">
      {mutables.map((singleCountry) => {
        const { cca3, flags, name, population, region, capital } =
          singleCountry;
        return (
          <Country
            key={cca3}
            flag={flags.svg}
            name={name}
            population={population}
            region={region}
            capital={capital && capital[0]}
            code={cca3}
          />
        );
      })}
    </div>
  );
};
