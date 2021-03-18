import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const LoaderComponent = () => {
  return (
    <Loader
      type="Circles"
      color=" #3f51b5"
      height={100}
      width={100}
      className="Loader"
    />
  );
};

export default LoaderComponent;
