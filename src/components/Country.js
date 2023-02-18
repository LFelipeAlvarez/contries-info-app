import { Link } from "react-router-dom";
export const Country = ({ flag, name, population, region, capital, code }) => {
  return (
    <Link to={`/${code.toLowerCase()}`} className="link">
      <article className="card">
        <div className="card__head">
          <img
            src={flag}
            alt={name + "'s flag"}
            className="card__img"
            loading="lazy"
          />
        </div>
        <div className="card__body">
          <h2 className="card__title">{name.official}</h2>
          <dl className="card__details">
            <div className="card__group">
              <dt className="card__key">Population: </dt>
              <dd className="card__value">{population.toLocaleString()}</dd>
            </div>
            <div className="card__group">
              <dt className="card__key">Region: </dt>
              <dd className="card__value">{region}</dd>
            </div>
            <div className="card__group">
              <dt className="card__key">Capital: </dt>
              <dd className="card__value">{capital}</dd>
            </div>
          </dl>
        </div>
      </article>
    </Link>
  );
};
