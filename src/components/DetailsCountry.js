import { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { CountriesContext } from "../contexts/CountriesContext";
import { filterByCode } from "../helpers/filterByCode";

export const DetailsCountry = () => {
  const history = useHistory();
  const { code } = useParams();
  const { countries } = useContext(CountriesContext);
  const { inmutables } = countries;
  const details = filterByCode(inmutables, code.toUpperCase());

  let { flags, name, tld, languages, currencies, borders, capital } = details;
  const nativeName = Object.values(name.nativeName)[0]?.official;
  const topLevelDomain = tld[0];
  const flag = flags.svg;
  name = name.official;
  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });
  languages = formatter.format(Object.values(languages));
  currencies = Object.values(currencies)[0]?.name;

  const keys = {
    population: "Population",
    region: "Region",
    subregion: "Sub Region",
  };

  return JSON.stringify(details) === "{}" ? (
    <h1>No results</h1>
  ) : (
    <div className="container">
      <div className="container__inner">
        <div className="container__head">
          <div
            className="button button--back"
            onClick={() => history.push("/")}
          >
            <div className="button__inner">Back</div>
          </div>
        </div>
        <section className="section">
          <div className="section__left">
            <img src={flag} alt="" className="section__img" />
          </div>
          <div className="section__right">
            <div className="section__inner">
              <h2 className="section__title">{name}</h2>
              <dl className="section__list">
                <div className="section__group">
                  <div className="section__item">
                    <dt className="section__key">Native Name: </dt>
                    <dd className="section__value">{nativeName}</dd>
                  </div>
                  {Object.keys(keys).map((key, i) => (
                    <div className="section__item" key={i}>
                      <dt className="section__key">{keys[key]}: </dt>
                      <dd className="section__value">
                        {details[key]?.toLocaleString()}
                      </dd>
                    </div>
                  ))}
                  <div className="section__item">
                    <dt className="section__key">Capital: </dt>
                    <dd className="section__value">{capital && capital[0]}</dd>
                  </div>
                </div>
                <div className="section__group">
                  <div className="section__item">
                    <dt className="section__key">Top Level Domain: </dt>
                    <dd className="section__value">{topLevelDomain}</dd>
                  </div>
                  <div className="section__item">
                    <dt className="section__key">Currencies: </dt>
                    <dd className="section__value">{currencies}</dd>
                  </div>
                  <div className="section__item">
                    <dt className="section__key">Languages: </dt>
                    <dd className="section__value"> {languages} </dd>
                  </div>
                </div>
                <div className="section__group section__group--last">
                  <dt className="section__key">Borders Countries: </dt>
                  <dd className="section__value section__value--flex">
                    {borders?.map((border, i) => (
                      <Link
                        key={border}
                        to={`/${border.toLowerCase()}`}
                        className="button"
                      >
                        {borders[i]}
                      </Link>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
