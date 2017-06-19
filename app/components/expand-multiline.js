import ExpandMultiline from 'ember-expand-multiline/components/expand-multiline';
import ENV from '../config/environment';

const config = ENV['ember-expand-multiline'] || {};

export default ExpandMultiline.extend({
  _theme: config.theme || 'default',
  _visibleLines: config.visibleLines || 2,
  _showLess: config.showLess
});