/*  npm i -g create-react-library
    -   reactjs kütüphanesi oluşturmaya yarar.
    -   unique bir kütüphane ismi olmalıdır.
    -   npm package name checker ile o ismin kullanılabilir olup olmadığı kontrol edilir.

    paket global olarak yüklendikten sonra komut satırına 
    create-react-library yazınca ilgili yönergeler izlenir.

    proje kurulduktan sonra src dizini altında komponentleri yazacağız,
    example klasöründen ise yazmış olduğumuuz komponentleri test edeceğiz



    PUBLISH
    npm de hesap açılmalı,


    ana dizinde ---
    npm login ile giris yapılmalı (kullanıcı adı, parola ve mail adresi girilir)
    npm publish ile paket gönderilmesi işlemi baslatilir


    --semantic versiyonlama
    "version" : "1.0.0",
            -- en sağdaki 0 - patch  ufak tefek çözümler bug giderimleri yapıldıktan sonra artılır.
            -- ortadaki ise minör değişiklikler, sistemin tamamı değil de bi takım geliştirmeler yapıldığında artırılır.
            -- baştaki ise majör değişiklikler, onu artırdığımızda sistemin işleyişin genel bir şekilde değiştiğinde artırılır.
    
    terminal açtıktan sonra
    npm version (major, minor, patch hangisinde değişiklik yaptıysak) --force yazınca package json dosyasında ilgili alan güncellenir.
    npm publish komutu calistirilir.

    herhangi bir güncellemede sağdaki sayılar sıfırlanır. ilgili versiyon sistemindeki sayı 1 artar.



*/