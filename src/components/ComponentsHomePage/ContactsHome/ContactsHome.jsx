import React from 'react';
import ContactsBorder from '../../ContactsBorder/ContactsBorder';

const ContactsHome = () => {
    return (
        <div className='home-contacts'>
            <ContactsBorder/>            
            <div className="home-contacts__container">
                <div className="home-contacts__subs subs-contacts">
                    <div className="subs-contacts__txt">Рекомендації, секрети і фішки по приготуванню смачної кави. Підписуйся!</div>
                    <form action="#" className="subs-contacts__form">
                        <div className="subs-contacts__input">
                            <input type="text" placeholder='e-mail...'/>
                        </div>
                        <button className='btn' type='submit'>Підписатись</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactsHome;