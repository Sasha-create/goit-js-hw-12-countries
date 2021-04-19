import errors from './error';
import refs from './refs';

export default function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Error Fetching data');
    })
    .catch(error => {
      refs.countryInput.value = '';
      errors.badRequest(error);
    });
}
