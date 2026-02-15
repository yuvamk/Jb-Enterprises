// Mega Menu Data for Navigation

import { Zap, Settings, Package, Wrench, Box, Cog } from 'lucide-react';
import { SERVICES, PRODUCTS } from './constants';

export const SERVICES_MEGA_MENU = SERVICES.map(service => ({
    title: service.title,
    description: service.description,
    href: `/services#${service.id}`,
    icon: getServiceIcon(service.icon),
}));

export const PRODUCTS_MEGA_MENU = [
    {
        title: 'Generator Components',
        description: 'Stator coils, slip rings, and rotor assemblies',
        href: '/products#generator-components',
        icon: <Cog className="w-6 h-6" />,
    },
    {
        title: 'Turbine Components',
        description: 'Blades, rotors, and precision parts',
        href: '/products#turbine-components',
        icon: <Box className="w-6 h-6" />,
    },
    {
        title: 'Spare Parts',
        description: 'OEM quality spares and replacements',
        href: '/products#spare-parts',
        icon: <Package className="w-6 h-6" />,
    },
    {
        title: 'View All Products',
        description: 'Browse our complete product catalog',
        href: '/products',
        icon: <Box className="w-6 h-6" />,
    },
];

function getServiceIcon(iconName: string) {
  const icons: Record<string, JSX.Element> = {
    Zap: <Zap className="w-6 h-6" />,
    Settings: <Settings className="w-6 h-6" />,
    Package: <Package className="w-6 h-6" />,
    Wrench: <Wrench className="w-6 h-6" />,
  };
  return icons[iconName] || <Zap className="w-6 h-6" />;
}
