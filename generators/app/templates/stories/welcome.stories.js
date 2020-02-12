import { html } from 'lit-html';
import { withKnobs, text } from "@storybook/addon-knobs";
import '../src/<%= elementName %>';

export default {
  title: 'LitElement Demo',
  decorators: [withKnobs],
};

export const Case_1 = () => {
  const title = text("Title", 'LitElement');
  return html`
    <<%= elementName %> title=${title}></<%= elementName %>>
  `
};
