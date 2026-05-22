// Layer 1 in the Universe B layer stack.
// Creates a slow-drifting organic texture behind all content.
// Pure CSS animations - zero JS runtime cost, no libraries.

const UBAmbient = () => {
    return (
        <div 
            aria-hidden="true"
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none",
                overflow: "hidden",
            }}
        >
            {/* Large drifting blob - top left, teal tinted */}
            <div style={{
                position: "absolute",
                width: "700px",
                height: "700px",
                top: "-200px",
                left: "-200px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(15,158,153,0.7) 0%, transparent 70%)",
                animation: "ubDrift1 18s ease-in-out infinite",
            }} />

            {/* Mid blob - bottom right, warm tinted */}
            <div style={{
                position: "absolute",
                width: "500px",
                height: "500px",
                bottom: "-100px",
                right: "-100px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(160,67,10,0.05) 0%, transparent 70%)",
                animation: "ubDrift2 22s ease-in-out infinite",
            }} />

            {/* small accent blob - center */}
            <div style={{
                position: "absolute",
                width: "300px",
                height: "300px",
                top: "40%",
                left: "55%",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(15,158,153,0.04) 0%, transparent 70%)",
                animation: "ubDrift3 28s ease-in-out infinite",
            }} />

            {/* Fine grain txture overlay */}
            <div style={{
                position: "absolute",
                inset: 0,
                backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
                backgroundSize: "128px 128px",
                opacity: 0.6,
            }} />

            <style>{`
                @keyframes ubDrift1 {
                    0%, 100% { transform: translate(0px, 0px) scale(1); }
                    33%       { transform: translate(60px, 40px) scale(1.05); }
                    66%       { transform: translate(-30px, 70px) scale(0.97); }
                }
                @keyframes ubDrift2 {
                    0%, 100% { transform: translate(0px, 0px) scale(1); }
                    40%       { transform: translate(-80px, 50px) scale(1.08); }
                    70%       { transform: translate(40px, -30px) scale(0.95); }
                }
                @keyframes ubDrift3 {
                    0%, 100% { transform: translate(0px, 0px); }
                    50%       { transform: translate(-60px, 80px); }
                }
                @media (prefers-reduced-motion: reduce) {
                    [style*="ubDrift"] { animation: none !important; }
                }
            `}</style>
        </div>
    )
}

export default UBAmbient