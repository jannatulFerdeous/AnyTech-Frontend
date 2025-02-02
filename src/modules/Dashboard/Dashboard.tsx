import Count from './partials/Count/Count';
import Hero from './partials/Hero/Hero';
import Logos from './partials/logos/Logos';
import Philosophy from './partials/Philosophy/Philosophy';
import Power from './partials/Power/Power';
import Slider from './partials/Slider/Slider';

const Dashboard = () => {
  return (
    <div>
      <Hero />
      <Power />
      <div className=" mt-[250px]">
        <Philosophy />
      </div>
      <Slider/>
      <Count />
      <Logos/>

    </div>
  );
};

export default Dashboard;
