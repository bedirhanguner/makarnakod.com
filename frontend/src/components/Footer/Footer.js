import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          yeni sorulardan ve gelişmelerden anında haberdar olmak için abone ol!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='mail adresin'
            />
            <Button buttonStyle='btn--outline'>abone ol</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>hakkımızda</h2>
            <Link to='/sign-up'>nasıl çalışır</Link>
            <Link to='/'>hedefimiz</Link>
            <Link to='/'>iş ilanları</Link>
            <Link to='/'>yatırımcılar</Link>
          </div>
          <div className='footer-link-items'>
            <h2>iletişim</h2>
            <Link to='/'>biizmle iletişime geçin</Link>
            <Link to='/'>destek</Link>
            <Link to='/'>sponsorluklar</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>sosyal medya</h2>
            <Link to='/'>instagram</Link>
            <Link to='/'>facebook</Link>
            <Link to='/'>youtube</Link>
            <Link to='/'>twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
                makarnakod
                <i className="fas fa-fingerprint"/>
            </Link>
          </div>
          <small className='website-rights'>makarnakod © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;