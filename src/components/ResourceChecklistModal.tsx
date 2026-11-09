"use client";

import React, { useState, useEffect } from "react";
import { X, Check, Copy, CheckSquare, Printer, Info } from "lucide-react";
import { PATIENT_RESOURCES } from "@/data/hospitalData";

interface ResourceChecklistModalProps {
  resourceId: string | null;
  onClose: () => void;
}

export function ResourceChecklistModal({
  resourceId,
  onClose,
}: ResourceChecklistModalProps) {
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && resourceId) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [resourceId, onClose]);

  if (!resourceId) return null;

  const currentResource =
    PATIENT_RESOURCES.find((r) => r.id === resourceId) || PATIENT_RESOURCES[0];

  const toggleCheck = (idx: number) => {
    setCheckedMap((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const copyToClipboard = () => {
    const text = [
      `Hajira Hospital - ${currentResource.title}`,
      `Visit Guide Checklist:`,
      ...currentResource.items.map((item, idx) => `[${checkedMap[idx] ? "✓" : " "}] ${item}`),
      `\nHajira Hospital (Regd. No. CMO/CE/269) · Near J&K Bank/Petrol Pump, Kanispora – Baramulla\nPh: 01952-452973 · Cell: +91 9186022619 · Email: shafkatlone786@gmail.com\nPolicy: Valid for two visits, within 14 days`,
    ].join("\n");

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const printChecklist = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#FAF8F5] border border-[#E4DFD5] rounded-3xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#FAF8F5] border-b border-[#ECE7DE] px-6 py-4 flex items-center justify-between z-10">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#63746C] font-semibold">
              Patient Preparation Checklist
            </span>
            <h3 className="font-editorial text-2xl text-[#18231E] font-medium leading-tight">
              {currentResource.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#EAE5DB] hover:bg-[#DDD6C9] flex items-center justify-center text-[#18231E] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm text-[#55635C] leading-relaxed">
            {currentResource.summary} Tick off items as you pack or complete them before leaving home.
          </p>

          <div className="space-y-3">
            {currentResource.items.map((item, idx) => {
              const isChecked = !!checkedMap[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                    isChecked
                      ? "bg-[#EAEFEA] border-[#1C382B]/40 text-[#1C382B]"
                      : "bg-white border-[#E5E0D5] text-[#22332A] hover:border-[#1C382B]/30"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isChecked
                        ? "bg-[#1C382B] border-[#1C382B] text-white"
                        : "bg-white border-[#C8C2B6]"
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span
                    className={`text-xs sm:text-sm leading-snug font-normal ${
                      isChecked ? "line-through opacity-75" : ""
                    }`}
                  >
                    {item}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-[#EFECE6] border border-[#E1DBD0] flex items-start gap-3 text-xs text-[#52635B]">
            <Info className="w-4 h-4 text-[#1C382B] shrink-0 mt-0.5" />
            <span>
              If you’re taking any prescription drugs, you can simply bring your prescription bottles in a bag — our nurse will record them for you.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-[#FAF8F5] border-t border-[#ECE7DE] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#18231E] bg-white border border-[#D5CFBF] hover:bg-[#F3EFE9] px-3.5 py-2 rounded-full transition-colors"
            >
              <Copy className="w-3.5 h-3.5 text-[#1C382B]" />
              <span>{copied ? "Copied!" : "Copy list"}</span>
            </button>
            <button
              onClick={printChecklist}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#18231E] bg-white border border-[#D5CFBF] hover:bg-[#F3EFE9] px-3.5 py-2 rounded-full transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-[#1C382B]" />
              <span>Print</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="bg-[#1C382B] text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-[#12281E] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
