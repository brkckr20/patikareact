import { useState } from 'react'

const List = ({ contacts }) => {

    const [filterText, setFilterText] = useState("");

    /*
        filter metodunda bize her defasında bir item gelecek,
        bizim için önemli olan ismini de yazsa numarasını da yazsa bizim onu ekranda göstermemiz gerekicek

        Object.keys()-> bize objenin key'lerini veriyor.
        some metodunun yaptığı şey ise herhangi biri şarta uyuyorsa demektir. (true döner)
        some metodu içindeki callback function içinde ise bize Object.key den gelen item objesinin key'i gelecek
        arama işleminde problem yaşanmaması için gelen karakterler stringe ve küçük harfe çevrildi

        inclues metodunda ise filtertext te bulunan veri bizim item.key leri içinde var mı yok mu onun kontrolü yapıldı
        eğer var ise return edilerek kullanılması sağlandı
    */
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key].toString().toLowerCase().includes(filterText.toLowerCase());
        })
    })

    /* console.log("filtered", filtered); */

    return (
        <div>
            <input type="text" placeholder='Filter Contact' value={filterText} onChange={(e) => setFilterText(e.target.value)} className="form-control"/>
            <ul className=''>
                {
                    filtered.map((contact, index) => (
                        <li key={index} className="bg-success text-white my-1 p-2 d-flex justify-content-between">
                            <span>Name : {contact.fullname}</span>
                            <span>Phone : {contact.phone_number}</span>
                            </li>
                    ))
                }
            </ul>
            <div className='mb-5'>Toplam Kayıt Sayısı : <span className='badge bg-info'>{filtered.length}</span></div>
        </div>
    )
}

export default List