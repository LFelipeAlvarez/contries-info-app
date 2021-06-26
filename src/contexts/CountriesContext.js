import { createContext } from "react"
import { useCountries } from "../hooks/useCountries";

const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {

    const { countries, setCountries, isLoading } = useCountries();

    return (
        <CountriesContext.Provider value={{ countries, setCountries, isLoading }}>
            {children}
        </CountriesContext.Provider>
    )
}

export { CountriesContext, CountriesProvider }