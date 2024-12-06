import "./circle-image.scss"

const CircleImage = (imgSrc, alt) => (
  <div className="smp-circle-image">
    <img src={imgSrc} alt={alt} />
  </div>
);

export default CircleImage;
