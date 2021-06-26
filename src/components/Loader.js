import loader from "../assets/img/loader.svg";
export const Loader = () => {
    return (
        <div className="loader">
            <img src={loader} alt="loader" className="loader__img" />
        </div>
    )
}
