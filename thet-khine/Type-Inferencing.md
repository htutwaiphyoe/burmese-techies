# Type Inferencing

Type System တွေမှာ ဒီမှာ အသုံးများတာ static typed, dynamic typed ဆိုပြီးသုံးတယ်။ တခြား Soft typed, Gradual typed, Dependent typed, linear type, Union typed, existential typed အစရှိတာတွေ ရှိသေးတယ် ရှင်းလဲ နားပေါက်မှာ မဟုတ်တဲ့အတွက် ထားလိုက်တော့။
Static Typed နဲ. Dynamic typed ဘာကွာလဲ ရေးထားတာ ဒီမှာ
https://web.facebook.com/thet.khine.587/posts/10205825693641067
Duck Typing အကြောင်းရေးထားတာ က ဒီမှာ
https://web.facebook.com/thet.khine.587/posts/10205830254955097
Strongly Type vs Weakly Type and Type Safety
အကြောင်းက ဒီမှာ
https://web.facebook.com/thet.khine.587/posts/10205843411283997
ပြောချင်တာက type inferencing ဆိုတာ ဘာလဲဆိုတာ 
မပြောခင် Type System (Static , Dynamic blah blah ) တွေ က ဘာဆိုတာ အရင်ပြောရမယ်။ Type system ဆိုတာ programming language မှာ variable, expression, function , module အစရှိတဲ့ကောင်တွေကို type ဆိုတဲ့ property လေးထဲ့ပြီး အဲ့ကောင်တွေကို ဘယ်လိုသုံးရမယ် ဘယ်လို rule တွေ ရှိတယ် ဘယ်လို operation တွေလုပ်လို.ရတယ်ဆိုတာကို သက်မှတ်ထားတာကို type system လို.ခေါ်တယ်။
ဉပမာ Java မှာ int ဆိုတဲ့ type ဆိုရင် သူ.ထဲ ထဲ့လို.ရတယ် value တွေသည် number ဖြစ်မယ် floating point မပါရဘူး range ဘယ်လောက်ရှိရမယ် နောက် ဘယ်လို operator တွေမှာတော့ သူ.ကိုသုံးလို.ရတယ် ဉပမာ +,-,*,/ မှာသုံးလို.ရတယ် ဒါပေမဲ့ integer သက်သက်ကြီးကို boolean လိုတဲ့ if conditional မှာ ထဲ့စစ်လို.မရဘူး အဲ့တာတွေကို type system လို.ခေါ်တယ်။
integer ချင်းတူရင်တောင် C/C++ မှာ if(number) စစ်လို.ရတယ် type system rule တွေ မတူတာကိုပြောတာ။
ခုနောက်ပိုင်း language တွေ ထွက်လာတော့ static typed language,partially typed တွေမှာ ပိုပြီး concise ဖြစ်အောင် type inferencing ထဲ့တာတွေ ရှိတယ်။
ဥပမာ Kotlin မှာ 
var age = 12
ဒီလိုရေးလို.ရတယ် dynamic typed ဖြစ်သွားတာမဟုတ်ဘူး ခုနက statement က C# မှာလဲရေးလို.ရတယ် C# မှာ 3.0 ထဲက type inference ပါတယ်။
Java မှာ 8 မှာ 
List<Integer> list2 = new ArrayList<>();   
type inference ပါလာပြီ။
အပေါ်က var age =12 ဆိုတဲ့ statement ကို compiler က မြင်တဲ့အခါ literal 12 ရဲ. type သည် integer ဖြစ်တယ်ဆိုတာကိုသိတယ် အဲ့ဒီ literal 12 ရဲ. type ဖြစ်တဲ့ integer ကို variable age ကိုပေးလိုက်တာ ဒါကို programmer ကို လိုက်ပြောနေစရာမလိုပဲနဲ. အလိုအလျောက် infer လုပ်တာကို type inferencing လို.ခေါ်တယ်။C++ 11, Go, Rust, Swift, Scala, Kotlin တော်တော်များများမှာ support ပေးတယ်။
နောက် ခုနက age နဲ. တခုခုပေါင်းမယ်ဆိုပါစို. ဒါဆိုလဲ arithmetic ရဲ. result က number ဖြစ်မယ် ဒါဆိုဘာ type ဖြစ်မယ်ဆိုတာကို compiler ကနေ ကောက်ချက်ချလို.ရတယ်။ expression တွေရဲ. result လဲ ဒီအတိုင်းပဲ နေရာတိုင်းတော့ infer လုပ်လို.မရဘူး။
Type Inference ကို ML လို statically typed functional language တွေကစသုံးတာ၊
Type information ကို automatically infer လုပ်ရတာဖြစ်တဲ့အတွက် type information ပါတဲ့ static typed language တွေမှာပဲလုပ်လို.ရတယ် TypeScript လို partially typed ဖြစ်တဲ့ ကောင်တွေမှာလဲ ရတယ်။ No type information မပါတဲ့ dynamic typed language တွေမှာမရဘူး။
Type theory ဆိုတာ Programming Language တွေဘက်မှာ သက်သက်ရှိတယ် theoretical computer science အောက်မှာပါတယ်။ untyped lambda calculus , typed lambda calculus စတာတွေနဲ. define လုပ်ကြတယ်။
Duck typing ဆိုတာ dynamic language တွေမှာ ရတဲ့ feature ပဲ။ အဲ့လိုပဲ Type inferencing ဆိုတာ static typed, partially typed တွေမှာရတဲ့ feature ပဲ type system မဟုတ်ဘူး၊
တရာဖိုး ၃ပုဒ်ရေးတာတွေရော ဘူမသိကိုးမသိ ထိုင် share တဲ့ကောင်တွေရော မျက်စိနောက်လို. ရေးရတာ။
မှားလို. မှားမှန်းမသိတဲ့ အမှားကို အမှန်ထင်နေတဲ့ မောဟက ကြောက်စရာအကောင်းဆုံးပဲ။