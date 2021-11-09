import React from 'react'
import './ProblemPage.css';
import Navbar from '../../Navbar/Navbar';
import Editor from '../Editor/Editor';

function Problems() {
    return (
        <>
            <Navbar />
            <div className='problem'>
                <div className='problem__description__wrapper'>
                    <div className='problem__info__wrapper'>
                        <h1> üçbeş </h1>
                        <h3> temel, kolay</h3> 
                    </div>
                    <div className='problem__description__content'>
                        <div className='problem__description__text'>
                        verilen bir n sayısından<br/><br/>
                            - eğer i 3'e ve 5'e bölünebiliyorsa cevap[i] == "üçbeş"<br/>
                            - eğer i 3'e bölünebiliyorsa cevap[i] == "üç"<br/>
                            - eğer i 5'e bölünebiliyorsa cevap[i] == "beş"<br/>
                            - eğer i yukarıdakileri karşılamıyorsa cevap[i] == i<br/><br/>
                        olacak şekilde n elemanlı tek boyutlu bir string dizisi döndüren fonksiyonu yazınız.<br/>

                        <br/>örnek 1:<br/><br/>
                        <div className='problem__description__text__example'>
                            giriş: n = 3<br/>
                            çıkış: ["1","2","üç"]<br/>
                        </div>

                        <br/>örnek 2:<br/><br/>
                        <div className='problem__description__text__example'>
                            giriş: n = 5<br/>
                            çıkış: ["1","2","üç","4","beş"]<br/>
                        </div>

                        <br/>örnek 3:<br/><br/>
                        <div className='problem__description__text__example'>
                            giriş: n = 15<br/>
                            çıkış: ["1","2","üç","4","beş","üç","7","8","üç","beş","11","üç","13","14","üçbeş"]<br/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='problem__solution__wrapper'>
                    <Editor />
                </div>
            </div>
        </>
    );
}

export default Problems;