import { Icon, type IconName } from "../ui/Icon";

export function SupportCard({ icon, title, text }: { icon: IconName; title: string; text: string }) {
  return (
    <div className="support-card">
      <span className="support-card__icon"><Icon name={icon} size={24} /></span>
      <h3 className="t-h4">{title}</h3>
      <p className="t-body-sm support-card__text">{text}</p>
    </div>
  );
}
