import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Share2, Clock, Calendar, Bookmark, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { blogs } from '../data/blogs';
import { motion, useScroll, useSpring } from 'framer-motion';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));
  const [readingTime, setReadingTime] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (blog) {
      window.scrollTo(0, 0);
      // Calculate simple reading time: total text / 200 words per minute
      const totalText = blog.content.reduce((acc, sec) => acc + sec.heading + sec.text, "");
      const words = totalText.split(/\s+/).length;
      setReadingTime(Math.ceil(words / 200));
    }
  }, [blog]);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  // Find related blogs (the other ones)
  const relatedBlogs = blogs.filter(b => b.id !== blog.id).slice(0, 3);

  return (
    <div className="bg-background min-h-screen relative">
      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-white z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[70vh] min-h-[400px] md:min-h-[600px] flex items-start md:items-end overflow-hidden pt-32 md:pt-0">
        {/* Background Image with Parallax-like effect */}
        <div className="absolute inset-0 z-0 scale-110">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover opacity-40 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 pb-12 md:pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {/* Back Button */}
            <Link 
              to="/blog" 
              className="group inline-flex items-center gap-2 text-white/50 hover:text-white transition-all mb-6 md:mb-8 text-sm font-medium"
            >
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowLeft size={14} />
              </div>
              Back to all blogs
            </Link>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-3 md:gap-6 mb-6 md:mb-8">
               <div className="flex items-center gap-2 text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                  <Calendar size={14} />
                  {blog.date}
               </div>
               <div className="w-1 h-1 rounded-full bg-white/20" />
               <span className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-black text-white uppercase tracking-tighter">
                 {blog.category}
               </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6 md:mb-8">
              {blog.title}
            </h1>

            <p className="text-lg md:text-2xl text-dim max-w-3xl font-medium leading-relaxed">
              {blog.desc}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 py-12 md:py-20">
          
          {/* Main Content Article */}
          <article className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12 md:space-y-16"
            >
              {blog.content.map((section, idx) => (
                <div key={idx} className="group">
                  <h2 className="text-xl md:text-4xl font-semibold text-white mb-4 md:mb-6 tracking-tight leading-snug">
                    <span className="text-white/20 mr-2 md:mr-4 font-mono text-lg md:text-xl">{String(idx + 1).padStart(2, '0')}</span>
                    {section.heading}
                  </h2>
                  <div className="h-0.5 w-10 md:w-12 bg-white/10 mb-6 md:mb-8 transition-all group-hover:w-20 md:group-hover:w-24 group-hover:bg-white/40" />
                  <p className="text-dim text-base md:text-[21px] leading-[1.7] md:leading-[1.8] font-medium tracking-tight">
                    {section.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </article>

          {/* Related/Next Section Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-8 pb-4 border-b border-white/5">
                  Related News Articles
                </h4>
                <div className="space-y-10">
                  {relatedBlogs.map((rel) => (
                    <Link key={rel.id} to={`/blog/${rel.id}`} className="block group">
                      <div className="aspect-video rounded-2xl overflow-hidden mb-4 border border-white/5 bg-neutral-900">
                        <img 
                          src={rel.image} 
                          className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" 
                          alt={rel.title} 
                        />
                      </div>
                      <h5 className="text-white font-semibold leading-tight group-hover:text-dim transition-colors line-clamp-2">
                        {rel.title}
                      </h5>
                      <span className="text-white/30 text-[11px] font-bold uppercase tracking-widest mt-2 block">
                        {rel.date}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
