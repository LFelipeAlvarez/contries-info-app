export const filterByCode = (countries, code) => {
  const found = countries.find((country) => country.cca3 === code);

  return found ? found : {};
};
