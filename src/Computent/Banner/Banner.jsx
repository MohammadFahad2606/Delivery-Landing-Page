import Button from "../common/Button/Button";

import "./Banner.css";
const Banner = ({ isrotate, data }) => {
  const { tittle, disrp, btnText, image } = data;
  console.log(image);
  return (
    <div className={`Banner-wrapper ${isrotate && "rotate"} `}>
      <div className="text-wapper">
        <h1>{tittle}</h1>
        <p>{disrp}</p>
        {btnText && <Button text={btnText} />}
      </div>
      <div className="imag">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Banner;
