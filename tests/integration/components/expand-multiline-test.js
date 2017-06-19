import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('expand-multiline', 'Integration | Component | expand multiline', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs `
    {{#expand-multiline visibleLines=2}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo mi. Sed pellentesque diam eu rhoncus ullamcorper. Sed blandit diam sed justo imperdiet consequat. Nullam ac condimentum neque, pulvinar lacinia erat. Praesent lobortis, velit id imperdiet consectetur, justo enim scelerisque nisl, vitae eleifend libero tellus id diam. Vivamus dapibus, mi sit amet mollis suscipit, ligula turpis rhoncus arcu, eu dapibus eros tortor in purus. Nam iaculis dapibus neque, nec posuere magna. Morbi suscipit purus commodo rutrum facilisis. Praesent et est non est iaculis tempus. Phasellus id neque consectetur, rutrum orci non, viverra erat. Aliquam vitae tincidunt nibh. Nunc et libero nec nibh interdum luctus.

Quisque dictum gravida orci, vel volutpat libero faucibus cursus. Sed vitae est vitae dui bibendum vestibulum. Phasellus sed porttitor dolor. Aenean eleifend metus nec tellus lobortis fringilla. Curabitur porta elit a tortor scelerisque rutrum. Sed sed nibh eros. Cras pharetra finibus erat, nec venenatis sem ultrices sed.

Nulla facilisi. Nulla vestibulum metus non lectus consectetur euismod. Phasellus elementum pharetra malesuada. Duis malesuada malesuada sodales. Praesent euismod at justo id facilisis. Pellentesque elit est, bibendum ut faucibus at, venenatis ac arcu. Vivamus feugiat malesuada tempus. Duis lobortis, tortor sit amet convallis commodo, augue lacus rhoncus augue, vitae ullamcorper magna libero ac ex. Fusce consectetur eros eget lorem tincidunt hendrerit. Donec varius faucibus nibh, ut tristique mauris pharetra ut.

Vivamus quis eros interdum, ultrices elit ut, fermentum ligula. Proin at placerat urna, vitae imperdiet arcu. Cras aliquet mollis sapien, at semper augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque et mattis dolor. Nunc euismod mi eget est ultrices rhoncus. Duis vel tempus est, sed maximus felis. Sed lectus diam, lacinia vitae turpis quis, fringilla condimentum ante. Maecenas lacinia nunc et ante elementum, nec sollicitudin ligula dictum. Pellentesque interdum nec nulla a tempor. Quisque eleifend ipsum eu lorem sagittis efficitur. Duis ultrices at nunc ut laoreet. Cras aliquam nulla nec elementum tempor.

Nulla interdum enim a urna venenatis cursus. Vivamus aliquam sem ut elit tincidunt posuere. Proin eu tristique est. Aliquam erat volutpat. Ut convallis diam et feugiat bibendum. Duis ullamcorper magna nec ex malesuada elementum sit amet sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus lectus tincidunt, blandit augue et, bibendum quam. Suspendisse pretium pretium tellus nec gravida. Vivamus vitae dolor sit amet mi fringilla porttitor sed ac est. Pellentesque commodo consequat justo in auctor. Mauris varius dignissim tempor. Praesent eleifend tellus id facilisis lobortis.

Cras velit erat, cursus at tincidunt ac, blandit et purus. Sed urna risus, convallis eu venenatis in, rhoncus a neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras quis mollis nisi, in sodales urna. Suspendisse vel lacus vitae augue pharetra facilisis ac sed velit. Phasellus feugiat facilisis libero vitae commodo. Etiam imperdiet est id tempor rhoncus. Nulla elementum porta massa, eu bibendum sapien ullamcorper eu. Vivamus a metus risus. Integer posuere sem eget ex pellentesque eleifend. Nulla pulvinar feugiat posuere. Phasellus sodales urna id laoreet molestie. Aliquam id.
    {{/expand-multiline}}
  `);

  let lineHeight = 16 * 1.15;
  assert.equal(Math.floor(this.$().height()), Math.floor(lineHeight * 2));
  assert.equal(this.$('.expand-multiline.default .expander').length, 1);
  assert.equal(this.$('.expand-multiline.default .collapser').length, 0);

  this.$('.expand-multiline.default .expander a').click();
  assert.equal(this.$('.expand-multiline.default .expander').length, 0);
  assert.equal(this.$('.expand-multiline.default .collapser').length, 1);
  assert.ok(Math.floor(this.$().height()) > Math.floor(lineHeight * 2));

  this.$('.expand-multiline.default .collapser a').click();
  assert.equal(Math.floor(this.$().height()), Math.floor(lineHeight * 2));
  assert.equal(this.$('.expand-multiline.default .expander').length, 1);
  assert.equal(this.$('.expand-multiline.default .collapser').length, 0);

  this.render(hbs `
    {{#expand-multiline visibleLines=2}}
      Short text
    {{/expand-multiline}}
  `);
  assert.equal(Math.floor(this.$().height()), Math.floor(lineHeight * 1));
  assert.equal(this.$('.expand-multiline.default .expander').length, 0);
  assert.equal(this.$('.expand-multiline.default .collapser').length, 0);
});