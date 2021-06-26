export const filterByRegion = (countries, region) => {
    return region === 'all' || region === ''
        ? countries
        : countries.filter(country => country.region === region)
}