import { Es6Page } from './app.po';

describe('es6 App', () => {
  let page: Es6Page;

  beforeEach(() => {
    page = new Es6Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
