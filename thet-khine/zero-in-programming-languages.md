# Zero in programming languages

Zero ဆိုတာ သုညပေါ့ဗျာ။ ဘာလို. 0 အကြောင်းရှည်ရှည်ဝေးဝေးပြောလဲဆိုတော့ မသိတာတွေရှိမယ်ထင်လို.ပေါ့ဗျာ။ သိတယ်ဆိုလဲကျော်သွားပေါ့။ သချာင်္မှာ သုညဆိုတာ sign မရှိဘူးဆိုပြိးသုံးကြပါတယ်။ Programming က သချာင်္မဟုတ်တော့ zero က programming language အကုန်လုံးနီးပါး တိတိကျကျပြောရရင် floating point represenation ကို IEEE 754 format ကိုလိုက်နာ.တဲ့ language မှန်သမျှမှာ သုံးမျိးရှိတယ်လို.ပြောရမှာပါ။ အဲ့ကောင်တွေက တော့

integral type zero ဒါကေတာ့ရိုးရုိး floating point (float,double) မဟုတ္တဲ့ zero ေပါ့.
positive floating point zero  (0)
negative floating point zero (-0)

အဲ့တော့ negative zero ဆိုတာရှိတယ်လို. ပြောချင်တာပါ။ ဥပမာ အောက်က JavaScript code ကို run ရင်

var a = -0;
console.log(1/a);

-Infinity ဆိုပြီးထွက်မှာပါ ဘာလို.လဲဆိုတော့ a က negative zero ဖြစ်နေလို.ပါပဲ။ Positive zero နဲ. negative zero ဘာကွာလဲဆိုတော့ math operation တွေလုပ်တဲ့နေရာမှာ sign အပေါ်မူတည်တဲ့ operation တွေဆို effect ရှိပါတယ်။ ခုနက အပေါ်က example လို.ပေါ့ Infinity မထွက်ဘူး -Infinity ထွက်မယ်။ ဒါပေမဲ့ ဘယ် language မှာပဲဖြစ်ဖြစ် positive zero နဲ. negative zero ကိုညီသလားစစ်ရင်တော့ ညီတယ်ဆိုတဲ့အဖြေပဲရမှာပါ။

Java C# မှာဆိုရင်တော့ integer type (int,long etc) 0 ကို number တခုခုနဲ.စားရင် division by zero error exception မျိုးတတ်ပါတယ်။ Floating point zero ကို စားရင်တော့ Infinity ,Minus Infinity တခုခုထွက်ပါတယ်။

ေအာက္က Java code ကို
double b = -0;
System.out.println(1/b);

run မယ်ဆိုရင် Infinity ရမှာပါ။ -Infinity မဟုတ်ပါဘူး။ C# မှာလဲဒီလိုပါပဲ။ ဘာလို.လဲဆိုတော့ Java C# compiler က optimization လုပ်လို.ပါပဲ။ zero အရှေ.မှာ negation ခံလဲ zero ပဲဆိုပြီး compiler ကနေ bytecode ထုတ်တဲ့နေရာမှာ - ကိုဖြုတ်ပစ်ပါတယ်။ ဒါ့အပြင် သူတို. byte code မှာ load_zero ဆိုတဲ့ opcode ပဲရှိပါတယ်။ load_negative_zero ဆိုတဲ့ opcode မရှိပါဘူး။ ဒါဆိုရင်ခုနက code ကိုဒီလိုပြန်ရေးရင်ရော။

double b = 0;
System.out.println(1/-b);

-Infinity ထွက်ပါလိမ့်မယ်။ ဒါက တော့ expression ထဲမှာဖြစ်နေတဲ့အတွက် negation ကိုလုပ်သွားတာပါ။
Python Ruby PHP တို.မှာတော့ number တခုခုကို zero နဲ.စားရင်သူတို.က divide by zero error exception ကိုပဲပြပါလိ့မ်မယ်။

Ruby ရဲ. negative zero ကို represent လုပ်ပုံသတ်မှတ်ပုံကတော့ ဂဏာန်းတလုံးဟာ negative ဖြစ်မယ် သူ.တန်ဖိုးက floating point အနေနဲ. represent လုပ်ဖို.သေးလွန်းမယ်ဆိုရင် negative zero နဲ.သတ်မှတ်ပါတယ်။

ဒီနေရာမှာ တခုသတိထားရမှာက floating point computation တွေဟာ သချာင်္လိုအတိအကျ မတွက်နိုင်ဘူး floating pointer number တွေကို computer ကတိတိကျကျ ကွက်တိ represent မလုပ်နိုင်ဘူးဆိုတာပေါ့။

ဘာကြောင့် programming language တွေမှာ negative zero positive zero ပေးထားရသလဲဆိုတော့ တချို. computation တွေမှာ approximation နဲ.ပိုနီးစပ်တဲ့အတွက် (သေချာအောင်ထပ်ရှင်းရရင် limit တွေပါလာမှာ)ထဲ့ပေးထားရတာပါ။

ဒါကြောင့် ဒီ language လဲ for do while နောက် langauge လဲ for do while တူတူပါပဲကွာ ဆိုတာ မတူဘူး လို.ခနခနပြောရတာပေါ့ဗျာ။

ကဲဘာပဲဖြစ်ဖြစ် zero အကြောင်းနားလည်တော့ နည်းလား :3
