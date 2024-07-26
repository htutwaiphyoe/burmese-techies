# How web server and HTTP protocol works

ဟိုတနေ.ကတော့ web browser တွေအလုပ်လုပ်ပုံပေါ့။ ခုဒါကတော့ web server တွေဘယ်လိုအလုပ်လုပ်သလဲဆိုတာ။ Web server တွေရဲ.အလုပ်လုပ်ပံကို web developer တွေ server side application developer တွေအနေနဲ.နားလည်ထားသင့်တယ်။ User တွေက browser တွေကိုတော့သုံးကြတယ်။ မြင်သာတယ် နောက်ကွယ်က web server ကိုတော့သိပ်မမြင်သာဘူး။ Browser သည် HTTP client ဖြစ်ပြီးတော့ web server  သည် HTTP server  ဖြစ်တယ်။ ဆိုချင်တာက networking အရဆိုရင် web သည် client server architecture အရတည်ဆောက်ထားတာ။ Client သည် သူလိုတာကိုတောင်းမယ်။ ဥပမာ ငါ့ကို ဒီ web URL ကနေ page ကိုခေါ်ပေးဆိုပြီး browser ကိုတောင်းတယ်။ ဒါကို  request လို.သုံးမယ်။ နောက် အဲ့ဒီ request ပြေလည်ဖို. browser  ရဲ. networking moudule ကနေ HTTP Protocol ကိုသုံးပြီး web server ဆီကိုဆက်သွယ်တယ်။ ဒီကြားထဲမှာ ဖြတ်သွားရတဲ့ networking layer တွေရှိတယ် မပြောတော့ဘူး။ အဲ့ဒီတော့ ကွန်ပျူတာ တလုံး နဲ. တလုံးနားလည်ဖို. ကြားထဲမှာ ဆက်သွယ်ရေးအတွက် တဖက်က  ဘာပေးရင် နောက်တဖက်က ဘာပြန်ပေးမယ် ဆိုတာကို protocol လို.ခေါ်ကြတယ်။ web client နဲ. web browser ကြားသုံးတဲ့ protocl သည် HTTP protocol ပဲ။ Hyper Text Trasnsfer Protocol လို.ဆိုကြတယ်။ ဒီ protocol ကိုနားလည်ရင် web server ကို လိုချင်တဲ့ web resource ဥပမာ html page, css file, image အစရှိတာတွေ လှမ်းတောင်းလို.ရမယ်။ ဒါကြောင့် web server ဆီကို browser ကနေ ပဲဆက်သွယ် ဆက်သွယ် မဟုတ်လို. program ကနေပဲ networking code ရေးပြီးဆက်သွယ်လဲ web server သည် နားလည်နေတာ။ ဆိုချင်တာက web server သည် HTTP Protocol ကိုနားလည်တယ်။ အဲ့တော့ ဘယ်သူပို.တယ် အရေးမကြီးဘူး ။ HTTP protocol ကနေပို.ရင် ရပြီ။ ဒါကိုဆိုချင်တာ။ ဥပမာ android code ကနေ networking library တွေသုံးပြီး web server ဆီကို REST လှမ်းခေါ်တာမျိုးလုပ်လို.ရမယ်။ User ကမမြင်ရပေမဲ့ web server နဲ. client ကြားမှာ   HTTTP နဲ.ပဲသွားနေတာ။

အောက်ကပုံက client နဲ. server ကြား ဘယ်လို သွားတယ်ဆိုတာကိုပြထားတာ။ Web client (Browser) နဲ. web server ကြားပေါ့။ Web server ကိုသေချာနားလည်ဖို. HTTP protocol ကိုအရင်နားလည်ဖို.လိုတယ်။

