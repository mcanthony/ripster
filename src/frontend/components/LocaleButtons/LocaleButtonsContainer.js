import {compose} from 'redux';
import {connect} from 'react-redux';

import {
  loadLocale,
} from 'frontend/flux/locale';

import LocaleButtons from './LocaleButtons';

export default compose(
  connect(
    state => ({
      currentLocale: state.locale.locale,
    }),
    {
      onLocale: loadLocale,
    }
  )
)(LocaleButtons);
