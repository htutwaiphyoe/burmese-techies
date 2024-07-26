# How web browsers work

Developer တွေ နေ.တိုင်းသုံးနေရတဲ့ software ထဲမှာ web browser တွေကထိပ်ဆုံးကပါတယ်။ Web Development လုပ်ပြီ ဒါမှမဟုတ် Enterprise Application ရေးပြီဆိုရင် (Mobile App တွေကို HTML5 Hybrid Application တွေသုံးပြီး ရေးရင်လဲ) Browser တွေဘယ်လို အလုပ်လုပ်သလဲ။ JavaScript engine နဲ.တွဲပြီး ဘယ်လိုအလုပ်လုပ်သလဲ ဘာတွေက နှေးစေသလဲ ဘယ်လိုတွေလုပ်ရင် မြန်နိုင်မလဲ အစရှိတာတွေကိုသိဖို.လိုလာတယ်။ ဒါမှ Optimization ကိုကောင်းကောင်းလုပ်နိုင်မှာကိုး။

Developer တွေနောက်ရင်ဆိုင်ရတဲ့ ပြဿ နာတခုက browser implementation တွေအများကြီးရှိနေတာ အဲ့တော့ Cross Browser issue တွေ ဥပမာ CSS တခုက တချို. browser မှာအဆင်ပြေပေမဲ့ တချို. browser တွေမှာ အဆင်မပြေတာမျိုး (IE အဆိုးဆုံးပဲ) နောက် JavaScript code အတူတူချင်းတောင် တချို. browser မှာအလုပ်လုပ်ပြီး နောက်တခုဆိုအလုပ်မလုပ်တော့တာမျိုးကြုံရတယ်။ ဘာလို.အဲ့လိုတွေဖြစ်ရသလဲ ဆိုတာ Browser တွေဘယ်လိုအလုပ်လုပ်တယ် ဘာတွေနဲ.တည်ဆောက်ထားတယ်ဆိုတာကို နားလည်ထားရင်သိနိုင်မယ်။

Browser တခုထဲမှာ ဘာတွေပါတယ် ဘယ်လိုအလုပ်လုပ်လဲဆိုတာကို ဒီလင့်ကနေ သွားကြည့်လို.ရတယ်။ နည်းနည်းရှည်ပေမဲ့ ပြည့်စုံတယ်။

<https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/>

အောက်က ပုံက Browser တခုမှာပါတဲ့ Component တွေကိုပြထားတာ။ တကယ်တမ်း Programmer တွေ သိထားဖို.လိုတာက Rendering Engine နဲ. JavaScript Engine ရယ်နှစ်ခုပေါ့။ User interface ပြတဲ့ အပိုင်းတွေ HTML rendering လုပ်တဲ့အပိုင်းတွေကို Rendering Engine လို.သုံးကြတယ်။ နောက် Javascript ကို execute လုပ်တဲ့အပိုင်းကိုတော့ JavaScript Engine လို.သုံးကြတယ်။ Browser တခုမှာ အဲ့ဒီ နှစ်ခု အဓိက ပါတယ်။

User ကနေ address bar မှာ URL တခုရိုက်လိုက်ပြီဆိုရင် browser ရဲ. network module (Browser တော်တော်များများက C++နဲ.ရေးထားတာ) ကနေ ခုနက URL ရှိတဲ့ web server ကို HTTP Protocol သုံးပြီး web page ကိုလှမ်း ယူတယ်။ Server ဘက်က static HTML ဆိုရင် html ကို ပဲ return ပြန်မယ် မဟုတ်လို. dyanmic resource တခုခု ဥပမာ server side langauge တခုခုဆိုရင် သူ.ကို execute လုပ်ပြီး ရလာတဲ့ result (html text)တွေအနေနဲ. browser က ရမယ်။ အဲ့ဒီရလာတဲ့ HTML content တွေကို Browser ရဲ. HTML parser ကနေ parse လုပ်ရတယ်။ HTML တင်မကဘူး visual layout အပိုင်းမှာ CSS လဲပါတဲ့အတွက် CSS parser ကိုလဲသုံးရတယ်။ HTML ကို parse လုပ်ရတာ နည်းနည်းလက်ဝင်တယ်။ ဘာလို.လဲဆိုတော့ သာမာန် Programming langauge တွေမှာဆိုရင် grammar rule သည် strict ဖြစ်တယ်။ HTML မှာတော့ အဲ့လောက်မတင်းကျပ်ဘူး ဆိုချင်တာက start tag တော့ပါမယ် end tag မပါဘူး ဒါတွေကို HTML parser ကနေ နားလည်အောင် ကျော်ဖတ်ရတယ်။ ဒါကြောင့် parsing က တခြား language တွေထက် စာရင် ပို ရှုပ်တယ်။

