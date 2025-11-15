import { City } from '../types/city';

type CitiesListProps = {
  cities: City[];
  currentCity: City;
  onCityChange: (city: City) => void;
};

function CitiesList({ cities, currentCity, onCityChange }: CitiesListProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city.title} className="locations__item">
              <a
                className={`locations__item-link tabs__item ${
                  city.title === currentCity.title ? 'tabs__item--active' : ''
                }`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onCityChange(city);
                }}
              >
                <span>{city.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
