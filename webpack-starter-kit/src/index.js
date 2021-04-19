import './styles.css';
import './js/main';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import addMarkup from './js/main';
import debounce from 'lodash.debounce';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';

refs.countryInput.addEventListener('input', debounce(countryInputHandler, 500));

function countryInputHandler(event) {
  fetchCountries(event.target.value)
    .then(countries => {
      refs.markup.innerHTML = '';
      addMarkup(countries);
    })
    .catch(error => {
      return;
    });
}
