import React from 'react';
import './Dashboard.css';
import { Button } from '../../Button/Button';
import Questions from './Questions'
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>  
      <div className='cards'>
        <div className="info">
          <h1> anasayfa </h1>
          <h3>sorulara göz at</h3>
        </div>

        <div className='subject__questions'>
          <div className='subject__header'>
              konulara göre alıştırmalar
            </div>
            <div className='subject__items__display'>
              <Questions
                text='algoritma'
                path='/algoritma'
                rate='0/20 tanesi tamamlandı'
                />
                <Questions
                text='veritabanı'
                path='/veritabani'
                rate='0/35 tanesi tamamlandı'
                />
                <Questions
                text='fonksiyonel programlama'
                path='/fonksiyonel-programlama'
                rate='0/30 tanesi tamamlandı'
                />
                <Questions
                text='betik'
                path='/betik'
                rate='0/27 tanesi tamamlandı'
                />
                <Questions
                text='veri yapıları'
                path='/veri-yapılari'
                rate='0/42 tanesi tamamlandı'
                />
                <Questions
                text='regex'
                path='/regex'
                rate='0/18 tanesi tamamlandı'
                />
            </div>
        </div>

        <div className='subject__questions'>
          <div className='subject__header'>
              programlama dillerine göre alıştırmalar
            </div>
            <div className='subject__items__display'>
            <Link className='language__item' to='programlama-dilleri/python'>
                <div className='language__item__logo'><i className="fab fa-python"></i></div> python
              </Link>
              <Link className='language__item' to='programlama-dilleri/javascript'>
                <div className='language__item__logo'><i className="fab fa-js-square"></i></div> javascript
                </Link>
              <Link className='language__item' to='programlama-dilleri/ruby'>
                <div className='language__item__logo'><i className="fab fa-css3"></i></div> ruby
                </Link>
              <Link className='language__item' to='programlama-dilleri/golang'>
                <div className='language__item__logo'><i className="fab fa-google-wallet"></i></div> golang
                </Link>
              <Link className='language__item' to='programlama-dilleri/php'>
                <div className='language__item__logo'><i className="fab fa-php"></i></div> php
                </Link>
              <Link className='language__item' to='programlama-dilleri/java'>
                <div className='language__item__logo'><i className="fab fa-java"></i></div> java
                </Link>
              <Link className='language__item' to='programlama-dilleri/c'>
                <div className='language__item__logo'><i className="fab fa-cuttlefish"></i></div> c
                </Link>
              <Link className='language__item' to='programlama-dilleri/cplusplus'>
                <div className='language__item__logo'><i className="fas fa-meteor"></i></div> c++
                </Link>
              <Link className='language__item' to='programlama-dilleri/csharp'>
                <div className='language__item__logo'><i className="fas fa-cube"></i></div> C#
                </Link>
            </div>
            
            <div className='kit_subjects'>
              <div className='subject__header'>
                  kendinizi geliştirin
                </div>
              <div className='kit__subjects__display'>
                <Link className='kit__items' to='/mulakat-hazırlanma-kiti'>
                    <div className='subject__items__header'>
                        mülakat hazırlanma kiti
                    </div>

                  <div className='subject__items__button'>
                      <Button
                            buttonStyle='btn--rounded--black'
                            buttonSize='btn--large'
                            >
                            soruları gör
                          </Button>
                    </div>
                </Link>
              
              <Link className='kit__items' to='/15-gunde-python-kiti'>
                  <div className='subject__items__header'>
                      15 günde python kiti 
                  </div>

                  <div className='subject__items__button'>
                      <Button
                        buttonStyle='btn--rounded--black'
                        buttonSize='btn--large'
                        >
                        soruları gör
                      </Button>
                  </div>
              </Link>

              <Link className='kit__items' to='/20-gunde-javascript-kiti'>
                  <div className='subject__items__header'>
                    20 günde javascript kiti 
                  </div>

                  <div className='subject__items__button'>
                      <Button
                        buttonStyle='btn--rounded--black'
                        buttonSize='btn--large'
                        >
                        soruları gör
                      </Button>
                  </div>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;