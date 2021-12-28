import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Button/Button'

function KitProblemsRow(props) {
  return (
    <>
      <div className='row_item'>
        <Link className='row_item_link' to={props.path}>
          <div className='row_item_info'>
            <div clasName='kit_row_items'>
                <div className='kit_row_item_text'>{props.text}</div>
                <div className='kit_row_item_description'>{props.difficulty}, {props.level}, başarı oranı: 99,9{props.acceptance}</div>
                </div>
                <div className='kit_row_button'>
                    <Button
                        buttonStyle='btn_rounded_black'
                        buttonSize='btn_large'
                        >
                        soruları gör
                        </Button>
                    </div>
            </div>
        </Link>
      </div>
    </>
  );
}

export default KitProblemsRow;