import bg1 from '../../../../assets/backgrounds/WaveLinesDesktop1.svg';
import bg2 from '../../../../assets/backgrounds/WaveLinesDesktop2.svg';
import bg3 from '../../../../assets/backgrounds/WaveLinesDesktop3.svg';
import bg4 from '../../../../assets/backgrounds/WaveLinesDesktop4.svg';
import Hero from '../../../../common/Hero/Hero';

const ServiceHero = () => {
  const backgroundImages = [
    {
      src: bg1,
      alt: 'Background 1',
      position: '-top-60 left-0',
      directionX: 1,
      directionY: 1,
    },
    {
      src: bg2,
      alt: 'Background 2',
      position: 'bottom-32 right-0',
      directionX: -1,
      directionY: -1,
    },
    {
      src: bg3,
      alt: 'Background 3',
      position: '-top-60 left-0',
      directionX: 1,
      directionY: 1,
    },
    {
      src: bg4,
      alt: 'Background 4',
      position: '-top-60 right-0',
      directionX: -1,
      directionY: -1,
    },
  ];

  return (
    <div>
      <Hero
        title="Our Services"
        subtitle="Reimagining banking solutions"
        description="Enabling financial institutions to create unparalleled  customer experiences"
        backgroundImages={backgroundImages}
        gradientColors="from-[#0099ff] to-[#0044cc]"
        accentColors="from-cyan-300 to-[#4a9bf2]"
      />
    </div>
  );
};

export default ServiceHero;