HTML ကို parse လုပ်ပြီးရင် ဘာရမလဲဆိုတော့ DOM tree ရမယ် Document Object Model ပေါ့။ DOM tree ဆိုတာ ခုနက html element တွေကို tree ပုံစံဆောက်ထားတယ်။ သူ.မှာ attribute တွေ class တွေပါမယ်။ ဒါကို DOM tree လို.ခေါ်တယ်။ Programmer တော်တော်များများက DOM code နဲ. JavaScript Code ကိုလဲမကွဲဘူး။ DOM ကိုဘယ်သူက ထိန်းရလဲဆိုတော့ rendering engine ကနေ ထိန်းရတယ်။ JavaScript code ကိုကျတော့ JavaScript engine ကနေ ထိန်းရတယ်။ ဒါကြောင့် JavaScript statement တွေသုံးရင် မြန်မယ် DOM ကို access လုပ်ရင် နှေးတယ် အဲ့လိုဖြစ်တာ။ ဥပမာ

getElementsById() ဒီ method သည် DOM ကို access လုပ်တဲ့ method ပဲ သူ.ကို အလုပ်လုပ်ဖို. browser ရဲ. rendering engine က ဟိုးအစကနေ id နဲတူတဲ့ DOM node ကိုလိုက်ရှာရတယ်။ Tree traversal လုပ်ရတဲ့အတွက် အဲ့ဒီမှာ တခါကြာတယ်။ ဒါကြောင့် getElementById call ကို JavaScript engine ကတွေ.တဲ့အခါ browser ရဲ. rendering engine ရဲ. method တွေကို လှမ်းခေါ်ရတယ် ။ tree traverse လုပ်ရမယ် ဒါကြောင့်ကြာနိုင်တယ်။

if , while, တို.လို. ရိုးရိုး statement တွေကျတော့ JavaScript engine မှာပဲ run လိုက်ယုံပဲ ဒါကြောင့် မြန်တယ်။ နောက် DOM tree ကနေ browser သည် browser window ပေါ်မှာ မြင်ရတဲ့ visual element တွေဖြစ်အောင် render tree ဆောက်ရတယ်။ Render tree ကနေ layout ချရတယ် ဥပမာ ဘယ် element သည် width height ဘယ်လောက်ယူမလဲ သူ.ဘေးမှာ ဘယ် element ရှိမယ် အပေါ်မှာတော့ဘယ်သူရှိမယ် အစရှိသဖြင့် layout ဆောက်ရတယ်။ နောက်ခုနက ရတဲ့ layout ကို paint လုပ်ရတယ်။ paint လုပ်ရတယ်ဆိုတာ ဥပမာ CSS အရ color တွေ ဖြည့်တာ font တွေလိုသလိုပြောင်းပေးတာ visual element တွေပေါ်အောင်လုပ်တာကိုပြောတာ။ အဲ့ဒီတော့ programmer က ဒီလို code လေးတခုလောက်ရေးလိုက်မယ်ဆိုရင် jQuery နဲ.ပေါ့။

```js
$(“#someId”).css(“color”,”green”);
$(“#someId”).css(“background”,”blue”);
```

statement သည် ၂ကြောင်း jQuery သည် dom element someId ကို ရှာမယ်။ ဒါသည် jQuery က caching လုပ်ထားသလားမလုပ်ထားသလားအပေါ်မူတည်ပြီး မြန်တာ နှေးတာရှိနိုင်တယ်။ နောက် သူ.ရဲ. css ကိုပြောင်းမယ် ပထမဆုံး color ကို green ပြောင်းလိုက်တယ်။ အဲ့တော့ DOM object ပြောင်းပြီ နောက် render tree ပြောင်းတယ်။ သူ.ချည်းပဲလားဆိုတော့မဟုတ်သေးဘူး element တခုက ဥပမာ width ပြောင်းလိုက်ပြီဆိုရင် သူ.ရဲ. parent တွေကိုပါပုံပြောင်းသွားနိုင်တယ် အဲ့ဒိတော့ ခုနက DOM , render tree, layout construction ,paint အစရှိတာတွေက ကိုယ်ပြောင်းလိုက်တဲ့ element တင်မကဘူး ။ သူူ.အပေါ်မှာရှိတဲ့ကောင်တွေ browser ကမြင်နေရတဲ့ element တွေအကုန်လိုက်တွက်ရတယ်။နောက်ပြန် paint လုပ်ရတယ် အဲ့တော့ ကြာတယ်။ ဒါကို page reflow လို.ခေါ်တယ်။ အဲ့တော့ attribute တခုလောက်ပြောင်းတာ css တခုလောက်ပြောင်းတိုင်းမှာ page reflow ဖြစ်တယ်။ ဒါဆိုမြန်အောင် batch နဲ. ရေးလို.ရတယ်။ ဒါဆိုရင် ဒီလိုရေးလို.ရမယ်

