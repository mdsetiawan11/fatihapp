export const Title = ({
  text,
  tag,
  className,
}: {
  text: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  className?: string;
}) => {
  const Tag = tag;

  return (
    <div className={className}>
      <Tag className="text-3xl font-bold transition-all group-hover:text-yellow-500">
        {text}
      </Tag>
    </div>
  );
};
