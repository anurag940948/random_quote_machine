function NextQuote()
{
	
	var v = new Array("https://s-media-cache-ak0.pinimg.com/736x/21/5a/43/215a43c4201526bf661cff078ecb0658--amazing-quotes-great-quotes.jpg",
					"https://www.creativefan.com/wp-content/uploads/2014/04/31.jpg",
					"https://www.parhlo.com/wp-content/uploads/2015/05/aXpusQc.jpg",
					"http://cdn.quotesgram.com/img/65/72/1415545695-Will-Smith-Quote-Free-Wallpaper__1_.jpg",
					"http://www.india.com/wp-content/uploads/2015/07/abdul-k-03.jpg",
					"https://s-media-cache-ak0.pinimg.com/originals/36/46/5d/36465d2d55d475eee7789ce969b773b3.jpg",
					"https://s-media-cache-ak0.pinimg.com/736x/c7/18/0b/c7180bfe0987e63b9940304ba6bb7405--emma-watson-feminism-general-quotes.jpg",
					"https://s-media-cache-ak0.pinimg.com/736x/00/35/dc/0035dccede87e27388ed158a83a50f5a--princess-quotes-happy-photos.jpg",
					"https://68.media.tumblr.com/345003c24c60c12d0619111606c86e64/tumblr_oiozpqZCsW1u79bw9o1_1280.jpg",
					"https://i.kinja-img.com/gawker-media/image/upload/s--Ai_dXqMI--/c_scale,f_auto,fl_progressive,q_80,w_800/18zpg92e3efw8jpg.jpg",
					"https://s-media-cache-ak0.pinimg.com/originals/62/7e/e5/627ee529bb81de29655cfe070063c075.jpg",
					"http://livequotes.online/library/quotes/jennifer-lawrence-quotes-about-life/jennifer-lawrence-quotes-about-life-04.jpg",
					"http://media.glamsham.com/download/wallpaper/quotes-and-movies/celebrities/amitabh-bachchan-quotes-01-10x7.jpg",
					"http://1zl13gzmcsu3l9yq032yyf51-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/inspiring-Gandhi-quotes-Live-learn.jpg",
					"https://s-media-cache-ak0.pinimg.com/736x/22/e0/8c/22e08c165c22cd74c0b3e78b2411cbb5--broadway-theatre-musical-theatre.jpg",
					"https://s-media-cache-ak0.pinimg.com/originals/3c/9e/bd/3c9ebd7867876f8b78b76a0b889ebaa4.jpg",
					"https://s-media-cache-ak0.pinimg.com/736x/3c/eb/58/3ceb58d8f8059571addcb0c3ad9fb273--morgan-freeman-quotes-atheist-quotes.jpg",
					"https://s-media-cache-ak0.pinimg.com/736x/f7/2f/98/f72f98a8f50cbedc34ac2339cbd592b2.jpg",
					"http://cdn.quotesgram.com/img/52/74/1514198886-Avril_Lavigne_Poster.jpg",
					"https://68.media.tumblr.com/345003c24c60c12d0619111606c86e64/tumblr_oiozpqZCsW1u79bw9o1_1280.jpg",
					"http://www.golfian.com/wp-content/uploads/2017/04/Famous-Feeling-Quotes-By-Emma-Watson.jpg",
					"http://i.huffpost.com/gen/2365772/thumbs/o-EMMAQUOTE4-900.jpg");
	var n = Math.floor(Math.random()*(v.length));
	document.getElementById("igg").src=v[n];
  document.getElementById("img").href=("https://twitter.com/intent/tweet?text=Quote-&url="+v[n]);
  document.getElementById("ipb").href=("http://www.facebook.com/sharer.php?u=" + v[n]);
}
