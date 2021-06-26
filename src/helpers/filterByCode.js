export const filterByCode = (countries, code) => {

    const found = countries.find(country => country.alpha3Code === code);

    return found ? found : {};

}
