export const filterByName = (countries, keywords) => {
  return keywords.replace(" ", "").trim() !== ""
    ? countries.filter((country) =>
        country.name.official.toLowerCase().includes(keywords.toLowerCase())
      )
    : countries;
};
