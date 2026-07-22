import { cx } from "@/lib/cx";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

/** Standard page-width wrapper. Keeps layout width consistent site-wide. */
export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cx("mx-auto w-full max-w-6xl px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}
