import { html, fixture, expect } from '@open-wc/testing';

import '../src/<%= elementName %>';

describe('<<%= elementName %>/>', () => {
  let el;

  beforeEach(async () => {
    el = await fixture(html`
      <<%= elementName %>></<%= elementName %>>
    `);
  });

  it('Component has X properties initialized', () => {
    expect(el.title).to.be.an('string');

    expect(el.title).to.equal('LitElement');
  });
});
