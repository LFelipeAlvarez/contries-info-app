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

    const { flag, name, topLevelDomain, languages, currencies, borders } = details;
    const keys = {
        nativeName: 'Native Name',
        population: 'Population',
        region: 'Region',
        subregion: 'Sub Region',
        capital: 'Capital',
    };

    const bordersName = borders?.map(border => {
        const name = filterByCode(inmutables, border).name;
        const index = name.indexOf('(');
        return index !== -1 ? name.slice(0, index).trim() : name;
    });

    return (
        JSON.stringify(details) === '{}'
            ? <h1>No results</h1>
            : <div className="container">
                <div className="container__inner">

                    <div className="container__head">
                        <div className="button button--back" onClick={() => history.push('/')}>
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
                                        {
                                            Object.keys(keys).map((key, i) =>
                                                <div className="section__item" key={i}>
                                                    <dt className="section__key">{keys[key]}: </dt>
                                                    <dd className="section__value">{details[key].toLocaleString()}</dd>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="section__group">
                                        <div className="section__item" >
                                            <dt className="section__key">Top Level Domain: </dt>
                                            <dd className="section__value">{topLevelDomain[0]}</dd>
                                        </div>
                                        <div className="section__item" >
                                            <dt className="section__key">Currencies: </dt>
                                            <dd className="section__value">{currencies[0].name}</dd>
                                        </div>
                                        <div className="section__item">
                                            <dt className="section__key">Languages: </dt>
                                            <dd className="section__value">
                                                {
                                                    languages.map((language, i, a) =>
                                                        i === a.length - 1
                                                            ? language.name
                                                            : `${language.name}, `)
                                                }
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="section__group section__group--last">
                                        <dt className="section__key">Borders Countries: </dt>
                                        <dd className="section__value section__value--flex">
                                            {
                                                borders.map((border, i) => <Link key={border} to={`/${border.toLowerCase()}`} className="button" >{bordersName[i]}</Link>)
                                            }
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

    )

}
