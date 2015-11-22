import React from 'react';
import {renderIntoDocument, findAllInRenderedTree, isDOMComponent} from 'react-addons-test-utils';
import {findDOMNode} from 'react-dom';
import {injectIntl, IntlProvider} from 'react-intl';
import testable from './testable';

export function renderComponent(Component, props = {}) {
  const WrappedComponent = injectIntl(testable()(Component));

  return renderIntoDocument(
    <IntlProvider>
      <WrappedComponent {...props} />
    </IntlProvider>
  );
}

export function scryRenderedDOMComponentsWithMarker(root, marker) {
  return findAllInRenderedTree(root, (inst) => (
    isDOMComponent(inst)
      && findDOMNode(inst).getAttribute('data-test-element') === marker
  ));
}

export function findRenderedDOMComponentWithMarker(root, marker) {
  const all = scryRenderedDOMComponentsWithMarker(root, marker);

  if (all.length !== 1) {
    throw new Error(
      `Did not find exactly one match (found: ${all.length}) with marker: ${marker}`
    );
  }

  return all[0];
}
