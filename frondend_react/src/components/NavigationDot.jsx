import React from 'react';

const NavigationDot = ({active}) => {
  return (
    <div className='app__navigation'>
        {["home", "about", "work", "skills", "testimonial", "contact"].map((item, index)=>
            <a 
            href={`#${item}`}
            key = {item + index}
            className='app__navigation-dot'
            style={active === item? {backgroundColor : '#313BAC'} : { }}
            />

        )}
    </div>
  )
}
export default NavigationDot;