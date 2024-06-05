# Strongly Type vs Weakly Type and Type Safety

Warning (This post may cause cancer for Java Developer )
Language တခုက Strongly typed ဆိုတာ ဘာကိုပြောတာလဲဆိုရင် ဒီ langauge မှာပေးထားတဲ့ type နဲ.ပတ်သတ်တာတွေနဲ.ဆိုင်တဲ့ error တွေကို compile time ရော runtime မှာပါ detect လုပ်ပေးနိုင်တယ်ဆိုရင် ဒီ langauge ကို strongly typed လို.သတ်မှတ်ကြပါတယ်။ Stongly typed သည် static typed language ဖြစ်ခြင်း dynamic typed language ဖြစ်ခြင်းနဲ.မဆိုင်ပါဘူး။ တော်တော်များများက Dyanmic language ဆိုတာနဲ. weak typed လို.ထင်ကြလို.ပါ။ Dynamic langauge ပေမဲ့ strongly typed langauge တွေလဲရှိပါတယ်။ ဥပမာ Ruby Python ပေါ့။
ခက်တာက Computer Science ရဲ. programming langauge theory မှာကိုက ဘယ်လိုဖြစ်ရင် storngly typed ကွာ ဘာကိုချိုးဖောက်ရင် strongly typed မဟုတ်ဘူးဆိုတဲ့ တိကျတဲ့ definition မရှိတော့ တော်တော်ပြ ဿ      နာတတ်တဲ့ကိစ္စပါပဲ။ C,C++ ကလဲသူတို.သွားမေးရင် သူတို.သည် Stongly typed လို.ပဲပြောတာပဲ။
ခုနက Storngly typed ဆိုတဲ့ Definition ကိုပြန်ကောက်ရင် dangerous ဖြစ်တဲ့ type operation တွေကို သို.မဟုတ် invalid type operation တွေကို ခွင့်မပေးဘူး compile time မှာရော runtime မှာပါ အဲ့လို error တွေကို ကန်.သတ်နိုင်မယ် ဖမ်းနိုင်မယ်ဆိုရင် ဒီ language ကို strongly type လို.သတ်မှတ်ရမှာပါပဲ။ Language တခုက Strongly typed ဖြစ်မှသာ Safe typed ဖြစ်မှာပါ။ Safe type ဆိုတာက language က compile time မှာကတည်းက type နဲ.ပတ်သတ်တဲ့ error တွေကို စစ်ပြီးသားဖမ်းပြီးသား ဒါကြောင့် runtime မှာ program ကိုအေးအေးဆေးဆေး safe ဖြစ်အောင် run နိုင်တယ် ဒါကြောင့် typed safe languge လို.သတ်မှတ်ရတာ။ Dynamic langauge တွေကျတော့ compile time မရှိတဲ့အတွက် runtime မှာ check ပေါ့။ အဓိက ကတော့  programmer ကမသိလိုက်ပဲနဲ. invalid operation တွေ runtime မှာဖြစ်သွားစေဖို.ပဲ ။ ဥပမာပြောရရင် C,C++ ရဲ. pointer တွေဟာ ကြိုက်တဲ့ memory location ကိုသွားလို.ရတယ်။ နောက်ပြီး pointer typecasting လုပ်ပြီး ကြိုက်တဲ့ operation လုပ်လို.ရတဲ့အတွက် typesafe မဖြစ်ပါဘူး။
ကဲဒါဆို ဘယ်ဟာတွေက dangerous ဖြစ်တဲ့ type operation တွေလဲဆိုတာမေးစရာဖြစ်လာပါပြီ။ အဲ့တာလဲ langauge တခုနဲ.တခု သတ်မှတ်ပုံမတူလို. သူ.ဟာနဲ.သူ strongly typed ပါလို.ပြောနေကြတဲ့ကိန်းဆိုက်ရတာပါပဲ။
Invalid type operation တွေကိုဒီလိုတော့အများအားဖြင့်သတ်မှတ်ကြတာပဲ။ တယောက်နဲ.တယောက် language တခုနဲ.တခုတော့တူကြမယ်မဟုတ်ဘူး။
1. Implicit down casting.
Invalid down casting ဆိုတာ ကြီးတဲ့ type တခုကနေ ငယ်တဲ့ type တခုကို type casting ကိုလုပ်စရာမလိုပဲနဲ. အလိုအလျောက် implicit type cating လုပ်ပေးတာကိုဆိုချင်တာ။ ဥပမာ C မှာဒါမျိုးရေးလို.ရတယ်
float f =3.2f;
int c = f; //Implicit down casting
c=f ဆိုတဲ့ statement ဟာ c သည် integer type, f သည် float type ,ကြီးတာက float type ကကြီးတယ် အဲ့တော့ integer c ထဲကိုဝင်သွားမှာက 3.3 မှာ 3 ပဲဝင်သွားမှာ ဒါသည် data ကို loss ဖြစ်နိုင်တဲ့အတွက် Java C# လို langauge တွေမှာ အဲ့လိုမျိုး implicit down cast ပေးမလုပ်ပါဘူး။ လိုချင်ရင် explicit type casting လုပ်ပြီး အတိအလင်းရေးရပါတယ်။ ဒီလိုပေါ့။
c = (int)f ;
Java မွာ 
int a = 10;
float b = 2.4f;
a = a + b;
ဒါမျိုးမရပါဘူး ဘာလို.လဲဆိုတော့ a+b ရဲ. type သည် integer + float အဲ့တော့ result type အရ float ထွက်မယ် float type ကို integer ထဲကိုထဲ့ဖို.ကျတော့ implicit down casting ပေးမထားတဲ့အတွက် error တက်ပါလိမ့်မယ်။
ဒါပေမဲ့ Java Language Specification မှာ flaw တခုရှိနေပါတယ်။ 
JLS (Java Langauge Specification ) section 15.26.2. ရဲ.  Compound Assignment Operators အကြောင်းမှာ ဒီလိုရေးထားပါတယ်။
 compound assignment expression of the form E1 op= E2 is equivalent to E1 = (T) ((E1) op (E2)), 