Protocol ဆိုတာ computer တလုံးနဲ.တလုံးကြား ဟန်ချက်ညီညီ ဆက်သွယ်ဖို.လုပ်ထားတဲ့ သဘောတူညီမှူ.လို အကြမ်းဖျင်းဆိုလို.ရမယ်။ Low level TCP/IP Protocol  တွေသည် binary data အနေနဲ.  transer လုပ်ကြတယ်။ Application level protocol တွေဖြစ်တဲ့ TCP/IP ကို HTTP အတွက်သုံးတယ်။ ဆိုချင်တာက HTTP သည် TCPကို အခြေခံထားတဲ့ text based protocol ဖြစ်တယ်လို.ပြောတာ။ နားလည်လွယ်အောင်ပြောတာဒါက။ အဲ့တော့ web client သည် web server ကို communicate လုပ်ဖို. အရင်ဆုံး TCP connection စဖွင့်ရတယ်။ ဒါကို Java မှာ  Socket ဆိုတဲ့ class နဲ.လုပ်လို.ရတယ် ။ ပြီးရင် HTTP request message ကို server ဆီကို ပို.လို.ရပြီ။ နောက် HTTP protocol သည် request -response protocol လို.ခေါ်တယ်။ ဘာလို.လဲဆိုတော့ web client သည် သူလိုချင်တာကို တောင်းရမယ် ပထမဆုံး ဒါကို request လို.ခေါ်တယ်။ အဲ့ဒီ request ကို server ကနေ ဖတ်မယ်။ Clent ဘာတောင်းတာလဲကြည့်မယ် အဆင်ပြေရင် ပြန်ပေးမယ် ဒါကို response လို.ခေါ်တယ်။ Request တခုလုပ်မယ် သူ.အတွက် response တခုပြန်လာမယ်။ နောက်   HTTP protocol ကို statless protocol လို.ခေါ်သေးတယ် ။ဘာလို.လဲဆိုတော့ ခုနက Request လာတယ် server ကနေ response ကိုပြန်တယ်။ server သည် client က ဘယ် request မှာ ဘာတောင်းတယ်ဆိုတဲ့ ဟာမျိုး ဘာ data ကိုမှ မှတ်မထားဘူး။ ဒါကြောင့် server သည် client  ရဲ. အခြေအနေ ဘာတခုမှမသိဘူး ဒါကြောင့်သူ.ကို stateless protocol လို.ခေါ်တယ်။ Stateless protocol ဆိုတော့ web application တွေမှာ state ထိန်းဖို.လိုလာပြီ။ ဥပမာ login ဝင်ထားတယ်။ page တိုင်းမှာ လိုက်မဝင်နိုင်ဘူး။ အဲ့တာမျိုးကို state ထိန်းတယ်လို.ခေါ်တယ်။ ထိန်းတဲနည်း နှစ်နည်းရှိတယ်။ Cookies တွေသုံးတာရယ်  web server မှာ session ဆိုတာရယ်နဲ.ထိန်းတာ။ Cookies သည် browser မှာသိမ်းတဲ့ ဖိုင်ပဲ။ Sesssion ကတော့ web server မှာသိမ်းထားတဲ့ file, request အပေါ်မူတည်ပြီး session id ပေးလိုက်ရင် ဆိုင်ရာ ဆိုင်ရာ session file ထဲမှာ web server ကနေ သိမ်းပေးတယ်။ ဒီလိုနည်းနဲ. state ထိန်းတယ်။HTTP 1.1 /HTTP 2.0ခုနောက်ဆုံး HTTP protocol version သည် ၂.၀ version 1.1 သည် ဒီမှာ

<https://tools.ietf.org/html/rfc2616>

version 2 သည် ဒီမှာ

<https://tools.ietf.org/html/rfc7540>

Protocol ရယ်လို. ဖြစ်ပြီဆိုလို.ရှိရင် သွားရမဲ့ message format သည် အတိအကျလိုက်နာရတယ်။ ဒါသည် protocol ရဲ.အသက်ပဲ \r\n space အဲ့လိုတွေတောင် သူ.နေရာနဲ.သူ အဓိပ္ဗာယ်ရှိတယ် (text based protocol မှာပေါ့)။ HTTP မှာအဓိက အသက်က Request Format နဲ.  Response format သည်အရေးအကြီးဆုံးပဲ။ Web server တခုရေးတော့မယ်ဆိုရင် ဒီ HTTP/1.1 လောက်ကို နားလည်ထားရင်အဆင်ပြေပြီ။

HTTP Request Forma, အောက်ကပုံက HTTP request format ပုံ

ပထမဆုံး တွေ.ရတဲ့ line သည် (GET /doc/test.html HTTP/1.1) သည်  request line လို.ခေါ်တယ် သူ.မှာ သုံးပိုင်းပါတယ်။ဒီလိုခွဲလို.ရတယ်
HTTP-METHOD RESOURCE_URL HTTP-VERSION
ဆိုပြီးတော့ HTTP method နေရာမှာ GET,POST,PUT,DELETE, OPTION, HEAD,TRACE အစရှိတာတွေဖြစ်နိုင်တယ်။ Method အပေါ်မူတည်ပြီး web server ကဘာလုပ်ရမလဲဆိုတာကို ဆုံးဖြတ်တယ်။ ဥပမာ ဒီမှာဆို GET သည် resource တခုကိုတောင်းတာဖြစ်တဲ့အတွက် သူရှာမယ် ဘယ် resource လဲဆိုတာကိုတော့ URL ကနေပြောတယ် ဒီဥပမာ ဆိုရင်တော့ /doc/test.html ပေ့ါ အဲ့တော့ web server က အဲ့ဖိုင်ကိုရှာမယ် client ကိုပြန်ပေးမယ်ပေါ့ နောက်ဆုံး request line က  HTTP/1.1 ကတော့ client သည် http version 1.1 ကိုနားလည်တယ် server ကို မင်းငါနဲ.ဆက်သွယ်ရင် version 1.1 အတိုင်းဆက်သွယ်လို.ရတယ်ဆိုတာကိုပြောတာ။Request line ကို\r\n နဲ.ပိတ်ရတယ် ဒီနေရာမှာ တော့ မမြင်သာဘူး။

