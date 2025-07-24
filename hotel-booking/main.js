// راه‌اندازی AOS (انیمیشن اسکرول)
AOS.init({
  duration: 900,
  once: true,
});

// راه‌اندازی اسلایدر هتل‌ها با Swiper
const hotelSwiper = new Swiper('.hotel-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

// راه‌اندازی اسلایدر ویلاها با Swiper
const villaSwiper = new Swiper('.villa-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: '.villa-pagination',
    clickable: true,
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

// اسلایدر هتل‌ها (all-hotels)
const allHotelsSwiper = new Swiper('.all-hotels-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: '.all-hotels-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

// اسلایدر گالری تصاویر
const gallerySwiper = new Swiper('.gallery-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: '.gallery-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

// اسلایدر تخفیف‌ها و پیشنهادهای ویژه
const offersSwiper = new Swiper('.offers-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: '.offers-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

// جلوگیری از ریفرش شدن فرم جستجو
const searchForm = document.querySelector('.search-box');
if (searchForm) {
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // اینجا می‌تونی کد جستجو یا نمایش پیام بزاری
    alert('جستجو انجام شد!');
  });
}

// آکاردئون سوالات متداول
const accordionTitles = document.querySelectorAll('.accordion-title');
accordionTitles.forEach(title => {
  title.addEventListener('click', function() {
    const item = this.parentElement;
    item.classList.toggle('active');
    // بستن بقیه آیتم‌ها
    document.querySelectorAll('.accordion-item').forEach(other => {
      if (other !== item) other.classList.remove('active');
    });
  });
});

// منوی موبایل کشویی
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
menuToggle.addEventListener('click', function() {
  this.classList.toggle('open');
  mobileNav.classList.toggle('open');
  // بستن اسکرول صفحه هنگام باز بودن منو
  if (mobileNav.classList.contains('open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
// بستن منو با کلیک روی لینک‌ها (اختیاری)
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// پاپ‌آپ فرم رزرو
const bookingModal = document.getElementById('booking-modal');
const bookingBtns = document.querySelectorAll('.cta');
const closeModalBtn = document.querySelector('.modal-close');

bookingBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    // فقط اگر در هدر یا منوی موبایل بود
    if (this.closest('.header') || this.closest('.mobile-nav')) {
      e.preventDefault();
      bookingModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});
closeModalBtn.addEventListener('click', function() {
  bookingModal.classList.remove('active');
  document.body.style.overflow = '';
});
bookingModal.addEventListener('click', function(e) {
  if (e.target === bookingModal) {
    bookingModal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// چت آنلاین/سوال سریع
const chatToggle = document.getElementById('chat-toggle');
const chatBox = document.getElementById('chat-box');
const chatClose = document.getElementById('chat-close');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

chatToggle.addEventListener('click', () => {
  chatBox.classList.toggle('open');
  if (chatBox.classList.contains('open')) {
    chatInput.focus();
  }
});
chatClose.addEventListener('click', () => {
  chatBox.classList.remove('open');
});
chatForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const msg = chatInput.value.trim();
  if (!msg) return;
  // پیام کاربر
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-message user';
  userMsg.textContent = msg;
  chatMessages.appendChild(userMsg);
  chatInput.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;
  // پاسخ ربات (نمونه)
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'chat-message bot';
    botMsg.textContent = 'پیام شما دریافت شد! به زودی پاسخ داده می‌شود.';
    chatMessages.appendChild(botMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 900);
});

// پیج لودر
window.addEventListener('load', function() {
  const loader = document.getElementById('page-loader');
  if(loader) loader.classList.add('hide');
}); 