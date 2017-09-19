import { Ang2expPage } from './app.po';

describe('ang2exp App', () => {
  let page: Ang2expPage;

  beforeEach(() => {
    page = new Ang2expPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
