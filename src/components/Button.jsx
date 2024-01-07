export default function Button({ children, className }) {
  return <button className={`py-2 px-4 ${className}`}>{children}</button>;
}
