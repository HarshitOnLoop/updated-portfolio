import "./Header.css"
import Lanyard from './Lanyard';

export default function Header() {
  return (
    <div className="header-shell">
      <Lanyard
        frontImage="src/assets/id.png"
        backImage="/card-back.png"
        strapImage="/band.png"
        imageFit="cover"
        cardColor="#ffffff"
        orientation="portrait"
        finish="glossy"
        cornerRadius={0.3}
        size={0.5}
        anchor="center"
        strapLength={0.5}
        strapColor="#111111"
        strapWidth={0.65}
        metal="silver"
        gravity={1}
        damping={0.5}
        elasticity={0.5}
        breeze={0.5}
        interactive
        intro
      />
    </div>
  );
}