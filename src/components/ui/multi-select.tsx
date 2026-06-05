"use client";

import React, { useState, useRef, useEffect } from 'react';
import { X, Check } from 'lucide-react';

interface MultiSelectProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select items...",
  disabled = false
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter(option => 
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter(item => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  const removeOption = (e: React.MouseEvent, option: string) => {
    e.stopPropagation();
    onChange(selected.filter(item => item !== option));
  };

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <div 
        className={`min-h-[46px] w-full bg-black border ${isOpen ? 'border-amber-500/60' : 'border-neutral-700'} rounded-xl px-3 py-2 flex flex-wrap gap-2 items-center cursor-text transition-colors ${disabled ? 'opacity-40 pointer-events-none' : ''}`}
        onClick={() => setIsOpen(true)}
      >
        {selected.map(item => (
          <span key={item} className="bg-neutral-800 text-white text-xs px-2.5 py-1 rounded-md flex items-center gap-1.5 border border-neutral-700">
            {item}
            <button 
              type="button" 
              onClick={(e) => removeOption(e, item)}
              className="text-neutral-400 hover:text-white"
            >
              <X size={12} />
            </button>
          </span>
        ))}
        <input
          type="text"
          className="flex-1 bg-transparent text-white text-sm outline-none min-w-[120px]"
          placeholder={selected.length === 0 ? placeholder : ""}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          disabled={disabled}
        />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 max-h-60 overflow-y-auto bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl z-50 p-2 custom-scrollbar">
          {filteredOptions.length === 0 ? (
            <div className="text-neutral-500 text-sm p-3 text-center">No results found</div>
          ) : (
            filteredOptions.map(option => {
              const isSelected = selected.includes(option);
              return (
                <div 
                  key={option}
                  onClick={() => toggleOption(option)}
                  className={`px-3 py-2 text-sm rounded-lg cursor-pointer flex items-center justify-between transition-colors ${isSelected ? 'bg-amber-500/10 text-amber-500' : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'}`}
                >
                  {option}
                  {isSelected && <Check size={16} />}
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
