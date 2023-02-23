/** @format */

import { useState } from 'react';

export const Accordion = ({ faq }) => {
    const { question, answer, id } = faq;
    const [show, setShow] = useState(false);

    return (
        <div key={id}>
            <h2 id='accordion-flush-heading-1'>
                <button
                    type='button'
                    onClick={() => setShow(!show)}
                    className='text-lg flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
                >
                    <span className='text-xl text-slate-900 dark:text-white'>
                        {question}
                    </span>
                </button>
            </h2>
            {show && (
                <div id='accordion-flush-body-1' className=''>
                    <div className='py-5 border-b border-gray-200 dark:border-gray-700'>
                        <p className='text-lg mb-2 text-gray-500 dark:text-gray-400'>
                            {answer}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};
