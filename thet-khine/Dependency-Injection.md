# Dependency Injection

Dependency Injection ကိုခုခေတ် modern application framework တွေမှာ မဖြစ်မနေသဘောကိုသုံးလာတယ်။ Frontend , backend, Mobile, framework တွေမှာ မပါတာမရှိသလောက်ပဲ။ သက်ဆိုင်ရာ dependency injection framework တွေ container တွေ specific implementation ကိုမရှင်းပဲနဲ. theoretical ပိုင်းဆိုရင်ကို နားလည်အောင်ပဲပြောမှာပါ။

Dependency Injection ဆိုရင် ပထမဆုံး စရှင်းရမှာ က dependency ပါ။ Dependency ဆိုတာ တခုက တခုအပေါ်မှာ မှီခိုနေတယ်၊ ဥပမာ ကားသည် အင်ဂျင်မပါပဲနဲ. အလုပ်လုပ်လို.မဖြစ်ဘူး၊ အဲ့တော့ကားသည် engine အပေါ် depends ဖြစ်နေတယ် dependency ရှိနေတယ်ပေါ့၊ Code example နဲ.ပြရင် ဒီလိုဖြစ်မယ်။

```java
class Car
{
 Engine engine = new Engine();
 //Other code
 void drive()
 {
 engine.start();
 } 
}
```

အပေါ်က code ကိုကြည့်ရင် Car class ထဲမှာ engine ကို composition အနေနဲ.သုံးထားတယ်။ သဘောအရ car သည် သူ. functionality အတွက် engine object ရဲ. functionality ကိုလိုအပ်တယ် ဒါကြောင့် composition ဆောက်ပြီး သုံးထားတယ်။ အဲ့တော့ Car object ဆောက်တာနဲ. တပြိုင်နက် engine object ကလိုလာပြီ ခုနကပြတဲ့ပုံစံအတိုင်းဆိုရင် တခါတည်း တန်းဆောက်မယ်။ စာအရပြောရရင် Car သည် engine အပေါ်မှာ depends ဖြစ်နေတယ် ဒါသည် dependency။ အတိအကျ ပြောရရင် ကားသည် engine မပါပဲ အလုပ်လုပ်လို.မရဘူး မရှိမဖြစ်လိုတယ် ဒါကို dependency လို.ခေါ်မယ်။ လိုတာတောင် အပိုင်းအသေးလေးအနေနဲ.လိုတာမဟုတ်ပဲနဲ. အစိိတ်အပိုင်းတခုလိုကိုလိုနေတာ။

Dependency အကြောင်းပြောမယ်ဆိုရင် coupling အကြောင်းပြောရမယ် ။ Coupling ဆိုတာ ချိတ်ဆက်နေတာ ချိတ်ဆက်နေတယ်ဆိုတာ လုံးဝကြီး depend ဖြစ်နေတာလဲ ရှိနိုင်သလို နည်းနည်းလေးလောက်လိုတာလဲဖြစ်နိုင်တယ်။ Dependency နဲ. coupling ကို ရောထွေးယှက်တင် အသုံးပြုကြတယ်။

Coupling ဆိုတာကလဲ class A သည် B ရဲ. property ဒါမှမဟုတ် method တခုခုကို ယူသုံးရတယ် ဆိုရင် coupled ဖြစ်တယ်၊ ဆိုချင်တာက coupling သည် ၂ဘက် နေရာကနေ ကြည့်တာ ချိတ်ဆက်တယ်ဆိုတာ တယောက်တည်းချိတ်လို.မရဘူး ၊ Dependency ဆိုတာကျတော့ တဘက်တည်းအမြင်ကနေကြည့်တာ သဘောတရားကတော့ အတူတူပဲ၊
Coupling မှာ ၂မျိုးရှိတယ်

## Tight coupling

Tight coupling ဆိုတာ အသေချိတ်ထားတာလို.ပြောရမယ် ဖြုတ်မရ ပြုမရ ဥပမာ iPhone, iPad ထဲက battery လိုတခုခုကို ကျန်တဲ့ဟာတွေနဲ. အစားထိုးလို.မရသလိုပေါ့ အသေချိတ်ထားတာ အဲ့တော့ ပြင်ရပြုရခက်တယ် extend , maintainanble ခက်တယ်၊ စာအရဆိုရင်တော့ Class A သည် B ရဲ. public interface ကိုသုံးတာမဟုတ်ပဲနဲ. private implementation ကိုသုံးတာ တွေကို tight coupling လို.ခေါ်မယ်။ လွယ်အောင်ပြောရရင် အပေါ်က example

