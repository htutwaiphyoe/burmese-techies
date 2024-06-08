# Web Development တစေ့တစောင်း

ဒါက programming စလေ့လာကာစ beginner တွေအတွက် ရည်ရွယ်ပါတယ်။ ကိုယ်က Web development လုပ်မယ်ဆိုရင် Frontend လား Backend လားဆိုပြီး မေးခွန်းတွေ ထုတ်တတ်ကြပေမယ့် စစချင်းမှာတော့ Frontend, Backend မခွဲပဲ သေချာ လေ့လာခဲ့စေချင်ပါတယ်။

Website တွေ၊ Web App တွေရေးတယ်ဆိုတာ Browser ထဲမှာ သုံးရတဲ့ software တွေ တည်ဆောက်တာကို ခေါ်တာပါ။ Browser တွေမှာ user တွေအတွက် အသုံးဝင်စေတဲ့ အဓိက feature 3 ခုရှိပါတယ်။

နံပါတ် ၁ က HTML document တွေကိုဖတ်ပြီး UI လို့ခေါ်တဲ့ Web page ရဲ့ User Interface ကို တည်ဆောက်ပေးနိုင်တာပါ။ HTML ကိုတော့ UI element တွေကို စာနဲ့ ချရေးပြထားတဲ့ format တမျိုးအဖြစ် မြင်ကြည့်နိုင်ပါတယ်။ ဒါပေမယ့် HTML ချည်းသက်သက်ဆိုရင် plain ဆန်တဲ့အတွက် UI ကို အလှဆင်ဖို့ အသုံးချတဲ့ CSS ဖိုင်တွေကိုလည်း Browser က နားလည်ပါတယ်။

နံပါတ် ၂ က Browser မှာ HTTP client လို့ခေါ်တဲ့ software ပါတယ်။ Browser က အဲဒီ software ကိုသုံးပြီး server ဆီ HTML, CSS ဖိုင်တွေ လှမ်းတောင်းတယ်။ ရလာတဲ့ ဖိုင်တွေကိုဖတ်ပြီး UI ဆောက်ပြီး user ကိုပြပါတယ်။ မှတ်သင့်တာက Web App တွေက Browser နဲ့အတူ ပါမလာပါဘူး။

ဥပမာ Chrome, Safari စသဖြင့် Browser တွေ install လိုက်တာနဲ့ Facebook, Youtube တခါတည်း ပါမလာပါဘူး။ သုံးမယ်ဆိုတော့မှသာ ဆာဗာဆီက စောစောကပြောတဲ့ HTML, CSS, JS ဖိုင်တွေ လှမ်းယူပြီး ဖွင့်လို့ရတာဖြစ်တယ်။

JS ဖိုင်တွေပါလာပြီဆိုတော့ နံပါတ် ၃ အချက်က Browser တွေမှာ JavaScript Engine ပါတယ်ဆိုတာပါ။ HTML ရယ် CSS ရယ်ပဲဆိုရင် Web page တွေက အတိုင်းအတာတခုထိပဲ Interactivity ရှိနိုင်မှာဖြစ်တယ်။

ဒါကြောင့် Web page ကနေ တကယ့် application တခုလို အလုပ်လုပ်နိုင်ဖို့အတွက် JavaScript code သုံးပြီး HTML, CSS ဖိုင်တွေကို ထိန်းချုပ်ကြပါတယ်။ အဲဒီ JS ဖိုင်တွေကိုလည်း run နိုင်အောင် Browser က တည်ဆောက်ထားပါတယ်။
Browser ထဲ JavaScript တခုပဲ ရနိုင်တာလားဆိုရင် ဟုတ်ပါတယ်။ လက်ရှိအထိတော့ စံက JavaScript ပါပဲ။ Wasm က စံအဖြစ် ရောက်မလာသေးပါဘူး။

ဒီအချက်တွေကို ပြန်ကောက်ရရင် Web development လုပ်တယ်ဆိုတာ server application ကို ရေးရတာပါ။ တိတိပပ ပြောရရင် ကွန်ပျူတာ ဆာဗာတခုပေါ်မှာ အလုပ်လုပ်မယ့် program ကိုရေးရတာဖြစ်တယ်။

အဲဒီ server program ရဲ့ အခြေခံတာဝန်က Browser ကနေ ဆက်သွယ်လာတဲ့အခါ HTML, CSS, JS ဖိုင်တွေ မှန်မှန်ကန်ကန် ပြန်ပေးလိုက်နိုင်ဖို့ဖြစ်တယ်။ အဲဒီ server program ကို ရေးဖို့အတွက် Java, Python, Go, PHP ဘယ် language ကိုမဆို သုံးနိုင်တယ်။ ဒါပေမယ့် Browser ပေါ် ရောက်သွားရင်တော့ JavaScript ကိုသာ နားလည်တဲ့အတွက် JS ဖိုင်တွေနဲ့တော့ ပတ်သက်နေရဦးမှာဖြစ်တယ်။

Web development ကို ဒီလိုလေ့လာသွားရင်း Templating, DOM manipulation, Input form, Sanitization, Sessions, Cookies, HTTP, Persistence, Idempotency စတဲ့ ​ခေါင်းစဥ်တွေကို ထိတွေ့ခဲ့သင့်ပါတယ်။

ဒီထဲမှာ heavy အဖြစ်ဆုံးက Persistence ဖြစ်ပါလိမ့်မယ်။ Database system တခုကို ကိုယ့် server program ကနေ လှမ်းချိတ်ဆက်ပြီး လိုအပ်တဲ့ ဒေတာတွေကို ဖတ်၊ သိမ်း၊ ပြင်၊ ဖျက်နိုင်ဖို့ လေ့လာရမှာပါ။ အဲအတွက် Relational နဲ့ Non-relational Database တွေကို ထိတွေ့ဖူးသွားပါလိမ့်မယ်။

ဒါတွေ နားလည်ခဲ့ပြီးမှ Tradtional Web App တွေကတဆင့် Frontend နဲ့ Backend နှစ်ခုသီးသန့်အဖြစ် ရွေ့လျားလာပုံကို နားလည်သွားရင် ရှေ့ဆက်ရမယ့်ခရီးမှာ အများကြီး အခြေခိုင်သွားမယ်လို့ ကျွန်တော် ယူဆပါတယ်။

ဒီ link က 2023 တုန်းက Frontend focused Roadmap ပါ။ သိပ်ခေတ်မမှီတော့ပေမယ့် မှီငြမ်းချင်ရင် ကြည့်လို့ရတယ်။
[https://m.facebook.com/story.php?story_fbid=178816218527931&id=100091986627989](https://m.facebook.com/story.php?story_fbid=178816218527931&id=100091986627989)

အောက်ကတော့ Free Codecamp က ထုတ်ထားပေးတဲ့ 2024 ခုနှစ်အတွက် Backend Roadmap ပါခင်ဗျာ။
[https://m.facebook.com/story.php?story_fbid=321771784232373&id=100091986627989](https://m.facebook.com/story.php?story_fbid=321771784232373&id=100091986627989)
