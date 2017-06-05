import { TrackerfPage } from './app.po';

describe('trackerf App', () => {
  let page: TrackerfPage;

  beforeEach(() => {
    page = new TrackerfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
