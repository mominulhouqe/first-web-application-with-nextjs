import Image from "next/image";

export const metadata = {
  title: "Products",
  description: "This is news pages",
};

const NewsHome = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <div key={item.id} className="mx-auto rounded-lg overflow-hidden shadow-lg bg-white flex flex-col border ">
          <Image src={item.image} alt={item.title} width={100} height={100}  className="mx-auto"/>
          <div className="px-6 py-4 flex-1 flex flex-col  justify-between">
            <div>
              <h3 className="font-bold text-xl mb-2">ID: {item.id}</h3>
              <p className="text-gray-700 text-base">Title: {item.title}</p>
              {/* <p className="text-gray-700 text-base">Description: {item.description}</p> */}
              <p className="text-gray-700 text-base">Category: {item.category}</p>
              <div className="mt-2 flex items-center">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(item.rating.rate) ? "text-yellow-500" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.429L24 9.748l-6 5.851 1.416 8.264L12 18.902l-7.416 3.961L6 15.599.001 9.748l8.334-1.732L12 .587z" />
                  </svg>
                ))}
                <span className="text-gray-600 ml-2">{item.rating.rate} ({item.rating.count})</span>
              </div>
            </div>
            <span className="block mt-4 text-gray-700 text-base font-semibold">Price: ${item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsHome;
