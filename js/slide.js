$(function () {
  $('.hd_btn a').click(function (e) {
    $.scrollTo(this.hash || 0, 500); /* 속도 절, 숫자가 작을수록 빠름 */
    e.preventDefault();
  });
});
