import { useFilter } from '../../../context';
export const FilterBar = ({ setShow }) => {
    const { state, dispatch } = useFilter();

    console.log('스테이트값', state);
    return (
        <section className='filter'>
            <div
                id='drawer-disable-body-scrolling'
                className={`fixed z-40 h-screen p-5 overflow-y-auto bg-white w-72 dark:bg-gray-800 transition-transhtmlForm left-0 top-0 transhtmlForm-none`}
                tabIndex='-1'
            >
                <h5
                    id='drawer-disable-body-scrolling-label'
                    className='text-base font-semibold text-gray-500 uppercase dark:text-gray-400'
                >
                    분류
                </h5>
                <button
                    onClick={() => setShow(false)}
                    type='button'
                    className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                >
                    <svg
                        aria-hidden='true'
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                    >
                        <path fillRule='evenodd'></path>
                    </svg>
                    닫기
                </button>
                <div className='border-b pb-3'></div>
                <div className='py-4 overflow-y-auto'>
                    <ul className='text-slate-700 dark:text-slate-100'>
                        <li className='mt-1 mb-5'>
                            <p className='font-semibold my-1'>분류별</p>
                            <div className='flex items-center my-1'>
                                <input
                                    onChange={() =>
                                        dispatch({
                                            type: 'SORT_BY',
                                            payload: { sortBy: 'lowtohigh' },
                                        })
                                    }
                                    checked={
                                        state.sortBy === 'lowtohigh' || false
                                    }
                                    id='price-sort-1'
                                    type='radio'
                                    value=''
                                    name='price-sort'
                                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600'
                                />
                                <label
                                    htmlFor='price-sort-1'
                                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                                >
                                    저가순
                                </label>
                            </div>
                            <div className='flex items-center my-1'>
                                <input
                                    onChange={() =>
                                        dispatch({
                                            type: 'SORT_BY',
                                            payload: { sortBy: 'hightolow' },
                                        })
                                    }
                                    checked={
                                        state.sortBy === 'hightolow' || false
                                    }
                                    id='price-sort-2'
                                    type='radio'
                                    value=''
                                    name='price-sort'
                                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600'
                                />
                                <label
                                    htmlFor='price-sort-2'
                                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                                >
                                    고가순
                                </label>
                            </div>
                        </li>
                        <li className='mt-1 mb-5'>
                            <span className='font-semibold'>Rating</span>
                            <div className='flex items-center my-1'>
                                <input
                                    onChange={() =>
                                        dispatch({
                                            type: 'RATINGS',
                                            payload: { ratings: '4STARSABOVE' },
                                        })
                                    }
                                    checked={
                                        state.ratings === '4STARSABOVE' || false
                                    }
                                    id='rating-sort-1'
                                    type='radio'
                                    value=''
                                    name='rating-sort'
                                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600'
                                />
                                <label
                                    htmlFor='rating-sort-1'
                                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                                >
                                    4별
                                </label>
                            </div>
                            <div className='flex items-center my-1'>
                                <input
                                    onChange={() =>
                                        dispatch({
                                            type: 'RATINGS',
                                            payload: { ratings: '3STARSABOVE' },
                                        })
                                    }
                                    checked={
                                        state.ratings === '3STARSABOVE' || false
                                    }
                                    id='rating-sort-2'
                                    type='radio'
                                    value=''
                                    name='rating-sort'
                                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600'
                                />
                                <label
                                    htmlFor='rating-sort-2'
                                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                                >
                                    3별
                                </label>
                            </div>
                            <div className='flex items-center my-1'>
                                <input
                                    onChange={() =>
                                        dispatch({
                                            type: 'RATINGS',
                                            payload: { ratings: '2STARSABOVE' },
                                        })
                                    }
                                    checked={
                                        state.ratings === '2STARSABOVE' || false
                                    }
                                    id='rating-sort-3'
                                    type='radio'
                                    value=''
                                    name='rating-sort'
                                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600'
                                />
                                <label
                                    htmlFor='rating-sort-3'
                                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                                >
                                    2별
                                </label>
                            </div>
                            <div className='flex items-center my-1'>
                                <input
                                    onChange={() =>
                                        dispatch({
                                            type: 'RATINGS',
                                            payload: { ratings: '1STARSABOVE' },
                                        })
                                    }
                                    checked={
                                        state.ratings === '1STARSABOVE' || false
                                    }
                                    id='rating-sort-4'
                                    type='radio'
                                    value=''
                                    name='rating-sort'
                                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600'
                                />
                                <label
                                    htmlFor='rating-sort-4'
                                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                                >
                                    1별
                                </label>
                            </div>
                        </li>
                        <li className='mt-1 mb-5'>
                            <span className='font-semibold'>Other Filters</span>
                            <div className='flex items-center my-1'>
                                <input
                                    onChange={() =>
                                        dispatch({
                                            type: 'BEST_SELLER_ONLY',
                                            payload: {
                                                bestSellerOnly:
                                                    !state.bestSellerOnly,
                                            },
                                        })
                                    }
                                    checked={state.bestSellerOnly || false}
                                    id='best-seller'
                                    type='checkbox'
                                    value=''
                                    className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600'
                                />
                                <label
                                    htmlFor='best-seller'
                                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                                >
                                    베스트셀러만
                                </label>
                            </div>
                            <div className='flex items-center my-1'>
                                <input
                                    onChange={() =>
                                        dispatch({
                                            type: 'ONLY_IN_STOCK',
                                            payload: {
                                                onlyInStock: !state.onlyInStock,
                                            },
                                        })
                                    }
                                    checked={state.onlyInStock || false}
                                    id='only-instock'
                                    type='checkbox'
                                    value=''
                                    className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600'
                                />
                                <label
                                    htmlFor='only-instock'
                                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                                >
                                    재고있음
                                </label>
                            </div>
                        </li>
                        <li className='mt-1 mb-5 px-1'>
                            <button
                                type='button'
                                className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                            >
                                필터 초기화
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
