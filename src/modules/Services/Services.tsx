import Consult from './partials/Consult/Consult';
import Do from './partials/Do/Do';
import ServiceHero from './partials/Hero/ServiceHero';

const Services = () => {
  return (
    <div>
      <div>
        <ServiceHero />
        <Do />
        <Consult/>
      </div>
    </div>
  );
};

export default Services;
