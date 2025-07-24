// نمایش پیام موفقیت هنگام کلیک روی دکمه رزرو
const reserveBtns = document.querySelectorAll('.reserve-btn');
reserveBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    alert('درخواست رزرو شما ثبت شد! کارشناسان ما به زودی با شما تماس می‌گیرند.');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
// جلوگیری از ارسال فرم (در صورت وجود فرم)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
  });
}); 