# Why there is no pass by reference in Java

တချို. Java programmer တွေ blog တွေမှာ Java မှာ parameter passing မှာ Object တွေသည် pass by reference နဲ.သွားတယ်လို.ရေးကြပါတယ်။ တကယ်တော့ Java မှာ pass by value ပဲရှိပါတယ်။ အသေးစိတ်သိချင်ရင်တော့ JLS(Java Language Specification) ကိုသာ နားလည်အောင်ဖတ်ကြည့်ပါ။

ဘာလို. Java မှာ pass by value ပဲရှိတာလဲ။ Pass by reference မရှိဘူးလား။ ဒါဆိုရင် method တခုကို parameter အနေနဲ.ပေးလိုက်တဲ့ object တွေရဲ. data ကိုပြင်ရင် method အပြင်ကနေ effect ဖြစ်တယ်ပေါ့။ ဒါမျိုးဆို pass by reference မဟုတ်ဘူးလားပေ့ါ။ ဥပမာ ဒီ code ပေါ့။

```java
class Data{
    int counter;
    Data(int counter)
    {
        this.counter = counter;
    }
}
public class Demo {
    static void changeData(Data a)
    {
        a.counter ++;
    }
    static void changeString(String a)
    {
        a="Change";
    }
    public static void main(String[] args) {
        // TODO code application logic here
        Data data = new Data(10);
        changeData(data);
        System.out.println(data.counter);
        String str = "Original";
        changeString(str);
        System.out.println(str);
    }
}
```

အပေါ်က code သည် ပထမ System.out.println အတွက် data.counter အတွက်ဆိုရင် 11 ထွက်လာပါလိ့မ့်မယ်။ ဒုတိယ System.out.println() အတွက်ဆိုရင်တော့ Original ပဲထွက်လာပါလိမ့်မယ်။

method ၂ခုလုံးက Object တွေကို pass လုပ်တာပါ။ changeData မှာကျတော့  a.counter ++; ဆိုပြီး parameter object a ရဲ. counter ကို ၁ တိုးတာပါ။ ဆိုချင်တာက Object reference a ရဲ. data ကိုယူသုံးတာပါ။

ဒုတိယ changeString မှာကျတော့ ဘာကိုပြင်လိုက်သလဲဆိုတော့ parameter a ရဲ. တန်ဖိုးကိုပြောင်းလိုက်တာပါ။ a = "Change" ဆိုပြီး

အဲ့မှာ ပထမတခုကတော့ပြောင်းတယ်။ ဒုတိယတခုကတော့မပြောင်းဘူး ၂ ခုလုံးက Object တွေအနေနဲ.သွားတာ။ Object ဆို pass by reference နဲ.သွားရမှာမဟုတ်ဘူးလား ဘာလို.ဒုတိယကောင်က မပြောင်းတာလဲဆိုရင် အဖြေက Java မှာ pass by reference ဆိုတာမရှိလို.ပါပဲ။

အပေါ်က code ရဲ.ပြဿနာကိုနားလည်ဖို.က Java မှာ Object တွေကို ဘယ်လိုသိမ်းလဲပေါ့။ ဥပမာ

String str = "Hello";

ဒီလိုဆိုရင် str ထဲမှာ Hello ဆိုတဲ့ကောင်ရှိနေတာမဟုတ်ဘူး Hello ဆိုတဲ့ string object ကြီးကို str ဆိုတဲ့ reference လေးကပဲညွှန်ထားတာဆိုတဲ့သဘော။ Reference သည် တနည်းအားဖြင့် pointer ဒါမှမဟုတ် memory address သဘောယူဆလို.ရတယ်။တိုက်ရိုက်တော့မတူဘူး JVM implmentation တွေမှာဆို ဒါကို reference handle လို.ခေါ်တယ် ဆိုချင်တာက Object variable တွေသည် reference variable ထဲမှာ တိုက်ရိုက်သိမ်းတာမဟုတ်ဘူး ။ သူတို.ကို လှမ်းထောက်လို.ရတဲ့ variable အနေနဲ.ပဲရှိနေတာ။

အဲ့တော့ခုနက method တွေကို parameter pass လုပ်တဲ့အခါ JVM အပေါ်မှာ method တခု ကိုခေါ်မယ်ဆိုရင် Stack Frame တခုဆောက်ရတယ်။ Stack frame ထဲမှာ local variable တွေ အတွက် နေရာတွေ။ parameter variable တွေအတွက်နေရာတွေပါရတယ်။ ဒါဆို ခုနက method တွေအတွက် stack frame ဆောက်တဲ့အခါ parameter အတွက် stack frame ထဲမှာနေရာယူတဲ့အခါ reference ကိုသိမ်းဖို.ပဲနေရာလိုတယ်။ Reference size သည် 32 bit VM မှာဆိုရင် 32 ဖြစ်ပြီးတော့ 64 bit VM မှာဆိုရင် 64 bit ဖြစ်တယ်(JVM implementation အပေါ်မူတည်ပြီး size ကွာနိုင်တယ်) Object တွေကတော့ Heap မှာနေရာသွားယူတယ်။ အဲ့တော့ method call လုပ်မယ်ဆိုရင် ခုနက main ထဲကနေ argument (method call လုပ်ဖို. parameter နေရာတွေမှာထဲ့ပေးလိုက်မဲ့တန်ဖိုးကို) copy ကူးလိုက်တယ်။ ဆိုချင်တာက changeData မှာရော changeString မှာပါ ဆိုင်ရာ reference တွေသည် copy ကူးသွားတယ်။

changeData မှာ reference က တဆင့်ညွန်တဲ့ variable ကိုပြောင်းတာဖြစ်တဲ့အတွက် မူရင်း Object မှာတန်ဖိုးပြောင်းတယ်။ changeString မှာကျတော့ မူရင်း reference တန်ဖိုးကို ပြောင်းတာဖြစ်တဲ့အတွက် အဲ့ဒီ effect သည် main မှာလာမဖြစ်ဘူး ။ဘာလို.လဲဆိုတော့ seperate copy ဖြစ်လို.ဒါကြောင့် pass by value လို.ပြောတာ။

Reference ပုံသဘောကို မြင်သာအောင် ပုံပါထဲ့ပေးလိုက်တယ် ပုံကတော့ Credit ပေါ.
Java မှမဟုတ်ဘူး တချို. pass by value ပဲပေးတဲ့ language တွေမှာလဲ သဘောကတော့ဒီအတိုင်းပဲ။
