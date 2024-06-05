# Duck Typing

Duck Typing ကို Dynamic typed language တွေမှာ တွေ.ရပါတယ်။ Duck typing လို.ခေါ်ရတဲ့အကြောင်းက ဘဲလို လမ်းလျောက်မယ် ဘဲလိုအော်တတ်မယ်ဆိုရင် ဘဲဖြစ်တာ မဖြစ်တာ အရေးမကြီးဘူး ။ဘဲလို.ပဲသတ်မှတ်မယ်လို.ဆိုတာပါ။ ဒီလိုရှင်းပြလို. နားလည်ဖို.အဆင်မပြေပါဘူး။
Static type language တွေမှာ Object ref တွေ assignment လုပ်တဲ့အခါမှာ type rule တွေကိုလိုက်နာရပါတယ်။ အဲ့ဒီ rule တွေက ဥပမာ

a = b ;
ဆိုပါတော့ a သည်လဲ object ဖြစ်မယ် b သည်လဲ object ဖြစ်မယ် ဆိုရင် အောက်က rule တွေကို လိုက်နာရပါတယ်။ မဟုတ်ရင် compile error တက်ပါလိမ့်မယ်။ Assignable ဖြစ်ရမဲ့ rule ပါ။
b object ရဲ. type သည် a object ရဲ. type သို.မဟုတ် သူ.ရဲ. subtype ဖြစ်ရပါမယ်။
Super type, subtype ကိုဘယ်လိုသတ်မှတ်သလဲဆိုတော့ inheritance, interface inheritance နဲ.ဆုံးဖြတ်ပါတယ်။

ဥပမာ Java မွာ
```java class A
{
}
class B extends A impelemnts C
{
}
interface C
{
}
class D implements C
{
}
```

အပေါ်က code မှာ A သည် B ရဲ. super type or parent type ဖြစ်တယ်။ နောက် C သည် B နဲ. D ရဲ. super type ဖြစ်တယ်။ ဘာလို.လဲဆိုတော့ B ရော D ရောက C ကို implement လုပ်လို.
ဒါဆို type rule တွေအရ ဒီလို assignment လုပ်လို.၇တယ်။

A a = new B();//subtype
A a = new A(); //same type
C c = new B(); // B is subtype of C
C c = new D();// D is also subtype of C

အဲ့လို rule တွေရှိပါတယ်။
ဒါပေမဲ့ dynamic type မှာတော့ ခုနက လို rule တွေ မရှိပါဘူး။ ကြိုက်တဲ့ variable ထဲကို ကြိုက်တဲ့ Object ထဲ့လို.ရပါတယ်။
 အောက်က Java Code ကိုကြည့်ပါ။
```java
class Bird
{
 public void fly()
    {
 System.out.println("Bird Fly");
    }
}
class Aeroplane
{
    public void fly()
    {
 System.out.println("Areoplane Fly");
    }
}
```

Bird မှာရော Areoplane မှာပါ fly method ပါပါတယ် ဒါပေမဲ့ common ancestor type မှာ fly မရှိတဲ့အတွက် polymorphism သုံးချင်ရင် interface တခုကိုထားပြီး တော့ fly ကို invoke လုပ်ရမှာပါ။ ဒါသည် static typing ရဲ.အားနည်းချက်ပေါ့။ Bird မှာလဲ fly ရှိတယ် Areoplane မှာလဲ fly ရှိတယ် ဒါပေမဲ့ အဲ့ Object ၂ခုကို varable တခုတည်း မှာ တကြိမ်ဆီထဲ့ပြီး fly ဆိုတဲ့ method ကို invoke လုပ်လို.မရဘူး။ method ရှိယုံတူယုံမရသေးဘူး type rule အရ assignable ဖြစ်မှ ခုနက class ၂ခုကို polymorphism လုပ်လို.ရမယ်။
Dynamic typed language တွေမှာတော့အဲ့လိုမဟုတ်ဘူး။ အောက်က PHP code မှာ

```php 
<?php
class Bird
{
 public function fly()
 {
 echo "Bird Fly<br/>";
 }
}
class Areoplane
{
 public function fly()
 {
 echo "Areoplane fly <br/>";
 }
}
$obj = new Bird();
$obj->fly();
$obj = new Areoplane();
$obj->fly();
?>
```

$obj ထဲကိုBird Object ဖြစ်ဖြစ် Areoplane Object ဖြစ်ဖြစ်ထဲ့လို.ရတယ်။ နောက်ပြီး $obj->fly() ဆို $obj ထဲမှာ Bird ရှိရင် bird method fly ကိုခေါ်မယ် Areoplane ရှိရင် Areoplane fly ကိုခေါ်မယ်။
$obj->fly() သည် runtime မှာမှ resolve လုပ်တယ် (fly ဆိုတဲ့ method ရှိလား ရှိရင် invoke လုပ်မယ် မရှိရင် runtime error)ဖြစ်မယ်။ $obj ရဲ. type သည် static langauge လို ဘယ်ကောင်ထဲကို ဘာ assign လုပ်မှ ရမယ် (fly ချင်းတူလဲရှိလဲမရဘူး) ဆိုတာ မရှိဘူး။ ဒီလို duck typing ကို PHP, Ruby, Python, JS မှာအကုန်တူတူရတယ်။
C# မှာကျတော့ 4.0 မှာ dynamic type ပါလာတယ်။ Dynamic variable ကနေ ခေါ်တဲ့ property တွေ method တွေကို runtime မှာမှ resolve လုပ်တယ်။ အောက်ကလိုရေးလို.ရမယ်။ ဒါသည် duck typing ကို dynamic variable သုံးပြီးလုပ်သွားတာ။

```php
class Bird
{
 public void fly()
    {
 System.out.println("Bird Fly");
    }
}
class Aeroplane
{
    public void fly()
    {
 System.out.println("Areoplane Fly");
    }
}
class DuckTyping
{
 public static void main(String[]args)
 {
 dynamic obj = new Bird();
 obj.Fly();
 obj = new Aeroplane();
 obj.Fly();
 }
}
```

C# ကအဲ့လိုလုပ်လို.ရတာသည် (dynamic facility ရတာကိုပြောတာ) သူ. CLR မှာ DLR ဆိုတာပါလာပြီးသား (Dynamic Language Runtime) ရှိတာကြောင့် လုပ်လို.ရတာ။ Duck  typing ကို Java မှာလိုချင်ရင် Reflection ကိုသုံးပြီး invoke ဆိုတဲ့ method ကိုခေါ်မယ်ဆိုရင်တော့ ရမယ်။Generic ကိုသုံးရင်လဲ ရတယ် ဒါကြောင့် C++ မှာလဲ အဲလိ့ုနည်းနဲ.ရမယ်။ ဒါပေမဲ့ Dynamic language တွေလို built in support မရှိတာကြောင့် လွယ်လွယ်နဲ.မပြီးဘူးပေါ့။
Duck typing အနှစ်ချုပ်ရင် variable တွေကိုကြိုက်ရာ object assign လုပ်နိုင်ရမယ်။ variable တွေကတဆင့် method invoke လုပ်မယ်ဆိုရင် ဘာ type ဖြစ်ရမယ်ဆိုတာ ကန်.သတ်ထားတာမရှိဘူး။ အဲ့ method ရှိရင်ရပြီ။ ဒါသည် duck typing ပဲ။
