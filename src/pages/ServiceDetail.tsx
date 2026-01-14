import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
    ArrowLeft,
    CheckCircle,
    ArrowRight,
    Globe,
    Search,
    Share2,
    Brain,
    Mic,
    Calculator,
    Briefcase,
    Landmark,
    ShieldCheck
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

// Service data with full details
const servicesData = {
    'web-development': {
        icon: <Globe className="w-10 h-10" />,
        title: "Web & App Development",
        subtitle: "Custom Digital Solutions",
        description: "Transform your vision into reality with custom-built websites and mobile applications. We create scalable, high-performance digital solutions that deliver exceptional user experiences and drive measurable business results.",
        longDescription: "Our web and app development team specializes in creating custom digital solutions that help businesses establish a powerful online presence and achieve their digital transformation goals. From sleek corporate websites and complex e-commerce platforms to native mobile applications and progressive web apps, we leverage cutting-edge technologies like React, Node.js, React Native, and cloud infrastructure to deliver products that not only look stunning but perform exceptionally. We follow agile development methodologies, ensuring transparency, flexibility, and timely delivery. Our solutions are built with scalability in mind, allowing your digital products to grow seamlessly with your business. Whether you need a simple landing page or a complex enterprise application, we have the expertise to bring your vision to life.",
        features: [
            "Responsive design for all devices",
            "Custom CMS development",
            "E-commerce solutions with payment integration",
            "Mobile app development (iOS & Android)",
            "API integration & development",
            "Performance optimization & SEO-ready code",
            "Cloud hosting & deployment",
            "Ongoing maintenance & support"
        ],
        benefits: [
            "Increase online visibility and credibility",
            "Improve user experience and engagement",
            "Streamline business operations",
            "Generate more leads and conversions"
        ],
        relatedProjects: [
            { name: "Hi-tech Homes", link: "/projects/hitech-homes", description: "Property management portal", logo: "/hitech.jpeg", video: "/hitech.mp4" },
            { name: "Policicue", link: "/projects/policicue", description: "Insurance comparison platform", logo: "/policucue.jpeg", video: "/policicue.mp4" },
            { name: "Indus", link: "/projects/indus", description: "Educational management system", logo: "/indus.jpeg", video: "/indus.mp4" },
            { name: "Sanjeevni Hospital", link: "/projects/sanjeevni-hospital", description: "Healthcare services platform", logo: "/sanjeevni.jpeg", video: "/Sanjeevni.mp4" },
            { name: "FRD Nutrition", link: "/projects/frd-nutrition", description: "Nutrition & wellness platform", logo: "/frd-nutrition-new.png", video: "/FrdNutrition.mp4" },
            { name: "Rohtak Shoe Co.", link: "/projects/rohtak-shoe", description: "Footwear e-commerce platform", logo: "/shoes.jpeg", video: "/Rohtak Shoe.mp4" }
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
        color: "from-blue-500 to-cyan-500"
    },
    'seo-content': {
        icon: <Search className="w-10 h-10" />,
        title: "SEO & Content Marketing",
        subtitle: "Rank Higher, Convert Better",
        description: "Dominate search rankings and captivate your audience with data-driven SEO strategies and compelling content. We help you build authority, increase organic traffic, and convert visitors into loyal customers.",
        longDescription: "Our SEO and content marketing services are designed to improve your website's visibility in search engines and drive targeted traffic that converts into paying customers. We combine technical SEO expertise with creative content strategies to build a sustainable online presence that delivers long-term results. Our approach includes comprehensive keyword research, on-page and off-page optimization, technical SEO audits, content creation that resonates with your audience, and strategic link building campaigns. We don't just focus on rankings; we focus on driving qualified traffic that converts. Our content marketing strategies include blog posts, infographics, videos, and social media content that establishes your brand as an industry authority. With regular performance tracking and optimization, we ensure your SEO investment delivers measurable ROI.",
        features: [
            "Technical SEO audit & optimization",
            "Keyword research & strategy",
            "Content creation & optimization",
            "Link building campaigns",
            "Local SEO optimization",
            "Performance tracking & analytics",
            "Competitor analysis",
            "Content calendar planning"
        ],
        benefits: [
            "Increase organic search traffic",
            "Improve search engine rankings",
            "Build brand authority and trust",
            "Generate qualified leads consistently"
        ],
        relatedProjects: [],
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=600&fit=crop",
        color: "from-green-500 to-emerald-500"
    },
    'social-media': {
        icon: <Share2 className="w-10 h-10" />,
        title: "Social Media Marketing",
        subtitle: "Build Your Brand Presence",
        description: "Build a powerful brand presence across social platforms. Our strategic campaigns create meaningful connections with your audience, boost engagement, and turn followers into brand advocates.",
        longDescription: "Our social media marketing services help businesses build meaningful connections with their audience and create lasting brand loyalty. We create and execute comprehensive social media strategies that increase brand awareness, foster community engagement, and drive measurable business results across platforms like Instagram, Facebook, LinkedIn, Twitter, and more. Our team develops platform-specific content strategies, manages your social media presence, runs targeted paid campaigns, and engages with your community to build authentic relationships. We use advanced analytics to track performance, understand audience behavior, and continuously optimize campaigns for better results. From content creation and scheduling to influencer partnerships and crisis management, we handle every aspect of your social media presence. Our goal is to transform your social media channels into powerful marketing assets that drive traffic, generate leads, and increase sales.",
        features: [
            "Platform-specific strategies",
            "Content calendar creation",
            "Community management",
            "Paid social campaigns",
            "Influencer partnerships",
            "Analytics & reporting",
            "Brand voice development",
            "Crisis management"
        ],
        benefits: [
            "Increase brand awareness and reach",
            "Build engaged community of followers",
            "Drive traffic and conversions",
            "Enhance customer loyalty"
        ],
        relatedProjects: [],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop",
        color: "from-purple-500 to-fuchsia-500"
    },
    'ai-solutions': {
        icon: <Brain className="w-10 h-10" />,
        title: "AI Solutions",
        subtitle: "Intelligent Automation",
        description: "Cutting-edge AI integration for automation and intelligent decision-making to transform your business operations. From lead management automation to WhatsApp text automation, we integrate cutting-edge AI technology tailored to your unique needs.",
        longDescription: "Our AI solutions help businesses leverage the power of artificial intelligence to automate processes, gain insights from data, and make smarter decisions. We specialize in implementing intelligent automation systems that streamline your operations, enhance customer engagement, and drive measurable business growth. From chatbots and predictive analytics to custom AI-powered tools, we deliver solutions that give you a competitive edge in today's digital landscape. Our expertise spans across lead management automation, WhatsApp business automation, intelligent chatbots, and data-driven decision-making systems that transform how you operate.",
        features: [
            "Lead management automation systems",
            "WhatsApp text automation & business API integration",
            "Intelligent chatbot development",
            "Predictive analytics & forecasting",
            "Process automation & workflow optimization",
            "Data analysis & actionable insights",
            "Machine learning models & AI training",
            "Natural language processing (NLP)",
            "Computer vision solutions",
            "AI-powered customer service tools",
            "Automated email & SMS campaigns",
            "Smart CRM integration"
        ],
        benefits: [
            "Automate repetitive tasks and save time",
            "Gain actionable insights from data",
            "Improve customer experience with instant responses",
            "Reduce operational costs by up to 70%",
            "Scale your business without scaling headcount",
            "Make data-driven decisions faster"
        ],
        relatedProjects: [
            { 
                name: "Lead Management Automation", 
                link: "/projects/lead-management-automation", 
                description: "Automated lead capture, scoring, and nurturing system that increased conversion rates by 45%. Intelligent lead distribution and follow-up automation.",
                logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&q=90",
                video: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&q=90"
            },
            { 
                name: "WhatsApp Text Automation", 
                link: "/projects/whatsapp-automation", 
                description: "WhatsApp Business API integration for automated customer support, marketing campaigns, and instant notifications. Handle unlimited conversations efficiently.",
                logo: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&h=400&fit=crop&q=90",
                video: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1920&h=1080&fit=crop&q=90"
            }
        ],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
        color: "from-orange-500 to-amber-500"
    },
    'podcast-production': {
        icon: <Mic className="w-10 h-10" />,
        title: "Podcast Production",
        subtitle: "Amplify Your Voice",
        description: "Amplify your brand voice with professional podcast production. From concept to distribution, we handle everything to help you reach and engage your target audience through compelling audio content.",
        longDescription: "Our podcast production services help businesses and individuals create professional audio content that engages audiences, builds thought leadership, and establishes brand authority in their industry. From initial concept development and scriptwriting to professional recording, editing, and distribution across all major platforms, we handle every aspect of podcast production to ensure your message reaches the right ears. We provide state-of-the-art recording facilities, experienced audio engineers, and creative producers who understand how to craft compelling narratives that resonate with listeners. Our services include guest booking assistance, show notes creation, transcription services, promotional graphics, and strategic distribution to maximize your podcast's reach. Whether you're launching a new podcast or looking to improve an existing show, we have the expertise and resources to help you succeed in the growing world of audio content.",
        features: [
            "Podcast strategy & planning",
            "Professional recording",
            "Audio editing & mixing",
            "Show notes & transcripts",
            "Distribution & promotion",
            "Analytics & optimization",
            "Guest booking assistance",
            "Branding & cover art"
        ],
        benefits: [
            "Build thought leadership",
            "Reach new audiences",
            "Create evergreen content",
            "Strengthen brand identity"
        ],
        relatedProjects: [],
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1200&h=600&fit=crop",
        color: "from-red-500 to-rose-500"
    },
    'financial-consulting': {
        icon: <Calculator className="w-10 h-10" />,
        title: "Financial Consulting",
        subtitle: "Strategic Financial Guidance",
        description: "Navigate complex financial decisions with confidence. Our expert consultants provide strategic planning, investment guidance, and financial optimization strategies to accelerate your business growth.",
        longDescription: "Our financial consulting services provide businesses with expert guidance on financial planning, investment strategies, risk management, and financial optimization. We help you make informed decisions that drive growth and ensure long-term financial health and sustainability. Our experienced financial consultants work closely with your leadership team to analyze your current financial position, identify opportunities for improvement, and develop comprehensive strategies that align with your business goals. We provide services including financial forecasting, budgeting, cash flow management, tax optimization, funding strategies, and performance analysis. Whether you're a startup seeking seed funding, a growing business looking to optimize operations, or an established enterprise planning expansion, our consultants bring deep industry knowledge and proven methodologies to help you achieve your financial objectives. We don't just provide advice; we partner with you to implement strategies and monitor results.",
        features: [
            "Financial planning",
            "Investment strategies",
            "Risk assessment",
            "Tax optimization",
            "Funding guidance",
            "Performance analysis",
            "Cash flow management",
            "Financial forecasting"
        ],
        benefits: [
            "Optimize financial performance",
            "Reduce financial risks",
            "Access growth capital",
            "Improve profitability"
        ],
        relatedProjects: [],
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
        color: "from-indigo-500 to-blue-500"
    },
    'business-consultation': {
        icon: <Briefcase className="w-10 h-10" />,
        title: "Business Consultation",
        subtitle: "Expert Strategic Guidance",
        description: "Unlock your business's full potential with expert strategic guidance. We analyze your operations, identify growth opportunities, and provide actionable insights to optimize performance and achieve sustainable success.",
        longDescription: "Our business consultation services provide strategic guidance to help businesses optimize operations, identify growth opportunities, overcome challenges, and achieve their long-term vision. We work closely with leadership teams to develop actionable strategies that drive sustainable success and competitive advantage. Our consultants bring years of cross-industry experience and proven methodologies to analyze your business from multiple angles - operations, marketing, sales, finance, and technology. We conduct comprehensive assessments, identify bottlenecks and inefficiencies, and develop customized roadmaps for improvement. Our services include strategic business planning, market analysis and research, competitive positioning, operational process optimization, change management, performance improvement initiatives, and business model innovation. We don't just deliver reports; we work alongside your team to implement strategies, measure progress, and adjust course as needed. Whether you're facing specific challenges or looking to take your business to the next level, our consultants provide the expertise and support you need to succeed.",
        features: [
            "Strategic business planning",
            "Operational process optimization",
            "Market analysis & research",
            "Growth strategy development",
            "Change management",
            "Performance improvement",
            "Business model innovation",
            "Competitive positioning"
        ],
        benefits: [
            "Optimize business operations",
            "Identify growth opportunities",
            "Improve decision-making",
            "Achieve strategic objectives"
        ],
        relatedProjects: [],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
        color: "from-amber-500 to-orange-500"
    },
    'business-loans': {
        icon: <Landmark className="w-10 h-10" />,
        title: "Business Loans",
        subtitle: "Flexible Financing Solutions",
        description: "Fuel your growth with flexible financing solutions. Access term loans, working capital, equipment financing, and more with competitive rates and terms designed to support your business expansion.",
        longDescription: "Our business loan services connect you with the right financing options to fuel your growth and help you seize opportunities without cash flow constraints. Whether you need working capital to manage day-to-day operations, equipment financing to upgrade your infrastructure, or expansion funds to enter new markets, we help you secure competitive rates with minimal documentation and fast approval processes. We work with a network of trusted financial institutions and lenders to find the best financing solutions tailored to your specific needs and business situation. Our team guides you through the entire loan application process, from documentation preparation to approval and disbursement. We understand that every business has unique financing needs, which is why we offer a range of loan products including unsecured business loans, secured loans, machinery and equipment loans, invoice financing, and business lines of credit. With flexible repayment terms and dedicated support throughout the loan tenure, we make business financing simple and accessible.",
        features: [
            "Unsecured business loans",
            "Working capital finance",
            "Machinery & equipment loans",
            "Quick approval process",
            "Competitive interest rates",
            "Minimal documentation",
            "Flexible repayment terms",
            "Dedicated support"
        ],
        benefits: [
            "Quick access to capital",
            "Fuel business expansion",
            "Manage cash flow effectively",
            "Seize growth opportunities"
        ],
        relatedProjects: [],
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=600&fit=crop",
        color: "from-indigo-500 to-blue-500"
    },
    'business-insurance': {
        icon: <ShieldCheck className="w-10 h-10" />,
        title: "Business Insurance",
        subtitle: "Comprehensive Protection",
        description: "Protect what you've built with comprehensive insurance coverage. Safeguard your assets, mitigate risks, and ensure business continuity with tailored insurance plans that give you peace of mind.",
        longDescription: "Our business insurance services help you protect your business from unforeseen risks and ensure continuity in the face of unexpected events. We offer a comprehensive range of coverage options tailored to your industry, business size, and specific risk profile, ensuring you can operate with confidence and peace of mind. Our insurance experts conduct thorough risk assessments to identify potential vulnerabilities in your business and recommend appropriate coverage solutions. We work with leading insurance providers to offer competitive premiums and comprehensive protection. Our services include general liability insurance to protect against third-party claims, property insurance to safeguard your physical assets, workers' compensation to cover employee injuries, professional liability insurance for service-based businesses, cyber insurance to protect against data breaches, keyman insurance to protect against loss of key personnel, and business interruption coverage to maintain cash flow during disruptions. We also provide ongoing policy management, claims assistance, and regular reviews to ensure your coverage evolves with your business needs.",
        features: [
            "General liability insurance",
            "Property insurance",
            "Workers' compensation",
            "Professional liability",
            "Cyber insurance",
            "Keyman insurance",
            "Business interruption coverage",
            "Custom policy design"
        ],
        benefits: [
            "Protect business assets",
            "Mitigate financial risks",
            "Ensure business continuity",
            "Comply with regulations"
        ],
        relatedProjects: [],
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop",
        color: "from-emerald-500 to-green-500"
    }
};

const ServiceDetail = () => {
    const { id } = useParams<{ id: string }>();
    const service = id ? servicesData[id as keyof typeof servicesData] : null;

    // Redirect to services page if service not found
    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <div className="pt-20 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Background Image */}
                <div className="absolute inset-0 opacity-20">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <AnimatedSection animation="fadeInUp" delay={0.2}>
                        <Link
                            to="/services"
                            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Services
                        </Link>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content Section */}
                        <AnimatedSection animation="fadeInLeft" delay={0.3}>
                            <div className="flex flex-col items-start gap-6">
                                <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}>
                                    {service.icon}
                                </div>
                                <div>
                                    <p className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-2">
                                        {service.subtitle}
                                    </p>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                                        {service.title}
                                    </h1>
                                    <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                                <Link
                                    to="/get-consultation"
                                    className="mt-4 inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 rounded-xl font-bold text-sm uppercase tracking-widest transition-all shadow-lg shadow-amber-500/25"
                                >
                                    Get Consultation <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </AnimatedSection>

                        {/* Image Section */}
                        <AnimatedSection animation="fadeInRight" delay={0.4}>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full aspect-video object-cover"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`}></div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <AnimatedSection animation="fadeInLeft" delay={0.2}>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                    What We Offer
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    {service.longDescription}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {service.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                                            <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm font-medium text-slate-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fadeInRight" delay={0.3}>
                            <div className="bg-slate-900 rounded-3xl p-8 text-white">
                                <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                                <ul className="space-y-4">
                                    {service.features.map((feature, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-300">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Related Projects Section */}
            {service.relatedProjects.length > 0 && (
                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection animation="fadeInUp" delay={0.2}>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                    Related Projects
                                </h2>
                                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                    See how we've helped businesses succeed with our {service.title.toLowerCase()} services.
                                </p>
                            </div>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                            {service.relatedProjects.map((project, index) => (
                                <AnimatedSection key={index} animation="fadeInUp" delay={0.1 * index}>
                                    <Link
                                        to={project.link}
                                        className="group block bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3"
                                    >
                                        {/* Video/Image Preview Section */}
                                        <div className="relative aspect-video overflow-hidden bg-slate-100">
                                            {project.video ? (
                                                <video
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                    src={project.video}
                                                    muted
                                                    loop
                                                    playsInline
                                                    poster={project.logo}
                                                    onMouseEnter={(e) => e.currentTarget.play()}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.pause();
                                                        e.currentTarget.currentTime = 0;
                                                    }}
                                                    onTouchStart={(e) => e.currentTarget.play()}
                                                    onTouchEnd={(e) => {
                                                        e.currentTarget.pause();
                                                        e.currentTarget.currentTime = 0;
                                                    }}
                                                />
                                            ) : (
                                                <img
                                                    src={project.logo}
                                                    alt={project.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                            )}
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-4 sm:p-5 lg:p-6">
                                            {/* Logo */}
                                            {project.logo && (
                                                <div className="mb-3 sm:mb-4">
                                                    <img
                                                        src={project.logo}
                                                        alt={`${project.name} Logo`}
                                                        className="h-10 sm:h-12 w-auto object-contain rounded-lg bg-slate-50 p-1"
                                                    />
                                                </div>
                                            )}
                                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2 group-hover:text-amber-500 transition-colors line-clamp-1">
                                                {project.name}
                                            </h3>
                                            <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 line-clamp-2">{project.description}</p>
                                            <span className="inline-flex items-center text-amber-500 font-bold text-xs sm:text-sm uppercase tracking-wide">
                                                View Project <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                                            </span>
                                        </div>
                                    </Link>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="relative py-24 bg-white overflow-hidden">
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection animation="fadeInUp" delay={0.2}>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 font-sans leading-tight">
                            Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Success Story</span> Together
                        </h2>
                        <p className="text-xl mb-10 text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Partner with us to unlock growth opportunities, streamline operations, and achieve your business vision with expert guidance every step of the way.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/get-consultation"
                                className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white rounded-xl font-black uppercase tracking-widest shadow-lg transition-all duration-300"
                            >
                                Get Consultation
                            </Link>
                            <a
                                href="tel:+919253625099"
                                className="bg-slate-100 text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-slate-200 hover:border-slate-300 transition-all duration-300"
                            >
                                Talk to Expert
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
