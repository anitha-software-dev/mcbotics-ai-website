import React from 'react';

const SectionHeader = ({ text, icon: Icon, className = "" }) => {
  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-[#0a0a0a] text-[11px] font-medium tracking-widest text-white/80 uppercase mb-6 shadow-sm ${className}`}>
      {Icon && <Icon size={12} className="text-white/60" />}
      {text}
    </div>
  );
};

export default SectionHeader;
