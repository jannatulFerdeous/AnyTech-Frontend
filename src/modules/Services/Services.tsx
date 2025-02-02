import Consult from './partials/Consult/Consult';
import Do from './partials/Do/Do';
import ServiceHero from './partials/Hero/ServiceHero';
import Implement from './partials/Implement/Implement';

const Services = () => {
  return (
    <div>
      <div>
        <ServiceHero />
        <Do />
        <Consult />
        <div className='mt-64'>
        <Implement/>
        </div>
      </div>
    </div>
  );
};

export default Services;
