import { useContext } from "react";
import { DetailsCountry } from "../components/DetailsCountry";
import { Loader } from "../components/Loader";
import { CountriesContext } from "../contexts/CountriesContext";

export const DetailsPage = () => {
    const { isLoading } = useContext(CountriesContext);
    return (
        isLoading
            ? <Loader />
            : <DetailsCountry />
    )

}
