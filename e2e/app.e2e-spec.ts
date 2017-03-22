import { ZenNotesPage } from './app.po';

describe('zen-notes App', () => {
  let page: ZenNotesPage;

  beforeEach(() => {
    page = new ZenNotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
