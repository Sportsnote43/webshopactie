const products = [
    {
      id: 1,
      name: 'Basic Tee 8-Pack',
      href: '#',
      price: '$256',
      description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
      options: '8 colors',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
      imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      price: '$32',
      description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
      options: 'Black',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
      imageAlt: 'Front of plain black t-shirt.',
    },
    // More products...
  ]
  
  export default function Jumbo() {
    return (
      <div className="bg-white">
        <div>
          <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
            <div className="border-b border-gray-200 pt-24 pb-10">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">Cecotec</h1>
              <p className="mt-4 text-base text-gray-500">
                Checkout out the latest release of Basic Tees, new and improved with four openings!
              </p>
            </div>
  
            <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
              <aside>
                <div className="hidden lg:block">
                  <form className="space-y-10 divide-y divide-gray-200">
                  </form>
                </div>
              </aside>
  
              <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
                <h2 id="product-heading" className="sr-only">
                  Products
                </h2>
  
                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                    >
                      <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                        />
                      </div>
                      <div className="flex flex-1 flex-col space-y-2 p-4">
                        <h3 className="text-sm font-medium text-gray-900">
                          <a href={product.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                          </a>
                        </h3>
                        <p className="text-sm text-gray-500">{product.description}</p>
                        <div className="flex flex-1 flex-col justify-end">
                          <p className="text-sm italic text-gray-500">{product.options}</p>
                          <p className="text-base font-medium text-gray-900">{product.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    )
  }