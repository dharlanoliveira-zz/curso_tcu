import { ClienteAngularPage } from './app.po';

describe('cliente-angular App', () => {
  let page: ClienteAngularPage;

  beforeEach(() => {
    page = new ClienteAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
