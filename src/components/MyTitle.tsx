interface TitleProps {
  title: string;
}

function JudulHalaman({ title }: TitleProps) {
  return (
    <h1 style={{ color: "red", marginBottom: "40px", backgroundColor: "gold" }}>
      {title}
    </h1>
  );
}

export default JudulHalaman;
