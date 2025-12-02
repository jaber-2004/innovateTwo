const Images = ({ className, srcImg, altimg }) => {
  return <img className={`${className}`} src={srcImg} alt={altimg} />;
};

export default Images;
