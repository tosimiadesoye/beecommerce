import Footer from "./Footer";
import { Link } from "react-router-dom";
// import Carousel from "react-bootstrap/Carousel";
import { CardContainer, Block } from "./CardContainer";

const items = [
  {  name
    :
    "Lip Gloss"
    ,
  price: '12.0',
  image: '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/022/original/data?1530390374' },
  {
    name: 'Chubby Stick&trade; Cheek Colour Balm',
    price: '23.0',
    image: '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/773/original/data?1514072603'
  },
  {name: 'Sculptionary&trade; Cheek Contouring Palette',
  price: '34.0',
  image: '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/778/original/data?1514072606'  },
  { image: "/images/lipstick.jpg", name: "lipstick", price: 20 },
];

const latest = [
  { name: 'dew the hoola liquid bronzer',  price: '36.0',
  image: '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/637/original/open-uri20171223-4-egj5ho?1514061763' },
  {  name: 'hoola matte bronzer travel size mini',
  price: '20.0',
  image: '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/638/original/open-uri20171223-4-6yj6jk?1514061763' } ,
  {   name: 'Diorskin Nude Air Tan',
  price: '36.5',
  image: '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/683/original/open-uri20171223-4-1nzl361?1514062729' }
,
];

const newI = [
  { image: "/images/bronzer.jpg", name: "bronzer", price: 20 },
  { image: "/images/bronzer.jpg", name: "bronzer", price: 20 },
];

const Layout = () => {
  return (
    <div>
      <div className="grid grid-rows-2 grid-flow-col gap-3 gap-x-0">
        <div className=" ml-20 row-span-3 ">
          <img
            // style={{ height: "100%", width: "70rem" }}
            className="h-80 w-5/6 "
            src="/images/blush.jpg"
            alt="display"
          />
        </div>
        <div className="mr-20 col-span-1">
          <img
            className="h-40 "
            // style={{ height: "100%", width: "20rem" }}
            src="/images/eyebrow.jpg"
            alt="Third slide"
          />
        </div>
        <div className="mr-20 col-span-2 ">
          <img
            className="h-40 "
            // style={{ height: "100%", width: "20rem" }}
            src="/images/eyebrow.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      <div className="flex flex-row px-16 py-20 items-center uppercase ">
        <div
           className='w-1/3'
        >
          <img src="/images/eyeshadow.jpg" alt="eyeshadow" />
        </div>
        <div className='px-16 py-20 text-center box-border border-white bg-gradient-to-l
         md:bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500'>
          <h2 className='text-5xl font-normal leading-normal mt-0 mb-2 text-pink-800'>new!</h2>
          <h5 className='text-4xl font-normal leading-normal mt-0 mb-2 text-red-800'>eyeshadow</h5>
          <h5 className='inline-block break-words'>
            LUSCIOUS COLOR, EXPLOSIVE SHINE. NOURISHED, FULLER-LOOKING LIPS.
          </h5>
          <button
          className='bg-black text-white active:bg-black font-bold uppercase text-base px-8 py-3
           shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" 
           style="transition: all .15s ease'
        >
          <Link
            to="/type/eyeshadow"
            className="text-white uppercase font-normal
             block  whitespace-no-wrap bg-transparent "
          >
            shop our eyeshadow
          </Link>
        </button>
        </div>
        
      </div>

      <div className="grid justify-items-center m-5">
        <h3 className=" uppercase mb-5">Upcoming Collection</h3>
        <div className="mb-6">
          <CardContainer info={items} />
        </div>
        <button
          className='bg-black text-white active:bg-black font-bold uppercase text-base px-8 py-3
           shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" 
           style="transition: all .15s ease'
        >
          <Link
            to="/shop"
            className="text-white uppercase font-normal
             block  whitespace-no-wrap bg-transparent "
          >
            shop all items
          </Link>
        </button>
      </div>
      <div></div>

      <div className="flex flex-row px-16 py-20 items-center uppercase ">
        <div
           className='w-1/3'
        >
          <img src="/images/lipStick.jpg" alt="eyeshadow" />
        </div>
        <div className='px-16 py-20 text-center box-border border-white bg-gradient-to-l
         md:bg-gradient-to-r from-yellow-500 via-red-300 to-yellow-900'>
          <h2 className='text-5xl font-normal leading-normal mt-0 mb-2 text-pink-800'>new!</h2>
          <h5 className='text-4xl font-normal leading-normal mt-0 mb-2 text-red-800'>lipstick</h5>
          <h5 className='inline-block break-words'>
            LUSCIOUS COLOR, EXPLOSIVE SHINE. NOURISHED, FULLER-LOOKING LIPS.
          </h5>
          <button
          className='bg-black text-white active:bg-black font-bold uppercase text-base px-8 py-3
           shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" 
           style="transition: all .15s ease'
        >
          <Link
            to="/type/lipstick"
            className="text-white uppercase font-normal
             block  whitespace-no-wrap bg-transparent "
          >
            shop our lipstick
          </Link>
        </button>
        </div>
        
      </div>

      <div className="grid justify-items-center m-5">
        <h3 className=" uppercase mb-5">Latest</h3>
        <div className="m-6">
          <CardContainer info={latest} />
        </div>
        <button
          className='bg-black text-white active:bg-black font-bold uppercase text-base px-8 py-3
           shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" 
           style="transition: all .15s ease'
        >
          <Link
            to="/type/bronzer"
            className="text-white uppercase font-normal
             block  whitespace-no-wrap bg-transparent "
          >
            shop our bronzer
          </Link>
        </button>
      </div>
      <div className="flex flex-row px-16 py-20 items-center uppercase ">
        <div
           className='w-1/3'
        >
          <img src="/images/eyeshadow.jpg" alt="eyeshadow" />
        </div>
        <div className='px-16 py-20 text-center box-border border-white bg-gradient-to-l
         md:bg-gradient-to-r from-yellow-400 via-red-200 to-blue-500'>
          <h2 className='text-5xl font-normal leading-normal mt-0 mb-2 text-pink-800'>new</h2>
          <h5 className='text-4xl font-normal leading-normal mt-0 mb-2 text-red-800'>lipstick</h5>
          <h5 className='inline-block break-words'>
            LUSCIOUS COLOR, EXPLOSIVE SHINE. NOURISHED, FULLER-LOOKING LIPS.
          </h5>
          <button
          className='bg-black text-white active:bg-black font-bold uppercase text-base px-8 py-3
           shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" 
           style="transition: all .15s ease'
        >
          <Link
            to="/type/bronzer"
            className="text-white uppercase font-normal
             block  whitespace-no-wrap bg-transparent "
          >
            shop our bronzer
          </Link>
        </button>
        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
