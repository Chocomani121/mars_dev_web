export const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "/#blog" },
];

export const count = [
    {
        icon: "/images/counter/star.svg",
        value: "4.86",
        description: "Out of 5 stars from 3896 reviews on Google platform",
    },
    {
        icon: "/images/counter/admin.svg",
        value: "364",
        description: "Client testimonials received in the year 2021",
    },
    {
        icon: "/images/counter/bag.svg",
        value: "45M+",
        description: "Revenue generated through new projects & marketing",
    },

];



export const Progress = [
    { title: 'UX Research and Testing', Progress: 95 },
    { title: 'Product Management', Progress: 84 },
    { title: 'UI & Visual Design', Progress: 90 }
];

export const Servicebox = [
    {
        image: '/images/about/const_1.png',
        icon: '/images/services/ux-design-product_1.svg',
        title: 'General Construction',
        description: 'Residential, commercial, and governmental buildings',
    },
    {
        image: '/images/services/bridge.jpg',
        icon: '/images/services/perfomance-optimization.svg',
        title: 'Infrastructure Development',
        description: 'Including roads, bridges, and public utilities.',
    },
    {
        image: '/images/services/management.jpg',
        icon: '/images/services/ux-design-product_2.svg',
        title: 'Project Management',
        description: 'Comprehensive oversight from conception to completion.',
    },

    {
        image: '/images/services/architectural_design.jpg',
        icon: '/images/services/ux-design-product_2.svg',
        title: 'Architectural Design',
        description: 'Innovative designs from our experienced architectural team.',
    },

    {
        image: '/images/services/firm-handshake.jpg',
        icon: '/images/services/ux-design-product_2.svg',
        title: 'Consultancy and Legal Services',
        description: 'Expert legal oversight to ensure compliance and project success.',
    },
]

export type PortfolioCategory =
    | 'residential'
    | 'commercial'
    | 'institutional'
    | 'infrastructure'

export interface PortfolioItem {
    image: string
    alt: string
    title: string
    slug: string
    info: string
    Class: string
    category: PortfolioCategory
}

export const portfolioinfo: PortfolioItem[] = [
    {
        image: '/images/portfolio/private_resort_thumbnail.png',
        alt: 'Private resort project thumbnail',
        title: 'Private Resort',
        slug: 'Cozycasa',
        info: 'Custom resort build and landscape integration for a private estate.',
        Class: 'md:mt-0',
        category: 'residential',
    },
    {
        image: '/images/portfolio/mars.png',
        alt: 'Ashgard commercial project',
        title: 'Ashgard',
        slug: 'Mars',
        info: 'Commercial development delivered with coordinated structural and finishes scope.',
        Class: 'md:mt-24',
        category: 'commercial',
    },
    {
        image: '/images/portfolio/airmed_thumbnail.png',
        alt: 'Airmed Medical Center',
        title: 'Airmed Medical Center',
        slug: 'everyday-humans',
        info: 'Healthcare facility fit-out focused on patient flow and durable, clinical-grade finishes.',
        Class: 'md:mt-0',
        category: 'institutional',
    },
    {
        image: '/images/portfolio/AGE_shed_thumbnail.png',
        alt: 'AGED Sched facility',
        title: 'AGED Sched',
        slug: 'rocket-squared',
        info: 'Industrial shed and support structure engineered for operational efficiency.',
        Class: 'md:mt-24',
        category: 'commercial',
    },
    {
        image: '/images/portfolio/Consolacion_inside.png',
        alt: 'Consolacion Gym interior',
        title: 'Consolacion Gym',
        slug: 'panda-logo',
        info: 'Community sports facility with high-traffic flooring and open-span interior.',
        Class: 'md:mt-0',
        category: 'institutional',
    },
    {
        image: '/images/portfolio/laray_warehouse_thumbnail.png',
        alt: 'Laray Warehouse',
        title: 'Laray Warehouse',
        slug: 'fusion-dynamics',
        info: 'Warehouse and logistics shell with optimized clear height and loading access.',
        Class: 'md:mt-0',
        category: 'commercial',
    },
    {
        image: '/images/portfolio/mactan_training_pool_thumbnail.png',
        alt: 'Mactan training pool facility',
        title: 'Mactan Training Pool',
        slug: 'innovate-x-ventures',
        info: 'Aquatic training facility with waterproofing, drainage, and pool-deck coordination.',
        Class: 'md:mt-24',
        category: 'institutional',
    },
    {
        image: '/images/portfolio/bacaw_resort_thumbnail.png',
        alt: 'Bakhawan Resort',
        title: 'Bakhawan Resort',
        slug: 'nebula-holdings',
        info: 'Resort hospitality spaces blending structural work with coastal site conditions.',
        Class: 'md:mt-0',
        category: 'residential',
    },
    {
        image: '/images/portfolio/qc_residence_thumbnail.png',
        alt: 'QC residential build',
        title: 'QC Residential',
        slug: 'summit-partners',
        info: 'Urban residential project emphasizing layout, envelope, and long-term durability.',
        Class: 'md:mt-24',
        category: 'residential',
    },
    {
        image: '/images/portfolio/navy_hq_thumbnails.png',
        alt: 'Zambales Navy headquarters',
        title: 'Zambales Navy HQ',
        slug: 'apex-strategies',
        info: 'Government facility with security, access control, and robust civil coordination.',
        Class: 'md:mt-0',
        category: 'infrastructure',
    },
]