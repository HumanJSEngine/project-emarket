/** @format */

import { Hero } from './components/Hero';
import { FeaturedProduct } from './components/FeaturedProduct';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { useTitle } from '../../hooks/useTitle';

export const HomePage = () => {
  useTitle('배민준');
  return (
    <main>
      <Hero />
      <FeaturedProduct />
      <Testimonials />
      <Faq />
    </main>
  );
};
