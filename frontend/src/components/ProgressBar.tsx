type ProgressBarProps = {
  progress: number; // 0-100
};

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full h-2 bg-purple-200 fixed top-0 left-0 z-40">
      <div
        className="h-2 bg-primary transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
} 