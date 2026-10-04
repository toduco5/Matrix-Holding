import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function ContactWidget() {
  const [open, setOpen] = useState(false);
  const emailRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    emailRef.current?.focus();
    const onKeyDown = event => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const submit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Yêu cầu liên hệ từ Matrix Holding");
    const body = encodeURIComponent(`Email: ${data.get("email")}\n\nNhu cầu: ${data.get("message") || "Tôi muốn được tư vấn thêm."}`);
    window.location.href = `mailto:tminhduc1302@gmail.com?subject=${subject}&body=${body}`;
  };

  return <>
    <button className="contact-orb" type="button" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open} aria-label="Mở hộp liên hệ nhanh">
      <i className="fa-regular fa-envelope" aria-hidden="true" />
      <span>Liên hệ nhanh</span>
    </button>
    {open && <div className="contact-dialog-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
      <section className="contact-dialog" role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title" onMouseDown={event => event.stopPropagation()}>
        <button className="contact-dialog__close" type="button" onClick={() => setOpen(false)} aria-label="Đóng hộp liên hệ"><i className="fa-solid fa-xmark" /></button>
        <div className="contact-dialog__icon"><i className="fa-regular fa-envelope" /></div>
        <p className="contact-dialog__eyebrow">MATRIX HOLDING</p>
        <h2 id="contact-dialog-title">Bắt đầu một cuộc trò chuyện.</h2>
        <p>Để lại email và nhu cầu của bạn. Chúng tôi sẽ mở email để bạn chủ động gửi thông tin.</p>
        <form onSubmit={submit}>
          <label className="sr-only" htmlFor="quick-contact-email">Email của bạn</label>
          <input ref={emailRef} id="quick-contact-email" name="email" type="email" placeholder="Email của bạn..." required />
          <label className="sr-only" htmlFor="quick-contact-message">Nhu cầu liên hệ</label>
          <textarea id="quick-contact-message" name="message" placeholder="Bạn muốn trao đổi về điều gì?" />
          <button type="submit">Gửi yêu cầu <i className="fa-solid fa-arrow-up-right-from-square" /></button>
        </form>
        <Link to="/contact" onClick={() => setOpen(false)}>Mở biểu mẫu liên hệ đầy đủ <i className="fa-solid fa-arrow-right" /></Link>
      </section>
    </div>}
  </>;
}
