import { ReactionTimeGamePage } from './app.po';

describe('reaction-time-game App', () => {
  let page: ReactionTimeGamePage;

  beforeEach(() => {
    page = new ReactionTimeGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
