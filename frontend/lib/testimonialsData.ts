export interface Testimonial {
    id: string;
    name: string;
    title: string;
    company: string;
    industry: string;
    quote: string;
    rating: number;
    projectType: string;
    image?: string;
    featured?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 't-1',
        name: 'Rajesh Kumar',
        title: 'Plant Manager',
        company: 'Maharashtra State Power Generation Corporation',
        industry: 'Thermal Power',
        quote: 'JB Enterprise transformed our aging 500MW plant with their comprehensive modernization program. The 15% efficiency improvement exceeded our expectations, and the project was completed on schedule. Their team\'s expertise in turbine upgrades and control systems is unmatched. We\'ve seen $22 million in annual fuel savings.',
        rating: 5,
        projectType: 'Power Plant Modernization',
        featured: true,
    },
    {
        id: 't-2',
        name: 'Dr. Suresh Reddy',
        title: 'Chief Operating Officer',
        company: 'National Thermal Power Corporation',
        industry: 'Multi-site Power Generation',
        quote: 'The spare parts management program implemented by JB Enterprise has been transformational for our 12-plant operation. We\'ve reduced delivery times by 60%, cut costs by 30%, and virtually eliminated stockout incidents. Their 24/7 support and strategic inventory management have significantly improved our plant availability.',
        rating: 5,
        projectType: 'Spare Parts Management',
        featured: true,
    },
    {
        id: 't-3',
        name: 'Amit Patel',
        title: 'Project Director',
        company: 'Gujarat Energy Corporation',
        industry: 'Gas-fired Power',
        quote: 'JB Enterprise delivered exceptional results on our 250MW combined cycle plant installation. Despite the aggressive 14-month timeline, they completed the project on schedule with zero safety incidents and performance exceeding guarantees. Their coordination and technical expertise were outstanding.',
        rating: 5,
        projectType: 'Erection & Commissioning',
        featured: true,
    },
    {
        id: 't-4',
        name: 'Vikram Singh',
        title: 'Operations Manager',
        company: 'Coastal Power Plant',
        industry: 'Coal-fired Power',
        quote: 'When our 300MW unit experienced critical vibration issues, JB Enterprise\'s rapid response team identified and resolved the problem in just 72 hours. Their expert diagnostics and effective solution prevented what could have been a catastrophic failure, saving us millions in downtime costs.',
        rating: 5,
        projectType: 'Emergency Troubleshooting',
        featured: false,
    },
    {
        id: 't-5',
        name: 'Priya Sharma',
        title: 'Engineering Manager',
        company: 'Rajasthan Power Generation',
        industry: 'Thermal Power',
        quote: 'We\'ve been sourcing critical generator components from JB Enterprise for over 5 years. Their stator coils and rotor assemblies are of exceptional quality, matching OEM specifications at competitive prices. The technical support and fast delivery have made them our preferred supplier.',
        rating: 5,
        projectType: 'Power Plant Spares',
        featured: false,
    },
    {
        id: 't-6',
        name: 'Anil Deshmukh',
        title: 'Maintenance Head',
        company: 'Karnataka State Electricity Board',
        industry: 'State Utility',
        quote: 'JB Enterprise\'s preventive maintenance program has reduced our unplanned outages by 70%. Their team\'s knowledge of turbine and generator systems is exceptional. The predictive maintenance tools they implemented have helped us catch issues before they become failures.',
        rating: 5,
        projectType: 'Maintenance Services',
        featured: false,
    },
    {
        id: 't-7',
        name: 'Sarah Johnson',
        title: 'Operations Director',
        company: 'Global Energy Solutions',
        industry: 'Independent Power Producer',
        quote: 'Working with JB Enterprise has been a game-changer for our international operations. Their expertise in power plant optimization helped us improve efficiency across our portfolio. The ROI on their services has been exceptional, with payback periods under 2 years.',
        rating: 5,
        projectType: 'Performance Optimization',
        featured: true,
    },
    {
        id: 't-8',
        name: 'Ramesh Iyer',
        title: 'Chief Engineer',
        company: 'Tamil Nadu Generation Corporation',
        industry: 'State Power Generation',
        quote: 'The turbine blade inspection and replacement service provided by JB Enterprise extended our unit\'s life by 15 years. Their advanced NDT techniques identified issues we had missed, and the new blades improved efficiency by 6%. Excellent technical capability and project management.',
        rating: 5,
        projectType: 'Turbine Services',
        featured: false,
    },
];

// Helper function to get featured testimonials
export function getFeaturedTestimonials(): Testimonial[] {
    return TESTIMONIALS.filter(t => t.featured);
}

// Helper function to get testimonials by project type
export function getTestimonialsByType(projectType: string): Testimonial[] {
    return TESTIMONIALS.filter(t => t.projectType === projectType);
}

// Helper function to get testimonial by ID
export function getTestimonialById(id: string): Testimonial | undefined {
    return TESTIMONIALS.find(t => t.id === id);
}

// Get all unique project types
export function getAllProjectTypes(): string[] {
    return Array.from(new Set(TESTIMONIALS.map(t => t.projectType)));
}
