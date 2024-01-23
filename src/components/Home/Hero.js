const Hero = () => {

  return (
    <div class="mb-5">
<hero class="grid bg-gray-700 text-white textcenter bg-cover z-10 relative bg-[url('../../public/GoldMesa2.png')]">
    <div class="col-start-1 row-start-1 bg-gray-800 bg-opacity-40 w-full h-full"></div>
    {/* <div class="col-start-1 row-start-1 py-18 px-10  text-accent bg-accentDark/20 dark: text-accentDark dark:bg-accent/50"> */}

    <div class="col-start-1 row-start-1 py-18 px-10 text-black">
      <div>
        <h1 class="w-full text-right md:font-bold font1 text-5xl md:text-6xl transition duration-300 ease-in-out hover:scale-105 pb-2 pr-4">Biscotty's Workshop</h1>
        </div>
        <p class="text-lg font-bold mb-5 mt-10 bg-black/50 text-accentDark p-1 inline-block rounded-lg">For the love of learning...</p>
    </div>
</hero>
</div>
  );
};

export default Hero;
