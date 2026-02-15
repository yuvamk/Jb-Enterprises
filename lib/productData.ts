export interface ProductDetail {
    id: string;
    slug: string;
    name: string;
    category: string;
    description: string;
    longDescription: string;
    image: string;
    gallery: string[];
    specifications: {
        label: string;
        value: string;
    }[];
    features: string[];
    applications: string[];
    technicalDocs?: {
        name: string;
        url: string;
    }[];
    relatedProducts: string[]; // IDs of related products
    inStock: boolean;
    leadTime?: string;
}

export const PRODUCT_DETAILS: ProductDetail[] = [
    {
        id: 'stator-coil-1',
        slug: 'high-voltage-stator-coil',
        name: 'High Voltage Stator Coil',
        category: 'Stator Coils',
        description: 'Premium quality stator coils for generators up to 500MW capacity',
        longDescription:
            'Our high voltage stator coils are engineered to the highest standards for reliability and performance in large-scale power generation applications. Manufactured using premium copper conductors and advanced insulation systems, these coils deliver exceptional electrical and thermal performance. Each coil undergoes rigorous testing including partial discharge, high voltage, and thermal cycling tests to ensure long-term reliability.',
        image: '/images/products/stator-coil.png',
        gallery: [
            '/images/products/stator-coil.png',
        ],
        specifications: [
            { label: 'Voltage Rating', value: 'Up to 22kV' },
            { label: 'Current Rating', value: '1000-5000A' },
            { label: 'Insulation Class', value: 'Class F / Class H' },
            { label: 'Conductor Material', value: '99.99% Pure Copper' },
            { label: 'Insulation System', value: 'Mica Tape + Epoxy Resin' },
            { label: 'Temperature Rise', value: '80°C (Class F), 105°C (Class H)' },
            { label: 'Cooling Method', value: 'Direct Water Cooling / Air Cooling' },
            { label: 'Generator Capacity', value: '50MW - 500MW' },
            { label: 'Standards Compliance', value: 'IEC 60034, IEEE 1310' },
            { label: 'Testing', value: 'PD Test, HV Test, Thermal Cycling' },
        ],
        features: [
            'Premium 99.99% pure copper conductors for maximum conductivity',
            'Advanced mica tape insulation system with epoxy resin impregnation',
            'Optimized slot fill factor for enhanced thermal performance',
            'Corona-resistant insulation for long-term reliability',
            'Precision manufacturing with tight dimensional tolerances',
            'Comprehensive factory testing including partial discharge testing',
            'Compatible with both air-cooled and water-cooled generators',
            'Extended service life of 25+ years with proper maintenance',
        ],
        applications: [
            'Thermal power plants (coal, gas, oil-fired)',
            'Combined cycle power plants',
            'Nuclear power generation',
            'Hydroelectric generators',
            'Industrial cogeneration plants',
            'Utility-scale power generation',
        ],
        technicalDocs: [
            { name: 'Stator Coil Datasheet', url: '#' },
            { name: 'Installation Manual', url: '#' },
            { name: 'Testing Procedures', url: '#' },
            { name: 'Maintenance Guidelines', url: '#' },
        ],
        relatedProducts: ['slip-ring-assembly-1', 'rotor-assembly-1'],
        inStock: true,
        leadTime: '8-12 weeks',
    },
    {
        id: 'slip-ring-assembly-1',
        slug: 'precision-slip-ring-assembly',
        name: 'Precision Slip Ring Assembly',
        category: 'Slip Rings',
        description: 'High-performance slip ring assemblies for reliable power transmission',
        longDescription:
            'Our precision slip ring assemblies are designed for continuous, reliable power transmission in rotating machinery. Featuring high-grade copper alloy rings and advanced carbon brush technology, these assemblies ensure minimal electrical noise and maximum service life. Each unit is precision-machined and balanced for smooth operation at high speeds.',
        image: '/images/products/slip-ring.png',
        gallery: [
            '/images/products/slip-ring.png',
        ],
        specifications: [
            { label: 'Ring Material', value: 'Copper Alloy (CuCrZr)' },
            { label: 'Brush Material', value: 'Electrographite Carbon' },
            { label: 'Current Rating', value: '500-3000A per ring' },
            { label: 'Voltage Rating', value: 'Up to 1000V' },
            { label: 'Number of Rings', value: '2-6 rings (customizable)' },
            { label: 'Maximum Speed', value: '3600 RPM' },
            { label: 'Operating Temperature', value: '-20°C to +80°C' },
            { label: 'Surface Finish', value: 'Ra 0.4μm' },
            { label: 'Concentricity', value: '±0.02mm' },
            { label: 'Brush Life', value: '8,000-12,000 hours' },
        ],
        features: [
            'Precision-machined copper alloy rings for superior conductivity',
            'Advanced electrographite carbon brushes for low wear',
            'Optimized brush pressure for consistent contact',
            'Minimal electrical noise and voltage drop',
            'High-speed dynamic balancing for vibration-free operation',
            'Corrosion-resistant surface treatment',
            'Easy brush replacement without disassembly',
            'Compatible with various generator designs',
        ],
        applications: [
            'Synchronous generators',
            'Wound rotor motors',
            'Excitation systems',
            'Rotating rectifiers',
            'Industrial machinery',
        ],
        technicalDocs: [
            { name: 'Slip Ring Specifications', url: '#' },
            { name: 'Brush Replacement Guide', url: '#' },
            { name: 'Maintenance Schedule', url: '#' },
        ],
        relatedProducts: ['stator-coil-1', 'carbon-brushes-1'],
        inStock: true,
        leadTime: '6-10 weeks',
    },
    {
        id: 'turbine-blade-1',
        slug: 'steam-turbine-blade-set',
        name: 'Steam Turbine Blade Set',
        category: 'Turbine Blades',
        description: 'High-efficiency turbine blades for steam turbines',
        longDescription:
            'Our steam turbine blades are engineered for maximum efficiency and durability in high-temperature, high-pressure environments. Manufactured from premium alloy steel with advanced aerodynamic profiles, these blades deliver superior performance and extended service life. Each blade is individually inspected and balanced for optimal turbine operation.',
        image: '/images/products/turbine-blades.png',
        gallery: ['/images/products/turbine-blades.png'],
        specifications: [
            { label: 'Material', value: '12Cr Stainless Steel / Titanium Alloy' },
            { label: 'Blade Length', value: '200-800mm (stage dependent)' },
            { label: 'Operating Temperature', value: 'Up to 600°C' },
            { label: 'Operating Pressure', value: 'Up to 170 bar' },
            { label: 'Surface Finish', value: 'Polished Ra 0.8μm' },
            { label: 'Blade Profile', value: '3D Aerodynamic Design' },
            { label: 'Root Attachment', value: 'Fir-tree / T-root' },
            { label: 'Coating', value: 'Erosion-resistant coating (optional)' },
            { label: 'Balancing', value: 'Individual blade balancing' },
            { label: 'Inspection', value: '100% NDT (UT, PT, MT)' },
        ],
        features: [
            'Advanced 3D aerodynamic blade profile for maximum efficiency',
            'Premium alloy steel for high-temperature strength',
            'Precision casting or forging for consistent quality',
            'Erosion and corrosion-resistant coatings available',
            'Individual blade balancing for smooth operation',
            'Comprehensive NDT inspection (ultrasonic, penetrant, magnetic)',
            'Compatible with major turbine OEMs',
            'Extended service life of 100,000+ operating hours',
        ],
        applications: [
            'Steam turbines (impulse and reaction types)',
            'Combined cycle power plants',
            'Cogeneration facilities',
            'Industrial process steam turbines',
            'Geothermal power plants',
        ],
        technicalDocs: [
            { name: 'Blade Specifications', url: '#' },
            { name: 'Installation Procedures', url: '#' },
            { name: 'Inspection Guidelines', url: '#' },
        ],
        relatedProducts: ['rotor-assembly-1'],
        inStock: false,
        leadTime: '12-16 weeks',
    },
    {
        id: 'rotor-assembly-1',
        slug: 'generator-rotor-assembly',
        name: 'Generator Rotor Assembly',
        category: 'Generator Rotors',
        description: 'Complete rotor assemblies for synchronous generators',
        longDescription:
            'Our generator rotor assemblies are precision-engineered for reliable, efficient power generation. Each rotor is manufactured from high-grade forged steel and features advanced winding technology for optimal magnetic field distribution. Complete with balancing, testing, and quality certification, our rotors are ready for immediate installation.',
        image: '/images/products/generator-rotor.png',
        gallery: ['/images/products/generator-rotor.png'],
        specifications: [
            { label: 'Rotor Type', value: 'Salient Pole / Cylindrical' },
            { label: 'Material', value: 'Forged Steel (34CrNiMo6)' },
            { label: 'Diameter', value: '500-2000mm' },
            { label: 'Length', value: '1000-6000mm' },
            { label: 'Weight', value: '2-50 tons' },
            { label: 'Speed', value: '1500 / 1800 / 3000 / 3600 RPM' },
            { label: 'Excitation', value: 'Brushless / Static' },
            { label: 'Cooling', value: 'Air / Hydrogen / Water' },
            { label: 'Balancing Grade', value: 'G2.5 per ISO 1940' },
            { label: 'Testing', value: 'Overspeed, HV, Vibration' },
        ],
        features: [
            'High-grade forged steel core for mechanical strength',
            'Precision winding with optimized field distribution',
            'Advanced cooling system design (air, hydrogen, or water)',
            'Dynamic balancing to G2.5 grade for smooth operation',
            'Comprehensive factory testing including overspeed test',
            'Compatible with various excitation systems',
            'Extended service life with proper maintenance',
            'Complete documentation and quality certificates',
        ],
        applications: [
            'Synchronous generators (50Hz / 60Hz)',
            'Thermal power plants',
            'Hydroelectric generators',
            'Industrial generators',
            'Standby and emergency power systems',
        ],
        technicalDocs: [
            { name: 'Rotor Assembly Datasheet', url: '#' },
            { name: 'Installation Manual', url: '#' },
            { name: 'Maintenance Guidelines', url: '#' },
            { name: 'Test Reports', url: '#' },
        ],
        relatedProducts: ['stator-coil-1', 'slip-ring-assembly-1'],
        inStock: false,
        leadTime: '16-24 weeks',
    },
];

export function getProductBySlug(slug: string): ProductDetail | undefined {
    return PRODUCT_DETAILS.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string): ProductDetail[] {
    return PRODUCT_DETAILS.filter((product) => product.category === category);
}

export function getRelatedProducts(product: ProductDetail, limit: number = 3): ProductDetail[] {
    return PRODUCT_DETAILS.filter((p) => product.relatedProducts.includes(p.id)).slice(0, limit);
}

export function getAllProductSlugs(): string[] {
    return PRODUCT_DETAILS.map((product) => product.slug);
}
