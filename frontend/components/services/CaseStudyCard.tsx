'use client';

import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { CheckCircle2, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { CaseStudy } from '@/lib/caseStudiesData';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <RevealOnScroll variant="slideUp">
      <div className="bg-white rounded-xl shadow-lg border border-steel-light/20 overflow-hidden hover:shadow-2xl transition-all duration-300">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={caseStudy.image} 
            alt={caseStudy.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="text-2xl font-bold leading-tight">{caseStudy.title}</h3>
          </div>
        </div>

        {/* Info Bar */}
        <div className="bg-navy-dark px-6 py-4 flex items-center gap-6 text-sm text-off-white/80 border-b border-white/5">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-industrial-orange" />
            <span>{caseStudy.duration}</span>
          </div>
          {caseStudy.projectValue && (
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-industrial-orange" />
              <span>{caseStudy.projectValue}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Client info */}
          <div className="mb-6">
            <div className="text-sm text-steel-grey mb-1">Client</div>
            <div className="font-bold text-navy-dark">{caseStudy.client}</div>
            <div className="text-sm text-electric-blue">{caseStudy.industry}</div>
          </div>

          {/* Challenge */}
          <div className="mb-6">
            <h4 className="font-bold text-navy-dark mb-2 flex items-center gap-2">
              <span className="w-1 h-6 bg-industrial-orange rounded-full" />
              Challenge
            </h4>
            <p className="text-steel-grey leading-relaxed">{caseStudy.challenge}</p>
          </div>

          {/* Solution */}
          <div className="mb-6">
            <h4 className="font-bold text-navy-dark mb-2 flex items-center gap-2">
              <span className="w-1 h-6 bg-electric-blue rounded-full" />
              Solution
            </h4>
            <p className="text-steel-grey leading-relaxed">{caseStudy.solution}</p>
          </div>

          {/* Results */}
          <div className="mb-6">
            <h4 className="font-bold text-navy-dark mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-industrial-orange" />
              Results
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {caseStudy.results.map((result, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-off-white to-white p-4 rounded-lg border border-steel-light/30"
                >
                  <div className="text-sm text-steel-grey mb-1">{result.metric}</div>
                  <div className="text-2xl font-bold text-navy-dark mb-1">{result.value}</div>
                  {result.improvement && (
                    <div className="text-sm text-industrial-orange font-semibold">
                      {result.improvement}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {caseStudy.testimonial && (
            <div className="bg-gradient-to-br from-industrial-orange/5 to-warm-amber/5 p-6 rounded-lg border-l-4 border-industrial-orange">
              <p className="text-navy-dark italic mb-4 leading-relaxed">
                &ldquo;{caseStudy.testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-industrial-orange to-warm-amber rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {caseStudy.testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-navy-dark">{caseStudy.testimonial.author}</div>
                  <div className="text-sm text-steel-grey">{caseStudy.testimonial.title}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </RevealOnScroll>
  );
}
