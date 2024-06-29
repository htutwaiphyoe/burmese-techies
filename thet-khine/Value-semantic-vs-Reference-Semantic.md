# Value semantic vs Reference Semantic

Programming language တွေမှာ များသောအားဖြင့် value type, reference type, pointer type တွေဆိုပြီး variable တွေကို ပေးသုံးထားလေ့ရှိတယ်။ များသောအားဖြင့် non pure OO Language  တွေမှာဆိုရင် primitive variable တွေသည် value type ဖြစ်တယ်။ Object တွေသည် reference type ဖြစ်တယ်။ ဒါပေမဲ့ language  တိုင်းတော့မဟုတ်ဘူး။ ဥပမာ  C++ မှာဆိုရင် Object တွေသည် value type ဖြစ်တယ်။ Java မှာဆိုရင်တော့ reference type ဖြစ်တယ်။C++,C# က structure တွေသည် value type ဖြစ်တယ်။ Java မှာကျတော့  User define type ကို value  type ပေးသုံးမထားဘူး။  C++  မှာတော့ object   တွေကို pointer type နဲ.သုံးလို.ရတော့ Java ,C#   တို.လို reference  type ပုံစံ သုံးလို.လဲရပြန်ရော။ကဲ ဒါဖြင့် ဘယ်ဟာတွေကို  value type  လို.ပြောပြီး ဘာတွေကတော့ဖြင့် reference type လဲ သူတို.၂ ခုကဘာကွာသလဲပေါ့။

## Value type

ဥပမာ C,C++,Java,C#,JavaScript အစရှိတာတွေမှာ primitive type သည် value type ဖြစ်တယ်။ အောက်က code ဆိုပါစို.
int a = 10, b= 20;
a = b;
ခုနက အပေါ်က a = b  ဆိုတဲ့ statement ရဲ.အဓိပ္ဗာယ်သည် variable တွေက value type လား  reference type လားဆိုပြီးတော့ အပေါ်မူတည်ပြီး semantic  သည်ကွဲသွားတယ်။ a နဲ. b  သည် value  type (Primitive type တွေသည် value type လို.ဆိုင်ရာ language  ကသတ်မှတ်ထားတာကြောင့် ) a = b သည် value semantic သို.မဟုတ် copy semantic ကို အလုပ်လုပ်တယ်။

## Value semantic (or) Copy semantic

အဲ့တာကဘာလဲဆိုရင် ခုနက a ထဲကို b   ကို  assign လုပ်တဲ့အခါ  b ရဲ.တန်ဖိုးကို  copy ကူးပြီးတော့  a ရဲ.တန်ဖိုးထဲကိုထဲ့လိုက်တယ်လို.အဓိပ္ဗာယ်ရတယ်။ မြင်သာအောင် ပြောရရင် a နဲ. b သည် သီးခြားဆီရှိသော  variable 2 လုံး သူတို.  value တွေကတော့ တူကြတယ်လို.ဆိုရမယ်။ ဒါသည် copy semantic ရဲ.သဘောပဲ။

## Reference semantic

အောက်က JS code လေးကိုကြည့်ရအောင်

```js
var a = {
  name : "Something"
};
var b = a;
console.log(b.name);
a.name = "Change";
console.log(b.name);
```

a သည် Object literal ဖြစ်တယ်။  Object type  ပေါ့။တကယ်က တိတိကျကျပြောရရင် a သည် Object တခုကို ညွှန်ထားတဲ့ reference တခုသာဖြစ်တယ်လို.ဆိုရမှာ။ ဥပမာ  C++ /C မှာ  pointer သည် variable ကို သိမ်းတာမဟုတ်ပဲ variable တလုံးရဲ. address ကိုသိမ်းထားသလိုပဲ။ Reference က  pointer နဲ.ဘာကွာသွားသလဲဆိုတော့ ကိုကpointer arithmetic  တွေလုပ်လို.မရဘူး။ပိုပြီး safe ဖြစ်တယ်။ Reference သည်  Heap memory မှာရှိတဲ့ Object တခုကို ထိန်းထားတဲ့ hadle လို.ပြောရမယ်။Handle ဆိုတာက VM ထဲမှာ သူထိန်းထားတဲ့ Object ရဲ. value တွေ descriptor တွေ synchronization lock တွေ ပါတဲ့ internal variable လို.ဆိုရမယ်။ ဒါတွေက များသောအားဖြင့် Programmer တွေသိစရာမလိုပဲနဲ. abstraction အနေနဲ.ထားထားကြတာ။  အပေါ်က js code  အရ b = a   ဆိုတာရဲ. အဓိပ္ဗာယ်သည် ခုနကလို value semantic  လို  copy ကူးသွားတယ်မဟုတ်ဘူး။ variable b  သည် variable a  နဲ.အတူတူ  same object  တခုတည်းကို ညွှန်းနေတယ် လို.ဆိုတဲ့ semantic ရတယ်။ အဲ့တော့ကာ  အောက်ကလိုင်းမှာ a.name =”Change” လို.လုပ်လိုက်တယ်။ အဲ့ဒီမှာ ဘာဖြစ်လဲဆိုတော့ a နဲ. b သည် same object ဖြစ်တဲ့အတွက် a ရဲ.  name ကို ပြောင်းတာသည် b မှာလဲ လိုက်ပြောင်းတယ်။ တကယ်လို.များ C++ မှာလို object ကို value semantic သာပေးထားရင် ဒါက လိုက်ပြောင်းမှာမဟုတ်ဘူး။

နောက် Java မှာ parameter passing မှာ တချို.က  Object reference တွေသည် passs by reference နဲ.  pass တယ်လို.ရေးကြတယ်။ ဒါကမှားတယ်။  Java မှာ ရှိတာသည်  pass by value ပဲရှိတာ။ ဒါပေမဲ့ Object reference   က ညွှန်တဲ့ variable ကိုထိရင်တော့ မူလ ခေါ်တဲ့ calling method က Object  လဲပြောင်းမယ်။ ဥပမာ ဒီ code လေး  run  ကြည့်ပေါ့ နောက်ဘာထွက်လဲ ကို.ဘာသာစမ်းကြည့်ပေါ့။

```java
static void change(String str)
{
    str = “Change”;
}
String str = “Hello”;
change(str);
```

ဒါဆို str မှာထွက်လာမှာသည် Change  မဟုတ်ဘူး Hello ပဲ ဘာလို.လဲဆိုတော့  change  method ကပြင်တာသည် reference က ညွှန်တဲ့ တန်ဖိုးကိုပြင်တာမဟုတ်ပဲနဲ. reference  တန်ဖိုး ကိုယ်တိုင်ကိုပြင်လိုက်လို.ပဲ

တခုစိတ်၀င်စားဖို.ကောင်းတာ php မှာ string တွေသည် scalar type , primitive type  ပေါ့။ ဒါပေသိ string တွေကို a=b တွေ.တိုင်း copy  မကူးဘူးတဲ့ဗျာ. ဘာလို.လဲဆိုတော့ large strign တွေဆိုရင် performance ကိုကျလို.ပေါ့။ အဲ့တော့သူတို.က ဘာလုပ်လဲဆိုရင် copy on write policy ကိုသုံးတယ်။ တူနေရင်မကူသေးဘူး။ နောက် variable တခုခုကိုပြောင်းလိုက်ရင်  ကူးပြီ။
