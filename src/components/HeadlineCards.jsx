

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {/* cards */}
        <div className="rounded-xl relative">
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">Hourly New Offers</p>
                <p className="px-2">Through 8/26</p>
                <button className="border-white bg-white text-black mx-2 absolute bottom-4 p-2 rounded-xl">Order Now</button>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
      
         {/* cards */}
         <div className="rounded-xl relative">
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
                <p className="px-2">Added Daily</p>
                <button className="border-white bg-white text-black mx-2 absolute bottom-4 p-2 rounded-xl">Order Now</button>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>

         {/* cards */}
         <div className="rounded-xl relative">
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">We Deliver Deserts</p>
                <p className="px-2">Tasty Treats</p>
                <button className="border-white bg-white text-black mx-2 absolute bottom-4 p-2 rounded-xl">Order Now</button>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
    </div>
  )
}

export default HeadlineCards
