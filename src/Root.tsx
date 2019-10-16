import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useCountdown } from './hooks/useCountdown';

export const Root = () => {
  const [isCounting, startCountdown] = useCountdown(3000);

  return (
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
      <button onClick={startCountdown}>
        {isCounting ? 'Is counting' : 'Is not counting'}
      </button>
    </>
  );
};