```java
Engine engine = new Engine();
```

ဒါသည် tight coupling ပဲ ဘာလို.လဲဆိုတော့ Car ကိုဆောက်လိုက်ရင် Engine engine = new Engine() ကိုတန်းဆောက်တယ် အဲ့တော့ နောင်တချိန် Engine နေရာမှာ တခြား GasEngine, CNGEngine အဲ့လိုကောင်တွေ အစားထိုးပြီးသုုံးလို.ရမလား မေးရင် မရတော့ဘူး Engine သည် concrete class ကိုသုံးထားတဲ့အတွက် class တခုပဲ ဖြစ်နိုင်တော့တယ်၊ အဲ့တော့ ပြောင်းလို. extend လုပ်လို.မရတော့ဘူး အသေဖြစ်သွားပြီ ဒါကို tight coupling လို.ခေါ်တယ်။ Tight coupling ဖြစ်တော့ engine ကို upgrade လုပ်မရတော့ ဘူး အသေဖြစ်သွားပြီ အဲ့တော့ maintain, extend, test လုပ်ရတာခက်တယ်။ ကားကို test လုပ်ချင်ရင် engine ပါပါပြီးသားဖြစ်နေမယ် engine ကို mock လုပ်ပြီး ထဲ့ပေးလို.မရဘူး ဒါသည် ခုနက အပေါ်က code ရဲ.အားနည်းချက်ပဲ။

ဘာလို. engine သည် အသေဖြစ်သွားသလဲဆိုတော့ Car ထဲမှာ engine object ကိုဆောက်လိုက်လို.။ တကယ်လို.ဒီလိုရေးမယ်ဆိုပါစို.

```java
class Car
{
      Engine engine;
      Car(Engine engine)
      {
           this.engine = engine;
      }
}
```

ခုနက code မှာ engine object ကိုတန်းမဆောက်တော့ဘူး အပြင်ကနေ ဆောက်မယ် နောက်ပြီးမှ Car constructor ထဲကိုပေးလိုက်မယ် ၊ ဘာပိုကောင်းလာလဲဆိုတော့ အပြင်ကနေပေးရင် engine object နေရာမှာ OO ရဲ. super type ထဲကို subtype တွေ ထဲ့လို.ရတာကြောင့် နောင်တချိန်မှာ Engine class က နေ ဆောက်ထားတဲ့ object မဟုတ်ပဲ CNGEngine ဆိုပါစို.(သူက Engine ကို extends လုပ်ထားတယ်ဆိုပါစို.) လိုကောင်တွေ ထဲ့လို.ရမယ်။ ဒါဆိုပိုပြီး extend လုပ်လို.ရသွားတဲ့သဘောပေါ့။ နောက် ခုနက engine သည် အပြင်ကနေ ဆောက်ပီး ထဲ့ရတဲ့အတွက် car ကို test လုပ်တဲ့အခါ engine ကို mock လုပ်ပြီး ထဲ့လို.ရသွားမယ် ပိုကောင်းသွားမယ်။

ဒီ code သည် အရင်က code နဲ.မတူတော့တာက engine concerte object အပေါ်မမူတည်တော့ပဲ Engine class ကနေ ဆင်းလာနိုင်တဲ့ object တွေ အကုန် car မှာသုံးလို.ရသွားတယ်။ အရင်လို Car သည် specific engine တခုတည်း သုံးစရာမလိုတော့ပဲ ကြိုက်တဲ့ engine သုံးလို.ရသွားပြီ။

ဒါကို loose coupling လို.ပြောလို.ရတယ်။ ပြောင်းရပြုရ လွယ်တာပေါ့။ ပထမ example မှာ Car သည် dependency ဖြစ်တဲ့ engine ကို သူကိုယ်တိုင်ဆောက်တယ်။ ဒုတိယ example မှာ engine object ကို Car က ဆောက်တာမဟုတ်ပဲနဲ. Object creation ကို ပြောင်းပြန်လုပ်လိုက်တယ် inverse လုပ်တယ်ပေါ့။ ဒါကို dependency inversion လို.ခေါ်တယ်၊ ခုနက dependency ဖြစ်နေတဲ့ engine လိုကောင်မျိုးကို framework တွေက auto create လုပ်ပြီး Car လို dependency လိုအပ်တဲ့ object တွေဖို. automatic ထဲ့ပေးတာကို dependency injection လို.ခေါ်တယ်။ ခု example နဲ.ဆိုရင်တော့ constructor injectionပေါ့။
