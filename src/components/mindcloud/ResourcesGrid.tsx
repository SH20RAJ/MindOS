"use client";

import { MoreHorizontal, Tag } from "lucide-react";
import Link from "next/link";

export function ResourcesGrid({ resources }: { resources: any[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource, i) => (
                <Link key={i} href={`/mindcloud/resources/${i + 1}`} className="group p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer flex flex-col justify-between h-48">
                    <div>
                        <div className="flex justify-between items-start mb-3">
                            <span className={`text-[10px] font-bold px-2 py-1 rounded border ${resource.type === 'PDF' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                                resource.type === 'Video' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                                    'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                }`}>
                                {resource.type.toUpperCase()}
                            </span>
                            <button className="text-muted-foreground hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                <MoreHorizontal className="w-4 h-4" />
                            </button>
                        </div>
                        <h3 className="font-bold text-lg leading-tight mb-2 line-clamp-2">{resource.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {resource.tags.map((tag: string) => (
                                <span key={tag} className="text-xs text-muted-foreground flex items-center gap-1">
                                    <Tag className="w-3 h-3" /> {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-white/5 mt-auto">
                        <span>Added {resource.added}</span>
                        <span>{resource.size}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
