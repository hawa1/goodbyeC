$(function(){
  $(document).ready(function(){
    var current_url = window.location.href;
    var redirect_url;

    if(current_url.indexOf("http://2ch-c.net/",0) != -1){
      redirect_url = $("a#pickup").attr("href");
    }else if(current_url.indexOf("http://matometatta-news.net",0) != -1){
      redirect_url = $("div.title > a").attr("href");
    }else if(current_url.indexOf("http://newmofu.doorblog.jp/",0) != -1){
      redirect_url = $("div.title_link > a").attr("href");
    }else if(current_url.indexOf("http://newser.cc/",0) != -1){
      redirect_url = $("td.news-link > a").attr("href");
    }else if(current_url.indexOf("http://newpuru.doorblog.jp/",0) != -1){
      redirect_url = $("a.titleLink").attr("href");
    }else if(current_url.indexOf("http://matomeantena.com/feed",0) != -1){
      redirect_url = $("li.rss_link > a").attr("href");
    }
    if(redirect_url !== undefined){
      location.href=redirect_url;
    }
  });
});
