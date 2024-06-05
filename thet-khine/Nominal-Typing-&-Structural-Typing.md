# Nominal Typing & Structural Typing

Static typed language တွေမှာ type တွေကိုသုံးတော့ assignment expression တွေ နဲ. တခြား type equivalence expression (eg instanceof) စတာတွေမှာ type တွေဟာ compatibility (တခုနေရာ တခု အစားထိုးသုံးနိုင်လား)ရှိရဲ.လား equivalence( တခုနဲ. တခု အတူတူပဲလို.သတ်မှတ်လို.ရလား)ဆိုတာ ဆုံးဖြတ်ရတယ်အဲ့မှာ nominal typing နဲ. structual typing ကိုသုံးပြီးဆုံးဖြတ်ကြတယ်။

Nominal typed system နဲ. Structural typed system ၂ ခုလုံးက type တွေကို compatibility , equivalence ကိုဘယ်လိုဆုံးဖြတ်မလဲဆိုတဲ့ နည်းတွေ။ Type Compatibility ဆိုတာ ဘာလဲဆိုတာ့ ဉပမာ အောက်က expression
a = b ;

ဒါဆို a ထဲကို b ထဲ့တာ အဲ့ဒီမှာ a ထဲကို b assign လုပ်လို.ရအောင် type compatibility ရှိဖို.လိုတယ်။ ဉပမာ Java မှာဆိုရင် primitive type ဖြစ်တဲ့ int ဆိုပါစို. သူ.ထဲကို int type ဖြစ်ပြီး သူနဲ.တူရင်တူ မတူရင် ငယ်တဲ့ (byte, short,char, int) ထဲ့လို.ရတယ်။ ဒါကို type compatibility လို.ခေါ်တယ် left hand side က type ထဲကို right hand side က type ထဲ့ခွင့်ရှိမရှိဆုံးဖြတ်တာ။ Java, C++, C# လို language တွေမှာ nominal typing ကိုသုံးတယ်။ ဆိုချင်တာက a ရော b ရောသည် reference typed (object type) ဖြစ်တယ်ဆိုပါစို. b သည် a ရဲ. type သော်လည်းကောင်း a က ဆင်းသက်လာတဲ့ child type သော်လည်းကောင်း ဖြစ်ရမယ်။
ဉပမာ 

```java
class Human{
} 
class Teacher extend Human
{
}
Human a ;
Teacher b;
```

a = b; သည် valid ဖြစ်တယ် b သည် a ရဲ. type ဖြစ်တဲ့ Human ရဲ. subtype (child type) ဖြစ်လို.ထဲ့လို.ရတယ်။ နောက် type equivalence ဆိုတာ ဘယ် type နဲ. ဘယ် type ကတော့ တူတယ် အစားထိုးသုံးလို.ရတယ် assign လုပ်လို.ရတယ်ကိုပြောတာ။
ဉပမာ 

```java
class Human{
     String name;
     int age;
}
class Doll
{
      String name;     
       int age;
}
Human h;
Doll d;
```

Java, C#, C++ အစရှိတဲ့ကောင်တွေမှာ
h = d ; ဒါမှမဟုတ် d = h ဆိုပြီး သုံးလို.မရဘူး ဘာလို.လဲဆိုတော့ Nominal typed system ကိုသုံးလို.။ Human ရော Doll ရောမှာ name, age ဆိုပြီးပါတယ် type တွေကလဲ string, int ဒါပေမဲ့ သူတို.၂ခုကို တူတယ်လို. type system က မသတ်မှတ်ဘူ နာမည်ကွာနေလို. အဲ့လိုနာမည်ပေါ်မူတည်ပြီး type equivalence စစ်တဲ့နည်းကို nominal typed system လို.ခေါ်တယ်။ ဘာအားနည်းချက်ရှိလဲဆို‌တော့ ဉပမာ အောက်က example

```java
class Bird{
void  fly(){}
}
class Airplane{
 void  fly(){}
 }
```

Bird ရော airplane ရောကို ၂ခုပေါင်းပြီး polymorphism လုပ်ချင်တဲ့အခါ သူတို.ကို nominal type system က ခွင့်မပေးဘူး ဘုံ parent type ရှိမှရမယ် အဲ့တော့ ဒီလိုပြန်ရေးရမယ်

```java
interface Flyable
{
void  fly(){}
}
class Bird implements Flyable{
....
}
class Airplane implements Flyable{
.....
}
```

အဲ့တော့ Flyable f = new Bird(); 
f.fly();
f = new Airplane();
f.fly(); ဆိုပြီး polymorphism လုပ်လို.ရပြီ ဘာအားနည်းသလဲဆိုတော့ နောက် ထပ် fly ပါတဲ့ class တခုထပ်ပြီး polymorphism လုပ်ချင်ရင် Flyable ကို implements ပြန်လုပ်နေရမယ် extensibility မှာခက်မယ်။ ဒါမျိုးကို dynamic programming langauge တွေမှာကျတော့ duck typing ရလို.လုပ်စရာမလိုဘူးအေးဆေးပဲ (Duck Typing ရေးထားတာရှိတယ် ရှာသာဖတ်)။

အဲ့တော့ Static typed programming language တွေမှာ compile time duck typing လိုမျိုးရချင်တော့ Structural typing ကိုသုံးတယ် ။ Structural typing ဆိုတာ ခုနက type equivalence သည်  type name တွေအပေါ်မှာ မမူတည်တော့ပဲနဲ. type ထဲမှာရှိတဲ့ property name, type တူရင် structure တူရင် တူတယ်လိုသတ်မှတ်တယ် အဲ့တာကိုပြောတာ TypeScript, Scala, Go မှာရတယ်။
ဥပမာ အပေါ်က Human, Doll ကို TypeScript နဲ.ပြန်ရေးရင်

```java
class Human
{
name: string;
age : number;
}
class Doll
{
name: string;
age : number;
}
interface NameAge{
age : number;
name : string;
}
```

ဒီမှာ NameAge ဆိုပြီး interface တခုထုတ်လိုက်တယ် ဒါပေမဲ့ Human, Doll တွေသည် အဲ့ကောင်ကို implement လုပ်စရာမလိုဘူး။
let myVar : NameAge ;
myVar = new Human();
myVar = new Doll();
ခု myVar ရဲ. type သည် NameAge interface ဖြစ်တယ် ဒါပေမဲ့သူ.ထဲ့ကို Human ရော Doll ရောထဲ့လို.ရတယ် ဘာလိုဆိုတော့ NameAge က ပြထားတဲ့ age, name သည် Human ရော Doll မှာပါပါတယ် Human ရော Doll ရောသည် NameAge ကို explicit implement လုပ်စရာမလိုဘူး structural တူတယ်ဆိုတာနဲ. compatiablity ရတယ် သုံးလို.ရတယ် အဲ့တာကို structural typing လို.ခေါ်တယ်။ ဘာကောင်းသွားလဲဆိုတော့ static typed ဒါမှမဟုတ် partially typed langauge တွေမှာ type checking ရတယ် dynamic language ပုံစံ duck typing လိုကောင်မျိုးကိုသုံးလို.ရသွားတယ်။