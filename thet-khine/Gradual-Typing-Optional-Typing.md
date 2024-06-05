# Gradual Typing, Optional Typing

## Gradual Typing

Gradual Typing ဆိုတာ 2006 လောက်က မှာ Jeremy Siek က စလုပ်ခဲ့တာ။ ဘာလဲဆိုတော့ programming language တွေမှာ static typed တွေရော dynamic typed တွေရော ထဲ့သုံးလို.ရတာမျိုးကိုပြောတာ။ Static typed language တွေသည် large scale development မှာဆိုအားသာတယ် compile time မှာ type error တွေကို စစ်ပေးနိုင်တဲ့အတွက် program က runtime မှာ မလိုလားအပ်တဲ့ type error တွေမဖြစ်တော့ဘူး ဉပမာ string နဲ. number ကို arithmetic ပေးမလုပ်ဘူး အဲ့တာမျိုး ဖြစ်မလာအောင် ကြိုကာကွယ်နိုင်တယ်။ ဒါပေမဲ့ dynamic language လို duck typing လိုချင်တဲ့ကောင်မျိုး ဉပမာ polymorphism ကို Subtyping အပေါ်မမူတည်ပဲလိုချင်တာမျိုးဆို လုပ်မရတော့ဘူး အကန်.အသတ်ရှိတယ် ဒါကြောင့် static typed langauge တွေမှာ dynamic language က type တွေလို ကြိုက်ရာထဲ့လို.ရအောင် ထဲ့ပေါင်းတဲ့နည်းကိုသုံးလာတယ်။ မြင်သာတဲ့ ဉပမာကိုပြောရရင် C# 4.0 မှာစပါတဲ့ dynamic ဆိုတဲ့ keyword ပေါ့။ ဉပမာ ဒါမျိုးရေးလို.ရတယ် 

dynamic i = 100;
Console.WriteLine("i value:{0}, type: {1}", i, i.GetType());
i = "Hello World";
Console.WriteLine("i value:{0}, type: {1}", i, i.GetType());
variable i က dynamic typed variable ဖြစ်သွားတယ် အဲ့တော့ ပထမ တကြောင်းမှာ i=100 ထဲ့တယ် integer type ပေါ့ နောက်တကြောင်းကျ string ထဲ့တယ်ရတယ် 
ခုလိုမျိုး static typed language တွေမှာ dynamic typed feature ထဲ့ပြီး dynamic language လိုသုံးလို.ရအောင် လုပ်ထားတယ် နောက်ပြီး compile time, runtime မှာ type checking ပေးထားတယ် sound type ဖြစ်ရင် ဒါကို Gradual typed လို.ခေါ်တယ်။

## Optional Typing

နောက် Dynamic programming language တွေကျတော့ လဲ ခုနကလို large scale software project တွေကျရင်တော်တော် အဆင်မပြေဘူး အဲ့တော့ static typed analysis လုပ်ချင်တယ် ဘာလုပ်လာလဲဆို‌တော့ Typed hint တွေ ဉပမာ (PHP, Python) နောက် optional typed တွေ ဉပမာ TypeScript, Dart, Groovy အစရှိတာတွေ ထဲ့လာတယ်။ Optional typing ဆိုတာ dynamic language တွေမှာ type information ထဲ့ပြီး (မထဲ့မနေရမဟုတ်ဘူး မထဲ့ချင်လဲရတယ် optional) သုံးတယ် နောက်ပြီး type checking ကို runtime ထိ sound ဖြစ်အောင် enforce မလုပ်ဘူးဆိုရင် Optional Typing လို.ခေါ်တယ်။ နောက်ပိုင်းမှာ programming language တွေမှာ Gradual Type, optional type တင်မကတော့ပဲနဲ. FP ဘက်က type system တွေကိုပါ employ လုပ်လာကြလိမ့်မယ်။ ဉပမာ Recurive Data Type လိုကောင်မျိုး