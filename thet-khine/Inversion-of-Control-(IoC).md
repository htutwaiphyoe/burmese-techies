# Inversion of Control (IoC)

Dependency Injection အကြောင်းပြောရင် IoC က တွဲပါလာတယ် တချို.က ၂ခုကို တူတူပဲလို.ထင်ကြတယ်။ ဟိုတရက်ကပဲ စဆရက တကောင် DI အကြောင်းရှင်းရင် IoC အကြောင်းမပါရင် မရဘူး လာလုပ်သွားသေးတယ်။ စောက်ရူးတွေ မိနစ်တိုင်းမွေးနေတယ်ဆိုတာ ဟုတ်လောက်တယ်။ တခုတည်းရှင်းရင် ရှုပ်မှာစိုးလို.သပ်သပ်ချန်ခဲ့တာ။ DI နဲ. IoC က related ဖြစ်တယ် အတူတူတော့မဟုတ်ဘူး။

Inversion of Control လို.ပြောရင် Control ဆိုတာဘာကိုလဲဆိုတာအရင်ပြောရမယ်။ Control ဆိုတာ flow of control, ဆိုချင်တာက application က code flow, method flow, object creation အစရှိတာတွေကိုပြောတာ။ အဲ့ကောင်တွေကို ပြောင်းပြန် ဖြစ်စေတာကို inverse လုပ်တယ်လို.ခေါ်တယ်။ ဒါကြောင့် inversion of control လို.ခေါ်တာ။ ဘယ်လိုတုန်းဆိုရင် ပထမ DI example မှာတုန်းက Car ဖို.လိုအပ်တဲ့ Engine ကို Car က မဆောက်ပဲ ဆောက်ပြီးသား engine object ကို constructor parameter အနေနဲ. လက်ခံတယ်။ အဲ့ဒီလိုတဲ့ Engine ကိုကျတော့ ဘယ်သူကဆောက်ပေးမှာလဲဆိုတော့ framework က ဆောက်ပေးမယ် ။ ဒါဆိုရင် ပထမ DI မှာ ပြတဲ့ ဥပမာမှာ engine ကိုဆောက်တာသည် car တာဝန်မဟုတ်တော့ပဲနဲ. framework တာဝန်ဖြစ်သွားတယ်၊ Object creation ဖြစ်တဲ့ (control ကို) Car သည် မလုပ်တော့ပဲနဲ. framework ကလုပ်သွားမယ် ဒါကို inversion of control လို.ခေါ်တယ်။  Car က object creation(Engine object) ကို control လုပ်ရာကနေ framework တာဝန်ဖြစ်သွားတယ်၊ Object creation (control) သည် Car ကနေ framework ဘက်ကို ပြောင်းသွားတယ်။ ဒါကို inversion of control လို.ခေါ်တယ်။

ဒီနေရာမှာ မေးခွန်းတခုက Framework က ဘာလို. Object creation flow ကို control လုပ်တာလဲ ဘာပိုကောင်းလာလဲပေါ့။ ဒီနေရာမှာ Hollywood principle ကိုပြောဖို.လိုလာတယ်။ Hollywood principle ကို တခါတလေ Inversion of Control လို.လဲသုံးတယ်။ Principle က ဘာလဲဆိုတော့ "Don't call us, we'll call you" ဆိုတာပဲ။

Hollywood ကို လူတွေက သိချင်တာတွေ ဖုန်းဆက်လှမ်းမေးတော့ တခုခုဆို call အရမ်းများတယ် အဲ့တော့ စုံစမ်းတဲ့လူတွေ ဖုန်းနံပါတ်ကိုတောင်းထားလိုက်တယ် သူတို.လိုချင်တဲ့ အချက်အလက် ရောက်တာဆိုရင် လှမ်းအကြောင်းကြားတယ်။ ဒီနေရာမှာ API နဲ. framework အကြောင်းရှင်းပြဖို.လိုလာတယ်။

API ဆိုတာကိုက လိုချင်တာလေးကို လှမ်းခေါ်လိုက်တာမျိုး။ Framework ကျတော့ ကိုယ်ရေးထားတဲ့ code တွေကို သူက ခေါ်သွားတာ API ထက်ပိုအဆင့်မြင့်တယ် အဲ့တော့ user က လိုအပ်တဲ့ module တွေ code တွေပေးလိုက်မယ် သူ.ရဲ. template algorithm အတိုင်းခေါ်သွားမယ်။ Client က အကုန်လုံးလုပ်စရာမလိုတော့ဘူး ဥပမာ Object creation လို life cycle management လို ကိစ္စတွေ ခေါင်းစားစရာမလိုတော့ဘူး ။ ဥပမာ Car က engine ကိုလိုတယ်ဆိုရင် engine ကို Car မဆောက်ခင်မှာ framework က ဆောက်ပေးလိုက်မယ်၊ ဒါဆို Object creation နောက် engine ကိုဘယ်အချိန်မှာ deallocate လုပ်မလဲဆိုတာ framework က စဉ်းစားမယ် အဲ့တာတွေကို life cycle management လို.ခေါ်တာ။

