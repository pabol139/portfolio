import { useEffect, useRef, useState } from "react";

export default function Clock() {
  const innerRadius = 90;
  const outerRadius = 95;
  const center = 108;

  const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const [nowTs, setNowTs] = useState(() => Date.now());
  const rafRef = useRef<number | null>(null);
  useEffect(() => {
    function tick() {
      setNowTs(Date.now());
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current != null) {
        clearInterval(rafRef.current);
      }
    };
  }, []);

  const now = new Date(nowTs);
  const ms = now.getMilliseconds();
  const sRaw = now.getSeconds() + ms / 1000;
  const quantizedSeconds = Math.floor(sRaw / 5) * 5;
  const mRaw = now.getMinutes() + quantizedSeconds / 60;

  const quantizedMinutes = Math.floor(mRaw / 1) * 1;

  const hRaw = (now.getHours() % 12) + quantizedMinutes / 60;

  const secondsDeg = sRaw * 6; // 360/60

  const minutesDeg = mRaw * 6; // 360/60
  const hoursDeg = hRaw * 30; // 360/12

  return (
    <svg
      className="bg-black  h-full flex-1 !shrink-0 min-w-[55%]"
      viewBox="0 0 216 216"
    >
      {/* Dots */}
      {Array.from({ length: 60 }).map((_, i) => {
        const angle = (i * 6 * Math.PI) / 180;
        const isHourMark = i % 5 === 0;

        const x1 = center + Math.cos(angle) * innerRadius;
        const y1 = center + Math.sin(angle) * innerRadius;
        const x2 = center + Math.cos(angle) * outerRadius;
        const y2 = center + Math.sin(angle) * outerRadius;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={isHourMark ? "white" : "#5d5d5d"}
            strokeWidth={2}
            strokeLinecap="round"
          />
        );
      })}

      {hours.map((h, i) => {
        const deg = i * 30 - 90;
        const angle = (deg * Math.PI) / 180;
        const x = center + Math.cos(angle) * 70;
        const y = center + Math.sin(angle) * 70;

        return (
          <text
            key={h}
            x={x}
            y={y + 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={24}
            fontWeight={500}
            fill="white"
          >
            {h}
          </text>
        );
      })}

      {/* Hours */}
      <g transform={`rotate(${hoursDeg}, ${center}, ${center})`}>
        <line
          x1={center}
          y1={center}
          x2={center + 25 * Math.cos((-90 * Math.PI) / 180)}
          y2={center + 25 * Math.sin((-90 * Math.PI) / 180)}
          stroke={"#f2f2f2"}
          strokeWidth={3}
          strokeLinecap="round"
        />
        {/* Pill Hours line */}
        <line
          x1={center + 15 * Math.cos((-90 * Math.PI) / 180)}
          y1={center + 15 * Math.sin((-90 * Math.PI) / 180)}
          x2={center + 48 * Math.cos((-90 * Math.PI) / 180)}
          y2={center + 48 * Math.sin((-90 * Math.PI) / 180)}
          stroke={"white"}
          strokeWidth={7}
          strokeLinecap="round"
          className="drop-shadow-md"
        />
      </g>

      {/* Minutes */}

      <g transform={`rotate(${minutesDeg}, ${center}, ${center})`}>
        <line
          x1={center}
          y1={center}
          x2={center + 50 * Math.cos((-90 * Math.PI) / 180)}
          y2={center + 50 * Math.sin((-90 * Math.PI) / 180)}
          stroke={"#f2f2f2"}
          strokeWidth={3}
          strokeLinecap="round"
        />

        {/* Pill Minutes line */}
        <line
          x1={center + 15 * Math.cos((-90 * Math.PI) / 180)}
          y1={center + 15 * Math.sin((-90 * Math.PI) / 180)}
          x2={center + innerRadius * Math.cos((-90 * Math.PI) / 180)}
          y2={center + innerRadius * Math.sin((-90 * Math.PI) / 180)}
          stroke={"white"}
          strokeWidth={7}
          strokeLinecap="round"
          className="drop-shadow-md"
        />
      </g>

      <circle cx={center} cy={center} r={6} fill="white"></circle>

      {/* Seconds line */}
      <g transform={`rotate(${secondsDeg}, ${center}, ${center})`}>
        <line
          x1={center + 0 * Math.cos(-90 + (180 * Math.PI) / 180)}
          y1={center + 17 * Math.sin(-90 + (180 * Math.PI) / 180)}
          x2={center + outerRadius * Math.cos((-90 * Math.PI) / 180)}
          y2={center + (outerRadius + 1) * Math.sin((-90 * Math.PI) / 180)}
          stroke={"#ff9e01"}
          strokeWidth={1.5}
          className="drop-shadow-md"
        />
      </g>

      <circle cx={center} cy={center} r={4} fill="orange"></circle>
      <circle cx={center} cy={center} r={2} fill="232422"></circle>
    </svg>
  );
}
