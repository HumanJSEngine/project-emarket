/** @format */

export const ProductDetail = () => {
  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">dd</h1>
        <p className="">dd</p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w">
            <img src="/" alt="" />
          </div>
          <div className="">
            <p className="">
              <span className="">$</span>
              <span className="">30</span>
            </p>
            <p className="">
              <span>
                <Rating />
              </span>
            </p>
            <p className="my-4 select-none">
              <span className="">MB</span>
            </p>
            <p className="my-3"></p>
            <p className="text-lg">제품설명</p>
          </div>
        </div>
      </section>
    </main>
  );
};
