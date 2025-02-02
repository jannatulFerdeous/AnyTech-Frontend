import Hero from './partials/Hero/Hero';
import Philosophy from './partials/Philosophy/Philosophy';
import Power from './partials/Power/Power';

const Dashboard = () => {
  return (
    <div>
      <Hero />
      <Power />
      <div className=" mt-[250px]">
        <Philosophy />
      </div>
    </div>
  );
};

export default Dashboard;
