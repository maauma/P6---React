function Banner({ title, image }) {
    return (
      <div className="banner">
        <img src={image} alt={"oups"} />
        <h1 className="banner-title">{title}</h1>
      </div>
    );
  }
  

  export default Banner;

  