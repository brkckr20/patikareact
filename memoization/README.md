# React.memo, useMemo ve usaCallback


```python
# React.memo()
  header componenti app.js de header kısmında bulunuyor.
  app.js de ise butona tıklanarak sayı artırımı işlemi yapılıyor fakat header da app.js 
  içinde kullanıldığı için tekrardan render ediliyor.
  React.memo kullanarak gereksiz renderın önüne geçilmiş oluyor.
  normal şartlarda değişmesini istemediğimiz componentte göndermiş olduğumuz proplar ne zaman 
  değişirse o zaman render edilir.

  boş bir objenin boş bir objeye denkliği veya boş bir arrayın boş bir arraya denkliği false değeri döndürür. (referansları farklı olduğu için)

# useMemo syntax
  const data = useMemo(() => { //gereksiz renderı önlemek için useMemo kullanımı
    return { name: "Burak", number };
  }, [number]) // --> number değişkeninin değeri değişirse o zaman render edilecek

# useCallback syntax
  const increment = useCallback(() => {
    /* setNumber(number + 1) */
    setNumber((prevState)=>prevState+1)
  }, [/* number */])
```