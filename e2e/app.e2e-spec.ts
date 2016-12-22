import { AngularSpotifyBrowserPage } from './app.po';

describe('angular-spotify-browser App', function() {
  let page: AngularSpotifyBrowserPage;

  beforeEach(() => {
    page = new AngularSpotifyBrowserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
