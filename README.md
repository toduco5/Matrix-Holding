# Matrix Holding Website

> Hệ sinh thái kết nối đầu tư — Matrix Holding

## Giới thiệu

Matrix Holding Website là trang web hệ sinh thái kết nối đầu tư được xây dựng bằng React, Vite, và React Router. Website tập trung vào việc tạo điểm gặp giữa nhà đầu tư, chủ dự án và đối tác chuyên môn trên nền tảng thông tin rõ ràng và hợp tác có trách nhiệm.

## Công nghệ sử dụng

- **React 19** — Thư viện giao diện
- **Vite** — Build tool, dev server
- **React Router v6** — Routing
- **CSS Thuần (Pure CSS)** — Không dùng CSS framework
- **Font Awesome 6** — Icons (tải qua CDN)
- **Google Fonts** — Montserrat font
- **Unsplash** — Images

## Cài đặt và chạy

```bash
# Clone repository
git clone https://github.com/toduco5/Matrix-Ventures.git

# Di chuyển vào thư mục dự án
cd Matrix-Ventures

# Cài đặt dependencies
npm install

# Chạy dev server
npm run dev

# Build production
npm run build

# Preview production build
npm run preview
```

## Cấu trúc dự án

```
src/
├── App.jsx                    # Router, RouteEffects, PageTransition
├── main.jsx                   # Entry point, theme initialization
├── index.css                  # Base styles
├── styles/
│   ├── tokens.css             # CSS custom properties (design tokens)
│   └── enhancements.css       # Animations, scroll-driven, components
├── utils/
│   └── behavior.js            # IntersectionObserver scroll animations
├── data/
│   ├── constants.js           # SECTORS, PILLARS, STATS, BANNER_SLIDES, etc.
│   ├── team.js                # Team members data
│   ├── projects.js            # Demo projects data
│   └── ecosystem.js           # Ecosystem content data
├── components/
│   ├── Header.jsx             # Navbar with mega dropdown, theme toggle
│   ├── TopBar.jsx             # Contact info bar
│   ├── Footer.jsx             # 4-column footer
│   ├── Banner.jsx             # Auto-rotating hero carousel
│   ├── Features.jsx           # 3 pillars section
│   ├── About.jsx              # Brief about section
│   ├── EcosystemWheel.jsx     # Animated concentric wheel
│   ├── Testimonials.jsx       # Auto-rotating quotes + stats
│   ├── Services.jsx           # Sector cards grid
│   ├── BusinessGrowth.jsx     # Project highlight section
│   ├── Blog.jsx               # Blog post cards
│   ├── CommunityProjects.jsx  # Demo project cards
│   ├── PropertyMarketOverview.jsx # Dashboard with charts
│   ├── PageMeta.jsx           # SEO meta tags
│   ├── AnimatedNumber.jsx     # Count-up animation
│   ├── ProgressScroll.jsx     # Scroll progress bar
│   ├── CursorGlow.jsx         # Mouse-follow glow effect
│   ├── TextStagger.jsx        # Text stagger reveal animation
│   └── MagneticButton.jsx     # Magnetic button effect
└── pages/
    ├── Home.jsx               # Full homepage
    ├── About.jsx              # Detailed about page
    ├── Contact.jsx            # Contact form + map
    ├── Community.jsx          # Roles, process, boundaries
    ├── News.jsx               # Knowledge guides
    ├── Sectors.jsx            # Sector cards
    ├── EcosystemDetail.jsx    # Dynamic ecosystem detail
    └── ProjectDetail.jsx      # Dynamic project detail
```

## Các hiệu ứng đã triển khai

### 1. CSS Scroll-Driven Animations (Native)
Sử dụng `animation-timeline: scroll()` — không cần JavaScript, 60fps native.

```css
.scroll-reveal        /* Fade + slide up */
.scroll-reveal-slow   /* Chậm hơn */
.scroll-fade          /* Chỉ opacity */
.scroll-scale         /* Scale + opacity */
.scroll-slide-up      /* Slide up */
.scroll-slide-down    /* Slide down */
.scroll-clip-reveal   /* Clip-path reveal */
```

### 2. Text Stagger Reveal
Tách text thành words/chars, animate lần lượt với IntersectionObserver trigger.

```jsx
<TextStagger split="words" delay={40}>Chào mừng đến với Matrix</TextStagger>
<TextStagger split="chars">Hello World</TextStagger>
```

### 3. Magnetic Button
Button hút chuột nhẹ khi hover gần, snap back khi leave.

```jsx
<MagneticButton strength={30}>Bắt đầu ngay</MagneticButton>
```

### 4. Scroll Progress Bar
Thanh progress mỏng ở top, fill theo scroll position.

### 5. Scroll-to-Top Button
Nút hiện sau khi scroll 400px, cuộn mượt về đầu trang.

### 6. Cursor Glow
Hiệu ứng sáng theo con trỏ (chỉ desktop, tắt trên mobile).

### 7. Page Transition
Trang mới fade-in khi chuyển route.

### 8. Hero Carousel
Banner tự động xoay 5s, tạm dừng khi hover/focus.

### 9. Ecosystem Wheel
Vòng tròn xoay 30s với 5 lĩnh vực ngoài + 3 năng lực trong.

### 10. Theme Toggle
Light/Dark mode, lưu trong localStorage, hỗ trợ prefers-color-scheme.

### 11. Scroll Reveal (IntersectionObserver)
Các section fade-in khi scroll vào viewport với stagger delay.

## Theme (Light/Dark)

Website hỗ trợ hai chế độ sáng/tối:
- Tự động phát hiện `prefers-color-scheme`
- Lưu preference trong `localStorage`
- Toggle trong header navbar

CSS custom properties được định nghĩa trong `styles/tokens.css`:
- `--ink`, `--navy`, `--blue`, `--gold`, `--muted`, `--line`, `--paper`

## Responsive Design

- Desktop: Layout đa cột, full-width sections
- Tablet (≤991px): Grid chuyển 1 cột, nav responsive
- Mobile (≤700px): Font nhỏ hơn, spacing giảm
- `prefers-reduced-motion`: Tất cả animation bị disable

## SEO

- `PageMeta` component quản lý title, meta description, og tags
- Semantic HTML5 tags
- Responsive meta tags

## Lưu ý

- Nội dung trên website phục vụ mục đích giới thiệu và kết nối ban đầu
- Mọi quyết định cần dựa trên hồ sơ gốc, thẩm định độc lập và tư vấn chuyên môn
- Không cam kết lợi nhuận, không thay thế tư vấn pháp lý hoặc tài chính

## License

Bảo lưu mọi quyền.
