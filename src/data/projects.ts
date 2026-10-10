export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
  website?: string;
  github?: string;
  status?: "Live" | "In Development" | "Private" | "On Hold";
  featured: boolean;

  // Case study information
  overview?: string[];
  role?: string;
  features?: string[];
  architecture?: string[];
  challenges?: string[];
  screenshots?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "avoro",
    title: "AVORO Clothing",
    subtitle: "Full-Stack E-Commerce Platform",
    category: "E-Commerce",
    description:
      "A clothing e-commerce platform with a responsive storefront, product variants, guest checkout, inventory management, order processing, and a dedicated administration dashboard.",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "AWS",
      "AWS S3",
      "Cloudflare",
      "Nginx",
      "GitHub Actions",
      "SEO",
      "Google Search Console",
    ],
    website: "https://avoroclothing.lk",
    status: "Live",
    featured: true,

    role: "Full-Stack Development, System Architecture, SEO & Deployment",

    overview: [
      "AVORO Clothing is a full-stack e-commerce platform developed for a clothing brand, featuring a modern customer-facing storefront, dedicated administration dashboard, and scalable backend API.",
      "The storefront was developed using Next.js with an emphasis on responsive design, performance, search engine optimization, and a seamless shopping experience.",
      "The platform supports product variants, inventory management, guest and registered customer shopping experiences, authentication, order processing, and administrative operations.",
      "Implemented SEO best practices across the public website, including page metadata, canonical URLs, Open Graph metadata, semantic HTML, and XML sitemap generation.",
      "Configured Google Search Console, submitted the XML sitemap, and established search indexing monitoring workflows.",
      "Deployed and configured the backend infrastructure using AWS, Nginx, Cloudflare, and GitHub Actions for continuous deployment.",
    ],
    features: [
      "Responsive clothing e-commerce storefront",
      "Product catalog with category filtering and search",
      "Product color and size variants",
      "Guest and registered customer shopping carts",
      "Customer authentication and verification",
      "Order creation, processing, and status management",
      "Inventory and product variant management",
      "Custom administration dashboard",
      "Product image storage using AWS S3",
      "SEO-optimized product and category pages",
      "Page-specific titles, descriptions, and canonical URLs",
      "Open Graph and social sharing metadata",
      "XML sitemap and robots.txt configuration",
      "Google Search Console setup and sitemap submission",
      "Production deployment and CI/CD automation",
    ],
    architecture: [
      "Next.js and TypeScript customer-facing storefront",
      "React.js administration dashboard",
      "NestJS REST API backend",
      "PostgreSQL database with Prisma ORM",
      "AWS S3 for product and category images",
      "Nginx reverse proxy and Linux VPS hosting",
      "Cloudflare for DNS and infrastructure configuration",
      "GitHub Actions for CI/CD deployments",
      "Next.js metadata and SEO architecture",
      "Dynamic XML sitemap and robots.txt generation",
      "Google Search Console for indexing and search visibility monitoring",
    ],
    challenges: [
      "Designing consistent shopping and checkout workflows for guest and registered customers.",
      "Managing stock and inventory across product colors and sizes.",
      "Maintaining accurate order, payment, and inventory records.",
      "Building a scalable and maintainable backend architecture for e-commerce operations.",
      "Implementing search engine optimization across dynamically generated product and category pages.",
      "Configuring canonical URLs, redirects, sitemaps, and search indexing workflows.",
      "Managing cloud infrastructure, application deployments, and CI/CD pipelines.",
    ],
  },
  {
    slug: "waduwada",
    title: "Waduwada.lk",
    subtitle: "Multi-Merchant Furniture Marketplace",
    category: "Marketplace",
    description:
      "A Sri Lankan furniture marketplace designed to connect customers with local furniture merchants. Built around a modular backend architecture with separate merchant, admin, and customer experiences.",
    technologies: ["NestJs", "Typescript", "PostgreSQL", "Redis", "AWS"],
    status: "In Development",
    featured: true,

    role: "Backend Architecture & Full-Stack Development",
    overview: [
      "Waduwada.lk is a furniture marketplace project intended to connect customers with multiple furniture merchants in Sri Lanka.",
      "The platform is being designed around separate public, merchant, and administration applications, with a modular monolith backend.",
    ],
    features: [
      "Multi-merchant marketplace architecture",
      "Merchant registration and administration",
      "Product catalog and inventory planning",
      "Customer ordering workflows",
      "Merchant order management",
      "Payment integration planning",
    ],
    architecture: [
      "NestJs with Typescript",
      "PostgreSQL database with Prisma ORM",
      "Monolith architecture",
      "Redis and Hangfire planned for supporting services",
      "AWS S3 and Cloudflare planned for media delivery",
    ],
    challenges: [
      "Designing merchant isolation and authorization",
      "Structuring modules for future growth",
      "Planning reliable cross-merchant order workflows",
    ],
  },

  {
    slug: "royal-mobile",
    title: "Royal Mobile",
    subtitle: "Custom E-Commerce & Inventory Management Platform",
    category: "E-Commerce",
    description:
      "A fully customizable e-commerce platform developed to replace an existing WordPress website. Built with a modern storefront, custom CMS, inventory management, and order processing system. Migrated the existing product catalog and inventory to MongoDB and AWS S3, implemented technical SEO, and configured Google Search Console for search visibility.",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "AWS S3",
      "SEO",
      "Google Search Console",
    ],
    website: "https://www.royalmobile.lk",
    status: "Live",
    featured: false,

    role: "Full-Stack Development, Data Migration & Deployment",

    overview: [
      "Royal Mobile is a custom-built e-commerce platform designed to replace the business's previous WordPress website with a more flexible and maintainable application.",
      "The platform consists of three separate applications: a public storefront, an administration dashboard with a custom content management system, and a backend API responsible for business operations.",
      "The system provides product and inventory management, order processing, and customizable website content through the administration panel.",
      "As part of the platform migration, the existing WordPress product catalog and inventory records were transferred to MongoDB, while product media assets were migrated to AWS S3.",
      "The project also included search engine optimization, Google Search Console configuration, and deployment of the new platform to replace the original WordPress website.",
    ],

    features: [
      "Responsive customer-facing e-commerce storefront",
      "Fully customizable website content through a dedicated CMS",
      "Custom administration dashboard",
      "Product catalog and category management",
      "Inventory and stock management",
      "Customer order management and processing",
      "Product and inventory migration from WordPress",
      "Product media storage using AWS S3",
      "REST API integration between storefront, admin panel, and backend",
      "Technical SEO implementation",
      "Google Search Console configuration",
      "Production deployment replacing the previous WordPress website",
    ],

    architecture: [
      "Next.js and React.js for the public storefront",
      "React.js administration dashboard and custom CMS",
      "Node.js and Express.js REST API backend",
      "MongoDB for product, inventory, order, and CMS data",
      "AWS S3 for product images and media assets",
      "Separate public, administration, and backend applications",
      "SEO-focused storefront architecture",
      "Google Search Console integration for search performance monitoring",
    ],

    challenges: [
      "Replacing an existing WordPress website with a custom-built e-commerce platform while preserving essential business data.",
      "Migrating product catalogs and inventory records from the previous system into MongoDB.",
      "Migrating product images and media assets to AWS S3 while maintaining correct references.",
      "Designing a flexible CMS that allows administrators to customize storefront content without modifying application code.",
      "Maintaining consistent product and inventory data across the public storefront and administration dashboard.",
      "Implementing technical SEO and configuring Google Search Console during the transition from WordPress.",
      "Deploying and transitioning the live website from WordPress to the new custom platform.",
    ],
  },

  {
    slug: "vehicle-service-management",
    title: "Vehicle Service Center Management System",
    subtitle: "Automotive Service Operations & ERP Platform",
    category: "ERP / Business Automation",
    description:
      "A comprehensive web-based management system designed to streamline daily operations of a vehicle service center. The platform centralizes service bookings, work orders, invoicing, financial records, customer and employee management, attendance tracking, and operational reporting.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "JavaScript",
      "MongoDB",
      "REST APIs",
    ],
    status: "Live",
    featured: true,

    role: "Full-Stack Development",

    overview: [
      "A centralized web application developed to manage and streamline the operational workflows of a vehicle service center, replacing fragmented manual processes with an integrated digital management platform.",
      "The system supports the complete service workflow, from customer bookings and vehicle service records to work order processing, invoice generation, financial management, and business performance monitoring.",
      "It also provides employee administration, attendance tracking, customer service history, and operational statistics to support day-to-day management and decision-making.",
    ],

    features: [
      "Service booking creation, scheduling, and management",
      "Work order creation, assignment, tracking, and status management",
      "Invoice generation and customer billing",
      "Financial transaction and payment record management",
      "Customer profile and contact information management",
      "Vehicle service history and maintenance record tracking",
      "Employee profile and role management",
      "Employee attendance recording and monitoring",
      "Operational statistics and business performance reporting",
      "REST API integration between frontend and backend services",
    ],

    architecture: [
      "React-based web application for operational management",
      "Node.js and Express.js backend REST API",
      "MongoDB for storing operational and customer records",
      "Modular application structure for managing business workflows",
      "Integrated work order, invoicing, and financial management processes",
    ],

    challenges: [
      "Managing interconnected workflows between service bookings, work orders, invoices, and financial records.",
      "Maintaining accurate customer and vehicle service histories across multiple service visits.",
      "Designing consistent data relationships between customers, vehicles, employees, and work orders.",
      "Supporting operational reporting and statistics across different business modules.",
      "Building a maintainable application capable of supporting evolving service center requirements.",
    ],
  },

  {
    slug: "erengineers-field-service",
    title: "EREngineers",
    subtitle: "Field Service Management System",
    category: "ERP / Business Automation",
    description:
      "A full-stack field service management platform designed to streamline work orders, invoicing, customer records, employee operations, and service workflows. The system supports role-based access control, attendance tracking, job assignments, and performance-based work point calculations while efficiently managing over 1,000 customer records.",
    technologies: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "AWS",
      "Google APIs",
    ],
    status: "Live",
    featured: false,

    role: "Full-Stack Software Development",

    overview: [
      "EREngineers is a web-based field service management system developed to centralize and simplify day-to-day service operations, including work order management, invoicing, customer information, and internal business workflows.",
      "The application provides a role-based multi-user environment for administrators and staff, with access controls designed to support different responsibilities and operational workflows.",
      "The system includes employee management, attendance tracking, job assignments, and performance-based work point calculations. Its backend APIs and MongoDB data structures support the efficient management of more than 1,000 customer records and associated operational data.",
    ],

    features: [
      "Work order creation, scheduling, assignment, and management",
      "Invoice generation and billing management",
      "Customer information and service record management",
      "Employee profile and internal operations management",
      "Employee attendance recording and tracking",
      "Job assignments and employee workload management",
      "Performance-based employee work point calculations",
      "Role-based access control for administrators and staff",
      "REST API integration between frontend and backend",
      "Operational data management supporting 1,000+ customer records",
    ],

    architecture: [
      "React.js frontend for administrative and staff workflows",
      "Node.js and Express.js REST API backend",
      "MongoDB for customer, employee, work order, and operational data",
      "Role-based authorization for multi-user access",
      "AWS cloud infrastructure",
      "Google API integrations",
    ],

    challenges: [
      "Designing interconnected workflows for work orders, invoices, customers, and internal service operations.",
      "Implementing secure role-based access control across different employee responsibilities.",
      "Building accurate attendance tracking and performance-based work point calculation workflows.",
      "Structuring backend APIs and MongoDB collections to efficiently manage 1,000+ customer records and related operational data.",
      "Maintaining consistency between employee assignments, work order updates, and service records.",
    ],
  },

  {
    slug: "visa-appointment-automation",
    title: "Visa Appointment Automation Bot",
    subtitle: "Real-Time Appointment Monitoring & Booking Automation",
    category: "Automation / Python",
    description:
      "A Python-based automation system developed to monitor visa appointment availability in real time and streamline the reservation process. The application reduces repetitive manual monitoring and provides a high-speed booking workflow designed for competitive, limited-slot appointment environments.",
    technologies: ["Python", "SeleniumBase", "PyQt", "FastAPI"],
    status: "Private",
    featured: true,

    role: "Automation Engineering & Full-Stack Development",

    overview: [
      "A specialized automation application designed to reduce the time and manual effort required to monitor visa appointment availability and complete reservation workflows.",
      "The system combines browser automation, a desktop user interface, and backend API functionality to coordinate appointment monitoring and booking operations.",
      "Developed with an emphasis on responsiveness and efficient execution in environments where appointment slots are limited and availability can change quickly.",
    ],

    features: [
      "Automated monitoring of visa appointment availability",
      "Real-time appointment slot detection",
      "Automated appointment reservation workflows",
      "High-speed processing of limited appointment availability",
      "Desktop application interface built with PyQt",
      "Browser automation using SeleniumBase",
      "Backend API functionality using FastAPI",
      "Reduced manual effort through automated appointment tracking",
    ],

    architecture: [
      "Python-based automation engine",
      "SeleniumBase for browser interaction and appointment workflows",
      "PyQt desktop interface for application interaction",
      "FastAPI backend for application services and API functionality",
      "Integration between desktop controls, automation workflows, and backend services",
    ],

    challenges: [
      "Handling rapidly changing appointment availability in time-sensitive booking environments.",
      "Coordinating browser automation with application state and backend services.",
      "Reducing repetitive manual monitoring while maintaining reliable automation workflows.",
      "Designing responsive booking processes for environments with limited appointment slots.",
      "Managing timing, errors, and interruptions during automated browser interactions.",
    ],
  },

  {
    slug: "vitalian-fashion",
    title: "Vitalian Fashion",
    subtitle: "Full-Stack Fashion E-Commerce Platform",
    category: "E-Commerce",
    description:
      "A full-stack e-commerce platform developed for a local fashion brand, featuring a responsive storefront, product catalog, shopping cart, cash-on-delivery checkout, and a custom administration dashboard. Integrated Koombiyo Express APIs to streamline logistics operations, including pickup requests, shipment tracking, and waybill generation.",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "REST APIs",
    ],
    status: "On Hold",
    featured: false,

    role: "Full-Stack Development & Deployment",

    overview: [
      "Vitalian Fashion is a custom e-commerce platform developed for a local fashion brand to manage online sales and day-to-day store operations.",
      "The platform includes a responsive customer-facing storefront for browsing products, managing shopping carts, and placing cash-on-delivery orders. A dedicated administration dashboard and custom content management system allow store administrators to manage products, categories, orders, and customer information.",
      "The application integrates Koombiyo Express logistics APIs to support pickup requests, shipment tracking, and waybill generation, connecting the online shopping experience with order fulfillment operations.",
      "The platform was successfully launched and operated online. It is currently on hold at the client's request.",
    ],

    features: [
      "Responsive e-commerce storefront for mobile and desktop",
      "Product catalog browsing and category management",
      "Shopping cart and cash-on-delivery checkout",
      "Secure customer and administrator role separation",
      "Dedicated administration dashboard",
      "Custom CMS for product and category management",
      "Customer information and order management",
      "Koombiyo Express API integration for logistics operations",
      "Automated waybill generation",
      "Courier pickup request management",
      "Shipment tracking and delivery status monitoring",
      "Order processing and fulfillment workflows",
    ],

    architecture: [
      "Next.js and React.js for the customer-facing storefront and administration interfaces",
      "Node.js and Express.js REST API backend",
      "MongoDB for product, customer, and order data",
      "Role-based authorization for customer and administrative operations",
      "Koombiyo Express API integration for courier and logistics management",
      "AWS cloud infrastructure for application deployment",
      "Custom content management functionality for store administration",
    ],

    challenges: [
      "Designing a complete e-commerce workflow covering product discovery, shopping cart management, checkout, and order fulfillment.",
      "Integrating third-party logistics services for pickup requests, shipment tracking, and waybill generation.",
      "Maintaining consistent order information between the e-commerce platform and external courier services.",
      "Implementing secure separation between customer and administrator functionality.",
      "Developing a maintainable custom CMS to simplify product, category, and order administration.",
      "Optimizing responsive storefront interactions and the order placement process across mobile and desktop devices.",
    ],
  },
];
