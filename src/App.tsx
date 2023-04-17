import { Welcome, APITestButton } from 'components';

function App() {
  return (
    <div className="h-screen w-full flex flex-col align-center items-center bg-slate-700 text-white">
      <div className="py-12 ">
        <img src="https://www.liveintent.com/assets/img/brand-assets/LiveIntentLogo-Square-White.svg" className="h-72 animate-[spin_20s_linear_infinite]" alt="logo" />
      </div>
      <Welcome />
      <APITestButton />
    </div>
  );
}

export default App;
