/** @format */

import { Accordion } from './Accordion';
export const Faq = () => {
    const faqs = [
        {
            id: 1,
            question: '쇼핑몰을 사용하는 이유는?',
            answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nulla alias consequuntur cumque incidunt saepe mollitia esse! Magni praesentium delectus excepturi nostrum illo repellendus cum eius neque, aperiam dolores quaerat quis dolore magnam doloremque minus sint nemo qui necessitatibus at. Perspiciatis, corrupti cum labore quos odio porro!',
        },
        {
            id: 2,
            question: '모바일도 지원하나요?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusamus nobis tempore perferendis qui, quam, atque reprehenderit vero quaerat, assumenda pariatur eveniet. Maxime eaque, neque corrupti ad minus repudiandae consectetur!',
        },
        {
            id: 3,
            question: '환불 가능한가요?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi.',
        },
        {
            id: 4,
            question: '국제결제 가능한가요?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi.',
        },
    ];

    return (
        <section className='my-10 p-7 border rounded dark:border-slate-700 shadow-sm'>
            <h1 className='text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8'>
                자주 묻는 사항
            </h1>
            <div
                className=''
                id='accordion-flush'
                data-active-classes='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
                data-inactive-classes='text-gray-500 dark:text-gray-400'
            >
                {faqs.map((faq) => (
                    <Accordion key={faq.id} faq={faq} />
                ))}
            </div>
        </section>
    );
};
