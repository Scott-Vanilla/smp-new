import './location-block.scss'
import gpsIcon from '../../assets/gps.png'

const LocationBlock = ({location, phone, email}) => {
  return (
    <div className="smp-location-block">
              <div className="smp-location-block__icon">
<img src={gpsIcon} width={25} height={25} alt='gps icon'/>
      </div>
      <div className="smp-location-block__info">
        {location} | {phone} | {email}
      </div>
    </div>
  );
};

export default LocationBlock;