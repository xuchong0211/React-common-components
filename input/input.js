/**
 * Created by xuchong on 10/20/16.
 */
import React, { PropTypes } from 'react';
import cn from 'classnames';

const getPlacehold = (field) => {
    switch (field) {
        case 'name' :
            return '请填写您的姓名';
        case 'phone' :
            return '请填写你的联系电话';
        default :   
            return '';
    }
};

const InputField = ({field, value, onChange}) =>
    <div className={cn(style.title, style[field])}>
        <input type={'text'} value={value} placeholder={getPlacehold(field)} onChange={
            (event) => {
                let args = {};
                args[field] = event.target.value;
                onChange(args);
            }
        }
        />
    </div>;

export InputField;