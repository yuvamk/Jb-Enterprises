'use client';

import { useState, useEffect } from 'react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { getFeaturedTestimonials } from '@/lib/testimonialsData';

export default function TestimonialsSection() {
  const testimonials = getFeaturedTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-off-white to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-industrial-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <RevealOnScroll variant="fade">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-navy-dark mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-steel-grey max-w-3xl mx-auto">
              Hear from industry leaders who trust JB Enterprise for their power plant solutions
            </p>
          </div>
        </RevealOnScroll>

        <div className="max-w-5xl mx-auto">
          <RevealOnScroll variant="slideUp">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative">
              {/* Quote icon */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-industrial-orange to-warm-amber rounded-full flex items-center justify-center opacity-20">
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Testimonial content */}
              <div className="relative z-10">
                {/* Rating stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-industrial-orange text-industrial-orange"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-navy-dark text-center mb-8 leading-relaxed min-h-[180px] flex items-center justify-center">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </blockquote>

                {/* Author info */}
                <div className="text-center border-t border-steel-light/30 pt-6">
                  <div className="font-bold text-lg text-navy-dark">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-steel-grey">
                    {currentTestimonial.title}
                  </div>
                  <div className="text-electric-blue font-semibold">
                    {currentTestimonial.company}
                  </div>
                  <div className="inline-block mt-3 px-4 py-1 bg-industrial-orange/10 text-industrial-orange rounded-full text-sm">
                    {currentTestimonial.projectType}
                  </div>
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-industrial-orange hover:text-white transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-industrial-orange hover:text-white transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </RevealOnScroll>

          {/* Dots indicator */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-industrial-orange'
                    : 'w-3 h-3 bg-steel-light hover:bg-industrial-orange/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* All testimonials count */}
          <div className="text-center mt-8">
            <p className="text-steel-grey">
              <span className="font-bold text-industrial-orange">{testimonials.length}</span> featured testimonials
              {' • '}
              <span className="font-bold text-electric-blue">100%</span> client satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
