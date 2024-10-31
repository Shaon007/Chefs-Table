
const HeroSection = () => {
  return (
    <div>
      <div className="relative w-full h-screen flex items-center justify-center text-center bg-black overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src='https://i.pinimg.com/564x/e2/3f/bd/e23fbda2fd886a0af6f3b50f9b0923a8.jpg'
        />

        <div className="relative z-10 text-white p-8 max-w-5xl">
          <h1 className=" text-4xl md:text-6xl font-bold mb-4">
            Discover an Exceptional Cooking Class Tailored for You!
          </h1>
          <p className="mb-8 text-lg md:text-xl">
            Learn and master essential cooking skills from basic to advanced. Join us to make delicious dishes with ease.
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn bg-white">Explore Now</button>
            <button className="btn bg-white">Our Feedback</button>
          </div>
        </div>

        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      </div>
      <div className="text-center my-8">
        <h2 className="text-5xl mb-4">Our Recipes</h2>
        <p className="text-xl w-2/3 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aperiam minima adipisci ipsam corporis dolore reiciendis error ratione eaque quod.</p>
      </div>
   </div>

  );
};

export default HeroSection;