အဲ့တော့ ခုနကလို ကောင်ကို compound assignement နဲ.ဒီလိုရေးလို.ရပါတယ်။
int a = 10;
float b = 2.4f;
a += b;// Implicit down cast , but ok
ဒါကြောင့် Java သည်လဲ အပြည့်အဝ Strongly type မဟုတ်ဘူးလို.ဆိုချင်တာပါ။ 
2 Implicit type conversion 
ဒါကတော့ ရှင်းပါတယ် type တွေကို runtime မှာ operation တွေအပေါ်မူတည်ပြီး type တွေကိုလိုသလိုပြောင်းပြစ်တာမျိုးပါ။
PHP, JavaScript မှာဒါမျိုးတွေ.ရ့ပါတယ်။ ဥပမာ JS ဆိုပါစို.
var a = '100';
var b = a * 3;
a သည် string type ပါ ဒါပေမဲ့ a*3 ဆိုတဲ့ expression ကို evaluate လုပ်တဲ့အခါ a ကို numeric type အနေနဲ. ပြောင်းပြစ်ပါတယ်။ ဒီ operation မျိးဟာ အန္တရာယ်များပါတယ် ဘာလို.လဲဆိုတော့ a သည် ခုဒီ example လို ပြောင်းလို.ရတဲ့ number မဟုတ်ပဲနဲ. တခြားတခုခုဆို ရင် NaN ဖြစ်မှာပါ။ ဒါုဆို NaN ကို NaN နဲ.မြှောက်ရင် NaN ပဲရမှာပါ။ အဲ့အချိန်မှာ runtime မှာ bug တွေဖြစ်လာနိုင်ပါတယ်။
3 Array Bound Check
ဒါကတော့ runtime မှာ array တွေရဲ. lower bound, upper bound ကို ကျော်သွားလားစစ်ပေးတာပါ။ C,C++ မှာ အဲ့လိုစစ်မပေးပါဘူး။ dynamic language တွေမှာတော့ မရှိရင် အခန်းကို အသစ်ဆောက်ပေးလိုက်တော့ problem မရှိပါဘူး။
4. Generic must be strong
Dynamic language တွေမှာတော့ Generic မလိုတော့ပြောစရာမလိုဘူးပေါ့ဗျာ။ Static language တွေမှာတော့ Generic သုံးကြတယ်ဗျ။ ပြောစရာကတော့ Java ပဲ။ Java က Language စထုတ်တုန်းက Generic ဆိုတဲ့ feature ပါမလာဘူးခင်ဗျ။ Java JDK 1.5 မှပါလာတာ။ အဲ့တော့ သူတို.က JVM မှာလဲ Generic နဲ.ပတ်သတ်တဲ့ bytecode ကမရှိဘူး အဲ့ဒါကိုလဲထပ်မထဲ့ချင်ဘူး အဲ့တော့ဘာလုပ်သလဲဆိုရင် Generic ကို compile time မှာပဲထဲ့ပေးလိုက်တယ်။ ဥပမာ
ArrayList<String> arr = new ArrayList<String>();
အပေါ်က arr ကို compile time မှာသာ ArrayList<String> အနေနဲ.မြင်ရမှာ type check မှာဖြစ်ပြီးတော့ runtime ကျရင်တော့ 
ArrayList<Object> အနေနဲ.ပဲသိမ်းတာပါ။ သိချင်ရင် 
       ArrayList<String> arr = new ArrayList<>();
       ArrayList<Object> objList = new ArrayList<Object>();
       System.out.println(arr.getClass().equals(objList.getClass()));
အပေါ်က သုံးကြောင်းကို run လိုက်ရင် true ဆိုပြီးထွက်ပါလိမ့်မယ်
ဆိုချင်တာက ArrayList<String> သည်လဲ runtime မှာ ArrayList<Object> အနေနဲ.သိမ်းတာပါပဲ။ Type Erasure လို.ဆိုကြပါတယ်။ Container Type Generic Parameter Type တွေရဲ. Type Information ဟာ runtime ထိပါမသွားဘူး ပျက်သွားတယ်လို.ဆိုလိုတာပါ။ C# မှာတော့ ArrayList<String> အတွက်ဆို သက်သက် code ဆောက်ပစ်တာပါ။ C++ template တွေလဲထိုနည်းလည်းကောင်းပါပဲ။
5 Overflow
ဒါကတော့ထူးထူးခြားခြား ဘယ် langauge မှမထိန်းနိုင်ပါဘူး။ C# မှာပဲထိန်းနိုင်တာတွေ.ဖူသေးပါတယ်။ ဘာလဲဆိုတော့ integer တွေ number type တွေ operation လုပ်ရင်းနဲ. သူတို.လက်ခံနိုင်တဲ့ ပမာဏ range ကျော်သွားရင် runtime ကစစ်ပေးနိုင်တာမျိုးပါ။
ဒါမျိုးရေးလို.ရပါတယ် C#မှာ
checked
{
    int i3 = 2147483647 + ten;
    Console.WriteLine(i3);
}
checked ကဘာလုပ်တာလဲဆိုရင် overflow တွေဖြစ်လာရင် exception လွှင့်ပေးမှာပါ။ အဲ့တော့ programmer က error ဖြစ်နိုင်တာကိုသိပြီး recovery လုပ်လို.ရတာပေါ့ဗျာ။