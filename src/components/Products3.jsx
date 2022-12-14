const products = [
    {
      id: 1,
      name: 'Qware',
      color: 'Qware switch gaming',
      href: 'https://shop.seescanyours.com/e/a0hb3',
      imageSrc: 'https://i.imgur.com/evF8ImK.png',
      imageAlt: 'Qware switch gaming',
      price: '€52,99',
    },
    {
      id: 2,
      name: 'Qware',
      color: 'Qware PS5 Deluxe Stereo headset',
      href: 'https://shop.seescanyours.com/e/qjhXO',
      imageSrc: 'https://i.imgur.com/0feBYNO.png',
      imageAlt: 'Qware PS5 Deluxe Stereo headset',
      price: '€39,99',
    },
    {
      id: 3,
      name: 'Qware',
      color: 'Qware switch storage case deluxe',
      href: 'https://shop.seescanyours.com/e/Akh9Q',
      imageSrc: 'https://i.imgur.com/9nYdcsB.png',
      imageAlt: 'Qware switch storage case deluxe',
      price: '€32,99',
    },
    {
      id: 4,
      name: 'Qware',
      color: 'Qware PS5 Y-Cable 3,5 Meter',
      href: 'https://shop.seescanyours.com/e/LZhvj',
      imageSrc: 'https://i.imgur.com/Qt8OnB9.png',
      imageAlt: 'Qware PS5 Y-Cable 3,5 Meter',
      price: '€14,99',
    },  
  ]
  
  export function Products3() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Qware</h2>
  
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id}>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-3xl font-semibold text-white">{product.price}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={product.href}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-900 py-2 px-8 text-sm font-medium text-gray-200 hover:bg-gray-200 hover:text-gray-900"
                  >
                    Bestellen<span className="sr-only">, {product.name}</span>
                  </a>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    )
  }