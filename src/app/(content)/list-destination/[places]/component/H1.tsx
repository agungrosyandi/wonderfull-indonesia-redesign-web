type H1Props = {
  children: React.ReactNode;
};

export default function H1({ children }: H1Props) {
  return <h1 className="text-3xl z-[10] text-white font-bold">{children}</h1>;
}
