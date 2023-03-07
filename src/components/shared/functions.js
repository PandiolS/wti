
export function  getVisitedCountriesPerContinent (item, countriesData) {   
    let countries = countriesData.filter(obj => obj.continent === item.id);
    return countries.length;
}


export const maptChartData = {
    chart: {
        map: 'custom/world-robinson'
    },
    title: {
        text: 'Highmaps basic demo'
    },
    tooltip: {
        headerFormat: "",
        pointFormat: "lat: {point.lat}, lon: {point.lon}"
      },
    credits: {
        enabled: false
    },
    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
    colorAxis: {
        min: 0
    },

    series: [{
        name: "",
        data: [
            ['it', 0]
        ]
    }]
}
