import { TOPBAR_INFO } from "../data/constants.js";

export default function TopBar() {
  return <div className="topbar">
    <div className="container topbar-inner">
      <div className="topbar-contact">
        {TOPBAR_INFO.map(item => <span key={item.text}>
          {item.icon && <i className={`fa-solid ${item.icon}`} />}
          {item.href ? <a href={item.href}>{item.text}</a> : item.text}
        </span>)}
      </div>
    </div>
  </div>;
}
