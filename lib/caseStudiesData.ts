export interface CaseStudy {
    id: string;
    serviceId: string;
    title: string;
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    image: string;
    results: {
        metric: string;
        value: string;
        improvement?: string;
    }[];
    duration: string;
    projectValue?: string;
    testimonial?: {
        quote: string;
        author: string;
        title: string;
    };
}

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: 'cs-1',
        serviceId: 'power-plant-services',
        title: '500MW Thermal Power Plant Efficiency Improvement',
        client: 'Maharashtra State Power Generation Corporation',
        industry: 'Thermal Power Generation',
        challenge: 'A 500MW coal-fired thermal power plant was experiencing declining efficiency, frequent unplanned outages, and increasing maintenance costs. The plant\'s heat rate had deteriorated from 2,350 kcal/kWh to 2,650 kcal/kWh over 10 years, resulting in significant fuel cost increases and reduced competitiveness in the power market.',
        solution: 'JB Enterprise conducted a comprehensive plant assessment and implemented a multi-phase modernization program including: turbine blade replacement with advanced aerodynamic designs, generator stator rewinding, boiler tube replacement in critical sections, control system upgrade to DCS, implementation of predictive maintenance systems with vibration monitoring and thermography, and combustion optimization with oxygen trim control.',
        image: '/images/case-studies/efficiency-improvement.png',
        results: [
            {
                metric: 'Heat Rate Improvement',
                value: '2,280 kcal/kWh',
                improvement: '15% improvement',
            },
            {
                metric: 'Plant Availability',
                value: '94%',
                improvement: 'Up from 78%',
            },
            {
                metric: 'Unplanned Outages',
                value: '0',
                improvement: '100% reduction',
            },
            {
                metric: 'Annual Fuel Savings',
                value: '$22 million',
                improvement: 'Ongoing savings',
            },
            {
                metric: 'Maintenance Cost Reduction',
                value: '38%',
                improvement: '$4.5M annual savings',
            },
        ],
        duration: '18 months',
        projectValue: '$45 million',
        testimonial: {
            quote: 'JB Enterprise transformed our aging plant into a competitive asset. The efficiency improvements exceeded our expectations, and the project was completed on schedule despite the complexity. Their team\'s expertise and professionalism were outstanding.',
            author: 'Rajesh Kumar',
            title: 'Plant Manager, MSPGC',
        },
    },
    {
        id: 'cs-2',
        serviceId: 'erection-commissioning',
        title: 'New 250MW Combined Cycle Plant Installation',
        client: 'Gujarat Energy Corporation',
        industry: 'Gas-fired Power Generation',
        challenge: 'Installation and commissioning of a new 250MW combined cycle gas turbine (CCGT) plant with an aggressive 14-month timeline. The project involved complex coordination between multiple OEMs, strict safety requirements, and the need to achieve guaranteed performance parameters on first fire.',
        solution: 'JB Enterprise provided turnkey erection and commissioning services with a dedicated team of 150+ specialists. Our approach included: detailed engineering review and site preparation, phased installation of gas turbine, HRSG, and steam turbine, comprehensive quality control with documented inspection points, parallel commissioning activities to optimize schedule, extensive pre-commissioning checks and system flushing, coordinated first fire and synchronization, and performance testing to verify guarantees.',
        image: '/images/case-studies/installation.png',
        results: [
            {
                metric: 'Project Completion',
                value: 'On-time delivery',
                improvement: '14 months as planned',
            },
            {
                metric: 'Safety Record',
                value: 'Zero LTI',
                improvement: '1.2M man-hours',
            },
            {
                metric: 'Performance Achievement',
                value: '102%',
                improvement: 'Exceeded guarantees',
            },
            {
                metric: 'Quality Inspections',
                value: '100% pass rate',
                improvement: 'Zero rework',
            },
            {
                metric: 'First Fire to COD',
                value: '45 days',
                improvement: '15% faster than planned',
            },
        ],
        duration: '14 months',
        projectValue: '$85 million',
        testimonial: {
            quote: 'The JB Enterprise team delivered exceptional results on a challenging project. Their attention to detail, safety culture, and technical expertise ensured we met our commercial operation date with performance exceeding guarantees.',
            author: 'Amit Patel',
            title: 'Project Director, GEC',
        },
    },
    {
        id: 'cs-3',
        serviceId: 'power-plant-spares',
        title: 'Strategic Spare Parts Program for Multi-Plant Operator',
        client: 'National Thermal Power Corporation',
        industry: 'Multi-site Power Generation',
        challenge: 'A major power producer operating 12 thermal power plants (total 6,000MW capacity) was facing challenges with spare parts management: long lead times (6-12 months) for critical components, high inventory carrying costs, lack of standardization across plants, and frequent emergency procurements at premium prices.',
        solution: 'JB Enterprise implemented a comprehensive spare parts management program: conducted criticality analysis of all components, established strategic inventory at central warehouse, negotiated framework agreements with OEMs and qualified suppliers, implemented just-in-time delivery for non-critical items, created standardized specifications for common parts, and provided 24/7 emergency support with guaranteed delivery times.',
        image: '/images/services/power-plant-spares.png',
        results: [
            {
                metric: 'Delivery Time Reduction',
                value: '60% faster',
                improvement: 'Critical spares in 48-72 hours',
            },
            {
                metric: 'Cost Savings',
                value: '30%',
                improvement: '$12M annual savings',
            },
            {
                metric: 'Inventory Optimization',
                value: '40% reduction',
                improvement: 'Freed up $25M capital',
            },
            {
                metric: 'Stockout Incidents',
                value: '95% reduction',
                improvement: 'From 40 to 2 per year',
            },
            {
                metric: 'Emergency Procurements',
                value: '85% reduction',
                improvement: 'Better planning',
            },
        ],
        duration: 'Ongoing partnership (5+ years)',
        projectValue: '$150 million (cumulative)',
        testimonial: {
            quote: 'JB Enterprise\'s spare parts program has been transformational for our operations. The combination of reduced costs, faster delivery, and reliable supply has significantly improved our plant availability and bottom line.',
            author: 'Dr. Suresh Reddy',
            title: 'Chief Operating Officer, NTPC',
        },
    },
    {
        id: 'cs-4',
        serviceId: 'troubleshooting',
        title: 'Emergency Vibration Issue Resolution',
        client: 'Coastal Power Plant',
        industry: 'Coal-fired Power Generation',
        challenge: 'A 300MW coal-fired unit experienced sudden high vibration levels on the turbine-generator set, forcing an emergency shutdown. Initial investigations by plant personnel could not identify the root cause. Each day of downtime was costing $500,000 in lost revenue and replacement power costs.',
        solution: 'JB Enterprise deployed a rapid response team within 8 hours of the call. Our approach included: comprehensive vibration analysis using FFT and orbit plots, detailed inspection of bearings, couplings, and foundations, laser alignment verification of turbine-generator set, oil analysis for contamination and bearing wear, thermal imaging to detect hot spots, and root cause analysis using advanced diagnostics. The team identified misalignment caused by foundation settlement and bearing wear.',
        image: '/images/services/troubleshooting.png',
        results: [
            {
                metric: 'Problem Identification',
                value: '24 hours',
                improvement: 'Root cause confirmed',
            },
            {
                metric: 'Repair Completion',
                value: '48 hours',
                improvement: 'Unit back online',
            },
            {
                metric: 'Downtime Prevented',
                value: '$15 million',
                improvement: 'Avoided extended outage',
            },
            {
                metric: 'Vibration Levels',
                value: 'Normal',
                improvement: 'Below OEM limits',
            },
            {
                metric: 'Follow-up Issues',
                value: 'Zero',
                improvement: '6 months monitoring',
            },
        ],
        duration: '72 hours (emergency response)',
        projectValue: '$850,000',
        testimonial: {
            quote: 'JB Enterprise saved us from what could have been a catastrophic failure. Their rapid response, expert diagnostics, and effective solution got us back online in record time. The professionalism and expertise of their team were exceptional.',
            author: 'Vikram Singh',
            title: 'Operations Manager, Coastal Power',
        },
    },
];

// Helper function to get case studies by service ID
export function getCaseStudiesByService(serviceId: string): CaseStudy[] {
    return CASE_STUDIES.filter(cs => cs.serviceId === serviceId);
}

// Helper function to get case study by ID
export function getCaseStudyById(id: string): CaseStudy | undefined {
    return CASE_STUDIES.find(cs => cs.id === id);
}
