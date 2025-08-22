
type ButtonProps = {
  label: string;
  size: string
  primary?: boolean;
};

export const Button = ({ label, primary, size = "small" }: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: primary ? "blue" : "gray",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        width: size === "small" ? "100px" : size === "medium" ? "200px" : "300px",
      }}
    >
      {label}
    </button>
  );
};
