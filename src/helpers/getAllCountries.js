export const getAllCountries = async () => {
    try {
        const response = await fetch('https://restcountries.eu/rest/v3.1/all');
        const data = await response.json();
        return data;
    } catch (error) {
        console.warn(error);
        alert('error: ' + error);
    }
}
