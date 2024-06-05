import "./box.scss";

const Box = ({
  title,
  description,
  additionalDescription,
}) => {
  return (
    <div className="smp-box-outer">
      <div className="smp-box">
        <div className="smp-box__title">
          <h2>{title}</h2>
        </div>
        <div className="smp-box__content">
          <div className="smp-box__description">
            <p>{description}</p>
          </div>
          <div className="smp-box__description">
            <p>{additionalDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
