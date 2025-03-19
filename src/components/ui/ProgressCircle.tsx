import React from 'react';
interface ProgressCircleProps {
  progress: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  circleColor?: string;
  progressColor?: string;
  textColor?: string;
}
const ProgressCircle: React.FC<ProgressCircleProps> = ({
  progress,
  size = 40,
  strokeWidth = 4,
  circleColor = 'rgba(229, 231, 235, 1)',
  progressColor = '#F97316',
  textColor = '#1F2937'
}) => {
  const normalizedProgress = Math.min(100, Math.max(0, progress));
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - normalizedProgress / 100 * circumference;
  return <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle className="transition-all duration-300 ease-in-out" stroke={circleColor} strokeWidth={strokeWidth} fill="none" cx={size / 2} cy={size / 2} r={radius} />
        <circle className="transition-all duration-300 ease-in-out" stroke={progressColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} fill="none" cx={size / 2} cy={size / 2} r={radius} transform={`rotate(-90 ${size / 2} ${size / 2})`} />
      </svg>
      <div className="absolute text-xs font-medium" style={{
      color: textColor
    }}>
        {normalizedProgress}%
      </div>
    </div>;
};
export default ProgressCircle;