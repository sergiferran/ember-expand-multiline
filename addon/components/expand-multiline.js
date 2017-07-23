import Ember from 'ember';
import layout from '../templates/components/expand-multiline';

export default Ember.Component.extend({
  layout,

  classNames: ['expand-multiline'],
  classNameBindings: ['theme', 'isExpanded:expanded:collapsed'],

  isExpanded: false,

  expandText: 'Show more',
  collapseText: 'Show less',
  theme: Ember.computed('_theme', function() {
    return this.get('_theme');
  }),
  visibleLines: Ember.computed('_visibleLines', function() {
    return this.get('_visibleLines');
  }),
  showLess: Ember.computed('_showLess', function() {
    let showLess = this.get('_showLess');
    if (Ember.isPresent(showLess)) {
      return showLess;
    }
    return true;
  }),

  bubbles: true,

  _theme: 'default',
  _visibleLines: 2,
  _showLess: true,

  getLineHeight() {
    let $this = this.$();
    let lineHeight = $this.css('lineHeight').replace('px', '');
    if (window.isNaN(lineHeight)) {
      let fontSize = $this.css('font-size').replace('px', '');
      return Math.floor(parseInt(fontSize) * 1.15);
    }
    return lineHeight;
  },

  isOverflowed: false,

  calculateLines: Ember.on('didRender', Ember.observer('visibleLines', function() {
    let $this = this.$();
    if ($this && $this[0]) {
      if (!this.get('isExpanded')) {
        let lineHeight = this.getLineHeight();
        let visibleLines = this.get('visibleLines');
        let maxHeight = lineHeight * visibleLines;
        let isOverflowed = $this.prop('scrollHeight') > maxHeight;
        this.set('isOverflowed', isOverflowed);
        if (isOverflowed) {
          $this.css('max-height', maxHeight);
          return;
        }
      }
      $this.css('max-height', '');
    }
  }))
});