
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-200 py-3">
      <div className="container">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <a 
              href="#" 
              className="text-consulting-blue hover:text-consulting-navy flex items-center"
              aria-label="Ir al inicio"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only">Inicio</span>
            </a>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
              {item.current ? (
                <span 
                  className="text-consulting-gray font-medium"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <a 
                  href={item.href}
                  className="text-consulting-blue hover:text-consulting-navy hover:underline"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbNav;
