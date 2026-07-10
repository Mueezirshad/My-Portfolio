export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="h-10 w-6 rounded-full border border-purple-500 flex justify-center">
        <div className="mt-2 h-2 w-2 rounded-full bg-purple-400"></div>
      </div>
    </div>
  );
}