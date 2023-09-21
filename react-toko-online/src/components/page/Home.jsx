import Navbar from '../navbar/navbar';
import Footer from '../layouts/footer/Footer';
import CardComp from '../Card/Card';


const Home = () => {
    const cardData = [
        {
            image: 'https://th.bing.com/th/id/OIP.RclUBWaWCJ013DLcgylxGgHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7',
            title: 'Sepatu',
            description: 'Produk Kita'
        },
        {
            image: 'https://th.bing.com/th/id/OIP.RclUBWaWCJ013DLcgylxGgHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7',
            title: 'Sepatu',
            description: 'Produk Kita'
        },
        {
            image: 'https://th.bing.com/th/id/OIP.RclUBWaWCJ013DLcgylxGgHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7',
            title: 'Sepatu',
            description: 'Produk Kita'
        },
        {
            image: 'https://th.bing.com/th/id/OIP.RclUBWaWCJ013DLcgylxGgHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7',
            title: 'Sepatu',
            description: 'Produk Kita'
        },
        {
            image: 'https://th.bing.com/th/id/OIP.RclUBWaWCJ013DLcgylxGgHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7',
            title: 'Sepatu',
            description: 'Produk Kita'
        },
    ];
    return (
        <div>
            <Navbar />
            <div>
                <div className='my-4'>
                    <img src="" alt="" className='p-10 w-full rounded-[60px] h-[400px] bg-no-repeat bg-contain' />
                </div>
              
                <h1 className='px-[160px] my-16'>Kategori 1</h1>
                <div className='w-full flex w-[350px] flex-wrap justify-center bg-gray-50 p-6'>
                    {cardData.map((item, index) => (
                        <CardComp.Card
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    ))}  </div>
                <h1 className='px-[160px] my-16'>Kategori 2</h1>
                <div className='w-full mb-20 flex flex-wrap justify-center p-6 bg-slate-50'>
                    {cardData.map((item, index) => (
                        <CardComp.Card
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    ))} </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;