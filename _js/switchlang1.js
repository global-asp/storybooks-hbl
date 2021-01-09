function switchlang(o,c) {
  options = o.split(",");
  config = c.split(",");
  from_lang = options[0];
  to_lang = options[1];
  primary = config[0];
  page_lang = config[1];
  l1 = document.getElementsByClassName("l1");
  def = document.getElementsByClassName("def");
  btn_lang1 = document.getElementsByClassName("lang-primary");

  if (to_lang == primary) {
    for (var i = 0; i < btn_lang1.length; i++) {
      l1[i].style.display = "block";
      def[i].style.display = "none";
      if (page_lang != primary) {
        btn_lang1[i].innerHTML = page_lang;
        btn_lang1[i].setAttribute("onclick", "switchlang('" + primary + "," + page_lang + "','" + c + "')");
      }
    }
  } else {
    for (var i = 0; i < btn_lang1.length; i++) {
      l1[i].style.display = "none";
      def[i].style.display = "block";
      if (page_lang != primary) {
        btn_lang1[i].innerHTML = primary;
        btn_lang1[i].setAttribute("onclick", "switchlang('" + page_lang + "," + primary + "','" + c + "')");
      }
    }
  }
}
