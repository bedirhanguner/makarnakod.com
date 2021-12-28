import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer_container'>
      <section className='footer_subscription'>
        <p className='footer_subscription_heading'>
          yeni sorulardan ve gelişmelerden anında haberdar olmak için abone ol!
        </p>
        <div className='input_areas'>
          <form>
            <input
              className='footer_input'
              name='email'
              type='email'
              placeholder='mail adresin'
            />
            <Button buttonStyle='btn_outline'>abone ol</Button>
          </form>
        </div>
      </section>
      <div className='footer_links'>
        <div className='footer_link_wrapper'>
          <div className='footer_link_items'>
            <h2>hakkımızda</h2>
            <Link to='/sign-up'>nasıl çalışır</Link>
            <Link to='/'>hedefimiz</Link>
            <Link to='/'>iş ilanları</Link>
            <Link to='/'>yatırımcılar</Link>
          </div>
          <div className='footer_link_items'>
            <h2>iletişim</h2>
            <Link to='/'>biizmle iletişime geçin</Link>
            <Link to='/'>destek</Link>
            <Link to='/'>sponsorluklar</Link>
          </div>
        </div>
        <div className='footer_link_wrapper'>
          <div className='footer_link_items'>
            <h2>sosyal medya</h2>
            <Link to='/'>instagram</Link>
            <Link to='/'>facebook</Link>
            <Link to='/'>youtube</Link>
            <Link to='/'>twitter</Link>
          </div>
        </div>
      </div>
      <section className='social_media'>
        <div className='social_media_wrap'>
          <div className='footer_logo'>
            <Link to='/' className='social_logo'>
                makarnakod
                <i className="fas fa-fingerprint"/>
            </Link>
          </div>
          <small className='website_rights'>makarnakod © 2021</small>
          <div className='social_icons'>
            <Link
              className='social_icon_link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social_icon_link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social_icon_link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social_icon_link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social_icon_link twitter'
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