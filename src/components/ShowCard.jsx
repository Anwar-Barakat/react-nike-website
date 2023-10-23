const ShowCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        imgURL.bigShoe === bigShoeImg
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1 shadow-lg`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-40 sm:w-40 max-sm:w-32 max-sm:h-32 rounded-xl ">
        <img
          src={imgURL.thumbnail}
          alt="Shoe Collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShowCard;