Request line ပြီးသွားတော့ ဘာလာလဲဆိုတော့ request header လာတယ်။ Request header သည် ဘာတွေကိုပြောလဲဆိုတော့ request နဲ.ပတ်သတ်တဲ့meta dataတွေကိုပြောတယ်။ ဥပမာ  Host: hostname သည် ဘာကိုပြောလဲဆိုရင် client သည် test 101 .com ကိုဆက်သွယ်နေတာလို.ပြောတယ်။ Request header တကြောင်းချင်းမှာ key value အနေနဲ.သွားတယ်။ကြားထဲမှာ semicolon လေးခံရမယ်.အဆုံးသတ်ရင် \r\n ထဲ့ရမယ်။နောက် Accept-Encoding သည် ဘာကိုဆိုလိုချင်တာလဲဆိုရင် browser သည် server ကပြန်လာတဲ့ data ကို size သေးသွားအောင် compress လုပ်ပေးမယ်ဆိုလဲဖြစ်တယ် လက်ခံမယ်။ သူလက်ခံနိုင်တဲ့ format သည်  gzip format ဖြစ်တယ်ဆိုပြီးပြောတာ။

နောက်ဆုံး HTTP request message မှာပါတဲ့အပိုင်းကတော့ request body ပဲသူ.ကိုတော့ query string လို data တွေကိုသိမ်းတယ်။ GET ရဲ. request body သည် 64KB လောက်ပဲသိမ်းကြတယ်။ browser တခုနဲ.တခုတော့မတူဘူး။ ဒါကြောင့် file upload လိုကောင်တွေမှာ POST ကိုသုံးသင့်တယ်။

HTTP Response, အောက်ကပုံက HTTP response format ပုံ

ပထမဆုံးအကြောင်းက status line သူကဘာပြောလဲဆိုတော့ request operation သည် အဆင်ပြေလား မပြေလား အဲ့တာတွေကိုပြောတယ် ဥပမာ 200 ဆိုရင် အဆင်ပြေတယ်။ OK ပေါ့  500 ဆိုရင် server မှာ error တခုခုတက်သွားပြီ ဒီလိုဆိုလိုတာ။နောက် ကျတော့ဘာလာလဲဆိုရင် response header လာတယ်။ အဲ့မှာ အရေးကြီးတာက Content-Type:text/html ဆိုပြီး ပါတဲ့ MIME type သူ.ကိုကြည့်ပြီး browser က html လား image လား css လား ခွဲခြားရတာ။ နောက်ဆုံး header တွေပြီးသွားရင် blank line လာမယ်။ နောက်ဆုံးမှာ response body လာမယ်။ အဲ့မှာ ခုနက request ကတောင်းတဲ့ ကောင်ပါလာမယ်။ html page ကိုတောင်းလို. အောက်ကလိုရမယ်။

```html
<h1>My Home Page</h1>
```

တကယ်လို. image တွေဘာတွေ တောင်းရင် binary content ဖြစ်နေမယ်။ အဲ့တာကိုကြည့်ပြီး browser ကနေ သင့်တော်သလို render လုပ်တာ
တော်သေးဘီ

<img src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.18169-9/18034132_10207213360211864_2875483648648923835_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=e7ob7NGoFBIQ7kNvgHACJ4x&_nc_ht=scontent.fbkk13-2.fna&oh=00_AYBQgWczObZlWRB5juQASIzASscT0r7VyzjHq7xbRQTmjQ&oe=66CA8F65" alt="d">

<img src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.18169-9/18034346_10207213362651925_8050647942113014536_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=neYWUEY930MQ7kNvgH7V17u&_nc_ht=scontent.fbkk12-1.fna&oh=00_AYCFAHPpFEKwiXwTihcXj5IdmUd6nj86Kn-ps4imBRMjiA&oe=66CA96C7" alt="d">

<img src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.18169-9/17991166_10207213363411944_5636199644868831168_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=_Oh7vA0ZW_MQ7kNvgGt4cEQ&_nc_ht=scontent.fbkk12-1.fna&oh=00_AYDUHVjP6_q63VStiQ7ptWnjC-9hq2zeaeafdhju-3tGlg&oe=66CA7AD0" alt="d">
