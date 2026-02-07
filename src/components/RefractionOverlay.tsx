"use client";

export function RefractionOverlay() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
            {/* Noise Texture */}
            <div className="noise-overlay" />
        </div>
    );
}
