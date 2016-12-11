import { Angular2ChromeExtensionSeed2Page } from './app.po';

describe('angular2-chrome-extension-seed2 App', function() {
  let page: Angular2ChromeExtensionSeed2Page;

  beforeEach(() => {
    page = new Angular2ChromeExtensionSeed2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
