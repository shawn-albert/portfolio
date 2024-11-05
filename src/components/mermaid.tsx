"use client";

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
    chart: string;
}

const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chartRef.current) {
            mermaid.initialize({ startOnLoad: true });
            try {
                mermaid.contentLoaded();
            } catch (error) {
                console.error("Error rendering Mermaid chart:", error);
            }
        }
    }, [chart]);

    return (
        <div
            ref={chartRef}
            className="mermaid"
            dangerouslySetInnerHTML={{ __html: chart }}
        />
    );
};

export default Mermaid;