# Static Type Checking, Dynamic Type Checking

Type Checking ဆိုတာ programing language တခုခုကို implement လုပ်ထားတဲ့ compiler သို.မဟုတ် interpreter, Virtual Machine တွေကနေ ပြီးတော့ programmer တွေသုံးထားတဲ့ type တွေသည် သက်ဆိုင်ရာ language rule ကိုလိုက်နာရဲ.လားဆိုတာကို စစ်ပေးတာ။

Type Checking မှာ ၂ မျိုးရှိတယ် static type checking, dynamic type checking, Static type checking ဆိုတာ compile time မှာ check လုပ်တာ။ အဲ့တော့ compiled language တွေမှာပဲတွေ.ရတယ်။ Dynamic type checking ကကျတော့ runtime မှာလုပ်တာ။ 

## Static type checking

Compile time မှာ type rule တွေ မှန်မမှန်စစ်တာကို static type checking လို.ခေါ်တယ်။  Static typed programming language တွေသည် compiler ကိုသုံးတယ် compile time မှာ type check တယ်။ Type Check  တယ်ဆိုတာ ဘာလဲလို.ဆိုရင် ဉပမာ Java လို language မှာ

int a = 20;

a = a + false;

ဒုတိယ statement ဖြစ်တဲ့ a= a+ false; သည် Java language ရဲ. type rule ကိုချိုးဖောက်တယ်၊ integer တွေသည် + operator ကို number type ဖြစ်တဲ့ byte, short , int ,long , float, double နဲ. တွဲသုံးရမယ် မဟုတ်လို. string concatenation လုပ်ချင်တယ်ဆိုရင်လဲ string တခုခု ပါရမယ် အဲ့တာကြောင့် ခုနက a+false ဆိုတဲ့ expression သည် type rule အရ မှားတယ် ဒါမျိုးကို စစ်ပေးတာကို type checking လို.ဆိုတာ။  အဲ့လိုကောင်တွေကျတော့ compile time မှာထဲက စစ်လို.ရတယ် ဘာလို.လဲဆိုတော့ static type langauge ဖြစ်လို. type တွေကို compile time မှာကတည်းက သိတယ် အဲ့တော့ compile time မှာကတည်းက စစ်ပေးတယ် ။ ဘာအကျိုးရှိလဲလို.မေးရင် invalid type operation (dynamic language တွေမှာ ဖြစ်လေ့ရှိတယ်)တွေကြောင့် ကွိုင်တက်မှာကို ကာကွယ်နိုင်တယ်။ Large scale software development မှာ type error တွေ စစ်ပေးနိုင်တာက program ကိုပိုပြီးတော့ safe ဖြစ်စေတယ်။ 

## Dynamic Type Checking

Java , C# လို language မျိုးကျတော့ compile time မှာ တင် type တွေ စစ်ရုံနဲ.မလုံလောက်ဘူး ဉပမာ 

```java
class Human
{
}
class Animal
{
}
Object obj = new Human();
Animal a = (Animal)obj;
```

အောက် ဆုံးက statement လို Animal a = (Animal)obj; ကောင်မျိုးအတွက် စစ်မယ်ဆိုရင် runtime ရောက်မှ obj ထဲမှာရှိတဲ့ တကယ့် type သည် Animal လားဆိုတာကို စစ်နိုင်မယ် အဲ့တော့ dynamic type checking လိုလာတယ်။ နောက်တခုက array မှာ index out of bound ကျော်တာမျိုးတွေဖို. dyanmic type checking က လုပ်ပေးရတယ်။
Dynamic language တွေကျတော့ compile time ဆိုတာကို မရှိတဲ့အတွက် dynamic type checking ကိုပဲ သုံးရတယ်။ များသောအားဖြင့် ဒီမှာက အထင်မှားနေကျတာ dynamic type language ဆိုရင် weak type ဖြစ်တယ်လို. ထင်နေကျတာ များသောအားဖြင့် dynamic language တွေသည် weakly typed ဖြစ်ပေမဲ့ weakly type ဖြစ်ချင်း strongly typed ဖြစ်ချင်း သည် dynamic typed ဖြစ်လို.ရယ်မဟုတ်ဘူး၊ အဲ့တာအကြောင်းရေးထားဖူးတယ်။ ဉပမာ Ruby သည် dynamic typed language ဖြစ်ပေမဲ့ strongly typed langauge ဖြစ်တယ်။