မေးစရာရှိတယ် ဘာလို. framework က အဲ့တာတွေလုပ်ပေးနေရတာလဲဆိုရင် loose copuling နဲ. high cohesion ဖြစ်အောင်လို. loose copuling ကတော့ရှင်းပြီးပီ high cohesion ဆိုတာ class တခုက သူ. function တွေ method တွေအပေါ်များများ မှီခိုလေ သုံးလေ cohesion များလေပေါ့ ကောင်းတယ်ပေါ့။ အဲ့လိုရချင်လို. framework ကိုတချို.အလုပ်တွေ လုပ်ခိုင်းလိုက်တာ။ Car သည် engine ကို တိုက်ရိုက် မဆောက်ပဲ framework ကိုပေးဆောက်လိုက်တဲ့အခါ loose coupling ဖြစ်သွားတယ်။ Engine တခုတည်းမဟုတ်ပဲ သူ.က ဆင်းလာမဲ့ hierarchy ပါနောက်တချိန်မှာ အစားထိုးပေးလို.ရသွားမယ်။ နောက်တခုက car သည် သူနဲ.မဆိုင်တဲ့ engine creation ကိုမလုပ်ရတော့အတွက် သူများကို မှီခိုရတဲ့ code (object creation) နည်းသွားတယ် အဲ့တော့ cohesion တက်လာမယ်။

ခုနက Object creation flow ကို application code ကနေ ထိန်းတာမဟုတ်ပဲ framework ကနေ ထိန်းတဲ့ကောင်တွေကို IoC container လို.ခေါ်တယ်။ အဲ့လိုလုပ်တဲ့ နည်းက အဓိက အားဖြင့်
Service Locator Design Pattern
Factory Design Pattern
Dependency Injection Pattern
တွေသုံးပြီးလုပ်လို.ရတယ်။ ဆိုချင်တာက IoC container ဆိုတိုင်း DI ပါစရာမလိုဘူးပြောတာ၊ Flow of control ကို invert လုပ်ပေးရင်ရပြီ ။ Service locator မှာဆိုရင် သူက လိုချင်တဲ့ dependency တွေကို lookup ခေါ်ပြီး client က လုပ်နေရတာ အဲ့တော့သိပ်အဆင်မပြေဘူး Factory ကလဲ ဒီအတိုင်းပဲ အဲ့တော့ DI ကိုသုံးတယ်။

DI မှာကျတော့ Framework or container က configuration တွေကိုကြည့်ပီး ဘယ် Object တွေ သည် ဘယ် dependency ရှိတယ် ဘယ် ကောင့်ကို အရင်ဆောက်ရမယ်။ ဥပမာ A သည် B ကိုလိုတယ် B သည် C ကို လိုတယ် ဒါဆိုရင် dependency graph အရ C->B->A C ကိုအရင်ဆောက် B ထဲကို inject ထဲ့ပေး B ရလာမှ A ကိုဆောက်ပေးအဲ့လိုလုပ်သွားတယ်။ Cyclic တော့မရဘူး၊
Inject လုပ်တဲ့နည်းက အဓိက ၃ မျိုးရှိတယ်

Constructor Injection ( Dependency လိုတဲ့ကောင်တွေကို Constructor မှာ parameter အနေဲ.ထားရင် framework က အဲဒီလိုတဲ့ dependency တွေကိုအရင်ဆောက် ပြီးမှ constructor ထဲကိုထဲ့ပေးလိုက်တာ)
Setter  injection( လိုတဲ့ dependency ကို setter တွေသုံးပြီး ထဲ့ပေးလိုက်တာ)
Interface injection( Interface အနေနဲ.ထားတဲ့ dependency တွေကို အဲ့ interface ကို implement လုပ်ထားတဲ့ ကိုက်ညီတဲ့ dependency ထဲ့ပေးပီး inject လုပ်တာ။
ခုနက Injection တွေကို run time မှာလုပ်တာရှိတယ် ဥပမာ Spring , နောက် android dagger လိုကောင်တွေဆို compile time မှာလုပ်တယ်။ runtime မှာလုပ်ရင် peformance နည်းနည်းထိလို. android လို resource နည်းတဲ့ကောင်တွေကျတော့ compile time မှာကတည်းကလုပ်တယ်လို.ယူဆရမယ်။
(အတော်ရှုပ်သွားမယ်လို.လဲ ထင်ပါတယ်)
