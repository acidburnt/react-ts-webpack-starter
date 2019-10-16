import React from 'react';
import messages_en from './translations/en.json';
import messages_pl from './translations/pl.json';
import { IntlProvider } from 'react-intl';

const messages = {
  en: messages_en,
  pl: messages_pl
};

export const Translations = ({ children }: { children: React.ReactChild }) => (
  <IntlProvider locale="en" messages={messages['pl']}>
    {children}
  </IntlProvider>
);
