import { VeiculoAppPage } from './app.po';

describe('veiculo-app App', () => {
  let page: VeiculoAppPage;

  beforeEach(() => {
    page = new VeiculoAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
