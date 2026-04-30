import './App.css';
function App() {

  return (
    <>
      <section className="flex justify-center items-center min-h-screen bg-Blue-100 bg-no-repeat bg-contain bg-[url(/images/pattern-background-desktop.svg)]">
        <div className="bg-white max-w-sm rounded-2xl overflow-hidden text-center mx-4 my-20">
          <img src="/images/illustration-hero.svg" alt="hero-image"></img>
          <div className='md:p-10 p-5'>
            <h1 className='text-Blue-950 font-black text-xl'>Order Summary</h1>
            <p className='py-4 text-Gray-600'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <div className='flex justify-between items-center bg-Blue-50 p-4 rounded-xl max-[350px]:flex-col'>
              <div className='flex items-center gap-4'>
                <img src="/images/icon-music.svg" alt="icon-music"></img>
                <div>
                  <h5 className='text-Blue-950 font-extrabold'>Annual Plan</h5>
                  <p className='text-Gray-600'>$59.99/year</p>
                </div>
              </div>
            
              <a className='text-Blue-700 underline font-bold hover:text-Blue-700/80 hover:no-underline cursor-pointer max-[350px]:pt-3'>Change</a>
            </div>
            <button className='bg-Blue-700 text-white w-full py-2 my-6 rounded-lg font-bold shadow-2xl shadow-Blue-700/60 hover:bg-Blue-700/80 cursor-pointer'>Proceed to Payment</button>
            <a className='text-Gray-600 font-bold cursor-pointer hover:text-Blue-950'>Cancel Order</a>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default App
