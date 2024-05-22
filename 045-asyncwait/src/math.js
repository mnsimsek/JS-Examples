class Math {
    async Sum(a, b) {
        await this.takeSomeTime();
        console.log('test');
        return a + b;
    }
    /*
        Burada örneklemek için 2 sn süren bir metod yazdık ama burada, remote dosya okuma, veri tabanı sorgusu veya başka bir api çağrısı yapılıyor olabilir
        Önemli olan bu metod Promise döndürüyor
    */
    takeSomeTime(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve('');
            },10000);
        });
    }
}

module.exports = Math;