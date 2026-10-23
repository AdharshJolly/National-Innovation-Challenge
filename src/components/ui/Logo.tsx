/** Interim brand mark: CHRIST (Deemed to be University) logo, white on transparent.
 *  Swap `logoSrc` for the approved NIC logo when supplied. */
export const logoSrc = "/images/christ_logo.png";

export function Logo({ variant = "header" }: { variant?: "header" | "footer" }) {
  return <img className={`logo logo--${variant}`} src={logoSrc} width={300} height={100} alt="CHRIST (Deemed to be University)" />;
}

export function CdacLogo() {
  return <img className="logo logo--cdac" src="/images/CDAC.svg" width={345} height={247} alt="C-DAC" />;
}
