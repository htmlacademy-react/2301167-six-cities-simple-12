import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  adsCount: number;
};

function App({ adsCount }: AppProps): JSX.Element {
  return <MainPage adsCount={adsCount} />;
}

export default App;
