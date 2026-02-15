// Site Constants and Data for JB Enterprise

export const SITE_CONFIG = {
    name: 'JB Enterprise',
    tagline: 'Your Partner in Innovative Power Plant Solutions',
    description:
        'J B Enterprise is a trusted leader in providing sustainable power plant solutions, specializing in turbine and generator services. With a focus on operational efficiency, we partner with global OEMs to deliver cutting-edge technology and expertise.',
    url: 'https://www.jbepower.com',
    email: 'info@jbepower.com',
    phone: '+91 9898320831',
    address:
        '1/6 GF Anjani complex, opp guru Nanak petro pump, pareira hill road, Nr. WEH metro station, Andheri East, Mumbai 400099',
    whatsapp: '+919898320831',
};

export const SOCIAL_LINKS = {
    linkedin: 'https://www.linkedin.com/company/jbenterpriseindia/',
    tradeindia: 'https://www.tradeindia.com/j-b-enterprise-10023515/',
    indiamart: 'https://www.indiamart.com/jbenterprisemumbai/',
};

export const SERVICES = [
    {
        id: 'power-plant-services',
        title: 'Power Plant Services',
        description:
            'Delivering comprehensive solutions to optimize power plant efficiency and reliability.',
        icon: 'Zap',
        features: [
            'Performance optimization',
            'Preventive maintenance',
            'Equipment upgrades',
            'Technical consulting',
        ],
    },
    {
        id: 'erection-commissioning',
        title: 'Erection & Commissioning',
        description:
            'Expert installation and start-up services to ensure seamless power plant operations.',
        icon: 'Settings',
        features: [
            'Professional installation',
            'System integration',
            'Performance testing',
            'Operational training',
        ],
    },
    {
        id: 'power-plant-spares',
        title: 'Power Plant Spares',
        description:
            'Supplying high-quality spare parts to ensure continuous and efficient power plant operation.',
        icon: 'Package',
        features: [
            'OEM quality parts',
            'Fast delivery',
            'Global sourcing',
            'Inventory management',
        ],
    },
    {
        id: 'troubleshooting',
        title: 'Troubleshooting',
        description:
            'Reliable troubleshooting to keep your power plant running without a hitch.',
        icon: 'Wrench',
        features: [
            'Rapid diagnostics',
            '24/7 support',
            'Root cause analysis',
            'Emergency response',
        ],
    },
];

export const PRODUCTS = [
    {
        id: 'stator-coil',
        name: 'Stator Coil',
        category: 'Generator Components',
        description: 'High-performance stator coils for reliable power generation.',
        image: '/images/products/stator-coil.jpg',
    },
    {
        id: 'generator-slip-ring',
        name: 'Generator Slip Ring',
        category: 'Generator Components',
        description: 'Premium quality slip rings for smooth power transmission.',
        image: '/images/products/slip-ring.jpg',
    },
    {
        id: 'turbine-blades',
        name: 'Turbine Blades',
        category: 'Turbine Components',
        description: 'Precision-engineered turbine blades for optimal efficiency.',
        image: '/images/products/turbine-blades.jpg',
    },
    {
        id: 'generator-rotor',
        name: 'Generator Rotor',
        category: 'Generator Components',
        description: 'Robust generator rotors built for long-term performance.',
        image: '/images/products/generator-rotor.jpg',
    },
    {
        id: 'turbine-rotor',
        name: 'Turbine Rotor',
        category: 'Turbine Components',
        description: 'High-strength turbine rotors for demanding applications.',
        image: '/images/products/turbine-rotor.jpg',
    },
];

export const WHY_CHOOSE_US = [
    {
        id: 'quality',
        title: 'High-Quality Standards',
        description:
            'We adhere to stringent quality control measures, ensuring top-notch products and services.',
        icon: 'Award',
    },
    {
        id: 'ethics',
        title: 'Ethical Business Practices',
        description:
            'Transparency and integrity are at the core of all our dealings.',
        icon: 'Shield',
    },
    {
        id: 'network',
        title: 'Global Vendor Network',
        description:
            'Our relationships with domestic and international vendors enable us to provide a wide range of products.',
        icon: 'Globe',
    },
    {
        id: 'service',
        title: 'Comprehensive Service',
        description:
            'From repair to overhaul, we offer solutions that ensure long-term operational efficiency for power plants.',
        icon: 'CheckCircle',
    },
];

export const STATS = [
    {
        id: 'experience',
        value: 15,
        suffix: '+',
        label: 'Years of Experience',
    },
    {
        id: 'projects',
        value: 500,
        suffix: '+',
        label: 'Projects Completed',
    },
    {
        id: 'clients',
        value: 200,
        suffix: '+',
        label: 'Satisfied Clients',
    },
    {
        id: 'success',
        value: 98,
        suffix: '%',
        label: 'Success Rate',
    },
];

export const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/products', label: 'Products' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
];

export const SEO_METADATA = {
    title: 'JB Enterprise - Power Plant Solutions & Services',
    description:
        'Leading provider of sustainable power plant solutions, specializing in turbine and generator services. Expert erection, commissioning, spares, and troubleshooting.',
    keywords:
        'power plant services, turbine services, generator services, power plant spares, erection commissioning, troubleshooting, stator coil, slip ring, turbine blades',
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        siteName: 'JB Enterprise',
    },
};
