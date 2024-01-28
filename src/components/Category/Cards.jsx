const Cards = ({topic, id, img}) => {
  return (
    <div className="card cursor-pointer">
      <div className="relative max-w-xl mx-auto mt-10 ">
        <img
          className="bg-img h-64 w-full object-cover rounded-md "
          src={img}
        />
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="topic text-white text-xl xl:text-3xl md:text-2xl font-bold">{topic}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cards;
