import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground.jsx";

export default function Login() {
  const navigate = useNavigate();
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    company: "",
    remember: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (isLoginTab) {
        setSuccessMsg("Xác thực thành công! Đang chuyển hướng tới trang chủ...");
        setTimeout(() => navigate("/"), 1200);
      } else {
        setSuccessMsg("Gửi yêu cầu đăng ký đối tác thành công! Bộ phận tiếp nhận sẽ liên hệ trong 24h.");
      }
    }, 1000);
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "relative",
      backgroundColor: "#05070f",
      color: "#ffffff",
      fontFamily: "'Inter', 'Be Vietnam Pro', sans-serif",
      overflow: "hidden"
    }}>
      {/* Background Grayscale Building Photo Layer */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=88)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(100%) contrast(1.2) brightness(0.35)",
        zIndex: 0
      }} />

      {/* Dark Obsidian Gradient Overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 50% 30%, rgba(41, 151, 255, 0.12) 0%, transparent 60%), linear-gradient(180deg, rgba(5,7,15,0.85) 0%, rgba(5,7,15,0.96) 100%)",
        zIndex: 1
      }} />

      {/* Interactive Particle Network */}
      <ParticleBackground />

      {/* Top Header Navigation */}
      <header style={{ position: "relative", zIndex: 10, padding: "24px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <img
            src="/assets/matrix-holding-logo.png"
            alt="Matrix Holding"
            style={{ height: 32, width: "auto", filter: "brightness(0) invert(1)" }}
          />
          <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>|</span>
          <span style={{ color: "#ffffff", fontWeight: 700, fontSize: "16px", letterSpacing: "-0.01em" }}>Matrix Holding</span>
        </Link>

        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "rgba(255,255,255,0.8)",
            fontSize: "13px",
            fontWeight: 600,
            textDecoration: "none",
            padding: "8px 16px",
            borderRadius: "50px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.18)",
            backdropFilter: "blur(10px)",
            transition: "all 0.2s ease"
          }}
        >
          <i className="fa-solid fa-arrow-left" /> Quay lại trang chủ
        </Link>
      </header>

      {/* Main Glassmorphic Login Card */}
      <main style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
        <div style={{
          width: "100%",
          maxWidth: 460,
          background: "rgba(15, 23, 42, 0.78)",
          border: "1px solid rgba(255, 255, 255, 0.16)",
          borderRadius: 24,
          padding: "36px 32px",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.8), 0 0 35px rgba(41, 151, 255, 0.15)",
          animation: "loginCardFade 0.4s ease-out"
        }}>
          {/* Card Header & Title */}
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(41,151,255,0.2), rgba(56,189,248,0.3))",
              border: "1px solid rgba(56,189,248,0.5)",
              display: "grid",
              placeItems: "center",
              margin: "0 auto 16px",
              color: "#38bdf8",
              boxShadow: "0 0 20px rgba(56,189,248,0.3)"
            }}>
              <i className={`fa-solid ${isLoginTab ? "fa-shield-halved" : "fa-user-plus"}`} style={{ fontSize: 22 }} />
            </div>

            <h1 style={{ fontSize: "24px", fontWeight: 800, margin: "0 0 8px", color: "#ffffff", letterSpacing: "-0.02em" }}>
              {isLoginTab ? "Cổng Đăng Nhập Matrix Portal" : "Đăng Ký Đối Tác Hệ Sinh Thái"}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", margin: 0, lineHeight: 1.5 }}>
              {isLoginTab
                ? "Truy cập hệ thống quản trị danh mục & kết nối đầu tư"
                : "Gia nhập hệ sinh thái doanh nghiệp & nguồn lực Matrix Holding"}
            </p>
          </div>

          {/* Switch Tabs (Login / Register) */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            background: "rgba(255,255,255,0.06)",
            padding: 4,
            borderRadius: 12,
            marginBottom: 24,
            border: "1px solid rgba(255,255,255,0.1)"
          }}>
            <button
              type="button"
              onClick={() => { setIsLoginTab(true); setSuccessMsg(""); }}
              style={{
                padding: "10px",
                borderRadius: 8,
                border: "none",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                background: isLoginTab ? "#2997ff" : "transparent",
                color: isLoginTab ? "#ffffff" : "rgba(255,255,255,0.7)",
                transition: "all 0.2s ease"
              }}
            >
              Đăng nhập
            </button>
            <button
              type="button"
              onClick={() => { setIsLoginTab(false); setSuccessMsg(""); }}
              style={{
                padding: "10px",
                borderRadius: 8,
                border: "none",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                background: !isLoginTab ? "#2997ff" : "transparent",
                color: !isLoginTab ? "#ffffff" : "rgba(255,255,255,0.7)",
                transition: "all 0.2s ease"
              }}
            >
              Đăng ký đối tác
            </button>
          </div>

          {/* Success Notification */}
          {successMsg && (
            <div style={{
              background: "rgba(34, 197, 94, 0.15)",
              border: "1px solid rgba(34, 197, 94, 0.4)",
              color: "#4ade80",
              padding: "12px 16px",
              borderRadius: 10,
              fontSize: "13px",
              fontWeight: 600,
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 10
            }}>
              <i className="fa-solid fa-circle-check" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Login / Register Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {!isLoginTab && (
              <>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.8)", marginBottom: 6 }}>
                    Họ và tên người đại diện *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Nguyễn Văn A"
                    value={formData.fullName}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: 10,
                      color: "#ffffff",
                      fontSize: "14px",
                      outline: "none"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.8)", marginBottom: 6 }}>
                    Tên doanh nghiệp / Đơn vị *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Công ty Cổ phần ABC"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: 10,
                      color: "#ffffff",
                      fontSize: "14px",
                      outline: "none"
                    }}
                  />
                </div>
              </>
            )}

            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.8)", marginBottom: 6 }}>
                Email doanh nghiệp / Mã đối tác *
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px 14px 12px 40px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 10,
                    color: "#ffffff",
                    fontSize: "14px",
                    outline: "none"
                  }}
                />
                <i className="fa-solid fa-envelope" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.4)", fontSize: 14 }} />
              </div>
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                <label style={{ fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>
                  Mật khẩu bảo mật *
                </label>
                {isLoginTab && (
                  <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Vui lòng liên hệ quản trị viên Matrix Portal qua email: support@matrixholding.vn để lấy lại mật khẩu."); }} style={{ fontSize: "12px", color: "#38bdf8", textDecoration: "none" }}>
                    Quên mật khẩu?
                  </a>
                )}
              </div>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="••••••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px 42px 12px 40px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 10,
                    color: "#ffffff",
                    fontSize: "14px",
                    outline: "none"
                  }}
                />
                <i className="fa-solid fa-lock" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.4)", fontSize: 14 }} />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.5)",
                    cursor: "pointer",
                    fontSize: 14
                  }}
                >
                  <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`} />
                </button>
              </div>
            </div>

            {isLoginTab && (
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  style={{ accentColor: "#2997ff", cursor: "pointer", width: 16, height: 16 }}
                />
                <label htmlFor="remember" style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", cursor: "pointer" }}>
                  Ghi nhớ phiên đăng nhập trên thiết bị này
                </label>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: "100%",
                padding: "14px",
                background: "linear-gradient(135deg, #2997ff 0%, #0a84ff 100%)",
                color: "#ffffff",
                border: "none",
                borderRadius: 12,
                fontSize: "14px",
                fontWeight: 800,
                letterSpacing: "0.02em",
                cursor: isLoading ? "wait" : "pointer",
                boxShadow: "0 4px 20px rgba(41, 151, 255, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                marginTop: 6,
                transition: "all 0.25s ease"
              }}
            >
              {isLoading ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin" /> Đang xác thực...
                </>
              ) : (
                <>
                  {isLoginTab ? "Đăng Nhập Cổng Portal" : "Gửi Yêu Cầu Đăng Ký"} <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }} />
                </>
              )}
            </button>
          </form>

          {/* Social / Enterprise Single Sign-On Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "24px 0" }}>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.12)" }} />
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", fontWeight: 700 }}>
              Hoặc đăng nhập bằng
            </span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.12)" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <button
              type="button"
              onClick={() => alert("Đăng nhập bằng tài khoản Google Enterprise")}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "10px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 10,
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              <i className="fa-brands fa-google" style={{ color: "#ea4335" }} /> Google Workspace
            </button>

            <button
              type="button"
              onClick={() => alert("Đăng nhập bằng Microsoft Azure AD / Office 365")}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "10px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 10,
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              <i className="fa-brands fa-microsoft" style={{ color: "#00a4ef" }} /> Microsoft 365
            </button>
          </div>
        </div>
      </main>

      {/* Footer Security Certifications */}
      <footer style={{ position: "relative", zIndex: 10, padding: "20px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(5,7,15,0.8)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, flexWrap: "wrap", fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
          <span><i className="fa-solid fa-lock" style={{ color: "#38bdf8", marginRight: 6 }} /> Mã hóa SSL 256-bit</span>
          <span><i className="fa-solid fa-certificate" style={{ color: "#f59e0b", marginRight: 6 }} /> Tiêu chuẩn ISO 27001</span>
          <span>© {new Date().getFullYear()} Matrix Holding Enterprise Portal</span>
        </div>
      </footer>
    </div>
  );
}
