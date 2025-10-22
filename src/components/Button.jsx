import ButtonSvg from "../assets/svg/ButtonSvg";

export function Button({ className, href, onClick, children, px, white }) {
  const classes = `button relative inline-flex items-center justify-center h-11  transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : ""}`;

  const spanClasses = "relative z-10";
  const renderButton = () => (
    <div className={classes} onClick={onClick}>
      <span>{children}</span>
      {ButtonSvg(white)}
    </div>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderButton() : renderLink();
}
