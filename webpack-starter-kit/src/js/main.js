import refs from './refs';
import severalCountriesTpl from '../templates/template-list.hbs';
import oneCountry from '../templates/template-item.hbs';
import errors from './error';
// import { error } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';
// import '@pnotify/confirm/dist/PNotifyConfirm.css';

export default function addMarkup(countries) {
  if (!countries) return;
  if (countries.length === 1) {
    const markup = oneCountry(countries);
    refs.markup.insertAdjacentHTML('beforeend', markup);
    refs.countryInput.value = '';
    return;
  }
  if (countries.length >= 2 && countries.length <= 10) {
    const markup = severalCountriesTpl(countries);
    refs.markup.insertAdjacentHTML('beforeend', markup);
    return;
  }
  if (countries.length > 10) {
    errors.tooManyMatchesError();
    return;
  }
}
