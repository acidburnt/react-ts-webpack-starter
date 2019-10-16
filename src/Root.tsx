import React from 'react';
import { FormattedMessage } from 'react-intl';

export const Root = () => (
  <>
    <h1>
      <FormattedMessage
        id="root.greeting"
        values={{ name: 'Michal' }}
        defaultMessage="Hello"
      />
    </h1>
    <p>
      <FormattedMessage id="root.text" defaultMessage="Does this work?" />
    </p>
  </>
);
