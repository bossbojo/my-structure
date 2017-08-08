import { MyStructurePage } from './app.po';

describe('my-structure App', () => {
  let page: MyStructurePage;

  beforeEach(() => {
    page = new MyStructurePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
