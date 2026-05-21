import logo from "@/assets/voidstock-logo.png";

export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="VoidStock"
      className={`${className} w-auto select-none`}
      draggable={false}
    />
  );
}
