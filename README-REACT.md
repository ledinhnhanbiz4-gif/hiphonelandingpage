# HiPhone Store - React Version

## 🚀 React App đã được tạo thành công!

### 📁 Cấu Trúc Project

```
c:\hiphone\
├── public/
│   ├── index.html          # HTML template
│   └── assets/             # Hình ảnh (logo, QR code)
├── src/
│   ├── components/         # React Components
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   └── ThemeToggle.js
│   ├── styles/            # CSS files
│   │   ├── index.css
│   │   └── App.css
│   ├── App.js             # Main App component
│   └── index.js           # Entry point
├── package.json           # Dependencies
└── README-REACT.md        # Hướng dẫn này
```

---

## 🔧 Cài Đặt và Chạy

### Bước 1: Cài đặt Dependencies

```bash
npm install
```

### Bước 2: Thêm Logo và QR Code (NẾU CHƯA CÓ)

Copy các file sau vào `c:\hiphone\public\assets\`:
- `logo.png` - Logo cửa hàng
- `zalo-qr.png` - QR code Zalo

### Bước 3: Chạy Development Server

```bash
npm start
```

Ứng dụng sẽ tự động mở tại: `http://localhost:3000`

### Bước 4: Build cho Production

```bash
npm run build
```

File build sẽ nằm trong thư mục `build/`

---

## ✨ Tính Năng React

### 🎯 **React Components**
- **Header** - Navigation với smooth scroll
- **Hero** - Banner chính với animations
- **About** - Feature cards với data mapping
- **Contact** - Social links và Zalo QR
- **Footer** - Thông tin liên hệ
- **ThemeToggle** - Nút chuyển theme

### ⚛️ **React Hooks Được Sử Dụng**
- `useState` - Quản lý state (theme, scroll position)
- `useEffect` - Side effects (scroll listeners, animations, localStorage)
- Component lifecycle management

### 🎨 **Features**
- ✅ Component-based architecture
- ✅ State management với hooks
- ✅ Props drilling tối ưu
- ✅ Event handlers
- ✅ Conditional rendering
- ✅ List rendering với .map()
- ✅ LocalStorage integration
- ✅ Intersection Observer API
- ✅ Smooth scrolling
- ✅ Theme toggle (light/dark)
- ✅ Responsive design
- ✅ Performance optimized

---

## 🎓 Code Highlights

### 1. Theme Management với Hooks

```javascript
const [theme, setTheme] = useState('light');

useEffect(() => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
  document.documentElement.setAttribute('data-theme', savedTheme);
}, []);
```

### 2. Scroll Animations

```javascript
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
}, []);
```

### 3. Component Props

```javascript
<ThemeToggle theme={theme} toggleTheme={toggleTheme} />
```

### 4. Array Mapping

```javascript
{features.map((feature, index) => (
  <div key={index} className="feature-card">
    <h3>{feature.title}</h3>
    <p>{feature.description}</p>
  </div>
))}
```

---

## 📦 Scripts Có Sẵn

```bash
npm start       # Chạy development server
npm run build   # Build production
npm test        # Run tests
npm run eject   # Eject from Create React App
```

---

## 🌐 Deploy Online

### Vercel (Khuyến Nghị)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop thư mục build/ lên netlify.com
```

### GitHub Pages
```bash
npm install --save-dev gh-pages

# Thêm vào package.json:
"homepage": "https://username.github.io/repository-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

npm run deploy
```

---

## 🔄 So Sánh Vanilla JS vs React

### Vanilla JS (Trước)
- DOM manipulation trực tiếp
- Event listeners thủ công
- Code dài, khó maintain
- Không có component reuse

### React (Hiện Tại)
- ✅ Component-based, dễ tái sử dụng
- ✅ Virtual DOM, performance tốt
- ✅ State management rõ ràng
- ✅ Code sạch, dễ đọc, dễ maintain
- ✅ Hot reload trong development
- ✅ Build optimization tự động
- ✅ Easy to scale

---

## 🎯 Tối Ưu Hóa

### Performance
- Lazy loading images
- Code splitting
- Minification tự động
- Tree shaking

### SEO
- Meta tags trong public/index.html
- Semantic HTML
- Structured data ready

---

## 🐛 Troubleshooting

### Port 3000 đã được sử dụng?
```bash
# Chạy trên port khác
PORT=3001 npm start
```

### Dependencies error?
```bash
# Xóa và cài lại
rm -rf node_modules package-lock.json
npm install
```

### Build errors?
```bash
# Clear cache
npm cache clean --force
npm install
npm run build
```

---

## 📚 Next Steps

### Mở Rộng Thêm:
1. **React Router** - Multiple pages
2. **Context API** - Global state
3. **API Integration** - Fetch sản phẩm từ backend
4. **Form Handling** - Contact form với validation
5. **Animation Libraries** - Framer Motion, GSAP
6. **State Management** - Redux/Zustand nếu phức tạp
7. **TypeScript** - Type safety
8. **Testing** - Jest, React Testing Library

---

## 💡 Tips

### Development
- Sử dụng React DevTools extension
- Hot reload tự động khi save file
- Console.log để debug
- Components nhỏ, single responsibility

### Production
- Luôn build trước khi deploy
- Test trên nhiều browsers
- Optimize images
- Enable HTTPS

---

## 🎉 Hoàn Thành!

Landing page của bạn đã được chuyển đổi hoàn toàn sang **React**!

**Chạy ngay:**
```bash
npm install
npm start
```

Sau đó mở `http://localhost:3000` để xem kết quả!

---

**Made with ⚛️ React by Hy Le**
