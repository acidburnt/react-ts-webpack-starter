import React from 'react';
import ReactDOM from 'react-dom';
import { Translations } from './Translations';
import { Root } from './Root';

const mountNode = document.getElementById('app');
ReactDOM.render(
  <Translations>
    <Root />
  </Translations>,
  mountNode
);
