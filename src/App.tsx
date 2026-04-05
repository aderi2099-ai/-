import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Menu, 
  X, 
  Zap, 
  ShieldCheck, 
  Navigation, 
  Leaf, 
  Cpu, 
  Settings,
  Activity,
  BarChart3, 
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Send,
  Target,
  Lightbulb,
  Users,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';
import { translations } from './translations';

export default function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'zh' ? 'en' : 'zh');

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'policy', label: t.nav.policy },
    { id: 'tech', label: t.nav.tech },
    { id: 'solutions', label: t.nav.solutions },
    { id: 'news', label: t.nav.news },
    { id: 'cases', label: t.nav.cases },
    { id: 'culture', label: t.nav.culture },
    { id: 'smart', label: t.nav.smart },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">H</div>
            <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-primary' : 'text-white'}`}>
              {lang === 'zh' ? '洪范节能' : 'Hongfan Tech'}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className={`text-sm font-medium hover:text-secondary transition-colors ${scrolled ? 'text-slate-700' : 'text-white/90'}`}
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={toggleLang}
              className={`flex items-center gap-2 px-3 py-1 rounded-full border transition-all ${scrolled ? 'border-slate-200 text-slate-700 hover:bg-slate-50' : 'border-white/30 text-white hover:bg-white/10'}`}
            >
              <Globe size={14} />
              <span className="text-xs font-semibold uppercase">{lang === 'zh' ? 'EN' : '中文'}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(true)}>
            <Menu className={scrolled ? 'text-primary' : 'text-white'} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">H</div>
                  <span className="font-bold text-lg text-primary tracking-tight">AIS</span>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full bg-slate-100 text-slate-600"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-4 overflow-y-auto">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-bold text-slate-800 hover:text-secondary transition-colors flex items-center justify-between py-2 border-b border-slate-50"
                  >
                    {item.label}
                    <ChevronRight size={18} className="text-slate-300" />
                  </a>
                ))}
              </nav>
              <div className="mt-auto pt-8">
                <button
                  onClick={() => {
                    toggleLang();
                    setIsMenuOpen(false);
                  }}
                  className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold flex items-center justify-center gap-3"
                >
                  <Globe size={20} />
                  {lang === 'zh' ? 'Switch to English' : '切换至中文'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] md:h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000" 
            alt="City Night" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6">
              <Leaf size={14} className="text-green-400" />
              {lang === 'zh' ? '绿色环保 · 科技赋能' : 'Eco-Friendly · Tech-Driven'}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 md:mb-8">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#about" className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 group text-center">
                {t.hero.cta}
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#cases" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 rounded-full font-bold transition-all text-center">
                {t.nav.cases}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-8 left-6 right-6 md:bottom-12 md:right-12 flex md:flex-row justify-between md:justify-end gap-8 md:gap-12 text-white">
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-bold">75%</span>
            <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest">{lang === 'zh' ? '最高节电率' : 'Max Energy Saving'}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-bold">100+</span>
            <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest">{lang === 'zh' ? '核心技术专利' : 'Core Patents'}</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h2 className="text-xs md:text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">{t.nav.about}</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8 leading-tight">{t.about.title}</h3>
              <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
                {t.about.content}
              </p>
              <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed font-medium italic border-l-4 md:border-l-4 border-secondary pl-6 text-left">
                {t.about.vision}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-left">
                <div className="p-5 md:p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <Cpu className="text-secondary mb-3 md:mb-4 mx-auto md:mx-0" size={28} />
                  <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base">{lang === 'zh' ? '自主研发' : 'In-house R&D'}</h4>
                  <p className="text-xs md:text-sm text-slate-500">{lang === 'zh' ? '掌握核心LED散热技术' : 'Mastering core LED cooling tech'}</p>
                </div>
                <div className="p-5 md:p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <BarChart3 className="text-secondary mb-3 md:mb-4 mx-auto md:mx-0" size={28} />
                  <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base">{lang === 'zh' ? '卓越效能' : 'High Efficiency'}</h4>
                  <p className="text-xs md:text-sm text-slate-500">{lang === 'zh' ? '大幅降低城市运营成本' : 'Significantly reduce urban costs'}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative mt-8 md:mt-0"
            >
              <div className="aspect-square rounded-[2rem] md:rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1000" 
                  alt="New York City View" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 glass p-6 md:p-8 rounded-2xl shadow-xl hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500 flex items-center justify-center text-white">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider">{lang === 'zh' ? '行业认证' : 'Industry Certified'}</p>
                    <p className="font-bold text-slate-800 text-sm md:text-base">ISO 9001 / ISO 14001</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Policy Section */}
      <section id="policy" className="py-16 md:py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-xs md:text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">{t.nav.policy}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t.policy.title}</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-primary">{t.policy.peakCarbon.title}</h4>
                    <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">{t.policy.peakCarbon.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed italic">
                  {t.policy.peakCarbon.content}
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-50 flex justify-between items-end">
                <span className="text-4xl md:text-5xl font-black text-primary/10">2030</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-primary">{t.policy.carbonNeutrality.title}</h4>
                    <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">{t.policy.carbonNeutrality.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed italic">
                  {t.policy.carbonNeutrality.content}
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-50 flex justify-between items-end">
                <span className="text-4xl md:text-5xl font-black text-secondary/10">2060</span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-primary p-8 md:p-20 text-white"
          >
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 md:opacity-20 pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1518173946687-a4c8a9b749f5?auto=format&fit=crop&q=80&w=1000" 
                alt="Green Tech" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h4 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">{t.policy.support.title}</h4>
              <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 md:mb-10">
                {t.policy.support.content}
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <div className="px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs md:text-sm font-bold">
                  {lang === 'zh' ? '合同能源管理' : 'EMC'}
                </div>
                <div className="px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs md:text-sm font-bold">
                  {lang === 'zh' ? '节能诊断' : 'Energy Diagnosis'}
                </div>
                <div className="px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs md:text-sm font-bold">
                  {lang === 'zh' ? '全周期服务' : 'Full Lifecycle Service'}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Section */}
      <section id="tech" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">{t.nav.tech}</h2>
            <h3 className="text-4xl font-bold text-primary mb-6">{t.tech.title}</h3>
            <p className="text-slate-600">{lang === 'zh' ? '领先的科技解决方案，确保城市照明改造的高效与平稳。' : 'Leading tech solutions ensuring efficient and smooth urban lighting renovation.'}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: t.tech.item1.title, desc: t.tech.item1.desc },
              { icon: ShieldCheck, title: t.tech.item2.title, desc: t.tech.item2.desc },
              { icon: Navigation, title: t.tech.item3.title, desc: t.tech.item3.desc },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-secondary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-secondary blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h2 className="text-xs md:text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">{t.solutions.title}</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">{t.solutions.emcTitle}</h3>
              <p className="text-lg md:text-xl text-white/70 mb-8 md:mb-10 leading-relaxed">
                {t.solutions.emcDesc}
              </p>
              <div className="space-y-6 text-left">
                {[
                  { label: lang === 'zh' ? '零投入' : 'Zero Investment', desc: lang === 'zh' ? '用能单位无需承担改造资金' : 'Users bear no renovation costs' },
                  { label: lang === 'zh' ? '零风险' : 'Zero Risk', desc: lang === 'zh' ? '技术与运营风险由我司承担' : 'We bear technical & operational risks' },
                  { label: lang === 'zh' ? '高收益' : 'High Return', desc: lang === 'zh' ? '分享节能效益，实现双赢' : 'Share energy savings for win-win' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center mt-1">
                      <ChevronRight size={14} className="text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-base md:text-lg">{item.label}</h5>
                      <p className="text-sm md:text-base text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20"
            >
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Leaf className="text-secondary" />
                {lang === 'zh' ? '模式优势' : 'Model Advantages'}
              </h4>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                {t.solutions.advantage}
              </p>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-sm text-white/50 mb-2 uppercase tracking-widest">{lang === 'zh' ? '合作期限' : 'Contract Period'}</p>
                <p className="text-3xl font-bold">12 {lang === 'zh' ? '年' : 'Years'}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">{t.nav.news}</h2>
            <h3 className="text-4xl font-bold text-primary mb-6">{t.news.title}</h3>
            <p className="text-slate-600">{t.news.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800", 
                title: t.news.item1.title, 
                date: t.news.item1.date, 
                desc: t.news.item1.desc 
              },
              { 
                img: "https://images.unsplash.com/photo-1541447271487-09612b3f49f7?auto=format&fit=crop&q=80&w=800", 
                title: t.news.item2.title, 
                date: t.news.item2.date, 
                desc: t.news.item2.desc 
              },
              { 
                img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800", 
                title: t.news.item3.title, 
                date: t.news.item3.date, 
                desc: t.news.item3.desc 
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt="News" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-primary uppercase tracking-widest">
                    {lang === 'zh' ? '中标喜讯' : 'Bidding Win'}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-secondary mb-3">{item.date}</span>
                  <h4 className="text-xl font-bold text-primary mb-4 line-clamp-2 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-6">
                    {item.desc}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm">
                    {lang === 'zh' ? '阅读全文' : 'Read More'}
                    <ChevronRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-xs md:text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">{t.nav.cases}</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary">{t.cases.title}</h3>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <div className="px-6 py-3 rounded-full bg-slate-50 border border-slate-100 text-slate-600 font-medium text-sm md:text-base">
                {lang === 'zh' ? '全部案例' : 'All Cases'}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                img: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=1000", 
                title: t.cases.airport, 
                desc: t.cases.airportDesc 
              },
              { 
                img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1000", 
                title: t.cases.yiliang, 
                desc: t.cases.yiliangDesc 
              },
              { 
                img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000", 
                title: t.cases.shiping, 
                desc: t.cases.shipingDesc 
              },
              { 
                img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1000", 
                title: t.cases.eshan, 
                desc: t.cases.eshanDesc 
              },
              { 
                img: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&q=80&w=1000", 
                title: t.cases.zaozhuang, 
                desc: t.cases.zaozhuangDesc 
              },
              { 
                img: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=1000", 
                title: t.cases.other, 
                desc: t.cases.otherDesc 
              },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-6">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white/80 text-sm">{item.desc}</p>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{item.title}</h4>
                <p className="text-slate-500 text-sm line-clamp-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-16 md:py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-xs md:text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">{t.nav.culture}</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">{t.culture.title}</h3>
            <p className="text-sm md:text-base text-white/60">{t.culture.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] md:aspect-auto"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Team Culture" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-12">
              {t.culture.items.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group text-center sm:text-left"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-secondary shrink-0">
                      {index === 0 && <Target size={20} />}
                      {index === 1 && <Lightbulb size={20} />}
                      {index === 2 && <Users size={20} />}
                      {index === 3 && <ShieldCheck size={20} />}
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold group-hover:text-secondary transition-colors">
                      {lang === 'zh' ? item.title : item.enTitle}
                    </h4>
                  </div>
                  <p className="text-white/50 text-sm md:text-sm leading-relaxed">
                    {lang === 'zh' ? item.desc : item.enDesc}
                  </p>
                  <div className="w-8 h-1 bg-secondary mt-4 group-hover:w-16 transition-all duration-300 mx-auto sm:mx-0"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Intelligence Section */}
      <section id="smart" className="py-16 md:py-24 bg-slate-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center mb-16 md:mb-20">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <h2 className="text-xs md:text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">{t.nav.smart}</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t.smart.title}</h3>
                <h4 className="text-lg md:text-xl font-bold text-secondary mb-6 md:mb-8">{t.smart.subtitle}</h4>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-8 md:mb-10">
                  {t.smart.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-left">
                  {t.smart.features.map((feature: any, idx: number) => (
                    <div key={idx} className="p-5 md:p-6 bg-white rounded-2xl md:rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-4 mx-auto lg:mx-0">
                        {feature.icon === 'Settings' && <Settings size={20} />}
                        {feature.icon === 'Cpu' && <Cpu size={20} />}
                        {feature.icon === 'Activity' && <Activity size={20} />}
                      </div>
                      <h5 className="font-bold text-primary mb-2 text-sm md:text-base text-center lg:text-left">{feature.title}</h5>
                      <p className="text-[10px] md:text-xs text-slate-400 leading-tight text-center lg:text-left">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 relative mt-8 md:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl aspect-square"
              >
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                  alt="AI Smart City" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-8 md:p-12">
                  <div className="text-white">
                    <p className="text-secondary font-bold mb-1 md:mb-2 text-sm md:text-base">AI Agent Technology</p>
                    <p className="text-[10px] md:text-sm text-white/70">Transforming from "Passive Control" to "Active Perception"</p>
                  </div>
                </div>
              </motion.div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
                <div className="md:w-1/2">
                  <h4 className="text-xl md:text-2xl font-bold mb-6">{t.smart.system.title}</h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {t.smart.system.items.map((item: string, idx: number) => (
                      <span key={idx} className="px-4 py-1.5 md:px-5 md:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] md:text-sm font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:w-1/2 border-l-0 md:border-l border-white/10 pl-0 md:pl-12">
                  <p className="text-sm md:text-base text-white/70 leading-relaxed italic">
                    "{t.smart.vision}"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden grid md:grid-cols-2">
            <div className="p-8 md:p-16 lg:p-20 bg-primary text-white text-center md:text-left">
              <h2 className="text-xs md:text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">{t.nav.contact}</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">{t.contact.title}</h3>
              <p className="text-white/70 mb-10 md:mb-12 text-base md:text-lg">
                {lang === 'zh' ? '如果您对我们的节能方案感兴趣，欢迎随时联系我们。' : 'If you are interested in our energy-saving solutions, please feel free to contact us.'}
              </p>
              <div className="space-y-6 md:space-y-8 text-left">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest mb-1">{t.contactInfo.business}</p>
                    <p className="text-base md:text-xl font-bold">{t.contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest mb-1">{lang === 'zh' ? '邮箱' : 'Email'}</p>
                    <p className="text-base md:text-xl font-bold">{t.contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest mb-1">{lang === 'zh' ? '地址' : 'Address'}</p>
                    <p className="text-sm md:text-lg font-bold leading-tight">{t.contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-16 lg:p-20">
              <form className="space-y-5 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wider">{lang === 'zh' ? '姓名' : 'Name'}</label>
                    <input type="text" className="w-full px-5 py-3 md:px-6 md:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-0 transition-all outline-none text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wider">{lang === 'zh' ? '公司' : 'Company'}</label>
                    <input type="text" className="w-full px-5 py-3 md:px-6 md:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-0 transition-all outline-none text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wider">{lang === 'zh' ? '邮箱' : 'Email'}</label>
                  <input type="email" className="w-full px-5 py-3 md:px-6 md:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-0 transition-all outline-none text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wider">{lang === 'zh' ? '留言' : 'Message'}</label>
                  <textarea rows={4} className="w-full px-5 py-3 md:px-6 md:py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-0 transition-all outline-none resize-none text-sm"></textarea>
                </div>
                <button className="w-full py-4 md:py-5 bg-secondary hover:bg-secondary/90 text-white rounded-xl font-bold text-base md:text-lg transition-all shadow-lg shadow-secondary/20 flex items-center justify-center gap-2">
                  {lang === 'zh' ? '提交咨询' : 'Submit Inquiry'}
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-20">
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6 md:mb-8">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary font-black text-xl">
                  H
                </div>
                <span className="text-xl md:text-2xl font-black tracking-tighter uppercase">Hongfan</span>
              </div>
              <p className="text-sm md:text-base text-white/40 leading-relaxed max-w-xs">
                {lang === 'zh' ? '致力于通过AI技术与创新LED散热方案，打造更智慧、更低碳的城市照明未来。' : 'Dedicated to creating a smarter, low-carbon urban lighting future through AI technology and innovative LED cooling solutions.'}
              </p>
            </div>
            <div>
              <h4 className="text-sm md:text-base font-bold mb-6 md:mb-8 uppercase tracking-widest text-secondary">{lang === 'zh' ? '快速链接' : 'Quick Links'}</h4>
              <ul className="space-y-3 md:space-y-4">
                {navItems.slice(0, 5).map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-sm md:text-base text-white/60 hover:text-secondary transition-colors">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm md:text-base font-bold mb-6 md:mb-8 uppercase tracking-widest text-secondary">{lang === 'zh' ? '更多' : 'More'}</h4>
              <ul className="space-y-3 md:space-y-4">
                {navItems.slice(5).map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-sm md:text-base text-white/60 hover:text-secondary transition-colors">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm md:text-base font-bold mb-6 md:mb-8 uppercase tracking-widest text-secondary">{lang === 'zh' ? '关注我们' : 'Follow Us'}</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                  <Globe size={20} />
                </a>
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                  <Mail size={20} />
                </a>
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-xs md:text-sm text-white/20">
              © 2024 Hongfan Tech. All rights reserved.
            </p>
            <div className="flex gap-6 md:gap-8">
              <a href="#" className="text-xs md:text-sm text-white/20 hover:text-white transition-colors">{lang === 'zh' ? '隐私政策' : 'Privacy Policy'}</a>
              <a href="#" className="text-xs md:text-sm text-white/20 hover:text-white transition-colors">{lang === 'zh' ? '服务条款' : 'Terms of Service'}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
