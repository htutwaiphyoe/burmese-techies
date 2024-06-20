# How does Angular work

Angular ကတော်တော်ကြီးတဲ့ framework ဖြစ်တော့ React တို.လို library တွေလို နားလည်ဖို.သိပ်မလွယ်ပါဘူး။ In depth ကိုဆိုချင်တာပါ။

အဓိက Angular မှာ component rendering တွေဘယ်လိုလုပ်သွားသလဲဆိုတာရယ် တခုခု state ကို change တိုင်းမှာ UI view ကိုဘယ်လို update လုပ်သွားတယ်ဆိုတဲ့အကြောင်း အဓိကပြောချင်တာပါ။

Angular application တွေမှာ component တွေဆောက်ပြီး view အနေနဲ.သုံးပါတယ်။ Application တခုလုံးကို tree of view အနေနဲ. ထားပါတယ်။ DOM ပုံစံပဲပေါ့။ ဒါပေမဲ့ internally မှာ component တခုကို Element Definition(tag တွေဖို.),Text Element definition , Node element definition ဆိုပြီးဆိုင်ရာဆိုင်ရာလေးတွေ ခွဲထားပါတယ်။
Component တခုဆောက်ပြီဆိုရင် angular compiler ကနေ component factory ကိုဆောက်ပါတယ် အဲ့ဒီဆိုင်ရာ component အတွက်ပေါ့။ Component တခုချင်းဆီအအတွက် factory က တခုစီပါ။ နောက် component (view) တခုချင်းဆီအတွက်တော့ instance တခုချင်းဆီဆောက်ပါတယ်။

React မှာ view တွေကိုဘယ်အချိန်မှာ update လုပ်သလဲဆိုတော့ setState ကိုခေါ်တဲ့အချိန်ပါ။ Angular မှာတော့ အဲ့လိုမရှိပါဘူး component ထဲက instance တခုခုကိုဖြစ်ဖြစ် child attribute တခုခုကိုဖြစ်ဖြစ် ပြောင်းလိုက်တာနဲ. application က UI ကို auto update လုပ်ပါတယ်။

အဲလိုလုပ်နိုင်အောင် angular က ဘာသုံးသလဲဆိုရင် change detection mechanism ဆိုတာကိုသုံးရပါတယ်။ဘာလုဆိုတော့ application ရဲ. ဘယ်နေရာမှာပြောင်းသွားပြီလဲ update လုပ်ရတော့မလားဆိုတာကို root tree ကနေ အောက်ထိဆင်းပြီးတွက်တာပါ(heurisitc ကိုသုံးပါတယ် အကုန်လိုက်တိုက်တာမျိုးမဟုတ်ပါဘူး)။

ခုနက change detection ကိုလုပ်ဖို. angular မှာ zone ဆိုတဲ့ concept ရှိပါတယ် ဆိုချင်တာက angular code အကုန်လုံးက zone ထဲမှာ run တယ်ပေါ့။ zone ထဲမှာ တခုခု run လိုက်တာနဲ. (angular code တခုခု run လိုက်တာနဲ.) change detection က ထ run ပါတယ်။ ပြီးတာနဲ. DOM ကို update လုပ်ပါတယ်။

အဲ့လို zone ကို run တာနဲ. angular က change detection ကို run နိုင်အောင် browser က event API, asynchronous API code တွေကို overwrite လုပ်ထားရပါတယ်၊ ဉပမာ user က mouse move လုပ်လိုက်တယ်။ အဲ့တာဆိုရင် mouse move ပြီးတာနဲ. တခုခုပြောင်းသွားနိုင်တယ် model မှာ အဲ့တာဆိုရင်အဲ့အပေါ်မူတည်ပြီး view ကို update လုပ်ရမယ်။

ဒါကိုထိန်းဖို.အတွက် mouseevent hanlder တွေ တခြား event handler တွေအကုန်လုံးကို angular ကနေ overwrite လုပ်ပြီးတော့ mousemove လုပ်တိုင်းမှာ change detection ကို run ဖို.လုပ်ပါတယ်။တခြား event တွေလဲဒီအတိုင်းပါပဲ။

Application programmer ကနေ mouse move event ကို bind တဲ့အခါ angular ကနေ modified လုပ်ထားတဲ့ mouse move event သည် user ပေးလိုက်တဲ့ code ကို run ပြီးတာနဲ. change detection ကို trigger လုပ်ပါတယ်။ ဒီလိုနည်းနဲ. application တခုလုံး UI view ကိုထိန်းသွားပါတယ်။

အဲ့တော့ user က keypress တခုနှိပ်လဲ  change detection လုပ်နိုင်ပါတယ်။ အဲ့ကျရင် performance ထိခိုက်နိုင်ပါတယ်။ ဒါကိုကာကွယ်ဖို. ngZone ရဲ.အပြင်မှာ code တွေကို run လို.ရပါတယ်။ ပြီးရင်တော့ UI ကို change စေချင်ရင် change detector ကို manually detect လုပ်ခိုင်းလို.ရပါတယ်။

Change detector ဘယ်အချိန်ထထ run လဲသိချင်ရင် Component မှာ ngOnChanges ကို implement လုပ်ပြီး console.log လေးထုတ်ကြည့်ရင်သိနိုင်ပါပြီ။
