import { useState, useEffect } from "react";
import { toast } from "sonner";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  Download,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Palette,
  Server,
  Database,
  Monitor,
  Smartphone,
  Calendar,
  MapPin,
  Building,
  Award,
  ChevronRight,
  Star,
  Eye,
  Heart,
  MessageCircle,
  Users,
  Coffee,
  Clock,
  Briefcase,
  ArrowUp,
  Phone,
  Cpu,
  FlaskConical,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { ThemeToggle } from "@/components/theme-toggle";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());
  const [expandedExperiences, setExpandedExperiences] = useState<Set<string>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCVDropdown, setShowCVDropdown] = useState(false);
  const [showNavCVDropdown, setShowNavCVDropdown] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const downloadFile = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open(url, '_blank');
    }
  };

  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "temp",
        "certifications",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const techCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      color: "from-blue-500 to-purple-600",
      technologies: [
        { name: "React", icon: "⚛️", experience: "Expert" },
        { name: "Next.js", icon: "▲", experience: "Advanced" },
        { name: "TypeScript", icon: "🔷", experience: "Expert" },
        { name: "Tailwind CSS", icon: "💨", experience: "Expert" },
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      color: "from-green-500 to-emerald-600",
      technologies: [
        { name: "Node.js", icon: "🟢", level: 85 },
        { name: "Express", icon: "", level: 82 },
        { name: "Python", icon: "🐍", level: 80 },
        { name: "GraphQL", icon: "📊", level: 75 },
      ],
    },
    {
      title: "Database & Cloud",
      icon: "☁️",
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: "MongoDB", icon: "🍃", experience: "Advanced" },
        { name: "PostgreSQL", icon: "🐘", experience: "Advanced" },
        { name: "AWS", icon: "🌐", experience: "Intermediate" },
        { name: "Firebase", icon: "🔥", experience: "Advanced" },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: "️",
      color: "from-purple-500 to-pink-600",
      technologies: [
        { name: "Git", icon: "🐙", experience: "Expert" },
        { name: "Docker", icon: "🐳", experience: "Intermediate" },
        { name: "Figma", icon: "🎨", experience: "Advanced" },
        { name: "VS Code", icon: "💻", experience: "Expert" },
      ],
    },
    {
      title: "Computer Vision",
      icon: "️",
      color: "from-cyan-500 to-blue-600",
      technologies: [
        { name: "OpenCV", icon: "", experience: "Advanced" },
        { name: "TensorFlow", icon: "🧠", experience: "Intermediate" },
        { name: "PyTorch", icon: "🔥", experience: "Intermediate" },
        { name: "YOLO", icon: "⚡", experience: "Beginner" },
      ],
    },
    {
      title: "Advanced Databases",
      icon: "🗄️",
      color: "from-indigo-500 to-purple-600",
      technologies: [
        { name: "Redis", icon: "⚡", experience: "Advanced" },
        { name: "Elasticsearch", icon: "🔍", experience: "Intermediate" },
        { name: "Neo4j", icon: "🕸️", experience: "Beginner" },
        { name: "Apache Kafka", icon: "📡", experience: "Beginner" },
      ],
    },
  ];

  const experiences = [
    {
      title: "Generative AI Developer",
      company: "Siryos|SFBT",
      location: "centre urbain nord , Onsite",
      period: "Aout 2024 - Sep 2024",
      description:
        "Developed a RAG pipeline to process French-language JSON datasets, delivering precise, context-aware query responses.",
      achievements: [
        "Developed a RAG pipeline to process French-language JSON datasets, building LangChain Document objects and delivering precise, context-aware query responses via a retrieval chain.",
        "Integrated FAISS dense retrieval with a BM25 sparse retriever and combined them using LangChain's EnsembleRetriever (custom weighting) to enable optimized hybrid search.",
        "Utilized Google Gemini (via langchain_google_genai) as the LLM and GoogleGenerativeAIEmbeddings for vectorization, linking generation and embedding for consistent responses.",
        "Implemented FAISS index persistence and recovery logic with fallbacks , ensuring reliable save/load of the vector store.",
        "Designed a prompt-driven combine-docs chain  and integrated ConversationBufferMemory for improved multi-turn context handling.",
        "Built robust data ingestion, validation and error-handling routines to ensure scalable, reliable indexing and query processing.",
      ],
      technologies: ["Python", "NumPy", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering", "LangChain", "Google Gemini (LLM)", "Google Generative AI Embeddings", "FAISS (vector search, index persistence)", "BM25Retriever", "Hybrid Search (EnsembleRetriever)", "Scalable Data Processing (JSON datasets)","Vector Database Management", "Error Handling & Logging (production pipelines)", "ConversationBufferMemory", "dotenv (API key management)", "InMemoryDocstore"],
      logo: "/logo/siryos.png",
    },
    {
      title: " Generative AI Developer",
      company: "NAVITRENDS",
      location: "Ariana - Tunisia, Onsite",
      period: "01/07/2024 – 01/08/2024",
      description:
        "Project: Development of an Autonomous Intelligent Chatbot",
      achievements: [
        "Local RAG assistant powered by LLMs (Mistral 7B – Llama-CPP)",
        "High-performance backend built with FastAPI, data storage using Redis (asyncio)",
        "Semantic search implemented with Sentence-Transformers and FAISS",
        "RAG system implemented using LangChain and Hugging Face Transformers",
        "Modern frontend using React 18, TypeScript, Tailwind CSS, and Framer Motion animations",
        "Conversation flow structured with decision trees and fuzzy matching",
        "Automatic email alerts via SMTP and deployment as an integrated web widget",
      ],
      technologies: ["FAISS", "Retrieval-Augmented Generation (RAG)", "Llama-CPP", "FastAPI", "Uvicorn", "FuzzyWuzzy", "Redis", "Aiosmtplib", "JSON", "Mistral 7B", "Tailwind CSS", "python", "Radix UI", "Arbres décisionnels", "decision tree", "React", "TypeScript", "Sentence-Transformers", "Langchain", "LLMs", "Huggingface Transformer", "RAG", "LLaMA"],
      logo: "/logo/navitrends.jpg",
    },
    {
      title: "AI Developer Intern",
      company: "ZHINEI INVESTISSEMENT",
      location: "France, Remote",
      period: " 01/05/2024 – 30/07/2024 ",
      description:
        "Created and implemented an AI-enhanced RAG chatbot utilizing FAISS, BM25, LangChain, and LLMs (Google Gemini Flash for content generation, Google Text Embedding for vectorization), fetching data from a Redis database to deliver customized responses to potential clients",
      achievements: [
        "Built automated data collection systems to gather specific data from LinkedIn user profiles and their engagements",
        "Used the LinkedIn API to gather and enhance prospect information, efficiently storing and indexing it with Elasticsearch while pulling customized data from a Redis database",
        "Set up automated tailored email outreach campaigns via SMTP to increase interaction and conversion rates",
        "Merged natural language processing with search methods to enhance prospect evaluation, sorting, and prioritization",
      ],
      technologies: ["Python", "LinkedIn API", "Next.js", "Tailwind CSS", "TypeScript", "LLMs", "Prompt Engineering", "Elasticsearch", "Redis", "Langchain", "FAISS", "Retrieval-Augmented Generation (RAG)", "Google Gemini API", "NLP"],
logo: "/logo/zhzinei investissement.png",
    },
    {
      title: "English and Mathematics Tutor (Volunteer)",
      company: "AIESEC Tunisia",
      location: "Adana-Turquie ,Onsite ",
      period: "juil. 2024 - août 2024",
      description:
        "Facilitated intercultural workshops to enhance language skills through engaging and real-life activities",
      achievements: [
        "Designed and led interactive lessons in English and mathematics, tailored to different learning levels",
        "Provided personalized support and conducted regular assessments to track students' progress",
      ],
      technologies: ["Sustainable Development Goals", "Leadership", "Public speaking"],
      logo: "/logo/aiesec.png",
    },
    {
      title: " DATA SCIENTIST JUNIOR Intern",
      company: "Bank zitouna",
      location: "Manouba -Tunis ,  Hybride",
      period: "01/07/2023 – 01/09/2023",
      description:
        "Project: Bank Fraud Detection using Machine Learning",
      achievements: [
        "Designed a data pipeline for processing and cleaning banking transaction data",
        "Developed and trained machine learning models (Random Forest, XGBoost) to detect fraudulent transactions",
        "Analyzed and evaluated model performance using metrics such as precision, recall, and ROC curve",
        "Visualized results and created a dashboard to monitor fraud cases",
        "Partially automated the decision-making process by integrating AI into the fraud monitoring workflow, improving operational efficiency and responsiveness",
      ],
      technologies: ["Python", "Jupyter Notebook", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Matplotlib", "Seaborn", "Streamlit", "SQL", "Git","Docker"],
      logo: "/logo/banque.jpg",
    },
    
    {
      title: "Member of the Outgoing Global Talent (OGT) Team",
      company: "AIESEC Tunisia",
      location: "Hybride",
      period: "sept. 2023 - sept. 2024",
      description:
        "Spent nearly one year in AIESEC working in the OGT team.",
      achievements: [
        "Reviewed applicant CVs and matched them with relevant international opportunities",
        "Conducted interview calls and preparation sessions with selected candidates",
        "Managed IR (International Relations) calls with AIESEC teams from multiple countries including Turkey, Brazil, Egypt, Romania, India, and more",
        "Acted as a local representative of AIESEC Tunisia, promoting international exchange and maintaining collaboration with global AIESEC entities",
      ],
      technologies: ["Screening & CV Review", "International Relations (IR) call coordination", "Research and identification of global internship opportunities", "Adaptability and flexibility"],
      logo: "/logo/aiesec.png",
    },
    
    
  ];

  const projects = [
    {
      title: "E-commerce Dashboard",
      description:
        "A comprehensive admin dashboard for e-commerce management with real-time analytics and inventory tracking.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/yasmine/ecommerce-dashboard",
      featured: true,
    },
    {
      title: "AI-Powered Task Manager",
      description:
        "Smart task management application with AI suggestions and automated scheduling capabilities.",
      tech: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      demoLink: "https://task-manager-demo.example.com",
      codeLink: "https://github.com/yasmine/ai-task-manager",
      featured: true,
    },
    {
      title: "Real-time Collaboration Tool",
      description:
        "Web application for team collaboration with live editing, video calls, and project management features.",
      tech: ["React", "Socket.io", "WebRTC", "Redis"],
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=300&fit=crop",
      demoLink: "https://collab-tool-demo.example.com",
      codeLink: "https://github.com/yasmine/collaboration-tool",
      featured: false,
    },
    {
      title: "Fitness Tracking Mobile App",
      description:
        "Cross-platform mobile app for fitness tracking with social features and workout recommendations.",
      tech: ["React Native", "Firebase", "Redux", "Expo"],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      demoLink: "https://fitness-app-demo.example.com",
      codeLink: "https://github.com/yasmine/fitness-tracker",
      featured: false,
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleProjectExpansion = (projectTitle: string) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectTitle)) {
        newSet.delete(projectTitle);
      } else {
        newSet.add(projectTitle);
      }
      return newSet;
    });
  };

  const toggleExperienceExpansion = (experienceKey: string) => {
    setExpandedExperiences(prev => {
      const newSet = new Set(prev);
      if (newSet.has(experienceKey)) {
        newSet.delete(experienceKey);
      } else {
        newSet.add(experienceKey);
      }
      return newSet;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message + (data.previewUrl ? ` View email: ${data.previewUrl}` : ''));
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        toast.error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/70 backdrop-blur-xl shadow-2xl border-b border-border/20"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold text-primary"
              whileHover={{ scale: 1.05 }}
            >
              YB
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Projects" },
                { id: "temp", label: "Technologies" },
                { id: "certifications", label: "Certifications" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative transition-colors hover:text-primary ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.button>
              ))}
            </div>

              <div className="flex items-center space-x-3">
                <ThemeToggle />
                <div className="relative inline-block text-left" tabIndex={0} onBlur={() => setShowNavCVDropdown(false)}>
                  <Button
                  variant="outline"
                  size="lg"
                  className="group shadow-lg hover:shadow-xl transition-all"
                  onClick={() => setShowCVDropdown(!showCVDropdown)}
                >
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download CV
                </Button>
                   {showCVDropdown && (
                  <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-card shadow-lg ring-1 ring-border focus:outline-none z-50">
                    <div className="py-1">
                    <a
                      href="/certifications/CV_yasmine_boukraiem_français.pdf"
                      download="CV_yasmine_boukraiem_français.pdf"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent w-full text-left"
                      onClick={() => setShowCVDropdown(false)}
                    >
                      French
                    </a>
                    <a
                      href="/certifications/Cv_yasmine_boukraiem_english.pdf"
                      download="Cv_yasmine_boukraiem_english.pdf"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent w-full text-left"
                      onClick={() => setShowCVDropdown(false)}
                    >
                      English
                    </a>
                    </div>
                  </div>
                )}
                </div>
              </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <motion.div
          className="container mx-auto px-6 py-20"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold leading-tight"
                variants={fadeInUp}
              >
                Hi, I'm <span className="text-primary">Yasmine Boukraiem</span>
              </motion.h1>

              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl lg:text-4xl text-muted-foreground mb-4">
                   AI Developer & Data Scientist
                </h2>
                <motion.div
                  className="flex items-center space-x-2 text-muted-foreground"
                  variants={fadeInUp}
                >
                  
                  
                </motion.div>
              </motion.div>

              <motion.p
                className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
                variants={fadeInUp}
              >
                Seasoned AI Engineer and Data Scientist specializing in cutting-edge machine learning, computer vision, and generative AI solutions. I architect end-to-end intelligent systems leveraging advanced LLMs, RAG pipelines, and scalable cloud infrastructure to deliver transformative business value. With deep expertise in full-stack development and data-driven innovation, I empower organizations to harness AI for strategic advantage and operational excellence.
              </motion.p>

              <motion.div className="flex flex-wrap gap-4" variants={fadeInUp}>
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={scrollToContact}>
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <div className="relative inline-block text-left">
                <Button
                  variant="outline"
                  size="lg"
                  className="group shadow-lg hover:shadow-xl transition-all"
                  onClick={() => setShowCVDropdown(!showCVDropdown)}
                >
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download CV
                </Button>
                {showCVDropdown && (
                  <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-card shadow-lg ring-1 ring-border focus:outline-none z-50">
                    <div className="py-1">
                    <a
                      href="/certifications/CV_yasmine_boukraiem_français.pdf"
                      download="CV_yasmine_boukraiem_français.pdf"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent w-full text-left"
                      onClick={() => setShowCVDropdown(false)}
                    >
                      French
                    </a>
                    <a
                      href="/certifications/Cv_yasmine_boukraiem_english.pdf"
                      download="Cv_yasmine_boukraiem_english.pdf"
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent w-full text-left"
                      onClick={() => setShowCVDropdown(false)}
                    >
                      English
                    </a>
                    </div>
                  </div>
                )}
              </div>
              </motion.div>

              <motion.div className="flex space-x-6 pt-6" variants={fadeInUp}>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => window.open('https://github.com/yasmine-png', '_blank')}
                >
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => window.open('https://www.linkedin.com/in/yasmine-boukraiem-a968022ba', '_blank')}
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-end"
              variants={fadeInUp}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-slate-600/30 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <Avatar className="w-96 h-96 border-4 border-primary/20 relative z-10 shadow-lg">
                  <AvatarImage
                    src="/logo/me.png"
                    alt="Yasmine"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-6xl bg-primary text-white">
                    YB
                  </AvatarFallback>
                </Avatar>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Code className="h-6 w-6" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-slate-600 text-white p-3 rounded-full shadow-lg"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <Palette className="h-6 w-6" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <motion.div
              className="w-20 h-1 bg-primary mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I am a Full Stack AI Developer and Data Scientist, experienced
                in machine learning, deep learning, computer vision, and AI
                system deployment. I build end-to-end intelligent solutions,
                from model training to API integration and frontend deployment.
                Passionate about innovation, I combine strong analytical skills
                with software engineering to deliver impactful AI products.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Full Stack AI Developer",
                  description:
                    "I specialize in building comprehensive AI-powered applications, from intelligent backend systems and machine learning pipelines to responsive, user-centric interfaces that deliver seamless AI experiences.",
                  logo: "/logo/ai.png"
                },
                {
                  title: "Data Scientist",
                  description:
                    "Designing and implementing machine learning and deep learning models to extract insights and build intelligent systems.",
                  logo: "/logo/data sc .png"
                },
                {
                  title: "Data Analyst",
                  description:
                    "Turning data into actionable insights using statistical analysis, data modeling, and visualization — backed by a strong applied mathematics background.",
                  logo: "/logo/data analyst.png"
                },
              ].map((role, index) => (
                <motion.div
                  key={role.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="relative overflow-hidden rounded-lg bg-card border border-border p-6 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-center mb-4">
                      <motion.div
                        className="w-12 h-12 mr-4 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 300,
                          y: {
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                          }
                        }}
                      >
                        <img 
                          src={role.logo} 
                          alt={`${role.title} symbol`} 
                          className="w-10 h-10 object-contain"
                        />
                      </motion.div>
                      <h3 className="font-bold text-lg text-foreground">
                        {role.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Information */}
            <motion.div
              className="bg-card/50 border border-border/50 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-center mb-4">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MapPin className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-muted-foreground">Tunisia</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Mail className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    yboukraiem@gmail.com
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Phone className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    +216 55876375
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
            <motion.div
              className="w-20 h-1 bg-primary mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <motion.div
                className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-slate-600"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              />

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title + exp.company + exp.period}
                    className="relative flex items-start space-x-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <Building className="h-8 w-8 text-white" />
                      )}
                    </motion.div>

                    {/* Experience card */}
                    <motion.div
                      className="flex-1"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="hover:shadow-xl transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-xl text-primary">
                                {exp.title}
                              </CardTitle>
                              <CardDescription className="text-lg font-semibold text-foreground mt-1">
                                {exp.company}
                              </CardDescription>
                              <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <MapPin className="h-4 w-4" />
                                  <span className="text-sm">
                                    {exp.location}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-4 w-4" />
                                  <span className="text-sm">{exp.period}</span>
                                </div>
                              </div>
                            </div>
                            <Badge
                              variant="outline"
                              className="text-primary border-primary/50"
                            >
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            {exp.description}
                          </p>

                          {!expandedExperiences.has(exp.title + exp.company + exp.period) && (
                            <div className="flex justify-center mb-4">
                              <Button
                                variant="default"
                                size="sm"
                                onClick={() => toggleExperienceExpansion(exp.title + exp.company + exp.period)}
                              >
                                Show Key Achievements
                              </Button>
                            </div>
                          )}

                          {expandedExperiences.has(exp.title + exp.company + exp.period) && (
                            <div className="space-y-3 mb-4">
                              <h4 className="font-semibold text-sm">
                                Key Achievements:
                              </h4>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                  <motion.li
                                    key={i}
                                    className="flex items-start space-x-2 text-sm text-muted-foreground"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 + i * 0.1 }}
                                    viewport={{ once: true }}
                                  >
                                    <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{achievement}</span>
                                  </motion.li>
                                ))}
                              </ul>
                              <div className="flex justify-center mt-4">
                                <Button
                                  variant="default"
                                  size="sm"
                                  onClick={() => toggleExperienceExpansion(exp.title + exp.company + exp.period)}
                                >
                                  Hide Key Achievements
                                </Button>
                              </div>
                            </div>
                          )}

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="skills" className="py-20">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Projects</h2>
            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Following projects showcase my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos. It reflects my
              ability to solve complex problems, work with different
              technologies, and manage projects effectively.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "FOD Detection System",
                description:
                  "Airport runway FOD (Foreign Object Debris) detection system - A complete AI solution for detecting and managing foreign objects on landing strips to enhance aviation safety.",
                detailedDescription: `
A comprehensive AI-powered web application combining computer vision, deep learning, and an intuitive user interface for real-time detection of dangerous objects on airport runways.

🔹 Real-time object detection using YOLOv8 (main model) optimized for airport scenarios
🔹 Anomaly detection via Autoencoder for identifying unusual patterns
🔹 Advanced video processing with multi-object tracking (ByteTrack) and frame-by-frame analysis
🔹 Precise segmentation with SAM (Segment Anything Model) for exact object contouring
🔹 ONNX Runtime support for optimized inference and cross-platform compatibility
🔹 Automatic risk assessment based on size and confidence (3 alert levels: High/Medium/Low)
🔹 Analytical dashboard with real-time visualization and result filtering
🔹 Data persistence with MongoDB for historical analysis and reporting
🔹 Alert system with visual and audio notifications for dangerous objects
🔹 Full-stack architecture: React/TypeScript frontend with Tailwind CSS, Flask/Python backend with REST API
🔹 Deployable via Docker, optimized for both CPU and GPU environments`,
                image: "/picture of project/fod.jpg",
                tech: ["React", "TypeScript", "Python", "Flask", "YOLOv8", "SAM", "Autoencoder", "PyTorch", "OpenCV", "MongoDB", "Docker", "ByteTrack", "Tailwind CSS", "Vite", "Supervision", "NumPy", "Pillow", "ONNX Runtime"],
                codeLink: "https://github.com/yasmine-png/foreign-Object-Debris-in-Airports-Detection-",
                demoLink: "https://youtu.be/c9o5ZRv2ySg",
              },
              {
                title: "Chatbot AI Assistant",
                description:
                  "Development of an Autonomous Intelligent Chatbot.",
                detailedDescription: `
Developed and delivered a fully functional autonomous chatbot for Navitrends, a company specializing in software development and digital innovation.
🔹 Built a custom RAG-based assistant using LLMs : Llama-CPP (Mistral 7B local) , and to enable intelligent question-answering on company documents
🔹 Built a high-performance backend with FastAPI
🔹 Redis (redis.asyncio): an in-memory database used to:
 • store conversation history and flow,
 • save contact information,
 • ensure temporary data persistence.
🔹 Implemented automated email notifications using SMTP to send chatbot responses or alerts
🔹 Used Sentence-Transformers and FAISS for semantic search and embedding retrieval
🔹 Designed a modern frontend with React 18 + TypeScript and Tailwind CSS
🔹 Enhanced UI/UX using Radix UI and Framer Motion for accessibility and smooth animations
🔹 Deployed the assistant as a ready-to-integrate widget for the company's website
🔹 Employed fuzzy matching techniques to handle variations and typos in user intents
🔹 Used decision trees to structure conversational flows for guided user interactions`,
                image: "/picture of project/chatbot.png",
                tech: ["FAISS", "Retrieval-Augmented Generation (RAG)", "Llama-CPP", "FastAPI", "Uvicorn", "FuzzyWuzzy", "Redis", "Aiosmtplib", "JSON", "Mistral 7B", "Tailwind CSS", "python", "Radix UI", "Arbres décisionnels", "decision tree", "React", "TypeScript", "Sentence-Transformers", "LLMs", "Huggingface Transformer", "RAG", "LLaMA"],
                codeLink: "https://github.com/yasmine-png/chatbot_navitrends",
                demoLink: "https://youtu.be/3ieAX_VcxW4",
              },
              {
                title: "AI-Powered Tunisian ID Card Data Extraction & Face Verification System",
                description:
                  "I developed an advanced AI-powered Identity Verification System using Django, Hadoop, MongoDB, and state-of-the-art deep learning techniques to deliver secure and automated identity validation.",
                detailedDescription: `

🔍 How it works:
The system starts by automatically extracting key information from identity cards — including the holder's name, surname, ID number, and photo — using YOLOv5 and PaddleOCR with orientation correction (supporting Arabic and other languages). The extracted data is then stored securely in MongoDB.

Next, the user takes a real-time selfie, and the system verifies their identity by comparing the selfie to the photo on the ID card using CompreFace facial recognition.

To prevent spoofing (e.g. using a photo or video), I integrated real-time liveness detection using OpenCV and Dlib, focusing on eye-blink detection to confirm that the user is a live human.
`,
                image: "/picture of project/id_verifiction.png",
                tech: ["Django", "PaddleOCR", "YOLOv5", "makesense.ai", "Dlib", "OpenCV", "CompreFace API", "MongoDB", "Hadoop", "TensorFlow", "PyTorch", "Python", "Scikit-learn", "Djongo", "Docker", "Linux"],
                codeLink: "https://github.com/yasmine/id-verification",
                demoLink: "https://id-verify-demo.example.com",
              },
              {
                title: "Prospect Analysis Tool",
                description:
                  "Developed and integrated an AI-powered RAG-based chatbot using FAISS, BM25, LangChain, and LLMs (Google Gemini Flash for generation, Google Text Embedding for vectorization), retrieving information from a Redis database and responding with personalized insights to prospects",
                detailedDescription: `
🔹 Designed automated scraping pipelines to extract targeted information from LinkedIn profiles and user interactions
🔹 Leveraged the LinkedIn API to collect and enrich lead data, storing and indexing it efficiently using Elasticsearch and retrieving personalized information from a Redis database
🔹 Automated personalized email prospecting campaigns through SMTP, enhancing engagement and conversion rates
🔹 Combined natural language processing and search technologies to improve lead scoring, filtering, and relevance ranking
`,
                image: "/picture of project/prospect.png",
                tech: ["Python", "LinkedIn API", "Next.js", "Tailwind CSS", "TypeScript", "LLMs", "Prompt Engineering", "Elasticsearch", "Redis", "Langchain", "FAISS", "Retrieval-Augmented Generation (RAG)", "Google Gemini API", "NLP"],
                codeLink: "https://github.com/yasmine/prospect-analyzer",
                demoLink: "https://prospect-demo.example.com",
              },
              {
                title: "Web Developer / Creator of the Jass Flash e-commerce site",
                description:
                  "I developed a professional e-commerce site for an online parapharmacy dedicated to selling skin, body, and hair care products under the imaginary brand Jass Flash.",
                detailedDescription: `
This project offers an intuitive user experience, with:
• Product management: detailed display, sorting and adding to cart (products like niacinamide ampoules, azelaic acid, salicylic acid, zinc, etc.).
• Responsive and ergonomic design, adapted to different devices.
• Robust back-end for order and user management.`,
                image: "/picture of project/jassflash.png",
                tech: ["HTML", "CSS", "JavaScript", "Spring Boot", "Java", "MySQL", "XAMPP", "Visual Studio Code"],
                codeLink: "https://github.com/yasmine/jassflash",
                demoLink: "https://jassflash-demo.example.com",
              },
            ]
              .slice(0, showAllProjects ? undefined : 3)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/30 bg-card/80 backdrop-blur-sm">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-3 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className={`text-muted-foreground text-sm mb-4 leading-relaxed ${project.title === "AI-Powered Tunisian ID Card Data Extraction & Face Verification System" || project.title === "Prospect Analysis Tool" || project.title === "FOD Detection System" ? "" : "line-clamp-3"}`}>
                        {project.description}
                      </p>

                      {project.title === "Chatbot AI Assistant" && expandedProjects.has(project.title) && (
                        <div className="text-sm text-muted-foreground whitespace-pre-line mb-4">
                          {project.detailedDescription}
                        </div>
                      )}

                      {project.title === "Chatbot AI Assistant" && (
                        <div className="flex justify-center mb-4">
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => toggleProjectExpansion(project.title)}
                          >
                            {expandedProjects.has(project.title) ? "Show Less Details" : "Show More Details"}
                          </Button>
                        </div>
                      )}

                      {project.title === "AI-Powered Tunisian ID Card Data Extraction & Face Verification System" && expandedProjects.has(project.title) && (
                        <div className="text-sm text-muted-foreground whitespace-pre-line mb-4">
                          {project.detailedDescription}
                        </div>
                      )}

                      {project.title === "AI-Powered Tunisian ID Card Data Extraction & Face Verification System" && (
                        <div className="flex justify-center mb-4">
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => toggleProjectExpansion(project.title)}
                          >
                            {expandedProjects.has(project.title) ? "Show Less Details" : "Show More Details"}
                          </Button>
                        </div>
                      )}

                      {project.title === "Prospect Analysis Tool" && expandedProjects.has(project.title) && (
                        <div className="text-sm text-muted-foreground whitespace-pre-line mb-4">
                          {project.detailedDescription}
                        </div>
                      )}

                      {project.title === "Prospect Analysis Tool" && (
                        <div className="flex justify-center mb-4">
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => toggleProjectExpansion(project.title)}
                          >
                            {expandedProjects.has(project.title) ? "Show Less Details" : "Show More Details"}
                          </Button>
                        </div>
                      )}

                      {project.title === "Web Developer / Creator of the Jass Flash e-commerce site" && expandedProjects.has(project.title) && (
                        <div className="text-sm text-muted-foreground whitespace-pre-line mb-4">
                          {project.detailedDescription}
                        </div>
                      )}

                      {project.title === "Web Developer / Creator of the Jass Flash e-commerce site" && (
                        <div className="flex justify-center mb-4">
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => toggleProjectExpansion(project.title)}
                          >
                            {expandedProjects.has(project.title) ? "Show Less Details" : "Show More Details"}
                          </Button>
                        </div>
                      )}

                      {project.title === "FOD Detection System" && expandedProjects.has(project.title) && (
                        <div className="text-sm text-muted-foreground whitespace-pre-line mb-4">
                          {project.detailedDescription}
                        </div>
                      )}

                      {project.title === "FOD Detection System" && (
                        <div className="flex justify-center mb-4">
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => toggleProjectExpansion(project.title)}
                          >
                            {expandedProjects.has(project.title) ? "Show Less Details" : "Show More Details"}
                          </Button>
                        </div>
                      )}

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs px-2 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 text-xs"
                          onClick={() =>
                            window.open(project.codeLink, "_blank")
                          }
                        >
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 text-xs"
                          onClick={() =>
                            window.open(project.demoLink, "_blank")
                          }
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>

          {/* Show More Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              className="group"
              onClick={() => setShowAllProjects(!showAllProjects)}
            >
              {showAllProjects ? "Show Less" : "Show More"}
              <ChevronRight
                className={`h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform ${showAllProjects ? "rotate-90" : ""}`}
              />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Technologies Section */}
      <section id="temp" className="py-20 bg-muted/30">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Technologies I Use</h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: "AI & Machine Learning",
                  icon: <img src="/logo/machine-learning (1).png" alt="AI & Machine Learning" className="h-6 w-6 rounded" />,
                  description: "Advanced tools and frameworks for artificial intelligence and machine learning development.",
                  technologies: [
                    "LangChain",
                    "FAISS",
                    "Google Gemini",
                    "Mistral 7B",
                    "Llama-CPP",
                    "Sentence-Transformers",
                    "Huggingface Transformer",
                    "TensorFlow",
                    "PyTorch",
                    "Scikit-learn",
                    "XGBoost",
                    "spaCy NLP",
                    "Retrieval-Augmented Generation (RAG)",
                    "RAG",
                    "Prompt Engineering",
                    "LLMs",
                    "NLP",
                    "Clustering",
                  ],
                },
                {
                  category: "Data Science & Analytics",
                  icon: <img src="/logo/data-science.png" alt="Data Science & Analytics" className="h-6 w-6 rounded" />,
                  description: "Tools for data analysis, visualization, and statistical modeling.",
                  technologies: [
                    "Python",
                    "NumPy",
                    "Pandas",
                    "Matplotlib",
                    "Seaborn",
                    "Jupyter Notebook",
                    "Streamlit",
                    "SQL",
                    "Scikit-learn",
                    "XGBoost",
                  ],
                },
                {
                  category: "Computer Vision",
                  icon: <img src="/logo/ai-vision.png" alt="Computer Vision" className="h-6 w-6 rounded" />,
                  description: "Libraries and frameworks for computer vision and image processing.",
                  technologies: [
                    "OpenCV",
                    "TensorFlow",
                    "PyTorch",
                    "YOLO",
                    "OCR",
                    "Dlib",
                    "PaddleOCR",
                    "YOLOv5",
                    "CompreFace API",
                  ],
                },
                {
                  category: "Full Stack Development",
                  icon: <img src="/logo/full stack development.png" alt="Full Stack Development" className="h-6 w-6 rounded" />,
                  description: "Technologies for building full-stack web applications.",
                  technologies: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "Express",
                    "FastAPI",
                    "Flask",
                    "Tailwind CSS",
                    "Radix UI",
                    "PostgreSQL",
                    "MongoDB",
                    "Supabase",
                    "Firebase",
                    "aiohttp",
                    "Uvicorn",
                    "Django",
                    "Djongo",
                  ],
                },
                {
                  category: "Database & Cloud",
                  icon: <img src="/logo/databases.png" alt="Database & Cloud" className="h-6 w-6 rounded" />,
                  description: "Database systems and cloud technologies for data storage and management.",
                  technologies: [
                    "MongoDB",
                    "PostgreSQL",
                    "Supabase",
                    "Firebase",
                    "Redis",
                    "Elasticsearch",
                    "Hadoop",
                    "Spark",
                    "Kafka",
                  ],
                },
                {
                  category: "Tools & Workflow",
                  icon: <img src="/logo/workflow.png" alt="Tools & Workflow" className="h-6 w-6 rounded" />,
                  description: "Essential tools and workflows for development and automation.",
                  technologies: [
                    "Git",
                    "Docker",
                    "Selenium",
                    "LinkedIn API",
                    "SMTP",
                    "Aiosmtplib",
                    "FuzzyWuzzy",
                    "dotenv",
                    "Linux",
                    "JSON",
                  ],
                },
              ].map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 bg-card/90 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          {category.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{category.category}</CardTitle>
                          <CardDescription className="text-sm">{category.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-1">
                        {category.technologies.map((tech) => (
                          <div key={tech} className="text-xs text-muted-foreground bg-gradient-to-r from-primary/20 to-secondary/20 px-2 py-1 rounded-md border border-primary/30">
                            {tech}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-muted/30">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Certifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 max-w-md mx-auto justify-center">
            {[
              {
                title: "aiesec of turkey",
                issuer: "Global volunteer",
                image: "/logo/certification.png",
                logo: "/logo/aiesec.png",
                link: "/certifications/certification1.pdf",
              },
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/30 bg-card/80 backdrop-blur-sm hover:-translate-y-1">
                  {/* Certificate Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  <CardContent className="p-6">
                    {/* Organization Info */}
                    <div className="flex items-center space-x-3 mb-4">
                      <img
                        src={cert.logo}
                        alt={`${cert.issuer} logo`}
                        className="w-10 h-10 rounded-lg"
                      />
                      <div>
                        <h4 className="font-semibold text-sm">{cert.issuer}</h4>
                        <p className="text-xs text-muted-foreground">
                          {cert.title}
                        </p>
                      </div>
                    </div>

                    {/* View Certificate Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group/btn"
                      onClick={() => window.open(cert.link, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:animate-bounce" />
                      View Certificate
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas
              to life!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="p-8 backdrop-blur-sm bg-card/60 border-border/30 shadow-xl">
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">
                        yboukraiem@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground">Tunisia</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Coffee className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Let's Chat</p>
                      <p className="text-muted-foreground">
                        Available for coffee chats
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 backdrop-blur-sm bg-card/60 border-border/30 shadow-xl">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        First Name
                      </label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        className="bg-background/50"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Last Name
                      </label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className="bg-background/50"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                      placeholder="yboukraiem@gmail.com"
                      className="bg-background/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Discussion"
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-background/50"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group shadow-lg hover:shadow-xl transition-all"
                    disabled={isSubmitting}
                  >
                    <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/30 bg-card/30 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2024 Yasmine Boukraiem. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="hover:text-primary hover:scale-110 transition-all"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:text-primary hover:scale-110 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      <motion.button
        className={`fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 ${
          isScrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isScrolled ? 1 : 0,
          y: isScrolled ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp className="h-5 w-5 mx-auto" />
      </motion.button>
    </div>
  );
};

export default Portfolio;