```js
$(“#someId”).css({
 “color”:”green”,
 “background”:”blue”
 });
```

အဲ့တာဆိုရင် page reflow သည် ၂ခါမဖြစ်တော့ပဲ တခါတည်းဖြစ်သွားတဲ့အတွက်ပိုမြန်တယ်။ နောက် DOM node element တွေကို insert, delete လုပ်မယ်ဆိုရင် လဲ browser သည် visual element အားလုံးကိုပြန်တွက်ရတယ်။ ဒါကြောင့် memory ပေါ်မှာ အားလုံး တခါတည်းဆောက်ပြီး batch အလိုက် append လုပ်တာကပိုမြန်တယ်။ ဒါသည် rendering အပိုင်း။

Browser တွေရဲ. အဲ့လို page reflow problem ကိုဖြေရှင်းဖို. virutal dom သုံးတဲ့ library တွေပေါ်လာတယ်။ ဥပမာ React.js.

ဘာတွေက page reflow ကိုဖြစ်စေသလဲဆိုရင် ဒီလင့်သာသွားကြည့်

<https://gist.github.com/paulirish/5d52fb081b3570c81e3a>

Mobile မှာကျတော့ဘာပြဿ နာရှိသေးလဲဆိုတော့ 300 milisecond rule ဆိုတာရှိတယ်။ ဥပမာ element တခုကိုနှိပ်ရင် ချက်ချင်း click မဖြစ်ဘူး ဘာလို.လဲဆိုတော့ browser က zoom လုပ်ဖို. tap တာလား click တာလားသိရဖို.စောင့်တယ်။ အဲ့တော့ responsiveness နှေးတယ်။ 300 milisecond rule ကိုဖြေရှင်းဖို. fast click လို library တွေရှိတယ်။

Firefox က Gecko rendering engine ကိုသုံးတယ်။ Chrome နဲ. safari က Webkit ကိုသုံးတယ်။

JavaScript engine ကျတော့ firefox က Spider Monkey ကိုသုံးတယ်။ Chrome ကတော့ v8 ကိုသုံးတယ်။ V8 ကို Node.js မှာလဲသုံးတယ်။ နောက် Developer တွေအတွက်ပြဿနာ တခုက Garbage collection မှာ Web application တွေက ၂ခုလုပ်ရတယ်။ Browser rendering engine အတွက်တခုရယ် JavaScript engine အတွက်ရယ်။ IE အဟောင်းတွေမှာ Circular memory leak ဖြစ်နိုင်တယ်။ JS object ကနေ DOM ကိုညွှန် DOM ကနေ JS object ကိုညွှန် ၂ခုလုံးကတော့ အသုံးမလိုတော့ဘူး။ Reference counting သုံးတဲ့ GC တွေမှာဖြစ်တယ်။ Chrome မှာတော့ developer tool မှာ heap ကို snapshot ရိုက်ပြီး လက်ရှိ memory ပေါ်မှာ ဘယ် Object တွေရှိတယ်.Heap memory ကိုအတက်အကျ စတာတွေကိုဖမ်းလို.ရတယ်။ Web application တွေမှာ memory leak ရှိတယ်။ ကြုံဖူးဖို.မပြောနဲ. ကြားဖူးမဲ့သူတောင်ရှားမယ်ထင်တယ်။ တော်သေးဘီ။

JavaScript engine တွေကလဲ အမျိုးမျိုးရှိတော့ ဘယ် browser အတွက် ဘယ်လို optimize code ဖြစ်အောင် ရေးမလဲဆိုတာသိနိုင်ဖို. JavaScript engine တခုအလိုက်သိဖို.လိုတယ်။
