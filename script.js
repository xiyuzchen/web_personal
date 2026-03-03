// 移动端导航切换
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
  });

  // 点击导航后在移动端关闭菜单
  mainNav.addEventListener("click", (event) => {
    if (event.target.tagName === "A" && mainNav.classList.contains("is-open")) {
      mainNav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
    }
  });
}

// 平滑滚动（仅在支持的浏览器中）
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// 联系表单前端校验与反馈
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

if (contactForm && formFeedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    if (!name || !email || !message) {
      formFeedback.textContent = "请填写完整信息后再发送。";
      formFeedback.classList.remove("success");
      formFeedback.classList.add("error");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formFeedback.textContent = "请输入有效的邮箱地址。";
      formFeedback.classList.remove("success");
      formFeedback.classList.add("error");
      return;
    }

    formFeedback.textContent = "已收到你的消息，我会尽快回复。";
    formFeedback.classList.remove("error");
    formFeedback.classList.add("success");
    contactForm.reset();
  });
}

// 页脚年份
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

