/*
    Bir function, call ile çağrıldığında, this call'a gönderilen object'i ifade eder.
    Örneğin setAge metodu şu şekilde çağrılırsa;

    setAge.call(person)

    setAge metodu içindeki this, bu parametere olarak gönderilen person nesnesine işaret eder.
*/
function setAge() {
    this.age=40;
}

/*
    Burada ise durum biraz farklı. setTimeout içindeki fonksiyondan ulaşılan this, person değil, 
    global this anlamına gelir
*/
function setAgeTimeoutIncorrect() {
    setTimeout(function() {
        this.age=40;
    }, 1000);
}

/*
    this, üstteki function'da global this'e karşılık geliyordu. Burada function'ın hemen içinde, this'i that isimli değişkene
    aktarıyoruz. Artık buradaki that, call ile gönderilen nesneye karşılık geliyor
*/
function setAgeTimeoutThat() {
    const that = this;
    setTimeout(function() {
        that.age=40;
    }, 1000);
}
/*
    Burada setTimeout içinde function() {} yerine ()=>{} yapmamızda problemi çözecektir
*/
function setAgeTimeoutArrow() {
    setTimeout(()=> {
        this.age=40;
    }, 1000);
}
/*
    Burada this'i function'a bind ediyoruz ve artık kullanabiliriz
*/
function setAgeTimeoutBind() {
    setTimeout(function() {
        this.age=40;
    }.bind(this), 1000);
}

module.exports = {setAge,setAgeTimeoutIncorrect,setAgeTimeoutThat,setAgeTimeoutArrow,setAgeTimeoutBind};