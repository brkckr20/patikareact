import PropTypes from 'prop-types'


function User(props) { /* {name,surname,isLoggedIn,age} şeklide object destructring şeklinde de alabiliriz. */
    if (!props.isLoggedIn) {
        return <div>Giriş Yapmadınız</div>
    }

    return (
        <>
            <h1>
                {
                    `${props.name} ${props.surname} (${props.age})`
                }
            </h1>
            <div>
                {props.address.title} - {props.address.zip}
            </div>
            {
                props.friends.map((friend) => (
                    <div key={friend.id}>
                        {friend.id} - {friend.name}
                    </div>
                ))
            }
        </>
    )
}

// prop types tanımlamaları
User.propTypes = {
    name: PropTypes.string.isRequired, // isRequired kullanılması durumunda o propsun zorunlu olarak gönderilmesi gerekir
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

/*
    oneOfType -> birden fazla veri türünün gönderilmesine olanak sağlar.
    obje olarak gönderdiğimiz propslarda kullanabileceğimiz shape adında bir tanım vardır.
*/


//DEFAULT PROPS -> propların gönderilmemesi durumunda varsayılan olarak çalışacak propslar
User.defaultProps = {
    isLoggedIn : false
}
export default User;