export default function Heading({ children }) {
  return (
    <h1 className="my-4 pb-4 text-3xl font-extrabold leading-none tracking-tight text-primary md:text-4xl lg:text-5xl dark:text-white">
      {children}
    </h1>
  );
}
