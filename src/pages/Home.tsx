import React from 'react';
import { ArrowRight, Code2, BrainCircuit, Swords, ArrowUpRight, GitCommit } from 'lucide-react';

const pillars = [
  {
    icon: Code2,
    title: 'Development',
    desc: 'Full-stack, real-time apps built to actually ship.',
    tags: ['React', 'Node.js', 'Socket.io'],
    bg: 'bg-indigo-50',
    text: 'text-indigo-600',
    tagText: 'text-indigo-700',
    border: 'hover:border-indigo-300',
    bar: 'bg-indigo-500',
  },
   {
    icon: BrainCircuit,
    title: 'AI / ML',
    desc: 'Trained CNN-models and shipped them end to end.',
    tags: ['PyTorch', 'LangChain', 'Groq'],
    bg: 'bg-rose-50',
    text: 'text-rose-600',
    tagText: 'text-rose-700',
    border: 'hover:border-rose-300',
    bar: 'bg-rose-500',
  },
  {
    icon: Swords,
    title: 'Problem Solving',
    desc: 'DSA and system design,sharpened through daily practice.',
    tags: ['C++', 'LLD', 'HLD'],
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    tagText: 'text-emerald-700',
    border: 'hover:border-emerald-300',
    bar: 'bg-emerald-500',
  },
];

const commits = [
  { hash: 'a3f9c1e', msg: 'Shipped SyncSpace-real-time whiteboard w/ WebSockets + Groq LLaMA', time: 'this month' },
  { hash: '7d2e88b', msg: 'Built HireReady- AI resume analyzer, React + Tailwind + Python', time: 'this month' },
  { hash: 'e14bf02', msg: 'Trained CNN models for plant disease detection and sleep apnea research.', time: 'last month' },
  { hash: '0c9a1f4', msg: 'Deep-dived Design Patterns : Chain of Responsibility, Proxy & Command patterns', time: 'ongoing' },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Priyanshu Ranjan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Full Stack Developer passionate about creating beautiful, functional web applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.4] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              About Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm a passionate developer with expertise in modern web technologies. I love solving complex problems and creating user-friendly applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-10">
            {/* Signature: terminal card */}
            <div className="lg:col-span-2 bg-slate-900 rounded-2xl overflow-hidden shadow-xl flex flex-col">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-700/60">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-3 font-mono text-xs text-slate-400">about.tsx</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed flex-1">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">priyanshu</span> <span className="text-slate-400">=</span> <span className="text-slate-300">{'{'}</span></p>
                <p className="pl-4"><span className="text-sky-300">role</span><span className="text-slate-400">:</span> <span className="text-amber-300">"Full-Stack Developer"</span><span className="text-slate-400">,</span></p>
                <p className="pl-4"><span className="text-sky-300">focus</span><span className="text-slate-400">:</span> <span className="text-slate-300">[</span><span className="text-amber-300">"React"</span><span className="text-slate-400">,</span> <span className="text-amber-300">"Node.js"</span><span className="text-slate-400">,</span> <span className="text-amber-300">"AI/ML"</span><span className="text-slate-300">]</span><span className="text-slate-400">,</span></p>
                <p className="pl-4"><span className="text-sky-300">building</span><span className="text-slate-400">:</span> <span className="text-amber-300">"SyncSpace"</span><span className="text-slate-400">,</span></p>
                <p className="pl-4"><span className="text-sky-300">status</span><span className="text-slate-400">:</span> <span className="text-emerald-400">"Open to opportunities"</span><span className="text-slate-400 animate-pulse"> ▍</span></p>
                <p><span className="text-slate-300">{'}'}</span><span className="text-slate-400">;</span></p>
              </div>
              <div className="grid grid-cols-2 border-t border-slate-700/60">
                <div className="px-6 py-4 border-r border-slate-700/60">
                  <p className="text-2xl font-bold text-white">8.12</p>
                  <p className="text-xs text-slate-400 mt-0.5">CGPA</p>
                </div>
                <div className="px-6 py-4">
                  <p className="text-2xl font-bold text-white">2027</p>
                  <p className="text-xs text-slate-400 mt-0.5">Graduating</p>
                </div>
              </div>
            </div>

            {/* Pillars */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {pillars.map(({ icon: Icon, title, desc, tags, bg, text, tagText, border, bar }) => (
                <div
                  key={title}
                  className={`group relative bg-white rounded-2xl p-6 border border-gray-200 ${border} hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg`}
                >
                  <div className={`absolute top-0 left-6 right-6 h-0.5 ${bar} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
                  <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-5 w-5 ${text}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-mono px-2 py-0.5 rounded-md ${bg} ${tagText}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent activity: commit log */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-12">
            <div className="flex items-center gap-2 px-6 py-3.5 border-b border-gray-100 bg-gray-50/60">
              <GitCommit className="h-4 w-4 text-gray-400" />
              <span className="font-mono text-xs font-medium text-gray-500 tracking-wide">recent commits</span>
            </div>
            <ul>
              {commits.map(({ hash, msg, time }, i) => (
                <li
                  key={hash}
                  className={`flex items-center gap-4 px-6 py-3.5 ${i !== commits.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <span className="hidden sm:inline-block font-mono text-xs text-gray-400 shrink-0">{hash}</span>
                  <span className="text-sm text-gray-700 flex-1">{msg}</span>
                  <span className="text-xs text-gray-400 shrink-0">{time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <a
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:text-indigo-600 transition-colors"
            >
              See what I've built <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;