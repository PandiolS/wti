
export function  getVisitedCountriesPerContinent (item, countriesData) {   
    let countries = countriesData.filter(obj => obj.continent === item.id);
    return countries.length;
}