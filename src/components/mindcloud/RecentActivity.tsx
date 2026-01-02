"use client";

import { Clock, ExternalLink, FileText, StickyNote } from "lucide-react";
import Link from "next/link";

export function RecentActivity({ items }: { items: any[] }) {
    return (
        <div className="space-y-4">
            {items.map((item, i) => (
                <Link
                    key={i}
                    href={item.href || "#"}
                    className="flex items-start gap-4 p-4 rounded-xl border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all group cursor-pointer"
                >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                        {item.type === 'Resource' && <FileText className="w-5 h-5 text-blue-400" />}
                        {item.type === 'PDF' && <FileText className="w-5 h-5 text-red-400" />}
                        {item.type === 'Note' && <StickyNote className="w-5 h-5 text-amber-400" />}
                        {item.type === 'Link' && <ExternalLink className="w-5 h-5 text-emerald-400" />}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-4 mb-1">
                            <h3 className="font-bold truncate group-hover:text-blue-400 transition-colors">{item.title}</h3>
                            <div className="flex items-center gap-2 shrink-0">
                                <Clock className="w-3 h-3 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground font-mono">{item.date}</span>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-1">{item.desc}</p>
                        <div className="flex gap-2">
                            {item.tags.map((tag: string) => (
                                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-muted-foreground border border-white/10">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
